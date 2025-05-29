import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";

interface BlogListsProps {
  posts: Post[];
}

export default function BlogLists({ posts }: BlogListsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/post/${post.slug.current}`}
            className="group"
          >
            <article className="border border-gray-400 dark:border-gray-700 rounded overflow-hidden bg-white dark:bg-gray-800/30 transition-all duration-300 hover:shadow-lg h-full">
              {post.mainImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                {post.author && (
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    {post.author.image && (
                      <div className="relative w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(post.author.image).url()}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span>{post.author.name}</span>
                    <span>•</span>
                    <span>
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
