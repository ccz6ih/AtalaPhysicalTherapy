import { PostPage, postMeta } from "@/components/PostPage";

const slug = "physical-therapy-in-carlsbad-why-your-pain-needs-a-vacation-too";
export const metadata = postMeta(slug);

export default function Page() {
  return <PostPage slug={slug} />;
}
