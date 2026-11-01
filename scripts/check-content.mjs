// Checks the built site, so the house rules are never broken by accident.
// It reads dist/ after "npm run build". Run with: npm run check
// If anything below fails, the GitHub Action stops and nothing is published.
//
// 1. Words: no em or en dashes, no semicolons, no phone numbers, no placeholders,
//    "design patent" only (never "design application", never "granted").
// 2. Links: every internal link and src points to a file that really exists in dist/,
//    with exactly the same upper and lower case (GitHub Pages is case-sensitive),
//    and every internal link is written from the site root ("/...").
// 3. Documents: every entry in src/data/documents.js has its page, image, thumbnail,
//    share image and file.
// 4. File names: nothing under public/ has a space or a capital letter.
// 5. Images: no image in dist/ is over 400 KB, and every <img> has alt text
//    (empty alt only on decorative images marked aria-hidden="true").
import fs from "node:fs";
import path from "node:path";
import { documents } from "../src/data/documents.js";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");
const SITE = "https://www.yashshah.co.in";
if (!fs.existsSync(dist)) {
  console.error('No dist/ folder. Run "npm run build" first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    out.push({ path: p, dir: e.isDirectory(), name: e.name });
    if (e.isDirectory()) walk(p, out);
  }
  return out;
}
const distFiles = walk(dist);
const pages = distFiles.filter((f) => !f.dir && f.name.endsWith(".html")).map((f) => f.path);
const cssFiles = distFiles.filter((f) => !f.dir && f.name.endsWith(".css")).map((f) => f.path);
const problems = [];
const rel = (p) => path.relative(dist, p).split(path.sep).join("/");

// ---------------------------------------------------------------- 1. Words
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const visible = decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<svg[\s\S]*?<\/svg>/g, " ")
      .replace(/<[^>]+>/g, "\n"),
  );
  // Also check the page title, description, image alt text and captions.
  const attrs = [...html.matchAll(/(?:content|alt|aria-label|title|data-caption)="([^"]*)"/g)].map((m) => decode(m[1]));
  const lines = [...visible.split("\n"), ...attrs].map((l) => l.trim()).filter(Boolean);
  for (const line of lines) {
    const hit = (why) => problems.push(`${rel(file)}: ${why}: "${line.slice(0, 90)}"`);
    if (/https?:\/\//.test(line) && !/\s/.test(line)) continue; // a bare URL in an attribute
    if (/^\d+; url=/.test(line)) continue; // the redirect instruction on old pages
    if (/[—–]/.test(line)) hit("em or en dash");
    if (/;/.test(line)) hit("semicolon");
    if (/\+91|\b\d{5}\s?\d{5}\b/.test(line)) hit("looks like a phone number");
    if (/lorem ipsum|placeholder|\bTODO\b|\bTBD\b|example\.com/i.test(line)) hit("placeholder text");
    if (/design applications?/i.test(line)) hit('"design application" (say "design patents filed with the Indian Patent Office, under examination")');
    if (/\bgranted\b/i.test(line)) hit('the word "granted" (a design patent is filed and under examination, never granted)');
    // The issuing office's official name is the only other place "Patents" may appear.
    const withoutOffice = line.replace(/Controller General of Patents, Designs and Trade Marks/g, "");
    if (/(?<!design )\bpatents?\b(?! office)/i.test(withoutOffice)) hit('"patent" without "design" (say "design patent")');
    if (/Space Applications Centre/i.test(line)) hit("Space Applications Centre is not named on the site");
    if (/waitlist/i.test(line)) hit("never mention a waitlist");
    if (/\binterview round/i.test(line)) hit("never mention an interview round");
  }
}

