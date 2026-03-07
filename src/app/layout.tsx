import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['심리상담', '청년상담', '온라인상담', '무료심리상담', '청년무료상담', '개인상담', '커플상담', '가족상담', '자기성장', '퍼스널브랜딩', '도담상담센터', '도담센터', '20대상담', '30대상담', '심리검사', '기업EAP'],
  authors: [{ name: SITE_CONFIG.name }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '도담상담센터 - 청년 심리상담 전문',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: 'gyrtOBnZs3QBMwF_0m8aOwA4UNLQnB8zlliH3iHQcNs',
    other: { 'naver-site-verification': '2a49c898498b19886e9bf9cde4dee9ec34dc62c6' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  logo: `${SITE_CONFIG.url}/logo.png`,
  image: `${SITE_CONFIG.url}/og-image.png`,
  priceRange: '₩50,000 ~ ₩180,000',
  openingHours: 'Mo-Su 09:00-21:00',
  serviceType: ['심리상담', '온라인상담', '청년무료상담', '기업EAP', '심리검사'],
  areaServed: {
    '@type': 'Country',
    name: '대한민국',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '3000',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
