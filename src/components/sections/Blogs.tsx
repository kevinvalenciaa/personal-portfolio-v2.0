import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  claps: string;
  tags: string[];
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "My GSoC Journey: The 2-Month Sprint from Doubt to Done",
    date: "Jun 2025",
    claps: "336",
    tags: ["GSOC", "Open Source"],
    link: "#",
  },
  {
    title: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    date: "Feb 2025",
    claps: "52",
    tags: ["Authentication", "TypeScript", "MongoDB"],
    link: "#",
  },
  {
    title: "Docker with Node.js & Express.js — Basics.",
    date: "Feb 2025",
    claps: "20",
    tags: ["Docker", "Node.js", "Express.js"],
    link: "#",
  },
];

const BlogItem = ({ post, isLast }: { post: BlogPost; isLast: boolean }) => {
  return (
    <a
      href={post.link}
      className={`group block py-4 lg:py-5 transition-all duration-300 ${!isLast ? "dashed-border-bottom" : ""}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1rem] font-bold text-title group-hover:text-foreground transition-colors duration-300 leading-snug">
            {post.title}
          </h3>
          <ArrowUpRight className="size-5 text-muted-foreground/70 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-muted-foreground text-[0.85rem]">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              <span className="font-medium">{post.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-transparent border border-muted-foreground/30 text-muted-foreground text-[0.75rem] font-medium rounded-[6px] group-hover:border-foreground/50 group-hover:text-foreground transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const BlogsSection = () => {
  return (
    <section className="relative z-50 bg-background">
      <div className="dashed-separator"></div>
      <div className="relative p-3">
        <h2 className="text-lg font-semibold text-title select-none">Blogs</h2>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative px-4 md:px-5">
        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} post={post} isLast={index === blogPosts.length - 1} />
          ))}
        </div>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative p-3">
        <div className="flex justify-center py-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#404040] hover:bg-[#262626] text-white text-[13px] font-medium rounded-[9px] transition-colors duration-300 group">
            View All
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
      <div className="dashed-separator"></div>
    </section>
  );
};

export default BlogsSection;