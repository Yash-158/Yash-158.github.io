// Reads the real width and height of a WebP file in public/ at build time,
// so every <img> gets correct width and height attributes and never looks stretched.
import fs from "node:fs";
import path from "node:path";

const cache = new Map();

export function imageSize(src) {
  if (!src) return { width: undefined, height: undefined };
  if (cache.has(src)) return cache.get(src);
  let size = { width: undefined, height: undefined };
  try {
    const b = fs.readFileSync(path.join(process.cwd(), "public", decodeURIComponent(src)));
    const chunk = b.toString("ascii", 12, 16);
    if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
      if (chunk === "VP8 ") size = { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
      else if (chunk === "VP8L") {
        const bits = b.readUInt32LE(21);
        size = { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
      } else if (chunk === "VP8X") size = { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
    }
  } catch {
    // Missing file: leave the size out. The link checker reports missing files.
  }
  cache.set(src, size);
  return size;
}
