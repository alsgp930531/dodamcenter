'use client';

export default function DodamMarquee() {
  return (
    <div className="py-6 md:py-8 bg-white overflow-hidden border-b border-beige-100">
      <div
        className="animate-marquee flex whitespace-nowrap items-center"
        style={{ '--marquee-duration': '22s' } as React.CSSProperties}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl italic mx-6 sm:mx-10 md:mx-16 select-none text-beige-200 tracking-wide"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            dodam counseling center
          </span>
        ))}
      </div>
    </div>
  );
}
