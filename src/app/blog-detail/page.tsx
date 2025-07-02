"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  created_at: string;
  publisher_name: string;
  content: string;
}

export default function BlogDetailPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`https://admin.geniunai.com/api/blogs/${slug}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          setBlog(data);
          setLoading(false);
        });
    }
  }, [slug]);

  if (!slug) return <p className="text-center py-20">Missing blog slug.</p>;
  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!blog) return <p className="text-center py-20 text-red-500">Blog not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.created_at} · {blog.publisher_name}</p>
      <img src={`https://admin.geniunai.com/storage/${blog.image}`} alt={blog.title} className="mb-6 rounded" />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
