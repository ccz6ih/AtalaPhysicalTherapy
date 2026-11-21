import { cacheLife } from "next/cache";

/** Copyright year — cached at build and refreshed daily. */
export async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
