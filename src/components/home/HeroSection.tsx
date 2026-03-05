'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Phase 1 (0→0.45): Text-masked photo visible, text scales up dramatically
  // Phase 2 (0.45→1): Full photo revealed, dark overlay + subtitle appear
  const clipScale = useTransform(scrollYProgress, [0, 0.45], [1, 18]);
  const clipOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.45], [0.08, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh]" data-header-theme="dark">
      <section className="sticky top-0 h-dvh overflow-hidden">
        {/* Base beige background */}
        <div className="absolute inset-0 bg-beige-50" />

        {/* Photo background (opacity controlled) */}
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

        {/* Phase 1: Text-clipped photo (scales up then fades) */}
        <motion.div
          style={{ scale: clipScale, opacity: clipOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <h1
            className="text-[17vw] sm:text-[14vw] md:text-[11vw] font-bold leading-[0.92] text-center whitespace-nowrap select-none"
            style={{
              backgroundImage: `url('/images/photos/seminar-4.jpg')`,
              backgroundSize: '100vw auto',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            도담
            <br />
            상담센터
          </h1>
        </motion.div>

        {/* Phase 2: Title + subtitle after zoom */}
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
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] text-black/40 uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
