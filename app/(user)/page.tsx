import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import BlogLists from "../components/BlogLists";

const query = groq`
*[_type == "post"]{
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
