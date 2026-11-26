"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
}

/**
 * Interactive 3D perspective card with cursor-tracked tilt and specular glare.
 * Supports preserve-3d so inner elements with translateZ() float in 3D space.
 */
export default function TiltCard3D({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.16,
  scale = 1.02,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const percentX = x / rect.width;
      const percentY = y / rect.height;

      const rotateY = (percentX - 0.5) * (maxTilt * 2);
      const rotateX = (0.5 - percentY) * (maxTilt * 2);

      setTransform(
        `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setGlare({
        x: percentX * 100,
        y: percentY * 100,
        opacity: glareOpacity,
      });
    },
    [maxTilt, glareOpacity, scale]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform(
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 120ms cubic-bezier(0.03, 0.98, 0.52, 0.99)"
          : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic 3D Specular Light Glare */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 244, 214, 0.75), rgba(197, 160, 89, 0.15) 45%, transparent 75%)`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
