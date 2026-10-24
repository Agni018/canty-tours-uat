// Makes the photos the site actually serves. For every JPEG in public/assets it writes WebP
// copies at the widths below (never wider than the original) into public/assets/generated/,
// plus a tiny blurred preview, and lists them in src/generated/photos.json for the Photo
// component. File names carry a hash of the original, so a published copy never changes and
// can be cached for good (see public/sw.js).
//
// Runs before `npm run dev` and `npm run build`; run `npm run images` after adding a photo.
// The output is rebuilt from the JPEGs, so it isn't committed. Copies already made are kept.
import { createHash } from "node:crypto";
import {
  mkdir,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "public/assets");
const outDir = path.join(assets, "generated");
const manifestFile = path.join(root, "src/generated/photos.json");

/** Widths the layouts ask for: picker thumbnails up to the full-screen hero. */
const WIDTHS = [320, 480, 800, 1200, 1600];
const QUALITY = 72;
/** Kept as JPEG only: the link-preview image (see app/layout.tsx). */
const SKIP = new Set(["kerala-960.jpg"]);

async function* jpegs(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (file !== outDir) yield* jpegs(file);
    } else if (/\.jpe?g$/i.test(entry.name)) yield file;
  }
}

const exists = (file) =>
  stat(file).then(
    () => true,
    () => false,
  );

await mkdir(outDir, { recursive: true });
await mkdir(path.dirname(manifestFile), { recursive: true });

const manifest = {};
const keep = new Set();
let made = 0;

for await (const file of jpegs(assets)) {
  const source = path.relative(assets, file).split(path.sep).join("/");
  if (SKIP.has(source)) continue;
  const input = await readFile(file);
  const hash = createHash("sha1")
    .update(input)
    .update(`q${QUALITY}`)
    .digest("hex")
    .slice(0, 8);
  const { width, height } = await sharp(input).metadata();
  const widths = [
    ...new Set([
      ...WIDTHS.filter((w) => w < width),
      Math.min(width, WIDTHS.at(-1)),
    ]),
  ];
  const base = source.replace(/\.jpe?g$/i, "").replaceAll("/", "-");

  const variants = [];
  for (const w of widths) {
    const name = `${base}-${w}.${hash}.webp`;
    keep.add(name);
    const out = path.join(outDir, name);
    if (!(await exists(out))) {
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: QUALITY })
        .toFile(out);
      made++;
    }
    variants.push({ file: `generated/${name}`, w });
  }

  // 16px wide: shown blurred and stretched while the real photo loads (a few hundred bytes).
  const preview = await sharp(input)
    .resize({ width: 16 })
    .webp({ quality: 50 })
    .toBuffer();
  manifest[source] = {
    width,
    height,
    variants,
    placeholder: `data:image/webp;base64,${preview.toString("base64")}`,
  };
}

// Remove copies of photos that were changed or deleted.
for (const name of await readdir(outDir))
  if (!keep.has(name)) await rm(path.join(outDir, name));

await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `photos: ${Object.keys(manifest).length} originals, ${keep.size} WebP copies (${made} new)`,
);
