'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function BrandStory() {
  // Section 1: expanding image on scroll
  const section1Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: s1Progress } = useScroll({
    target: section1Ref,
    offset: ['start end', 'end end'],
  });

  // Image expands: starts small with rounded corners, grows to full-bleed
  const img1Scale = useTransform(s1Progress, [0, 0.35], [0.85, 1]);
  const img1Radius = useTransform(s1Progress, [0, 0.35], [24, 0]);

  // Text appears all at once after image is mostly expanded
  const [showText, setShowText] = useState(false);
  useMotionValueEvent(s1Progress, 'change', (v) => {
    if (v > 0.35 && !showText) setShowText(true);
  });

  // Section 2 scroll tracking
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ['start end', 'end start'],
  });

  // Image reveal - slides up from bottom
  const img2Y = useTransform(s2Progress, [0, 0.4], ['12%', '0%']);
  const img2Scale = useTransform(s2Progress, [0, 0.4], [1.15, 1]);
  const img2Opacity = useTransform(s2Progress, [0.05, 0.25], [0, 1]);

  return (
    <section className="relative bg-white">
      {/* Section 1: Expanding image on scroll */}
      <div ref={section1Ref} className="relative h-[180vh]" data-header-theme="dark">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
          {/* Expanding image container */}
          <motion.div
            style={{
              scale: img1Scale,
              borderRadius: img1Radius,
            }}
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/photos/seminar-2.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-dark/40" />
          </motion.div>

          {/* Text content - appears all at once after image expands */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block text-[11px] tracking-[0.4em] text-white/70 uppercase">
                Brand Story
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
                마음의 변화가
                <br />
                시작되는 곳
              </h2>

              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-md">
                도담상담센터는 20~30대 청년의 심리적 건강과 성장을 전문적으로 지원합니다.
                검증된 상담사와 체계적인 프로그램으로 당신만의 변화를 이끌어냅니다.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm text-white/80 hover:text-white transition-colors group"
              >
                자세히 보기
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2: Split image + text */}
      <div ref={section2Ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left - Image reveals by sliding up */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden bg-dark">
          <motion.div
            style={{ y: img2Y, scale: img2Scale, opacity: img2Opacity }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/photos/counseling-5.jpg')`,
              }}
            />
          </motion.div>
        </div>

        {/* Right - Text with staggered scroll animations */}
        <div className="flex items-center bg-beige-50 px-6 md:px-16 lg:px-20 py-16 md:py-20 lg:py-0">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[11px] tracking-[0.4em] text-accent uppercase"
            >
              Our Value
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl font-semibold text-black leading-tight"
            >
              진심으로 공감하고,
              <br />
              실질적 변화를 이끕니다
            </motion.h3>

            <div className="mt-10 space-y-8">
              {[
                {
                  num: '01',
                  title: '진심 어린 공감',
                  desc: '당신의 이야기를 있는 그대로 받아들이고, 깊이 공감합니다.',
                },
                {
                  num: '02',
                  title: '실질적 변화',
                  desc: '단순 상담을 넘어 삶에서 실제로 변화를 만들어냅니다.',
                },
                {
                  num: '03',
                  title: '성장의 동반자',
                  desc: '심리적 안정과 자기성장, 커리어 발전까지 함께 설계합니다.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="flex gap-5"
                >
                  <span className="text-2xl font-light text-beige-300">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-black-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
