const fs = require('fs');

const robots = `User-agent: *
Allow: /
Disallow: /test
Disallow: /private
Sitemap: https://yourdomain.com/sitemap.xml
`;

fs.writeFileSync('public/robots.txt', robots);
console.log('robots.txt generated');
