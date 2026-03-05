'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const photos = [
  { src: '/images/photos/counseling-1.jpg', position: 'center 20%' },
  { src: '/images/photos/counseling-2.jpg', position: 'center' },
  { src: '/images/photos/counseling-3.jpg', position: '35% 30%' },
  { src: '/images/photos/counseling-4.jpg', position: 'center 30%' },
  { src: '/images/photos/counseling-5.jpg', position: 'center' },
  { src: '/images/photos/counseling-6.jpg', position: '55% 25%' },
  { src: '/images/photos/counseling-7.jpg', position: 'center 20%' },
  { src: '/images/photos/seminar-5.jpg', position: 'center' },
];

const COUNT = photos.length;
const ANGLE_STEP = 360 / COUNT;
const RADIUS = 340;

// ─── Canvas ribbon drawing ───────────────────────────────────────────────────
const PERSP = 1200;
const RIBBON_R = 450;
const BAND_HALF = 16;
const WAVE_AMP = 65;
const WAVE_FREQ = 2; // number of complete waves around the ribbon
const NUM_PTS = 200;
const RIBBON_COLOR = { r: 245, g: 242, b: 237 };
const SHADOW_COLOR = { r: 0, g: 0, b: 0 };
const TEXT_LABEL = 'DODAM COUNSELING CENTER · ';
const CHAR_ANGLE_VAL = 0.022; // radians per character (letter spacing)
const TEXT_COUNT = Math.min(
  Math.ceil((Math.PI * 2) / (CHAR_ANGLE_VAL * TEXT_LABEL.length)),
  6, // cap to reduce draw calls
);
const TEXT_SPEED = 0.00015; // radians per ms for text animation
const IDLE_FPS = 24;
const IDLE_INTERVAL = 1000 / IDLE_FPS;

