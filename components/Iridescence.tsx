"use client";

import { useEffect, useRef } from "react";

interface IridescenceProps {
  children: React.ReactNode;
  className?: string;
}

export default function Iridescence({ children, className = "" }: IridescenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`iridescence-container ${className}`}
      style={{
        // @ts-ignore
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {children}
      <style jsx>{`
        .iridescence-container {
          position: relative;
          overflow: hidden;
        }

        .iridescence-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(212, 175, 55, 0.15),      /* gold */
            rgba(232, 213, 213, 0.1),      /* romance */
            rgba(245, 232, 216, 0.1),      /* champagne */
            rgba(168, 184, 152, 0.08),     /* sage */
            rgba(232, 168, 156, 0.12),     /* coral */
            rgba(250, 247, 242, 0.05),     /* ivory */
            transparent 80%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }

        .iridescence-container:hover::before {
          opacity: 1;
        }

        .iridescence-container::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(212, 175, 55, 0.03),      /* gold */
            transparent,
            rgba(232, 168, 156, 0.04),     /* coral */
            transparent,
            rgba(232, 213, 213, 0.03),     /* romance */
            transparent
          );
          background-size: 400% 400%;
          animation: iridescence-shimmer 15s ease infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes iridescence-shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
