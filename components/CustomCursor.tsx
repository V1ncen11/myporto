"use client";

import { useEffect, useRef, useState } from "react";

const POINT_COUNT = 25; // Jumlah ruas/segmen tali

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef(Array.from({ length: POINT_COUNT }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    // Hanya aktif di device dengan mouse
    if (window.matchMedia("(hover: none)").matches) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      // Update posisi titik-titik ruas tali
      points.current.forEach((point, index) => {
        if (index === 0) {
          // Ujung tali nempel ke mouse
          point.x = x;
          point.y = y;
        } else {
          // Fisika elastis tali
          const ease = 0.35; 
          point.x += (x - point.x) * ease;
          point.y += (y - point.y) * ease;
        }

        // Target buat ruas berikutnya adalah posisi ruas ini
        x = point.x;
        y = point.y;
      });

      // Gambar tali menggunakan SVG Path
      if (pathRef.current) {
        // Mulai dari titik 0
        let pathString = `M ${points.current[0].x} ${points.current[0].y}`;
        
        // Hubungkan titik-titik dengan garis lengkung (smooth)
        for (let i = 1; i < POINT_COUNT - 1; i++) {
          const xc = (points.current[i].x + points.current[i + 1].x) / 2;
          const yc = (points.current[i].y + points.current[i + 1].y) / 2;
          pathString += ` Q ${points.current[i].x} ${points.current[i].y}, ${xc} ${yc}`;
        }
        
        // Ujung terakhir
        pathString += ` L ${points.current[POINT_COUNT - 1].x} ${points.current[POINT_COUNT - 1].y}`;
        
        pathRef.current.setAttribute("d", pathString);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <svg 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="rgba(255, 255, 255, 0.7)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
