'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { TRUST_INDICATORS } from '@/lib/constants';

function Counter({ value, suffix, duration = 1.8 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;
    let frameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * value;

      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

// Korean branch locations with distance from Seoul for stagger timing
const BRANCHES: { x: number; y: number; label: string; primary: boolean; delay: number }[] = [
  { x: 195, y: 115, label: '서울', primary: true, delay: 0 },
  { x: 210, y: 125, label: '성남', primary: false, delay: 0.3 },
  { x: 185, y: 130, label: '인천', primary: false, delay: 0.35 },
  { x: 220, y: 140, label: '수원', primary: false, delay: 0.4 },
  { x: 250, y: 155, label: '원주', primary: false, delay: 0.55 },
  { x: 195, y: 165, label: '천안', primary: false, delay: 0.5 },
  { x: 230, y: 180, label: '대전', primary: false, delay: 0.65 },
  { x: 195, y: 205, label: '전주', primary: false, delay: 0.75 },
  { x: 270, y: 195, label: '대구', primary: false, delay: 0.8 },
  { x: 165, y: 235, label: '광주', primary: false, delay: 0.9 },
  { x: 290, y: 225, label: '울산', primary: false, delay: 0.95 },
  { x: 275, y: 240, label: '부산', primary: false, delay: 1.0 },
  { x: 140, y: 290, label: '제주', primary: false, delay: 1.15 },
];

// Connection lines from Seoul hub
const CONNECTIONS = [
  { x1: 195, y1: 115, x2: 210, y2: 125, delay: 0.2 },
  { x1: 195, y1: 115, x2: 185, y2: 130, delay: 0.25 },
  { x1: 195, y1: 115, x2: 220, y2: 140, delay: 0.3 },
  { x1: 195, y1: 115, x2: 250, y2: 155, delay: 0.45 },
  { x1: 195, y1: 115, x2: 195, y2: 165, delay: 0.4 },
  { x1: 195, y1: 165, x2: 230, y2: 180, delay: 0.55 },
  { x1: 230, y1: 180, x2: 270, y2: 195, delay: 0.7 },
  { x1: 230, y1: 180, x2: 195, y2: 205, delay: 0.65 },
  { x1: 270, y1: 195, x2: 290, y2: 225, delay: 0.85 },
  { x1: 270, y1: 195, x2: 275, y2: 240, delay: 0.9 },
  { x1: 195, y1: 205, x2: 165, y2: 235, delay: 0.8 },
];

function AnimatedLine({ x1, y1, x2, y2, delay, isActive }: {
  x1: number; y1: number; x2: number; y2: number; delay: number; isActive: boolean;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);

  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#8B7355"
      strokeWidth="1"
      strokeDasharray={length}
      strokeDashoffset={isActive ? 0 : length}
      opacity={isActive ? 0.5 : 0}
      style={{
        transition: `stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.3s ease ${delay}s`,
      }}
    />
  );
}

function AnimatedMarker({ loc, isActive }: {
  loc: typeof BRANCHES[0]; isActive: boolean;
}) {
  return (
    <g
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'scale(1)' : 'scale(0)',
        transformOrigin: `${loc.x}px ${loc.y}px`,
        transition: `opacity 0.4s ease ${loc.delay}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${loc.delay}s`,
      }}
    >
      {/* Pulse ring for primary (Seoul) */}
      {loc.primary && (
        <>
          <circle cx={loc.x} cy={loc.y} r="12" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.4">
            <animate attributeName="r" from="8" to="28" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={loc.x} cy={loc.y} r="12" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="r" from="10" to="36" dur="3s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="3s" begin="0.8s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      {/* Small pulse for non-primary */}
      {!loc.primary && (
        <circle cx={loc.x} cy={loc.y} r="4" fill="none" stroke="#8B7355" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" from="4" to="12" dur="2.5s" begin={`${loc.delay + 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" begin={`${loc.delay + 0.5}s`} repeatCount="indefinite" />
        </circle>
      )}
      {/* Outer dot */}
      <circle cx={loc.x} cy={loc.y} r={loc.primary ? 7 : 4.5} fill="#8B7355" />
      {/* Inner dot */}
      <circle cx={loc.x} cy={loc.y} r={loc.primary ? 3.5 : 2} fill="white" />
      {/* Label */}
      <text
        x={loc.x}
        y={loc.y - (loc.primary ? 14 : 9)}
        textAnchor="middle"
        fill="white"
        fontSize={loc.primary ? 12 : 9}
        fontWeight={loc.primary ? 700 : 500}
        opacity={loc.primary ? 0.9 : 0.7}
      >
        {loc.label}
      </text>
    </g>
  );
}

function DotKoreaMap({ isActive }: { isActive: boolean }) {
  return (
    <svg viewBox="0 0 400 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="380" fill="url(#mapGlow)" />

      {/* Korea mainland outline - dot pattern */}
      <g fill="white" opacity="0.2">
        {/* 경기/강원 북부 */}
        {generateDots([
          [170,70],[180,70],[190,70],[200,70],[210,70],[220,70],
          [160,80],[170,80],[180,80],[190,80],[200,80],[210,80],[220,80],[230,80],[240,80],
          [155,90],[165,90],[175,90],[185,90],[195,90],[205,90],[215,90],[225,90],[235,90],[245,90],[255,90],
          [155,100],[165,100],[175,100],[185,100],[195,100],[205,100],[215,100],[225,100],[235,100],[245,100],[255,100],[265,100],
          [160,110],[170,110],[180,110],[190,110],[200,110],[210,110],[220,110],[230,110],[240,110],[250,110],[260,110],[270,110],
          [165,120],[175,120],[185,120],[195,120],[205,120],[215,120],[225,120],[235,120],[245,120],[255,120],[265,120],
        ])}
        {/* 충청/경상 중부 */}
        {generateDots([
          [170,130],[180,130],[190,130],[200,130],[210,130],[220,130],[230,130],[240,130],[250,130],[260,130],
          [175,140],[185,140],[195,140],[205,140],[215,140],[225,140],[235,140],[245,140],[255,140],[265,140],
          [180,150],[190,150],[200,150],[210,150],[220,150],[230,150],[240,150],[250,150],[260,150],[270,150],
          [175,160],[185,160],[195,160],[205,160],[215,160],[225,160],[235,160],[245,160],[255,160],[265,160],[275,160],
          [180,170],[190,170],[200,170],[210,170],[220,170],[230,170],[240,170],[250,170],[260,170],[270,170],[280,170],
          [175,180],[185,180],[195,180],[205,180],[215,180],[225,180],[235,180],[245,180],[255,180],[265,180],[275,180],[285,180],
        ])}
        {/* 전라/경상 남부 */}
        {generateDots([
          [170,190],[180,190],[190,190],[200,190],[210,190],[220,190],[230,190],[240,190],[250,190],[260,190],[270,190],[280,190],[290,190],
          [165,200],[175,200],[185,200],[195,200],[205,200],[215,200],[225,200],[235,200],[245,200],[255,200],[265,200],[275,200],[285,200],[295,200],
          [160,210],[170,210],[180,210],[190,210],[200,210],[210,210],[220,210],[230,210],[240,210],[250,210],[260,210],[270,210],[280,210],[290,210],
          [160,220],[170,220],[180,220],[190,220],[200,220],[210,220],[220,220],[230,220],[240,220],[250,220],[260,220],[270,220],[280,220],[290,220],
          [165,230],[175,230],[185,230],[195,230],[205,230],[215,230],[225,230],[235,230],[245,230],[255,230],[265,230],[275,230],[285,230],
          [170,240],[180,240],[190,240],[200,240],[210,240],[220,240],[230,240],[240,240],[250,240],[260,240],[270,240],[280,240],
          [175,250],[185,250],[195,250],[205,250],[215,250],[225,250],[235,250],[245,250],[255,250],[265,250],[275,250],
          [185,260],[195,260],[205,260],[215,260],[225,260],[235,260],[245,260],[255,260],[265,260],
        ])}
        {/* 제주도 */}
        {generateDots([
          [120,285],[130,285],[140,285],[150,285],[160,285],
          [115,295],[125,295],[135,295],[145,295],[155,295],[165,295],
          [120,305],[130,305],[140,305],[150,305],[160,305],
        ])}
      </g>

      {/* Animated connection lines */}
      <g>
        {CONNECTIONS.map((conn, i) => (
          <AnimatedLine key={i} {...conn} isActive={isActive} />
        ))}
      </g>

      {/* Animated branch markers */}
      {BRANCHES.map((loc, i) => (
        <AnimatedMarker key={i} loc={loc} isActive={isActive} />
      ))}
    </svg>
  );
}

function generateDots(coords: number[][]) {
  return coords.map(([x, y], i) => (
    <circle key={`${x}-${y}-${i}`} cx={x} cy={y} r={1.8} />
  ));
}

export default function TrustIndicators() {
  const ref = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-auto py-20 md:h-screen md:py-0 flex items-center overflow-hidden bg-dark" data-header-theme="dark">
      {/* Dotted Korea Map Background */}
      <motion.div ref={mapRef} style={{ y: bgY }} className="absolute inset-0 flex items-center justify-center opacity-60">
        <div className="w-full max-w-3xl mx-auto px-4">
          <DotKoreaMap isActive={isMapInView} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.4em] text-white/55 uppercase">Trust</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            숫자로 보는 도담상담센터
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {TRUST_INDICATORS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <div className="w-8 h-px bg-accent mb-3" />
              <p className="text-sm text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
