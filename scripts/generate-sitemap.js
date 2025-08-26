const fs = require('fs');
const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/testimonials',
  // Add more static routes as needed
];
const baseUrl = 'https://yourdomain.com';
const lastmod = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('sitemap.xml generated');
