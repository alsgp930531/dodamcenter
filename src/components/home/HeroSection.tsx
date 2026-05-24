'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-dvh overflow-hidden bg-dark" data-header-theme="dark">
      {/* Full-screen photo */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/photos/hero-lobby.jpg')` }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/40" />
      </div>

      {/* Subtitle */}
      <motion.div
        className="absolute inset-0 z-[5] flex flex-col justify-center px-6 md:px-16 lg:px-20 pointer-events-none max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-stretch gap-6 md:gap-8">
          {/* Decorative vertical line */}
          <motion.div
            className="hidden sm:block w-px bg-gradient-to-b from-transparent via-white/40 to-transparent flex-shrink-0"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          <div>
            <span className="text-[11px] md:text-xs tracking-[0.4em] text-white/80 uppercase mb-6 block">
              Daon Counseling Center
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              다온, 성장의
              <br />
              기반을 세우는 곳
            </h2>

            <p className="mt-8 text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              내면의 안정과 삶의 방향을
              <br className="hidden sm:inline" />
              함께 세우는 상담센터
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[6]"
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
    </section>
  );
}
