import { useEffect, useRef } from "react";

const NeonNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(DPR, DPR);

    let nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
    }> = [];

    const NODE_COUNT = Math.round(Math.max(20, (w * h) / 90000));
    const LINE_DISTANCE = Math.min(220, Math.max(120, Math.hypot(w, h) / 6));
    const COLOR_BASE = 'rgba(30,190,255,';

    function rand(min: number, max: number) { 
      return Math.random() * (max - min) + min; 
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.2, 0.2),
          vy: rand(-0.2, 0.2),
          r: rand(1.5, 3.0),
          phase: rand(0, Math.PI * 2),
        });
      }
    }

    function drawGlow(x: number, y: number, r: number, intensity = 0.12) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
      grad.addColorStop(0, COLOR_BASE + (0.45 * intensity) + ')');
      grad.addColorStop(0.25, COLOR_BASE + (0.18 * intensity) + ')');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 8, 0, Math.PI * 2);
      ctx.fill();
    }

    let animationId: number;

    function render(time: number) {
      ctx.clearRect(0, 0, w, h);

      // Faint central gradient to emulate depth
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(2,6,23,0.7)');
      g.addColorStop(1, 'rgba(1,2,8,0.85)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINE_DISTANCE) {
            const alpha = (1 - dist / LINE_DISTANCE) * 0.45;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = COLOR_BASE + (alpha * 0.9) + ')';
            ctx.lineWidth = 0.9;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(30,190,255,0.9)';
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw nodes with glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += 0.002 + (n.r * 0.0005);
        n.x += n.vx + Math.sin(n.phase) * 0.1;
        n.y += n.vy + Math.cos(n.phase) * 0.1;

        // Keep in bounds
        if (n.x < -50) n.x = w + 50;
        if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50;
        if (n.y > h + 50) n.y = -50;

        // Glow
        drawGlow(n.x, n.y, n.r, 1.0);

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = 'rgba(180,240,255,0.98)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Tiny halo
        ctx.beginPath();
        ctx.strokeStyle = COLOR_BASE + '0.35)';
        ctx.lineWidth = 1;
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Subtle waveform
      ctx.beginPath();
      const t = time * 0.0005;
      for (let x = 0; x < w; x += 10) {
        const y = h * 0.12 + Math.sin((x * 0.02) + t) * (h * 0.03) + Math.cos((x * 0.01) - t * 0.5) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(60,200,255,0.12)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 18;
      ctx.shadowColor = 'rgba(30,190,255,0.05)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(render);
    }

    function handleResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(DPR, DPR);
      initNodes();
    }

    // Pulse effect
    const pulseInterval = setInterval(() => {
      const centerX = w * 0.2 + Math.random() * w * 0.6;
      const centerY = h * 0.15 + Math.random() * h * 0.7;
      ctx.save();
      const pulseGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 160);
      pulseGrad.addColorStop(0, 'rgba(40,220,255,0.06)');
      pulseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pulseGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }, 4200);

    initNodes();
    animationId = requestAnimationFrame(render);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(pulseInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default NeonNetworkBackground;