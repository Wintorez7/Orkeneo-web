// src/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const urls = [
  '',
  'faqs',
  'about-us',
  'contact-us',
  'blogs',
  'terms-and-conditions',
  'privacy-policy',
  'calculate-savings',
  'prep-wise',
  'workforce',
  'menu-forecasting',
  'our-story',
];

export async function GET() {
  const BASE_URL = 'https://www.orkeneo.com';
  const lastmod = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((slug) => {
      const loc = `${BASE_URL}/${slug}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>1.0</priority>
  </url>`;
    }).join('\n') +
  `\n</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
