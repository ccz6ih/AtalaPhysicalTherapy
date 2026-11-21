import { PostPage, postMeta } from "@/components/PostPage";

const slug = "understanding-modern-surgical-rehabilitation-a-carlsbad-patients-journey";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
