import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  status: 'Building' | 'Live';
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Lunel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos, itaque.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/bg1-12.avif',
    status: 'Building',
    tag: 'Coming Soon',
    link: '#',
  },
  {
    title: 'Asap',
    description: 'Record studio-quality remote audio and video, locally captured without quality loss.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/bg2-13.jpg',
    status: 'Building',
    tag: 'Coming Soon',
    link: '#',
  },
  {
    title: 'Cuez',
    description: 'A social platform where developers share projects, ideas, and grow together.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/bg3-14.avif',
    status: 'Live',
    tag: 'Home Feed',
    link: '#',
  },
  {
    title: 'The Daily Crimes',
    description: 'A crime news website presenting cases through a clean, newspaper-style interface.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/bg4-15.png',
    status: 'Live',
    tag: 'News Screen',
    link: '#',
  }
];

export default function Projects() {
  return (
    <section className="relative z-50 bg-background pt-4.5 pb-6">
      <div className="container">
        <h2 className="text-[1.125rem] font-semibold leading-[1.5] text-title mb-4.5">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[1.6/1] w-full overflow-hidden border border-border rounded-[9px] bg-muted mb-3 group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="text-[11px] text-muted-foreground bg-background/80 backdrop-blur-sm px-1.5 py-0.5 rounded-sm border border-border/50">
                    {project.tag}
                  </span>
                </div>
                {index === 0 && (
                   <div className="absolute top-2 right-2 z-10 flex items-center justify-center p-1 bg-background/80 rounded-full border border-border/50">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </div>
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-1 px-0.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[0.875rem] font-semibold text-title leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Live' ? 'bg-[#22c55e]' : 'bg-[#ef4444]'
                      }`}
                    />
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-[0.8125rem] text-muted-foreground leading-[1.5] line-clamp-2">
                  {project.description}
                </p>

                <a 
                  href={project.link} 
                  className="flex items-center gap-1 mt-1 text-[0.75rem] font-medium text-muted-foreground hover:text-foreground transition-colors group/link w-fit"
                >
                  View Project <ArrowUpRight className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#404040] hover:bg-[#262626] transition-colors duration-300 text-sm font-medium text-white rounded-[9px] group"
          >
            View All <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="w-full h-px bg-border mt-8"></div>
    </section>
  );
}