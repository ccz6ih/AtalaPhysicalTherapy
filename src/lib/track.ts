type DL = { push: (o: Record<string, unknown>) => void };

/** Push a GA4-style event to the dataLayer (GTM + gtag both read it). */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: DL };
  w.dataLayer = w.dataLayer || ([] as unknown as DL);
  w.dataLayer.push({ event, ...params });
}
