// SEO QA Utilities
// 1. Warn if multiple H1s exist
// 2. Warn if alt attributes missing
// 3. Validate schema JSON-LD
// 4. Check for broken internal links

export function checkMultipleH1s(): string[] {
  const h1s = document.getElementsByTagName('h1');
  return h1s.length > 1 ? ['Multiple <h1> tags found on this page.'] : [];
}

export function checkMissingAlts(): string[] {
  const imgs = Array.from(document.getElementsByTagName('img'));
  return imgs.filter(img => !img.alt || img.alt.trim() === '').map(img => `Image missing alt attribute: ${img.src}`);
}

export function validateSchemaJsonLd(): string[] {
  const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')) as HTMLScriptElement[];
  const errors: string[] = [];
  scripts.forEach(script => {
    try {
      JSON.parse(script.innerText);
    } catch {
      errors.push('Invalid JSON-LD schema detected.');
    }
  });
  return errors;
}

export function checkBrokenInternalLinks(): Promise<string[]> {
  const anchors = Array.from(document.querySelectorAll('a[href^="/"]')) as HTMLAnchorElement[];
  const errors: string[] = [];
  return Promise.all(
    anchors.map(a =>
      fetch(a.href, { method: 'HEAD' })
        .then(res => {
          if (!res.ok) errors.push(`Broken link: ${a.href}`);
        })
        .catch(() => errors.push(`Broken link: ${a.href}`))
    )
  ).then(() => errors);
}
