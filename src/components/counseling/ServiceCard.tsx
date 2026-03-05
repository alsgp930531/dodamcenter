import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, price, duration, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl border border-beige-200 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-dark hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-beige-100 text-accent flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-black group-hover:text-white transition-colors duration-300 mb-3">{title}</h3>
        <p className="text-black-light group-hover:text-white/70 transition-colors duration-300 leading-relaxed mb-6">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-beige-200 group-hover:border-white/20 transition-colors duration-300">
          <div>
            <span className="text-2xl font-bold text-black group-hover:text-accent transition-colors duration-300">{price.toLocaleString()}</span>
            <span className="text-sm text-black-light group-hover:text-white/70 transition-colors duration-300 ml-1">원</span>
          </div>
          <span className="text-sm text-black-light group-hover:text-white/70 transition-colors duration-300">{duration}</span>
        </div>
      </div>
    </Link>
  );
}
