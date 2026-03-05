'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/shared/Button';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-dvh overflow-hidden" data-header-theme="dark">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/photos/seminar-4.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/25 to-dark/65" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[11px] md:text-xs tracking-[0.4em] text-white/80 uppercase mb-6"
        >
          Dodam Counseling Center
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-[1.1] tracking-tight"
        >
          도담, 성장의
          <br />
          기반을 세우는 곳
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 text-base md:text-lg text-white/70 text-center max-w-lg leading-relaxed"
        >
          내면의 안정과 삶의 방향을
          <br className="hidden sm:inline" />
          함께 세우는 상담센터
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Button href="/contact" size="lg" variant="custom" className="bg-white text-black hover:bg-white/90 px-10">
            상담 신청
          </Button>
          <Button href="/counseling" size="lg" variant="custom" className="text-white border border-white/20 hover:bg-white/10">
            서비스 보기
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
