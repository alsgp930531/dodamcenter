interface ReviewCardProps {
  clientInitial: string;
  counselingType: string;
  content: string;
  rating: number;
  createdAt: string;
}

export default function ReviewCard({ clientInitial, counselingType, content, rating, createdAt }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-beige-200 p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-beige-100 text-accent flex items-center justify-center font-semibold text-sm">
            {clientInitial.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-black text-sm">{clientInitial}</p>
            <span className="inline-block text-xs text-accent bg-beige-50 px-2 py-0.5 rounded-full">{counselingType}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-accent' : 'text-beige-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-black-light leading-relaxed text-sm">{content}</p>

      {/* Date */}
      <p className="mt-4 text-xs text-black-light/50">{createdAt}</p>
    </div>
  );
}
