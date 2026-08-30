"use client";

import { useEffect, useRef } from "react";

type ActiveCell = {
  column: number;
  row: number;
  touchedAt: number;
  strength: number;
};

const CELL_SIZE = 46.5;
const TRAIL_DURATION = 950;

export function TartanInteraction() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const drawingCanvas = canvas;
    const drawingContext = context;

    const cells = new Map<string, ActiveCell>();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame: number | null = null;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      drawingCanvas.width = Math.round(viewportWidth * ratio);
      drawingCanvas.height = Math.round(viewportHeight * ratio);
      drawingCanvas.style.width = `${viewportWidth}px`;
      drawingCanvas.style.height = `${viewportHeight}px`;
      drawingContext.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw(timestamp: number) {
      drawingContext.clearRect(0, 0, viewportWidth, viewportHeight);
      const duration = reducedMotion ? 180 : TRAIL_DURATION;

      cells.forEach((cell, key) => {
        const progress = Math.min((timestamp - cell.touchedAt) / duration, 1);
        if (progress >= 1) {
          cells.delete(key);
          return;
        }

        const opacity = (1 - progress) ** 2 * cell.strength;
        const x = cell.column * CELL_SIZE;
        const y = cell.row * CELL_SIZE;

        drawingContext.fillStyle = `rgba(2, 89, 45, ${0.17 * opacity})`;
        drawingContext.fillRect(x + 1.5, y + 1.5, CELL_SIZE - 3, CELL_SIZE - 3);
        drawingContext.strokeStyle = `rgba(200, 0, 20, ${0.10 * opacity})`;
        drawingContext.lineWidth = 1;
        drawingContext.strokeRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
      });

      if (cells.size > 0) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        animationFrame = null;
      }
    }

    function activateCell(column: number, row: number, strength: number, timestamp: number) {
      const key = `${column}:${row}`;
      cells.set(key, { column, row, touchedAt: timestamp, strength });
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;

      const column = Math.floor(event.clientX / CELL_SIZE);
      const row = Math.floor(event.clientY / CELL_SIZE);
      const timestamp = performance.now();
      activateCell(column, row, 1, timestamp);

      if (!reducedMotion) {
        activateCell(column - 1, row, 0.34, timestamp);
        activateCell(column + 1, row, 0.34, timestamp);
        activateCell(column, row - 1, 0.34, timestamp);
        activateCell(column, row + 1, 0.34, timestamp);
      }

      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="tartan-interaction" aria-hidden="true" />;
}
