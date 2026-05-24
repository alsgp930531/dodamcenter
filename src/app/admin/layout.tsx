'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const adminNav = [
  { label: '대시보드', href: '/admin', icon: '📊' },
  { label: '문의 관리', href: '/admin/inquiries', icon: '📩' },
  { label: '후기 관리', href: '/admin/reviews', icon: '⭐' },
  { label: '상담사 관리', href: '/admin/counselors', icon: '👤' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-beige-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-lg font-bold text-black">
              도담상담센터 <span className="text-accent text-sm font-normal">Admin</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {adminNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-accent text-white'
                      : 'text-black-light hover:bg-beige-100'
                  }`}
                >
                  <span className="mr-1.5">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-black-light hover:text-accent transition-colors">
              사이트 보기
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-black-light hover:text-red-500 transition-colors cursor-pointer"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="md:hidden bg-white border-b border-beige-200 px-4 py-2 flex gap-1 overflow-x-auto">
        {adminNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap transition-colors ${
              pathname === item.href
                ? 'bg-accent text-white'
                : 'text-black-light hover:bg-beige-100'
            }`}
          >
            <span className="mr-1">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
