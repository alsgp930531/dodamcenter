import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dodamcenter.com';

  const routes = [
    '',
    '/about',
    '/counseling',
    '/counseling/individual',
    '/counseling/couple',
    '/counseling/family',
    '/counseling/group',
    '/programs',
    '/testing',
    '/corporate',
    '/reviews',
    '/contact',
    '/counselors',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.7,
  }));
}
