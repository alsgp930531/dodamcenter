'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Line drawing animation config
const LINE_DURATION = 0.5;
const LINE_DELAY_STEP = 0.3;
const FRAME_COMPLETE = LINE_DELAY_STEP * 3 + LINE_DURATION; // ~1.4s
const TEXT_FADE_START = FRAME_COMPLETE + 0.2;
const SUBTITLE_FADE_START = TEXT_FADE_START + 0.3;
const SCROLL_HINT_START = SUBTITLE_FADE_START + 0.5;

// Frame size
const FRAME_W = 420;
const FRAME_H = 220;

function AnimatedFrame() {
  const hw = FRAME_W / 2;
  const hh = FRAME_H / 2;

  const lines = [
    { d: `M ${-hw} ${-hh} L ${hw} ${-hh}`, delay: 0 },
    { d: `M ${hw} ${-hh} L ${hw} ${hh}`, delay: LINE_DELAY_STEP },
    { d: `M ${hw} ${hh} L ${-hw} ${hh}`, delay: LINE_DELAY_STEP * 2 },
    { d: `M ${-hw} ${hh} L ${-hw} ${-hh}`, delay: LINE_DELAY_STEP * 3 },
  ];

  return (
    <svg
      className="absolute"
      style={{ width: FRAME_W + 40, height: FRAME_H + 40 }}
      viewBox={`${-hw - 20} ${-hh - 20} ${FRAME_W + 40} ${FRAME_H + 40}`}
      fill="none"
    >
      {lines.map((line, i) => (
        <motion.path
          key={i}
          d={line.d}
          stroke="rgba(255,255,255,0.4)"
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
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Phase 1 (0→0.35): Frame & text scale up and fade, photo appears
  const frameScale = useTransform(scrollYProgress, [0, 0.35], [1, 3]);
  const frameOpacity = useTransform(scrollYProgress, [0.15, 0.35], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  // Phase 2 (0.4→0.7): Dark overlay + subtitle
  const overlayOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh]" data-header-theme="dark">
      <section className="sticky top-0 h-dvh overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#1A1A1A]" />

        {/* Photo background (fades in on scroll) */}
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/photos/seminar-4.jpg')` }}
          />
        </motion.div>

        {/* Dark overlay for phase 2 */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/55 to-dark/70"
        />

        {/* Phase 1: Frame + Text (scales up and fades on scroll) */}
        <motion.div
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <AnimatedFrame />

          <div className="flex flex-col items-center gap-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: TEXT_FADE_START, ease: 'easeOut' }}
              className="font-serif text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold text-white tracking-[0.05em] leading-none"
            >
              DODAM
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: SUBTITLE_FADE_START, ease: 'easeOut' }}
              className="text-[3vw] sm:text-[2.2vw] md:text-[1.4vw] lg:text-[1vw] tracking-[0.35em] text-white/60 uppercase"
            >
              Counseling Center
            </motion.span>
          </div>
        </motion.div>

        {/* Phase 2: Subtitle content after photo reveal */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
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

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: SCROLL_HINT_START }}
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
      </section>
    </div>
  );
}
