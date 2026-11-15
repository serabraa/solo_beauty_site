import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { pages, origin } from '../src/seo/site.js';
import { serviceOverviews } from '../src/seo/services.js';
import { latinPage } from '../src/seo/latin.js';
import { seoHead, serviceSeoHead, latinSeoHead } from './seo-head.mjs';
// React and react-dom must load in the same mode during static rendering.
process.env.NODE_ENV = 'production';
const { build } = await import('vite');
const { default: i18n } = await import('../src/i18.js');

// Render the same components at build time; no persistent server or new
// runtime dependencies are needed. Keep /card/ on its existing entry point.
await build();
await build({ build: {
  ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', copyPublicDir: false,
  rollupOptions: { input: 'src/entry-server.jsx' },
} });
try {
  const { render, renderService, renderLatin } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
  const template = await readFile('dist/index.html', 'utf8');
  const serviceTemplate = await readFile('dist/service.html', 'utf8');
  if (!serviceTemplate.includes('<!--service-seo-head-->') || !serviceTemplate.includes('<div id="root"></div>')) {
    throw new Error('Service page template markers are missing.');
  }
  for (const [language, page] of Object.entries(pages)) {
    const services = Object.entries(i18n.getResourceBundle(language, 'translation').service)
      .filter(([key]) => !key.endsWith('Desc')).map(([, value]) => value);
    const body = await render(language);
    const start = template.indexOf('<!--seo:start-->');
    const end = template.indexOf('<!--seo:end-->');
    if (start < 0 || end < start || !template.includes('<div id="root"></div>')) {
      throw new Error('SEO build template markers are missing. Refusing to ship an empty page.');
    }
    const html = (template.slice(0, start) + '<!--seo:start-->\n' + seoHead(language, services) + '\n' + template.slice(end))
      .replace('<html lang="hy">', `<html lang="${language}">`)
      .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
    const directory = `dist${page.path}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}index.html`, html);
  }
  for (const [language, page] of Object.entries(serviceOverviews)) {
    const html = serviceTemplate
      .replace('<!--service-seo-head-->', () => serviceSeoHead(language))
      .replace('<html lang="hy">', `<html lang="${language}">`)
      .replace('<div id="root"></div>', () => `<div id="root">${renderService(language)}</div>`);
    if (html.includes('<!--service-seo-head-->') || !html.includes('<div id="root"><')) {
      throw new Error(`Service overview incomplete: ${page.path}`);
    }
    await mkdir(`dist${page.path}`, { recursive: true });
    await writeFile(`dist${page.path}index.html`, html);
    // Keep previously published URLs usable on static hosts. Prefer server-side
    // permanent redirects in production once hosting rules are available.
    for (const slug of ['manicure-pedicure', 'hair-coloring']) {
      const oldPath = `${page.path}${slug}/`;
      const target = origin + page.path;
      const redirect = `<!doctype html><html lang="${language}"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><title>Solo Beauty</title></head><body><a href="${target}">${page.heading}</a></body></html>`;
      await mkdir(`dist${oldPath}`, { recursive: true });
      await writeFile(`dist${oldPath}index.html`, redirect);
    }
  }
  const latinHtml = serviceTemplate
    .replace('<!--service-seo-head-->', () => latinSeoHead())
    .replace('<html lang="hy">', `<html lang="${latinPage.language}">`)
    .replace('<div id="root"></div>', () => `<div id="root">${renderLatin()}</div>`);
  if (latinHtml.includes('<!--service-seo-head-->') || !latinHtml.includes('<div id="root"><')) {
    throw new Error('Latin Armenian page template incomplete.');
  }
  await mkdir(`dist${latinPage.path}`, { recursive: true });
  await writeFile(`dist${latinPage.path}index.html`, latinHtml);
  await rm('dist/service.html');
  const urls = [...Object.values(pages).map((page) => origin + page.path), origin + latinPage.path, ...Object.values(serviceOverviews).map((page) => origin + page.path)];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);
} finally {
  await rm('dist-ssr', { recursive: true, force: true });
}
