import type { MetadataRoute } from 'next';
import { projectsData } from '@/data/projects';
import { siteUrl } from '@/lib/site-url';
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/work-experience', '/contact'];
  return [
    ...routes.map(path => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 })),
    ...projectsData.map(project => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
