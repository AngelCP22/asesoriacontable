import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const root = new URL('../dist/', import.meta.url);
const hashes = new Set();
let files = 0;
async function check(dir = '') {
  for (const entry of await readdir(new URL(dir, root), { withFileTypes: true })) {
    const name = dir + entry.name;
    assert(!/(^|\/)(sire-api|panel|descargas|clientes|\.git|\.env|node_modules)(\/|$|\.)/i.test(name), `Private path in build: ${name}`);
    if (entry.isDirectory()) { await check(name + '/'); continue; }
    assert(/\.(html|css|js|svg|png|jpe?g|webp|ico|woff2?|txt|xml|json)$/.test(name) || ['_headers', '_routes.json', '.nojekyll'].includes(name), `Unexpected public file: ${name}`);
    files++;
    if (!/\.(html|css|js|json|txt|xml)$/.test(name)) continue;
    const content = await readFile(new URL(name, root), 'utf8');
    assert(!/(SUNAT_(CLIENT_SECRET|PASSWORD)|BEGIN (RSA |OPENSSH )?PRIVATE KEY|127\.0\.0\.1:8765|localhost:8765|X-Panel-Session)/i.test(content), `Private content in build: ${name}`);
    if (name.endsWith('.html')) {
      assert(!/aún no operativa|integración pendiente|Estado de la conexión automática|Cuando cambie, cambia esta línea/i.test(content), `Internal development notice in public page: ${name}`);
      for (const script of content.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
        if (!/\bsrc=/.test(script[1])) hashes.add(`'sha256-${createHash('sha256').update(script[2]).digest('base64')}'`);
      }
      for (const link of content.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
        const target = link[1];
        if (target.startsWith('//')) continue;
        const local = target.endsWith('/') ? target.slice(1) + 'index.html' : target.slice(1);
        assert(!local.includes('..'), 'Traversal link');
        await readFile(new URL(local, root));
      }
    }
  }
}
await check();
for (const page of ['index.html','sire/index.html','terminos/index.html','privacidad/index.html','404.html']) await readFile(new URL(page, root));
assert.match(await readFile(new URL('404.html', root), 'utf8'), /noindex/);
const template = await readFile(new URL('../public/_headers', import.meta.url), 'utf8');
const headers = template.replace("script-src 'self';", `script-src 'self' ${[...hashes].join(' ')};`);
assert(headers.split('\n').every(line => line.length < 2000), 'Cloudflare header line too long');
await writeFile(new URL('_headers', root), headers);
console.log(`Public build verified: ${files} files; no private program paths; CSP hashes generated.`);
