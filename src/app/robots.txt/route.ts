import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://www.orkeneo.com/sitemap.xml
`;

  return new NextResponse(robots.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}