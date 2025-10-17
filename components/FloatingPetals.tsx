"use client";

import { useEffect, useRef } from "react";

export default function FloatingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }

    const petals: Petal[] = [];
    const petalCount = 15;

    // Create petals
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 15 + 10,
        speedY: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    function drawPetal(ctx: CanvasRenderingContext2D, petal: Petal) {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate((petal.rotation * Math.PI) / 180);
      ctx.globalAlpha = petal.opacity;

      // Draw elegant petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        petal.size / 2,
        -petal.size / 2,
        petal.size,
        -petal.size / 2,
        petal.size,
        0
      );
      ctx.bezierCurveTo(
        petal.size,
        petal.size / 2,
        petal.size / 2,
        petal.size,
        0,
        petal.size
      );
      ctx.closePath();

      // Gradient fill for depth
      const gradient = ctx.createRadialGradient(
        petal.size / 2,
        petal.size / 2,
        0,
        petal.size / 2,
        petal.size / 2,
        petal.size
      );
      gradient.addColorStop(0, "rgba(232, 213, 213, 0.8)");
      gradient.addColorStop(1, "rgba(245, 232, 216, 0.4)");
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += petal.speedX;
        petal.rotation += petal.rotationSpeed;

        // Reset petal when it goes off screen
        if (petal.y > canvas.height + 50) {
          petal.y = -50;
          petal.x = Math.random() * canvas.width;
        }
        if (petal.x > canvas.width + 50) petal.x = -50;
        if (petal.x < -50) petal.x = canvas.width + 50;

        drawPetal(ctx, petal);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
}
