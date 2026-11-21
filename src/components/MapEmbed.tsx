import { site } from "@/content/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg bg-fog-2 ${className}`}>
      <iframe
        title="Map to Atala Physical Therapy, 3222 Grey Hawk Court, Carlsbad"
        src={site.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full min-h-[320px] w-full border-0 grayscale-[35%]"
      />
    </div>
  );
}
