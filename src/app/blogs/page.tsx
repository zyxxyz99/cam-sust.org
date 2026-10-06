"use client";

import React from "react";
import Link from "next/link";
import StarsBackground from "@/components/stars-background";

interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogs: BlogItem[] = [
  {
    id: "1",
    slug: "blog_1",
    title: "A Story Woven into the October Sky",
    category: "Observational Astronomy",
    excerpt:
      "One of the most wondrous traits of humankind is our imagination. As we celebrate Space Week, let's turn our eyes to the October night sky and see which constellations—and the ancient legendary stories woven around them—we can find above Bangladesh.",
    date: "06-10-2026",
    image: "/images/blogs/blog_1/thumbnail.webp",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 relative pt-24 overflow-hidden">
      <StarsBackground />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-5xl">
          {/* Page Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white text-center tracking-wider mb-12 uppercase">
            BLOGS
          </h1>

          {/* Blogs List */}
          <div className="space-y-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-2xl border border-red-900/60 hover:border-red-600/80 bg-black/60 backdrop-blur-sm p-4 md:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 overflow-hidden"
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
                >
                  {/* Left Thumbnail Image */}
                  <div className="w-full md:w-[45%] lg:w-[42%] shrink-0 overflow-hidden rounded-xl bg-[#01091e] border border-gray-800/60 aspect-[16/9] flex items-center justify-center">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-between flex-1 py-1 space-y-4">
                    <div className="space-y-2.5">
                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-500 group-hover:text-amber-400 transition-colors leading-tight">
                        {blog.title}
                      </h2>

                      {/* Category */}
                      <p className="text-red-400/90 text-sm md:text-base font-medium">
                        {blog.category}
                      </p>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Bottom Date (without comments section) */}
                    <div className="flex items-center justify-end pt-2 text-xs md:text-sm text-gray-400 font-medium">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
