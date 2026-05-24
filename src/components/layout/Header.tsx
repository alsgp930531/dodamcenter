'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // 헤더 뒤 배경이 어두운지 감지
  const checkBackground = useCallback(() => {
    const darkSections = document.querySelectorAll('[data-header-theme="dark"]');
    const headerHeight = 80;
    let dark = false;

    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < headerHeight && rect.bottom > 0) {
        dark = true;
      }
    });

    setIsDarkBg(dark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      checkBackground();
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [checkBackground]);

  // 페이지 이동 시 배경 재감지 + 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      checkBackground();
      setIsScrolled(window.scrollY > 50);
    });
  }, [pathname, checkBackground]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt={SITE_CONFIG.name}
              width={400}
              height={112}
              className={`h-[72px] md:h-[90px] lg:h-[112px] w-auto object-contain transition-all duration-300 ${
                isScrolled || !isDarkBg ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-[15px] font-medium transition-colors duration-300 rounded-lg ${
                    isScrolled || !isDarkBg
                      ? 'text-black-light hover:text-black hover:bg-beige-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-beige-200 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-black-light hover:bg-beige-50 hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isScrolled || !isDarkBg
                ? 'bg-accent text-white hover:bg-accent-hover'
                : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
            }`}
          >
            상담 신청
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center"
            aria-label="메뉴 열기"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled || !isDarkBg ? 'bg-black' : 'bg-white'}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled || !isDarkBg ? 'bg-black' : 'bg-white'}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled || !isDarkBg ? 'bg-black' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto"
          >
            <nav className="px-6 py-8 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium text-black hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-base text-black-light hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-beige-200">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors"
                >
                  상담 신청하기
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
