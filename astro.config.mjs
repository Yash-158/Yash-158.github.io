// @ts-check
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Old page addresses from the previous site, kept alive so existing links still work.
const OLD_PAGES = ["/about", "/contact", "/experience", "/projects", "/certifications"];

// GitHub Pages quirk: when both "certificates.html" and a "certificates/" folder exist,
// a visit to /certificates can be redirected to /certificates/ and look for an index.html
// inside the folder. So for every page that shares its name with a folder, the build also
// writes that page as <folder>/index.html. Both addresses then show the same page.
const folderIndexes = {
  name: "folder-index-copies",
  hooks: {
    "astro:build:done": ({ dir }) => {
      const dist = fileURLToPath(dir);
      for (const entry of fs.readdirSync(dist)) {
        if (!entry.endsWith(".html")) continue;
        const folder = path.join(dist, entry.slice(0, -5));
        if (fs.existsSync(folder) && fs.statSync(folder).isDirectory() && !fs.existsSync(path.join(folder, "index.html"))) {
          fs.copyFileSync(path.join(dist, entry), path.join(folder, "index.html"));
        }
      }
    },
  },
};

export default defineConfig({
  site: "https://www.yashshah.co.in",
  // "file" builds /projects/coast-scan.html, so the old .html links keep working,
  // and GitHub Pages also serves the same page at /projects/coast-scan
  build: { format: "file" },
  trailingSlash: "never",
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !OLD_PAGES.some((p) => page.replace(/\.html$/, "").endsWith(p)) && !page.includes("404"),
    }),
    folderIndexes,
  ],
});
