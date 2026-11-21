import { PostPage, postMeta } from "@/components/PostPage";

const slug = "7-hidden-benefits-of-physical-therapy-a-carlsbad-guide-to-better-living";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
