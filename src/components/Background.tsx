import { useEffect, useRef } from 'react';
import styles from './Background.module.css';

/** Star colours — Claimo brand teal, green, cool blue and white. */
const PALETTE = ['#00ebc4', '#2bf5a5', '#5ba7ff', '#62e573', '#ffffff'];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  twinkle: number;
  color: string;
};

/**
 * Fixed, behind-everything page atmosphere: brand glows + drifting aurora
 * blobs (CSS) and an animated constellation starfield (canvas). Ported from
 * the Claimo Admin panel background and re-tinted to the landing palette.
 *
 * The animation pauses when the tab is hidden and falls back to a single
 * static frame when the user prefers reduced motion.
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let rafId = 0;
    let running = false;

    const seed = () => {
      const count = Math.min(72, Math.max(26, Math.round((width * height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.6 + 0.6,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkle: Math.random() * Math.PI * 2,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
      }));
    };

    const resize = () => {
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;
      if (nextW === width && nextH === height && nodes.length) return;

      width = nextW;
      height = nextH;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const maxDistance = 132;

      // Constellation links between nearby nodes.
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.twinkle += 0.02;

        if (node.x < -12) node.x = width + 12;
        else if (node.x > width + 12) node.x = -12;
        if (node.y < -12) node.y = height + 12;
        else if (node.y > height + 12) node.y = -12;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.16;
            ctx.strokeStyle = `rgba(0, 235, 196, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // Twinkling stars.
      for (const node of nodes) {
        const alpha = node.baseAlpha + Math.sin(node.twinkle) * 0.22;
        ctx.globalAlpha = Math.max(0.06, Math.min(0.9, alpha));
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(frame);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        ctx.globalAlpha = node.baseAlpha;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const start = () => {
      if (running) return;
      running = true;
      resize();
      if (reduceMotion) {
        running = false;
        drawStatic();
        return;
      }
      rafId = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onResize = () => running && resize();
    const onVisibility = () => (document.hidden ? stop() : start());

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.aurora}>
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
        <span className={`${styles.blob} ${styles.blobC}`} />
      </div>
    </div>
  );
}
