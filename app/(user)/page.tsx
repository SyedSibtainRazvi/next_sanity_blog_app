import { groq } from "next-sanity";
import BlogLists from "../components/BlogLists";
import { client } from "../../sanity/lib/client";

const query = groq`
*[_type == "post"] | order(publishedAt desc) {
  ...,
  author->
}`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <BlogLists posts={posts} />
    </main>
  );
}
