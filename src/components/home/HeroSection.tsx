'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// ── Timing (ms from mount) ──
const LINES_DONE = 1000;
const TEXT_IN = 1200;
const TEXT_OUT = 2800;
const PHOTO_IN = 3100;
const EXPAND_W = 3800;
const EXPAND_H = 5000;

// ── Line drawing config ──
const LINE_DURATION = 0.35;
const LINE_DELAY = 0.2;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [vw, setVw] = useState(1200);
  const [vh, setVh] = useState(800);

  // Viewport size
  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Auto animation sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), LINES_DONE),
      setTimeout(() => setPhase(2), TEXT_IN),
      setTimeout(() => setPhase(3), TEXT_OUT),
      setTimeout(() => setPhase(4), EXPAND_W),
      setTimeout(() => setPhase(5), EXPAND_H),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Toggle header theme when photo dominates
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (phase >= 5) {
      el.setAttribute('data-header-theme', 'dark');
    } else {
      el.removeAttribute('data-header-theme');
    }
  }, [phase]);

  // Responsive frame size
  const frameW = Math.min(400, vw - 48);
  const frameH = Math.round(frameW * 0.52);

  // Scroll-driven (subtitle after full screen)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.35], [50, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // SVG line paths
  const hw = frameW / 2;
  const hh = frameH / 2;
  const lines = [
    { d: `M ${-hw} ${-hh} L ${hw} ${-hh}`, delay: 0 },
    { d: `M ${hw} ${-hh} L ${hw} ${hh}`, delay: LINE_DELAY },
    { d: `M ${hw} ${hh} L ${-hw} ${hh}`, delay: LINE_DELAY * 2 },
    { d: `M ${-hw} ${hh} L ${-hw} ${-hh}`, delay: LINE_DELAY * 3 },
  ];

  return (
    <div ref={containerRef} className="h-[200vh]">
      <section className="sticky top-0 h-dvh overflow-hidden">
        {/* Beige background */}
        <div className="absolute inset-0 bg-beige-50" />

        {/* Photo in expanding frame */}
        <motion.div
          className="absolute overflow-hidden z-[1]"
          style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
          animate={{
            width: phase >= 4 ? vw : frameW,
            height: phase >= 5 ? vh : frameH,
            borderRadius: phase >= 4 ? 0 : 12,
            opacity: phase >= 3 ? 1 : 0,
          }}
          transition={{
            duration: phase === 5 ? 1.0 : 1.2,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/photos/seminar-6.jpg')` }}
          />
        </motion.div>

        {/* Dark overlay (scroll-driven, after full screen) */}
        {phase >= 5 && (
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 z-[2] bg-gradient-to-b from-dark/40 via-dark/55 to-dark/70"
          />
        )}

        {/* SVG Frame lines */}
        <motion.div
          className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none"
          animate={{ opacity: phase >= 3 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <svg
            style={{ width: frameW + 40, height: frameH + 40 }}
            viewBox={`${-hw - 20} ${-hh - 20} ${frameW + 40} ${frameH + 40}`}
            fill="none"
          >
            {lines.map((line, i) => (
              <motion.path
                key={i}
                d={line.d}
                stroke="rgba(139,115,85,0.35)"
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: LINE_DURATION,
                  delay: line.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Text inside frame */}
        <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ opacity: phase === 2 ? 1 : 0 }}
            transition={{ duration: phase === 2 ? 0.8 : 0.4 }}
          >
            <span className="font-serif text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold text-black tracking-[0.05em] leading-none">
              DODAM
            </span>
            <span className="text-[3vw] sm:text-[2.2vw] md:text-[1.4vw] lg:text-[1vw] tracking-[0.35em] text-black/50 uppercase">
              Counseling Center
            </span>
          </motion.div>
        </div>

        {/* Scroll-driven subtitle (after full screen) */}
        {phase >= 5 && (
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-0 z-[5] flex flex-col items-center justify-center px-6"
          >
            <span className="text-[11px] md:text-xs tracking-[0.4em] text-white/80 uppercase mb-6">
              Dodam Counseling Center
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-[1.1] tracking-tight">
              도담, 성장의
              <br />
              기반을 세우는 곳
            </h2>

            <p className="mt-8 text-base md:text-lg text-white/70 text-center max-w-lg leading-relaxed">
              내면의 안정과 삶의 방향을
              <br className="hidden sm:inline" />
              함께 세우는 상담센터
            </p>
          </motion.div>
        )}

        {/* Scroll indicator (after full screen) */}
        {phase >= 5 && (
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[6]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
