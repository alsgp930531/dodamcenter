interface CounselorCardProps {
  name: string;
  credentials: string;
  education: string;
  specialty: string[];
  experience: string;
  bio: string;
}

export default function CounselorCard({
  name,
  credentials,
  education,
  specialty,
  experience,
  bio,
}: CounselorCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-beige-200 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Avatar Placeholder */}
      <div className="w-16 h-16 rounded-full bg-beige-100 text-accent flex items-center justify-center mb-4">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>

      {/* Name & Credentials */}
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-sm text-accent font-medium mt-1">{credentials}</p>

      {/* Education & Experience */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-black-light">{education}</p>
        <p className="text-xs text-black-light">{experience}</p>
      </div>

      {/* Specialty Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {specialty.map((tag) => (
          <span
            key={tag}
            className="inline-block text-xs px-2.5 py-1 rounded-full bg-beige-100 text-black-light"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bio Quote */}
      <p className="mt-4 text-sm text-black-light italic leading-relaxed border-l-2 border-accent/30 pl-3">
        &ldquo;{bio}&rdquo;
      </p>
    </div>
  );
}
