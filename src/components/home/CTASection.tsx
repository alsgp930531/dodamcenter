'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/shared/Button';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen flex items-center overflow-hidden bg-dark">
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/photos/seminar-6.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-dark/55" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] tracking-[0.4em] text-white/55 uppercase">Start Your Journey</span>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
            지금, 변화의 첫 걸음을
            <br />
            시작하세요
          </h2>
          <p className="mt-8 text-base md:text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
            전문 상담사가 당신의 이야기를 기다리고 있습니다.
            부담 없이 상담을 시작해보세요.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="custom" className="bg-white text-black hover:bg-white/90 px-10">
              상담 신청하기
            </Button>
            <Button href="/counseling" size="lg" variant="custom" className="text-white border border-white/20 hover:bg-white/10">
              서비스 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
