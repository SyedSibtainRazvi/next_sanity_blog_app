import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { Post, Category } from "@/typings";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../../sanity/lib/image";
import { client } from "../../../../sanity/lib/client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Blog = async ({ params }: Props) => {
  const { slug } = await params;

  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }`;

  const post = await client.fetch<Post>(query, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
        {post.title}
      </h1>

      {post.author && (
        <div className="flex items-center space-x-4 mb-12">
          {post.author.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 dark:text-white">
              {post.author.name}
            </span>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{Math.ceil(post.body.length / 1000)} min read</span>
            </div>
          </div>
        </div>
      )}

      {post.mainImage && (
        <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {post.categories.map((category: Category) => (
            <span
              key={category._id}
              className="bg-gray-50 dark:bg-gray-800 px-4 py-1.5 rounded-full text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {category.title}
            </span>
          ))}
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none prose-lg">
        <PortableText
          value={post.body}
          components={{
            block: {
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-12 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mt-8 mb-4">{children}</h3>
              ),
              normal: ({ children }) => (
                <p className="text-base leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  {children}
                </p>
              ),
              bullet: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                  {children}
                </ul>
              ),
              number: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                  {children}
                </ol>
              ),
            },
          }}
        />
      </div>
    </article>
  );
};

export default Blog;