// ---------------------------------------------------------------- 2. Links
// Does this exact path exist, with exactly this case? (Windows would say yes to the wrong case.)
const listing = new Map();
function existsExact(abs) {
  const parts = path.relative(dist, abs).split(path.sep).filter(Boolean);
  let cur = dist;
  for (const part of parts) {
    if (!listing.has(cur)) listing.set(cur, fs.existsSync(cur) && fs.statSync(cur).isDirectory() ? fs.readdirSync(cur) : []);
    if (!listing.get(cur).includes(part)) return false;
    cur = path.join(cur, part);
  }
  return true;
}
// How GitHub Pages answers a path: the file itself, <path>.html, or <path>/index.html.
function resolves(urlPath) {
  let p;
  try { p = decodeURIComponent(urlPath); } catch { return false; }
  const abs = path.join(dist, p);
  if (p.endsWith("/")) return existsExact(path.join(abs, "index.html"));
  if (existsExact(abs) && fs.statSync(abs).isFile()) return true;
  if (existsExact(abs + ".html")) return true;
  return existsExact(path.join(abs, "index.html"));
}
function checkUrl(raw, from, kind) {
  const url = decode(raw.trim());
  if (!url || url.startsWith("#") || /^(mailto:|tel:|data:|javascript:)/i.test(url)) return;
  let p;
  if (url.startsWith(SITE + "/") || url === SITE) p = url.slice(SITE.length) || "/";
  else if (/^[a-z]+:\/\//i.test(url) || url.startsWith("//")) return; // another website
  else if (url.startsWith("/")) p = url;
  else {
    problems.push(`${rel(from)}: ${kind} is not written from the site root: "${url}"`);
    return;
  }
  p = p.split("#")[0].split("?")[0] || "/";
  if (!resolves(p)) problems.push(`${rel(from)}: ${kind} points to a missing file (check the exact case): "${url}"`);
}
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(/\s(href|src|poster|data-full)="([^"]*)"/g)) checkUrl(m[2], file, m[1]);
  for (const m of html.matchAll(/\ssrcset="([^"]*)"/g)) for (const part of m[1].split(",")) checkUrl(part.trim().split(/\s+/)[0], file, "srcset");
  for (const m of html.matchAll(/<meta[^>]+(?:property|name)="(?:og:image|twitter:image|og:url)"[^>]*content="([^"]*)"/g)) checkUrl(m[1], file, "share meta");
  for (const m of html.matchAll(/<meta http-equiv="refresh" content="\d+; url=([^"]*)"/g)) checkUrl(m[1], file, "redirect");
  for (const m of html.matchAll(/\scontent="(\d+; url=[^"]*)"/g)) checkUrl(m[1].replace(/^\d+; url=/, ""), file, "redirect");
}
for (const file of cssFiles) {
  const css = fs.readFileSync(file, "utf8");
  for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) checkUrl(m[1], file, "css url");
}

// ---------------------------------------------------------------- 3. Documents
const slugRule = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const seen = new Set();
for (const d of documents) {
  if (!slugRule.test(d.slug)) problems.push(`documents.js: slug "${d.slug}" must use only lowercase letters, digits and single hyphens`);
  if (seen.has(d.slug)) problems.push(`documents.js: slug "${d.slug}" is used twice`);
  seen.add(d.slug);
  if (!existsExact(path.join(dist, "certificates", `${d.slug}.html`))) problems.push(`documents.js: "${d.slug}" has no page at /certificates/${d.slug}`);
  for (const key of ["image", "thumb", "thumbSmall", "share", "file"]) {
    if (!d[key] || !existsExact(path.join(dist, d[key]))) problems.push(`documents.js: "${d.slug}" is missing its ${key === "file" ? (d.photo ? "photo file" : "PDF") : key} (${d[key]})`);
  }
  for (const key of ["title", "shortTitle", "issuer", "description", "type"]) {
    if (!d[key]) problems.push(`documents.js: "${d.slug}" has no ${key}`);
  }
  if (d.verify && !/^https:\/\//.test(d.verify)) problems.push(`documents.js: "${d.slug}" verify link must start with https://`);
}

// ---------------------------------------------------------------- 4. File names under public/
for (const f of walk(publicDir)) {
  const r = path.relative(publicDir, f.path).split(path.sep).join("/");
  if (/\s/.test(f.name)) problems.push(`public/${r}: file or folder name has a space`);
  if (/[A-Z]/.test(f.name) && f.name !== "CNAME") problems.push(`public/${r}: file or folder name has a capital letter (GitHub Pages is case-sensitive)`);
}

// ---------------------------------------------------------------- 5. Images
const LIMIT = 400 * 1024;
for (const f of distFiles) {
  if (f.dir || !/\.(png|jpe?g|webp|gif|avif|svg)$/i.test(f.name)) continue;
  const size = fs.statSync(f.path).size;
  if (size > LIMIT) problems.push(`${rel(f.path)}: image is ${Math.round(size / 1024)} KB, over the 400 KB limit`);
}
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const alt = tag.match(/\salt="([^"]*)"/);
    if (!alt) problems.push(`${rel(file)}: <img> without alt text: ${tag.slice(0, 120)}`);
    else if (!alt[1].trim() && !/aria-hidden="true"|role="presentation"/.test(tag)) problems.push(`${rel(file)}: <img> with empty alt that is not marked decorative (aria-hidden="true"): ${tag.slice(0, 120)}`);
  }
}

if (problems.length) {
  console.error(`Check failed with ${new Set(problems).size} problem(s):\n` + [...new Set(problems)].map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log(`Check passed: ${pages.length} pages, ${documents.length} documents, every internal link and image found with the exact case, no image over 400 KB, every image has alt text.`);
