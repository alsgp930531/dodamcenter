'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-bleed parallax nature image */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/photos/seminar-3.jpg')`,
            }}
          />
        </motion.div>
      </div>

      {/* Marquee text strip */}
      <div className="py-6 md:py-10 bg-white overflow-hidden border-y border-beige-100">
        <div
          className="animate-marquee flex whitespace-nowrap"
          style={{ '--marquee-duration': '18s' } as React.CSSProperties}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mx-4 sm:mx-6 md:mx-10 select-none"
            >
              YOUTH GROWTH PROJECT
              <span className="mx-4 sm:mx-6 md:mx-10 text-beige-200 font-light">/</span>
              마음 성장 전문 상담
              <span className="mx-4 sm:mx-6 md:mx-10 text-beige-200 font-light">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
