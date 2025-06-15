import React from "react";

export default function MotivationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Why I Write These Blogs</h1>

      <div className="prose prose-lg">
        <p className="mb-6">
          As a passionate developer, I believe in the power of sharing knowledge
          and experiences. This blog serves as my platform to document my
          journey, share insights, and help others navigate the ever-evolving
          world of technology. It acts as a knowledge base for myself and for
          others who are trying to learn.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">My Motivation</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Knowledge Sharing:</strong> I write to share my experiences
            and learnings with the community, hoping to make someone else&apos;s
            development journey a bit easier. AI can generate code easily, but
            understanding the fundamentals that all these new technologies are
            built on is crucial.
          </li>
          <li>
            <strong>Documentation:</strong> These blogs serve as my personal
            documentation, helping me remember solutions to problems I&apos;ve
            encountered and how I solved them.
          </li>
          <li>
            <strong>Continuous Learning:</strong> Writing about technical
            concepts helps me deepen my understanding and stay updated with the
            latest technologies and best practices.
          </li>
        </ul>
      </div>
    </div>
  );
}
