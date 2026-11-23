import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MenuProvider } from "@/components/MenuContext";
import { NavProgress } from "@/components/NavProgress";
import { Shell } from "@/components/Shell";
import { SiteMenu } from "@/components/SiteMenu";
import { AltitudeRail } from "@/components/AltitudeRail";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Analytics, GtmNoScript } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph } from "@/lib/schema";
import { site } from "@/content/site";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], axes: ["opsz"], style: ["normal", "italic"], variable: "--font-source-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: { default: site.name, template: `%s | ${site.shortName}` },
  description: site.description,
  formatDetection: { telephone: false },
  other: { "geo.region": "US-CA", "geo.placename": "Carlsbad", "geo.position": `${site.geo.lat};${site.geo.lng}`, ICBM: `${site.geo.lat}, ${site.geo.lng}` },
};

export const viewport: Viewport = {
  themeColor: "#edf1f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <GtmNoScript />
        <MenuProvider>
          <NavProgress />
          <SiteMenu />
          <Shell>
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <div className="h-[4.5rem] sm:hidden" aria-hidden />
          </Shell>
          <MobileBar />
          <AltitudeRail />
        </MenuProvider>
        <JsonLd data={siteGraph()} />
        <Analytics />
      </body>
    </html>
  );
}