function drawRibbon(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  ryDeg: number,
  rxDeg: number,
  rzDeg: number,
  time: number,
) {
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;

  // Pre-calculate trig for rotation matrix
  const toRad = Math.PI / 180;
  const [sY, cY] = [Math.sin(ryDeg * toRad), Math.cos(ryDeg * toRad)];
  const [sX, cX] = [Math.sin(rxDeg * toRad), Math.cos(rxDeg * toRad)];
  const [sZ, cZ] = [Math.sin(rzDeg * toRad), Math.cos(rzDeg * toRad)];

  function transform(px: number, py: number, pz: number) {
    let x = px * cY + pz * sY;
    let z = -px * sY + pz * cY;
    let y = py;
    const y2 = y * cX - z * sX;
    const z2 = y * sX + z * cX;
    y = y2;
    z = z2;
    const x2 = x * cZ - y * sZ;
    const y3 = x * sZ + y * cZ;
    x = x2;
    y = y3;
    return { x, y, z };
  }

  function project(p: { x: number; y: number; z: number }) {
    const d = PERSP - p.z;
    if (d < 1) return null;
    const s = PERSP / d;
    return { sx: p.x * s + cx, sy: p.y * s + cy, s, z: p.z };
  }

  // ── Build ribbon point strip ──
  type Projected = { sx: number; sy: number; s: number; z: number };
  const uppers: (Projected | null)[] = [];
  const lowers: (Projected | null)[] = [];

  for (let i = 0; i <= NUM_PTS; i++) {
    const t = (i / NUM_PTS) * Math.PI * 2;
    const baseX = RIBBON_R * Math.sin(t);
    const baseY = WAVE_AMP * Math.sin(WAVE_FREQ * t);
    const baseZ = RIBBON_R * Math.cos(t);

    uppers.push(project(transform(baseX, baseY - BAND_HALF, baseZ)));
    lowers.push(project(transform(baseX, baseY + BAND_HALF, baseZ)));
  }

  // Helper: compute visibility opacity for a given z value
  function zOpacity(z: number) {
    return Math.max(0, (z + RIBBON_R * 0.1) / (RIBBON_R * 1.1));
  }

  // ── Draw continuous ribbon shape (no seams, no gaps) ──
  // Find visible runs and draw each as a single solid filled path

  function drawRibbonShape(
    offsetX: number, offsetY: number,
    r: number, g: number, b: number,
    alpha: number,
  ) {
    // Collect runs of visible points
    let runStart = -1;
    const flush = (end: number) => {
      if (runStart < 0) return;
      ctx.beginPath();
      let first = true;
      for (let j = runStart; j <= end; j++) {
        const u = uppers[j];
        if (!u) continue;
        if (first) { ctx.moveTo(u.sx + offsetX, u.sy + offsetY); first = false; }
        else ctx.lineTo(u.sx + offsetX, u.sy + offsetY);
      }
      for (let j = end; j >= runStart; j--) {
        const l = lowers[j];
        if (!l) continue;
        ctx.lineTo(l.sx + offsetX, l.sy + offsetY);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fill();
      runStart = -1;
    };

    for (let i = 0; i <= NUM_PTS; i++) {
      const u = uppers[i];
      const l = lowers[i];
      if (!u || !l) { flush(i - 1); continue; }
      const op = zOpacity((u.z + l.z) / 2);
      if (op < 0.03) { flush(i - 1); continue; }
      if (runStart < 0) runStart = i;
    }
    flush(NUM_PTS);
  }

  // Shadow
  drawRibbonShape(2, 4, SHADOW_COLOR.r, SHADOW_COLOR.g, SHADOW_COLOR.b, 0.06);

  // Main fill - solid, no transparency gaps
  drawRibbonShape(0, 0, RIBBON_COLOR.r, RIBBON_COLOR.g, RIBBON_COLOR.b, 0.92);


  // ── Draw top edge highlight ──
  ctx.beginPath();
  let started = false;
  for (let i = 0; i <= NUM_PTS; i++) {
    const u = uppers[i];
    if (!u) { started = false; continue; }
    const opacity = zOpacity(u.z);
    if (opacity < 0.1) { started = false; continue; }
    if (!started) { ctx.moveTo(u.sx, u.sy); started = true; }
    else ctx.lineTo(u.sx, u.sy);
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.4)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // ── Draw bottom edge subtle line ──
  ctx.beginPath();
  started = false;
  for (let i = 0; i <= NUM_PTS; i++) {
    const l = lowers[i];
    if (!l) { started = false; continue; }
    const opacity = zOpacity(l.z);
    if (opacity < 0.1) { started = false; continue; }
    if (!started) { ctx.moveTo(l.sx, l.sy); started = true; }
    else ctx.lineTo(l.sx, l.sy);
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 0.5;
  ctx.stroke();

  // ── Draw animated text along ribbon (character by character) ──
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const textPhase = time * TEXT_SPEED;
  // Approximate angular width of one character on the ribbon
  const CHAR_ANGLE = CHAR_ANGLE_VAL;

  for (let n = 0; n < TEXT_COUNT; n++) {
    const labelStartT = (n / TEXT_COUNT) * Math.PI * 2 + textPhase;

    // Draw each character individually along the curve
    for (let ci = 0; ci < TEXT_LABEL.length; ci++) {
      const charT = labelStartT + ci * CHAR_ANGLE;
      // Normalize to [0, 2π]
      const t = ((charT % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

      // Position this character on the ribbon helix
      const px = RIBBON_R * Math.sin(t);
      const py = WAVE_AMP * Math.sin(WAVE_FREQ * t);
      const pz = RIBBON_R * Math.cos(t);

      const charPos = project(transform(px, py, pz));
      if (!charPos) continue;

      const opacity = zOpacity(charPos.z);
      if (opacity < 0.05) continue;

      // Tangent for rotation
      const dt = 0.015;
      const nt = t + dt;
      const nx = RIBBON_R * Math.sin(nt);
      const ny = WAVE_AMP * Math.sin(WAVE_FREQ * nt);
      const nz = RIBBON_R * Math.cos(nt);
      const nextPos = project(transform(nx, ny, nz));
      if (!nextPos) continue;

      const angle = Math.atan2(nextPos.sy - charPos.sy, nextPos.sx - charPos.sx);
      const fontSize = Math.round(Math.max(10, 14 * charPos.s));

      ctx.save();
      ctx.translate(charPos.sx, charPos.sy);
      ctx.rotate(angle);
      ctx.font = `800 ${fontSize}px Pretendard,sans-serif`;
      ctx.globalAlpha = opacity * 0.85;
      ctx.fillText(TEXT_LABEL[ci], 0, 0);
      ctx.restore();
    }
  }
  ctx.restore();
}

// ─── Hook: sync canvas with scroll ──────────────────────────────────────────
function useRibbonCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  stickyRef: React.RefObject<HTMLDivElement | null>,
  rotY: MotionValue<number>,
  rotX: MotionValue<number>,
  rotZ: MotionValue<number>,
  isVisible: boolean,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      // Cap DPR at 2 to reduce canvas size on retina displays
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = sticky.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId: number;
    const startTime = performance.now();
    let lastDrawTime = 0;
    let lastRotY = 0;
    let cachedW = 0;
    let cachedH = 0;
    const updateCachedSize = () => {
      const rect = sticky.getBoundingClientRect();
      cachedW = rect.width;
      cachedH = rect.height;
    };
    updateCachedSize();
    window.addEventListener('resize', updateCachedSize);

    const draw = () => {
      if (!isVisible) {
        frameId = requestAnimationFrame(draw);
        return;
      }
      const now = performance.now();
      const curRotY = rotY.get();
      const isScrolling = Math.abs(curRotY - lastRotY) > 0.01;
      lastRotY = curRotY;

      // Full FPS when scrolling, throttled when idle (text animation only)
      if (!isScrolling && now - lastDrawTime < IDLE_INTERVAL) {
        frameId = requestAnimationFrame(draw);
        return;
      }
      lastDrawTime = now;
      const elapsed = now - startTime;
      drawRibbon(ctx, cachedW, cachedH, curRotY, rotX.get(), rotZ.get(), elapsed);
      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', updateCachedSize);
    };
  }, [canvasRef, stickyRef, rotY, rotX, rotZ, isVisible]);
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function PhotoRibbon() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const rotY = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
    [-4, 3, -5, 4, -3, 4, -4],
  );
  const rotZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-1.5, 1.5, -2, 1.5, -1.5],
  );

  useRibbonCanvas(canvasRef, stickyRef, rotY, rotX, rotZ, isVisible);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-white">
      <div ref={stickyRef} className="sticky top-0 h-screen flex items-center justify-center bg-white pt-24 pb-16 md:pt-40 md:pb-28" style={{ clipPath: 'inset(0)' }}>
        {/* 3D Carousel (photos only) */}
        <div style={{ perspective: '1200px' }} className="relative z-0">
          <motion.div
            className="relative w-[200px] h-[270px] sm:w-[240px] sm:h-[320px] md:w-[280px] md:h-[380px] preserve-3d"
            style={{ rotateY: rotY, rotateX: rotX, rotateZ: rotZ }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                style={{
                  transform: `rotateY(${ANGLE_STEP * i}deg) translateZ(${RADIUS}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div
                  className="w-full h-full bg-cover"
                  style={{
                    backgroundImage: `url('${photo.src}')`,
                    backgroundPosition: photo.position,
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Canvas ribbon overlay - smooth curves, no segmentation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        {/* View More */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10">
          <Link
            href="/about"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-dark text-white flex items-center justify-center text-sm font-medium hover:scale-105 transition-transform duration-300"
          >
            View More
          </Link>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.5, 0.5, 0]) }}
        >
          <span className="text-[10px] tracking-[0.3em] text-black/50 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-black/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
