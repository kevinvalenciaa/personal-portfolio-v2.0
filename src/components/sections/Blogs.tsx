import React from 'react';
import { Calendar, Eye, ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  views: string;
  tags: string[];
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "My GSoC Journey: The 2-Month Sprint from Doubt to Done",
    date: "Jun 2025",
    views: "336",
    tags: ["GSOC", "Open Source"],
    link: "#",
  },
  {
    title: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    date: "Feb 2025",
    views: "52",
    tags: ["Authentication", "TypeScript", "MongoDB"],
    link: "#",
  },
  {
    title: "Docker with Node.js & Express.js — Basics.",
    date: "Feb 2025",
    views: "20",
    tags: ["Docker", "Node.js", "Express.js"],
    link: "#",
  },
];

const BlogItem = ({ post }: { post: BlogPost }) => {
  return (
    <a 
      href={post.link}
      className="group block py-4 border-b border-border last:border-0 transition-all duration-300"
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <h3 className="text-[0.875rem] font-semibold text-title group-hover:text-foreground transition-colors duration-300">
            {post.title}
          </h3>
          <ArrowUpRight className="size-4 text-muted group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100" />
        </div>
        
        <div className="flex items-center gap-3 text-muted text-[0.75rem]">
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="size-3" />
            <span>{post.views}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 bg-muted text-foreground text-[10px] sm:text-[11px] font-medium rounded-[4px] border border-transparent group-hover:border-border transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const BlogsSection = () => {
  return (
    <section className="relative z-50 bg-background">
      <div className="container py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.125rem] font-semibold text-title">Blogs</h2>
          </div>
          
          <div className="flex flex-col">
            {blogPosts.map((post, index) => (
              <BlogItem key={index} post={post} />
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#404040] hover:bg-[#262626] text-white text-[13px] font-medium rounded-[9px] transition-colors duration-300 group">
              View All
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-border"></div>
    </section>
  );
};

export default BlogsSection;