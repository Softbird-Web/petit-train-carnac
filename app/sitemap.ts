import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Next.js auto-generates /sitemap.xml from this export at build time.
// When the custom domain goes live, SITE_URL picks it up automatically via env var.

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/routes', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/prices', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/informations', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/book', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/faqs', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/privatisation', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/careers', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/politique-de-confidentialite', priority: 0.2, changeFrequency: 'yearly' },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
