import { ImageResponse } from "next/og";
import { cacheLife } from "next/cache";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Branded share image (Open Graph / social card) used by every route's
 * opengraph-image.tsx. 1200×630: marine panel with the logo, page title and
 * a ridge line on the left, the page's photo on the right.
 */

export const OG_SIZE = { width: 1200, height: 630 };
const PHOTO_W = 520;

const root = /*turbopackIgnore: true*/ process.cwd();
const asset = (p: string) => readFile(join(/*turbopackIgnore: true*/ root, p));

async function photoDataUri(src?: string) {
  if (!src) return null;
  try {
    const buf = await asset(join("public", src));
    try {
      const sharp = (await import("sharp")).default;
      const out = await sharp(buf).resize(PHOTO_W, OG_SIZE.height, { fit: "cover", position: "attention" }).jpeg({ quality: 82 }).toBuffer();
      return `data:image/jpeg;base64,${out.toString("base64")}`;
    } catch {
      const type = src.endsWith(".png") ? "png" : "jpeg";
      return `data:image/${type};base64,${buf.toString("base64")}`;
    }
  } catch {
    return null;
  }
}

type OgArgs = { title: string; sub?: string; image?: string };

/** Returns the JPEG for a route. Rendering is cached so each image is drawn once, not per request. */
export async function og(args: OgArgs) {
  const jpg = await renderJpeg(args);
  return new Response(jpg as BodyInit, { headers: { "content-type": "image/jpeg", "cache-control": "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400" } });
}

async function renderJpeg(args: OgArgs): Promise<Uint8Array> {
  "use cache";
  cacheLife("max");
  const png = Buffer.from(await (await draw(args)).arrayBuffer());
  // JPEG keeps cards well under WhatsApp's ~300 KB preview limit.
  const sharp = (await import("sharp")).default;
  return new Uint8Array(await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toBuffer());
}

async function draw({ title, sub, image }: OgArgs) {
  const [display, displayBold, serif, logo, photo] = await Promise.all([
    asset("src/assets/og/archivo-latin-500-normal.woff"),
    asset("src/assets/og/archivo-latin-800-normal.woff"),
    asset("src/assets/og/source-serif-4-latin-400-normal.woff"),
    asset("public/brand/atala-logo-white.svg"),
    photoDataUri(image),
  ]);
  const logoUri = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const textW = photo ? OG_SIZE.width - PHOTO_W - 40 : 980;
  const size = title.length > 44 ? 50 : title.length > 22 ? 60 : 74;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#1E2B31", fontFamily: "Archivo" }}>
        {photo && (
          <div style={{ position: "absolute", top: 0, right: 0, width: PHOTO_W, height: OG_SIZE.height, display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} width={PHOTO_W} height={OG_SIZE.height} alt="" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: PHOTO_W, height: OG_SIZE.height, display: "flex", backgroundImage: "linear-gradient(90deg, rgba(30,43,49,1) 0%, rgba(30,43,49,0.6) 22%, rgba(30,43,49,0) 55%)" }} />
          </div>
        )}

        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", top: 0, left: 0 }}>
          <path d="M0 604 C140 600 220 592 300 590 S420 596 480 586 S600 556 660 560 S750 512 800 518 S900 560 960 552 S1100 530 1200 540 L1200 630 L0 630 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0 604 C140 600 220 592 300 590 S420 596 480 586 S600 556 660 560 S750 512 800 518 S900 560 960 552 S1100 530 1200 540" fill="none" stroke="#B5262B" strokeWidth="4" />
          <circle cx="800" cy="518" r="10" fill="#B5262B" stroke="#1E2B31" strokeWidth="4" />
        </svg>

        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "56px 64px", width: textW + 64, height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUri} width={128} height={102} alt="" />
          <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
            <div style={{ fontSize: size, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: "#FFFFFF", display: "flex" }}>{title}</div>
            {sub && <div style={{ fontFamily: "Source Serif", fontSize: 27, lineHeight: 1.3, color: "rgba(255,255,255,0.78)", marginTop: 22, display: "flex" }}>{sub}</div>}
          </div>
          <div style={{ display: "flex", marginTop: "auto", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.72)" }}>atalaphysicaltherapy.com</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Archivo", data: display, weight: 500, style: "normal" },
        { name: "Archivo", data: displayBold, weight: 800, style: "normal" },
        { name: "Source Serif", data: serif, weight: 400, style: "normal" },
      ],
    },
  );
}
