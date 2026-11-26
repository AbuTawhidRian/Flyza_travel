"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface DestinationNode {
  name: string;
  lat: number;
  lon: number;
  isHub?: boolean;
}

const DESTINATIONS: DestinationNode[] = [
  { name: "Chattogram Hub", lat: 22.3569, lon: 91.7832, isHub: true },
  { name: "Dubai", lat: 25.2048, lon: 55.2708 },
  { name: "Makkah", lat: 21.4225, lon: 39.8262 },
  { name: "Maldives", lat: 4.1755, lon: 73.5093 },
  { name: "Zurich", lat: 47.3769, lon: 8.5417 },
  { name: "Santorini", lat: 36.3932, lon: 25.4615 },
  { name: "Kyoto", lat: 35.0116, lon: 135.7681 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

interface LuxuryGlobe3DProps {
  className?: string;
}

export default function LuxuryGlobe3D({ className = "" }: LuxuryGlobe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 4.3);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master Globe Group
    const globeGroup = new THREE.Group();
    // Tilt initial view toward South Asia / Middle East / Europe
    globeGroup.rotation.y = -2.15;
    globeGroup.rotation.x = 0.28;
    scene.add(globeGroup);

    const RADIUS = 1.35;

    // 1. Core Obsidian Sphere with custom Fresnel Atmospheric Rim Shader
    const coreGeo = new THREE.SphereGeometry(RADIUS * 0.985, 64, 64);
    const coreMat = new THREE.ShaderMaterial({
      uniforms: {
        uColorInner: { value: new THREE.Color("#060D1D") },
        uColorRim: { value: new THREE.Color("#C5A059") },
        uColorGlow: { value: new THREE.Color("#1E3A6D") },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorInner;
        uniform vec3 uColorRim;
        uniform vec3 uColorGlow;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.2);
          vec3 col = mix(uColorInner, uColorGlow, fresnel * 0.65);
          col = mix(col, uColorRim, pow(fresnel, 1.8) * 0.85);
          gl_FragColor = vec4(col, 0.96);
        }
      `,
      transparent: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 2. Outer Atmospheric Halo
    const haloGeo = new THREE.SphereGeometry(RADIUS * 1.14, 48, 48);
    const haloMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color("#DFB76C") },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          float intensity = pow(0.62 - dot(normalize(vNormal), normalize(vViewPosition)), 3.0);
          gl_FragColor = vec4(uColor, clamp(intensity * 0.45, 0.0, 0.5));
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // 3. Architectural Geodesic Dot-Matrix Shell (Fibonacci Sphere)
    const dotCount = 1600;
    const dotPositions = new Float32Array(dotCount * 3);
    const dotColors = new Float32Array(dotCount * 3);
    const goldColor = new THREE.Color("#DFB76C");
    const slateColor = new THREE.Color("#475569");

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < dotCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
      const r = RADIUS * 1.002;
      dotPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dotPositions[i * 3 + 1] = r * Math.cos(phi);
      dotPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const isAccent = i % 7 === 0;
      const c = isAccent ? goldColor : slateColor;
      dotColors[i * 3] = c.r;
      dotColors[i * 3 + 1] = c.g;
      dotColors[i * 3 + 2] = c.b;
    }

    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotsGeo.setAttribute("color", new THREE.BufferAttribute(dotColors, 3));
    const dotsMat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const dotsPoints = new THREE.Points(dotsGeo, dotsMat);
    globeGroup.add(dotsPoints);

    // 4. Subtle Architectural Wireframe Grid
    const wireGeo = new THREE.SphereGeometry(RADIUS * 1.001, 24, 16);
    const wireMat = new THREE.MeshBasicMaterial({
      color: "#1E293B",
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // 5. Tilted Orbital Aviation Rings
    const ring1Geo = new THREE.TorusGeometry(RADIUS * 1.28, 0.004, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: "#C5A059",
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.rotation.y = 0.35;
    globeGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(RADIUS * 1.42, 0.003, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: "#60A5FA",
      transparent: true,
      opacity: 0.18,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = -0.5;
    globeGroup.add(ring2);

    // 6. Destination Nodes & Golden Flight Arcs
    const hub = DESTINATIONS[0];
    const hubVec = latLonToVector3(hub.lat, hub.lon, RADIUS);

    const pulseMeshes: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; speed: number; offset: number }[] = [];
    const nodeRings: THREE.Mesh[] = [];

    DESTINATIONS.forEach((dest, idx) => {
      const pos = latLonToVector3(dest.lat, dest.lon, RADIUS * 1.01);

      // Glowing beacon sphere
      const nodeGeo = new THREE.SphereGeometry(dest.isHub ? 0.038 : 0.024, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: dest.isHub ? "#34D399" : "#F9E7B9",
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      globeGroup.add(nodeMesh);

      // Surface pulse ring
      const pRingGeo = new THREE.RingGeometry(
        dest.isHub ? 0.045 : 0.03,
        dest.isHub ? 0.068 : 0.045,
        24
      );
      const pRingMat = new THREE.MeshBasicMaterial({
        color: dest.isHub ? "#34D399" : "#C5A059",
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const pRing = new THREE.Mesh(pRingGeo, pRingMat);
      pRing.position.copy(pos);
      pRing.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(pRing);
      nodeRings.push(pRing);

      // Flight Arc from Chattogram Hub to each destination
      if (!dest.isHub) {
        const destVec = latLonToVector3(dest.lat, dest.lon, RADIUS);
        const distance = hubVec.distanceTo(destVec);
        const midPoint = hubVec.clone().add(destVec).multiplyScalar(0.5);
        const arcHeight = RADIUS + distance * 0.32;
        midPoint.normalize().multiplyScalar(arcHeight);

        const curve = new THREE.QuadraticBezierCurve3(hubVec, midPoint, destVec);
        const points = curve.getPoints(48);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        const arcMat = new THREE.LineBasicMaterial({
          color: "#C5A059",
          transparent: true,
          opacity: 0.42,
        });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        globeGroup.add(arcLine);

        // Moving luminous traveler pulse along the arc
        const travelerGeo = new THREE.SphereGeometry(0.02, 12, 12);
        const travelerMat = new THREE.MeshBasicMaterial({
          color: "#FFFBEB",
        });
        const travelerMesh = new THREE.Mesh(travelerGeo, travelerMat);
        globeGroup.add(travelerMesh);

        pulseMeshes.push({
          mesh: travelerMesh,
          curve,
          speed: 0.22 + (idx % 4) * 0.04,
          offset: idx * 0.13,
        });
      }
    });

    // Pointer Interaction (Drag to rotate with inertia)
    let pointerDown = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      pointerDown = true;
      setIsDragging(true);
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pointerDown) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      velocityY = dx * 0.0045;
      velocityX = dy * 0.0035;
      globeGroup.rotation.y += velocityY;
      globeGroup.rotation.x = Math.max(
        -0.65,
        Math.min(0.85, globeGroup.rotation.x + velocityX)
      );
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerUp = () => {
      pointerDown = false;
      setIsDragging(false);
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!pointerDown) {
        globeGroup.rotation.y += 0.0018 + velocityY * 0.92;
        globeGroup.rotation.x = Math.max(
          -0.65,
          Math.min(0.85, globeGroup.rotation.x + velocityX * 0.92)
        );
        velocityX *= 0.92;
        velocityY *= 0.92;
      }

      // Rotate orbital rings subtly
      ring1.rotation.z = elapsed * 0.08;
      ring2.rotation.z = -elapsed * 0.05;

      // Animate flight pulses along Bezier arcs
      pulseMeshes.forEach((p) => {
        const t = (elapsed * p.speed + p.offset) % 1;
        const pt = p.curve.getPoint(t);
        p.mesh.position.copy(pt);
      });

      // Subtle breathing on destination rings
      nodeRings.forEach((ring, i) => {
        const s = 1 + 0.25 * Math.sin(elapsed * 2.4 + i);
        ring.scale.set(s, s, 1);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      domEl.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.Line) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (domEl.parentNode === container) {
        container.removeChild(domEl);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Interactive 3D Global Aviation Network Globe"
      className={`relative w-full h-full select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      } ${className}`}
    />
  );
}
