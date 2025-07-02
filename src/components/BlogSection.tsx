'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedWave from './AnimatedWave';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  created_at: string;
  publisher_name: string;
  category_name: string;
}

interface PaginatedResponse {
  current_page: number;
  data: BlogPost[];
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://admin.geniunai.com/api/blogs?page=${currentPage}`)
      .then(res => res.json())
      .then((data: PaginatedResponse) => {
        setBlogs(data.data);
        setLastPage(data.last_page);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <section id="blog" className="relative py-28 bg-gradient-to-br from-[#f0f4f8] to-[#e6eef5] text-gray-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-0">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Latest from Our Blog</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-10 rounded-full"></div>

        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Discover insights, trends, and technology updates from the world of AI, ethics, and media verification.
        </p>

        {loading ? (
          <p className="text-center text-gray-500">Loading blog posts...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts available at the moment.</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
             <motion.div
  key={post.id}
  whileHover={{ scale: 1.03 }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="bg-white/80 backdrop-blur-lg border border-blue-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
>
  <Image
    src={`https://admin.geniunai.com/storage/${post.image}`}
    alt={post.title}
    width={600}
    height={300}
    className="w-full h-48 object-cover rounded-t-xl"
  />
  <div className="p-6">
    <p className="text-xs text-gray-500 mb-1">
      {new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Toronto',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(post.created_at))}
    </p>
    <h3
      className="text-lg font-semibold mb-2 text-ellipsis overflow-hidden whitespace-nowrap"
      title={post.title}
    >
      {post.title}
    </h3>
    <p className="text-sm text-gray-700 mb-4">By {post.publisher_name}</p>

    {/* ✅ Updated Blog Detail Link */}
    <a
      href={`/blog-detail?slug=${post.slug}`}
      className="text-blue-600 font-medium hover:underline"
    >
      Read More →
    </a>
  </div>
</motion.div>

            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-700">Page {currentPage} of {lastPage}</span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, lastPage))}
            disabled={currentPage === lastPage}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <AnimatedWave />
      </div>
    </section>
  );
}
