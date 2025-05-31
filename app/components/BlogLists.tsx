import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import { Post } from "@/typings";

interface BlogListsProps {
  posts: Post[];
}

export default function BlogLists({ posts }: BlogListsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group block"
          >
            <article className="flex items-center space-x-4 md:space-x-6 p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-neutral-200/30 dark:hover:bg-gray-800/30 transition-colors">
              {post.mainImage && (
                <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 64px, 96px"
                    className="object-cover rounded"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                {post.author && (
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    {post.author.image && (
                      <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(post.author.image).url()}
                          alt={post.author.name}
                          fill
                          sizes="(max-width: 768px) 20px, 24px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span className="text-sm md:text-base">
                      {post.author.name}
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="hidden md:inline text-sm md:text-base">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
