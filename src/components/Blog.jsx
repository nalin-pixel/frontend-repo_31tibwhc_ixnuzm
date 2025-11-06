import React from 'react';

const posts = [
  {
    title: 'Designing with Pastels for Fintech',
    excerpt: 'How soft color palettes can build trust and reduce cognitive load in financial products.',
    date: 'Sep 28, 2025',
  },
  {
    title: 'From MVP to Monetization',
    excerpt: 'A pragmatic guide to shipping faster and pricing with clarity.',
    date: 'Sep 21, 2025',
  },
  {
    title: 'Authentication UX that Feels Effortless',
    excerpt: 'Patterns that balance security with simplicity for modern SaaS.',
    date: 'Sep 14, 2025',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Latest from the blog</h2>
        <p className="mt-2 text-slate-600">Product notes and design musings for builders.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="text-xs text-slate-500">{post.date}</div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{post.excerpt}</p>
            <a href="#" className="mt-3 inline-block text-sm font-medium text-indigo-700 hover:underline">Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
