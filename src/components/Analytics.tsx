import Script from "next/script";
import { site } from "@/content/site";
import { ClickTracking } from "./ClickTracking";

/**
 * Carries over the WordPress tracking stack:
 *  - Google Tag Manager containers (Elementor snippets)
 *  - Google tag (Site Kit: GA4 + Google Ads)
 * IDs can be overridden with NEXT_PUBLIC_GTM_IDS / NEXT_PUBLIC_GTAG_IDS (comma separated, empty string disables).
 */
export function Analytics() {
  const { gtmIds, gtagIds } = site.tracking;
  if (process.env.NEXT_PUBLIC_DISABLE_TRACKING === "1") return null;
  return (
    <>
      {gtmIds.map((id) => (
        <Script key={id} id={`gtm-${id}`} strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
        </Script>
      ))}
      {gtagIds.length > 0 && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}`} strategy="afterInteractive" />
          <Script id="gtag-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${gtagIds.map((id) => `gtag('config','${id}');`).join("")}`}
          </Script>
        </>
      )}
      <ClickTracking />
    </>
  );
}

export function GtmNoScript() {
  if (process.env.NEXT_PUBLIC_DISABLE_TRACKING === "1") return null;
  return (
    <>
      {site.tracking.gtmIds.map((id) => (
        <noscript key={id}>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${id}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      ))}
    </>
  );
}
