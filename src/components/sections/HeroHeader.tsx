"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Calendar, Github, Linkedin, BookOpen, Code, FileText } from 'lucide-react';

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HeroHeader = () => {
  const [contributionGrid, setContributionGrid] = React.useState<number[][]>([]);

  React.useEffect(() => {
    const grid = Array.from({ length: 52 }, () =>
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    );
    setContributionGrid(grid);
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#ebedf0]';
      case 1: return 'bg-[#d1d5db]';
      case 2: return 'bg-[#9ca3af]';
      case 3: return 'bg-[#6b7280]';
      case 4: return 'bg-[#374151]';
      default: return 'bg-[#ebedf0]';
    }
  };

  return (
    <div className="w-full">
      <div className="relative z-50 bg-background">
        <div className="relative p-3">
          <div className="w-full h-[60px] sm:h-[140px] dot-grid"></div>
        </div>
        <div className="dashed-separator"></div>
      </div>

      <div className="relative z-50 bg-background">
        <div className="relative p-3">
          <div className="flex items-stretch justify-between relative">
            <div className="flex items-end gap-3">
              <div>
                <div className="border border-border rounded-[12px] p-[4px] cursor-pointer hover:brightness-90 transition duration-300 bg-white">
                  <Image
                    alt="Profile"
                    width={90}
                    height={90}
                    className="rounded-[8px] select-none object-cover"
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_1.png"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-end h-full py-1 select-none">
                <div>
                  <h1 className="text-[1.55rem] font-bold leading-[1.08] text-title relative inline-block">
                    Kevin Valencia
                  </h1>
                  <div className="mt-1">
                    <span className="text-muted-foreground text-sm">Software Engineer @ Clover | CS @ Queen's University</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="dashed-separator"></div>
      </div>

      <div className="relative">
        <div className="relative p-3">
          <div className="flex flex-col gap-4 mt-2">
            <p className="text-[0.875rem] leading-[1.6]">
              Hey, I&apos;m Kevin, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.
            </p>
            <p className="text-[0.875rem] leading-[1.6]">
              Tech stack isn&apos;t my concern, I&apos;m flexible with whatever the project needs, though I prefer modern frameworks and tools. I&apos;m always open for new opportunities to learn and grow.
            </p>
          </div>

          <div className="flex pt-6 gap-2 select-none">
            <a
              className="w-fit flex items-center bg-[#404040] hover:bg-[#262626] transition-colors duration-300 gap-1.5 px-3 py-2 text-white text-sm font-medium cursor-pointer rounded-[9px] group overflow-hidden"
              href="https://cal.com/kevinvalencia"
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <Calendar className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <Calendar className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              Book an intro call
            </a>

            <a
              className="w-fit flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] hover:brightness-[0.97] transition-colors duration-300 text-sm text-foreground font-medium border border-border cursor-pointer rounded-[9px] group overflow-hidden"
              href="mailto:kevinvalencia@gmail.com"
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <Mail className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <Mail className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              Send an email
            </a>

            <a
              className="w-fit flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] hover:brightness-[0.97] transition-colors duration-300 text-sm text-foreground font-medium border border-border cursor-pointer rounded-[9px] group overflow-hidden"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <FileText className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <FileText className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              View resume
            </a>
          </div>

          <div className="py-8 flex flex-col gap-3">
            <h2 className="text-sm font-medium text-foreground">
              Here are my <span className="font-semibold text-black">socials</span>
            </h2>
            <div className="flex gap-2 items-center flex-wrap">
              <SocialLink href="https://github.com/kevinvalenciaa" icon={<Github size={14} />} label="GitHub" />
              <SocialLink href="https://x.com/kkevinvalencia" icon={<XIcon size={14} />} label="X" />
              <SocialLink href="https://www.linkedin.com/in/kevin-valenciaa/" icon={<Linkedin size={14} />} label="LinkedIn" />
              <SocialLink href="https://substack.com/@kevinvalencia" icon={<BookOpen size={14} />} label="Substack" />
              <SocialLink href="https://leetcode.com/u/kvalencia06/" icon={<Code size={14} />} label="LeetCode" />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center select-none">
            <div className="w-full overflow-hidden border border-border rounded-lg p-4 bg-white">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-muted-foreground flex gap-4">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </span>
              </div>
              <div className="flex gap-[3px]">
                {contributionGrid.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((level, dayIdx) => (
                      <div
                        key={`${weekIdx}-${dayIdx}`}
                        className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(level)} hover:opacity-80 transition-opacity duration-300`}
                        title={`${level} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-[11px] text-muted-foreground">1,562 activities in 2025</span>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#ebedf0]"></div>
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#d1d5db]"></div>
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#9ca3af]"></div>
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#6b7280]"></div>
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#374151]"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashed-separator mt-6"></div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="flex items-center px-2 py-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors duration-200 select-none rounded-[6px] text-sm font-medium text-foreground"
  >
    <span className="flex items-center">{icon}</span>
    <span className="ml-1.5">{label}</span>
  </a>
);

export default HeroHeader;
