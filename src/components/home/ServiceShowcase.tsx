'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';

const categories = ['전체', '상담', '프로그램'];

const services = [
  {
    title: '개인상담',
    category: '상담',
    description: '라이프사이클에 맞춘 1:1 맞춤 심리상담',
    image: '/images/photos/counseling-1.jpg',
    href: '/counseling/individual',
  },
  {
    title: '커플상담',
    category: '상담',
    description: '관계 개선과 소통을 위한 전문 상담',
    image: '/images/photos/counseling-5.jpg',
    href: '/counseling/couple',
  },
  {
    title: '가족상담',
    category: '상담',
    description: '건강한 가족 관계 회복을 지원합니다',
    image: '/images/photos/counseling-3.jpg',
    href: '/counseling/family',
  },
  {
    title: '그룹상담',
    category: '상담',
    description: '함께 성장하는 그룹 프로그램',
    image: '/images/photos/seminar-8.jpg',
    imagePosition: '85% center',
    href: '/counseling/group',
  },
  {
    title: '심리검사',
    category: '프로그램',
    description: '과학적 심리검사로 나를 이해하기',
    image: '/images/photos/counseling-2.jpg',
    href: '/testing',
  },
  {
    title: '성장 프로그램',
    category: '프로그램',
    description: '자기성장과 커리어 발전을 위한 워크숍',
    image: '/images/photos/seminar-7.jpg',
    href: '/programs',
  },
];

export default function ServiceShowcase() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setIsScrolled(v > 0.5);
  });

  const filteredServices =
    activeCategory === '전체'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const hoveredService = hoveredIndex !== null ? filteredServices[hoveredIndex] : null;
  const listRef = useRef<HTMLDivElement>(null);
  const [circleY, setCircleY] = useState(0);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 transition-colors duration-700 ease-in-out ${
        isScrolled ? 'bg-beige-100' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black">
            Our Service
          </h2>
          <p className="mt-6 text-base max-w-lg mx-auto leading-relaxed text-black/50">
            당신에게 맞는 상담과 프로그램을 찾아보세요.
            <br className="hidden sm:inline" />
            전문 상담사가 함께합니다.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full overflow-hidden border border-beige-300/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setHoveredIndex(null);
                }}
                className={`px-5 sm:px-8 py-3 text-sm font-medium transition-all duration-500 ${
                  activeCategory === cat
                    ? 'bg-dark text-white'
                    : 'text-black/50 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Service List with Circular Image */}
        <div className="relative" ref={listRef}>
          {/* Floating Circle Image (desktop only) */}
          <AnimatePresence>
            {hoveredService && (
              <motion.div
                key={hoveredService.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ top: circleY }}
                className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden pointer-events-none z-10 items-center justify-center"
              >
                <div
                  className="w-full h-full bg-cover scale-110"
                  style={{
                    backgroundImage: `url('${hoveredService.image}')`,
                    backgroundPosition: hoveredService.imagePosition || 'center',
                  }}
                />
                <div className="absolute inset-0 bg-dark/25 rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Service Items */}
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block border-t border-beige-200 py-8 md:py-10"
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  if (listRef.current) {
                    const listRect = listRef.current.getBoundingClientRect();
                    const itemRect = e.currentTarget.getBoundingClientRect();
                    setCircleY(itemRect.top + itemRect.height / 2 - listRect.top);
                  }
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <motion.svg
                      className="w-5 h-5 md:w-6 md:h-6 text-black/30 group-hover:text-accent transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      whileHover={{ x: 4 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </motion.svg>
                  </div>

                  {/* Description (desktop) */}
                  <p className="hidden md:block text-sm max-w-xs text-right text-black/30 group-hover:text-black/60 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Description (mobile) */}
                <p className="md:hidden mt-2 text-sm text-black/30 group-hover:text-black/50 transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-beige-200" />
        </div>
      </div>
    </section>
  );
}
