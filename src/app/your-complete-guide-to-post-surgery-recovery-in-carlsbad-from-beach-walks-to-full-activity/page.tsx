import { PostPage, postMeta } from "@/components/PostPage";

const slug = "your-complete-guide-to-post-surgery-recovery-in-carlsbad-from-beach-walks-to-full-activity";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
