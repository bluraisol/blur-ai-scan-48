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
      shimmer: number;
      pulsePhase: number;
    }> = [];

    const NODE_COUNT = Math.round(Math.max(40, (w * h) / 45000)); // Увеличил количество узлов в 2 раза
    const LINE_DISTANCE = Math.min(280, Math.max(160, Math.hypot(w, h) / 5)); // Увеличил дистанцию связей
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
          shimmer: rand(0, Math.PI * 2),
          pulsePhase: rand(0, Math.PI * 2),
        });
      }
    }

    function drawGlow(x: number, y: number, r: number, intensity = 0.12) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
      grad.addColorStop(0, COLOR_BASE + (0.6 * intensity) + ')');
      grad.addColorStop(0.25, COLOR_BASE + (0.3 * intensity) + ')');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 8, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawShimmerLine(x1: number, y1: number, x2: number, y2: number, alpha: number, shimmerOffset: number) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.hypot(dx, dy);
      
      // Основная линия
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = COLOR_BASE + (alpha * 0.8) + ')';
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(30,190,255,0.6)';
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Переливающийся эффект
      const shimmerPos = (shimmerOffset % (Math.PI * 2)) / (Math.PI * 2);
      const shimmerX = x1 + dx * shimmerPos;
      const shimmerY = y1 + dy * shimmerPos;
      
      // Яркая точка переливания
      const shimmerGrad = ctx.createRadialGradient(shimmerX, shimmerY, 0, shimmerX, shimmerY, 15);
      shimmerGrad.addColorStop(0, 'rgba(180,240,255,0.8)');
      shimmerGrad.addColorStop(0.5, COLOR_BASE + '0.4)');
      shimmerGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = shimmerGrad;
      ctx.beginPath();
      ctx.arc(shimmerX, shimmerY, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Дополнительная яркая линия в месте переливания
      ctx.beginPath();
      const segmentStart = Math.max(0, shimmerPos - 0.1);
      const segmentEnd = Math.min(1, shimmerPos + 0.1);
      ctx.moveTo(x1 + dx * segmentStart, y1 + dy * segmentStart);
      ctx.lineTo(x1 + dx * segmentEnd, y1 + dy * segmentEnd);
      ctx.strokeStyle = 'rgba(180,240,255,0.9)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(30,190,255,0.8)';
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    let animationId: number;

    function render(time: number) {
      ctx.clearRect(0, 0, w, h);

      // Faint central gradient to emulate depth
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(2,6,23,0.5)');
      g.addColorStop(1, 'rgba(1,2,8,0.7)');
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
            const alpha = (1 - dist / LINE_DISTANCE) * 0.6;
            const shimmerOffset = time * 0.003 + (i + j) * 0.5; // Уникальное смещение для каждой линии
            drawShimmerLine(a.x, a.y, b.x, b.y, alpha, shimmerOffset);
          }
        }
      }

      // Draw nodes with glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += 0.003 + (n.r * 0.0008);
        n.shimmer += 0.05;
        n.pulsePhase += 0.02;
        
        n.x += n.vx + Math.sin(n.phase) * 0.1;
        n.y += n.vy + Math.cos(n.phase) * 0.1;

        // Keep in bounds
        if (n.x < -50) n.x = w + 50;
        if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50;
        if (n.y > h + 50) n.y = -50;

        // Enhanced pulsing glow
        const pulseIntensity = 1.0 + Math.sin(n.pulsePhase) * 0.3;
        drawGlow(n.x, n.y, n.r, pulseIntensity);

        // Core dot with shimmer
        const shimmerIntensity = 0.98 + Math.sin(n.shimmer) * 0.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(180,240,255,${shimmerIntensity})`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Enhanced halo with pulse
        const haloAlpha = 0.35 + Math.sin(n.pulsePhase * 0.5) * 0.15;
        ctx.beginPath();
        ctx.strokeStyle = COLOR_BASE + haloAlpha + ')';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 6;
        ctx.shadowColor = COLOR_BASE + '0.4)';
        ctx.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Subtle waveform
      ctx.beginPath();
      const t = time * 0.0005;
      for (let x = 0; x < w; x += 10) {
        const y = h * 0.12 + Math.sin((x * 0.02) + t) * (h * 0.04) + Math.cos((x * 0.01) - t * 0.5) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(60,200,255,0.18)';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(30,190,255,0.1)';
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
      const pulseGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
      pulseGrad.addColorStop(0, 'rgba(40,220,255,0.12)');
      pulseGrad.addColorStop(0.5, 'rgba(30,190,255,0.06)');
      pulseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pulseGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }, 3000); // Более частые пульсации

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
      className="fixed inset-0 w-full h-full pointer-events-none opacity-90"
      style={{ zIndex: -1, mixBlendMode: 'screen' }}
    />
  );
};

export default NeonNetworkBackground;