import Image, { type ImageProps } from "next/image";
import dims from "@/content/image-dims.json";

type Props = Omit<ImageProps, "width" | "height" | "src"> & { src: string; fill?: boolean };

/** next/image with intrinsic dimensions looked up from the generated image-dims.json. */
export function Pic({ src, alt, fill, sizes, ...rest }: Props) {
  if (fill) return <Image src={src} alt={alt} fill sizes={sizes ?? "100vw"} {...rest} />;
  const d = (dims as Record<string, number[]>)[src];
  if (!d) throw new Error(`Missing image dimensions for ${src}`);
  return <Image src={src} alt={alt} width={d[0]} height={d[1]} sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"} {...rest} />;
}
