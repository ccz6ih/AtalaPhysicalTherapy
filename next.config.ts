import type { NextConfig } from "next";

/**
 * URL notes
 * - trailingSlash keeps every WordPress URL identical (e.g. /our-team/), so no ranking is lost.
 * - Images live at their original /wp-content/uploads/... paths for the same reason.
 * - Redirects below cover WordPress-only URLs that no longer exist.
 */
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      // Test / plugin pages from WordPress
      { source: "/intake-testing", destination: "/online-patient-form/", permanent: true },
      { source: "/intake-test-2", destination: "/online-patient-form/", permanent: true },
      { source: "/intake-patient-form", destination: "/online-patient-form/", permanent: true },
      { source: "/browse-submissions", destination: "/online-patient-form/", permanent: true },
      { source: "/submission-confirmed", destination: "/contact-us/", permanent: true },
      { source: "/privacy-policy-2", destination: "/privacy-policy/", permanent: true },
      { source: "/therapy-quiz-2", destination: "/therapy-quiz/", permanent: true },
      // Blog taxonomy / archives
      { source: "/category/:slug*", destination: "/resources/", permanent: true },
      { source: "/tag/:slug*", destination: "/resources/", permanent: true },
      { source: "/author/:slug*", destination: "/resources/", permanent: true },
      { source: "/blog", destination: "/resources/", permanent: true },
      { source: "/feed", destination: "/resources/", permanent: true },
      { source: "/:slug/feed", destination: "/:slug/", permanent: true },
      { source: "/:slug/amp", destination: "/:slug/", permanent: true },
      { source: "/page/:n", destination: "/resources/", permanent: true },
      // WordPress system URLs
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/local-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
      // Old nav aliases that are easy to guess
      { source: "/about", destination: "/our-team/", permanent: true },
      { source: "/about-us", destination: "/our-team/", permanent: true },
      { source: "/team", destination: "/our-team/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/insurance", destination: "/client-information/", permanent: true },
      { source: "/new-patients", destination: "/client-information/", permanent: true },
      { source: "/self-pay", destination: "/self-pay-physical-therapy/", permanent: true },
      { source: "/cash-based-physical-therapy", destination: "/self-pay-physical-therapy/", permanent: true },
      { source: "/make-a-payment", destination: "https://payv3.xpress-pay.com/pt/5063eb5c75fc11ef969b005056b805a0", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/wp-content/uploads/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
};

export default nextConfig;
