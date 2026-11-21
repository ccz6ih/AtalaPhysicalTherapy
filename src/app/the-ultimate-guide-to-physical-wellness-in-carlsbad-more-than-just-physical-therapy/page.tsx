import { PostPage, postMeta } from "@/components/PostPage";

const slug = "the-ultimate-guide-to-physical-wellness-in-carlsbad-more-than-just-physical-therapy";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
