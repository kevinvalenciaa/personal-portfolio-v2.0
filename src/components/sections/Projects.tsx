import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  status: 'Building' | 'Live' | 'Stealth';
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Quillio',
    description: 'An AI journal that turns daily reflection into strategic insights for founders.',
    image: '/SCR-20260117-mosl.jpeg',
    status: 'Building',
    tag: 'Coming Soon',
    link: 'https://github.com/kevinvalenciaa/quillio',
  },
  {
    title: 'PostOpCare',
    description: 'Healthcare RAG system that delivers personalized post-surgery recovery guidance.',
    image: '/SCR-20260117-mpdy.png',
    status: 'Building',
    tag: 'Coming Soon',
    link: 'https://github.com/kevinvalenciaa/postopcare-ai',
  },
  {
    title: 'Keylia AI',
    description: 'An automated AI content creation platform for real estate agents.',
    image: '/SCR-20260117-mnzo.png',
    status: 'Live',
    tag: 'Home Feed',
    link: 'https://github.com/kevinvalenciaa/keylia-platform',
  },
  {
    title: 'Kairos',
    description: 'A GPU infrastructure research project currently in stealth.',
    image: '/SCR-20260117-mnlp.png',
    status: 'Stealth',
    tag: 'News Screen',
    link: '#',
  }
];

export default function Projects() {
  return (
    <section className="relative z-50 bg-background">
      <div className="relative p-3">
        <h2 className="text-[1.125rem] font-semibold leading-[1.5] text-title select-none">What I'm building.</h2>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative p-3 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[1.6/1] w-full overflow-hidden border border-border rounded-[9px] bg-muted mb-3 group cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-1 px-0.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[0.9375rem] font-semibold text-title leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Live' ? 'bg-[#22c55e]' : project.status === 'Stealth' ? 'bg-[#000000]' : 'bg-[#ef4444]'
                      }`}
                    />
                    <span className="text-[12px] font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-[0.875rem] text-muted-foreground leading-[1.5] line-clamp-2">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 mt-1 text-[0.8125rem] font-medium text-muted-foreground hover:text-foreground transition-colors group/link w-fit"
                >
                  View Project <ArrowUpRight className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative p-3">
        <div className="flex justify-center py-2">
          <a href="https://github.com/kevinvalenciaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#404040] hover:bg-[#262626] text-white text-[13px] font-medium rounded-[9px] transition-colors duration-300 group">
            View All
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
      <div className="dashed-separator"></div>
    </section>
  );
}