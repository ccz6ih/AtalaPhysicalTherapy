import { PostPage, postMeta } from "@/components/PostPage";

const slug = "5-game-changing-recovery-tips-for-carlsbad-athletes-from-surfing-to-marathon-training";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
