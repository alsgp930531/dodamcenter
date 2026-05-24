interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} mb-12 md:mb-16`}>
      {subtitle && (
        <span className={`text-sm tracking-[0.2em] uppercase font-medium ${light ? 'text-beige-200' : 'text-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-beige-200' : 'text-black-light'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
