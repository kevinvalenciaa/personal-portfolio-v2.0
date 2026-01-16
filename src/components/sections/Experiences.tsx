"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, MoveUpRight } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  logo: string;
  duration: string;
  location: string;
  isFullTime?: boolean;
  isOpenSource?: boolean;
  description?: string[];
  techStack?: string[];
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "WhyNot?",
    role: "Software Engineer",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_3.png",
    duration: "Aug, 2025 - Present",
    location: "Palo Alto, USA - Remote",
    isFullTime: true,
    description: [
      "Owned the core presentation editor, driving major performance and reliability improvements",
      "Designed and built core editor features like drag-and-drop, resize, and keyboard shortcuts end-to-end",
      "Owned a foundational refactor, strengthening a critical codebase to enable safer and faster production",
      "Drove major Drive page performance improvements, resolving bugs to deliver faster, reliable experiences",
    ],
    techStack: ["Next", "Tailwind", "TypeScript", "JavaScript", "Express", "PostgreSQL", "Docker"],
  },
  {
    id: "exp-2",
    company: "GSoC",
    role: "Full Stack Developer",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_4.png",
    duration: "May, 2025 - Nov, 2025",
    location: "USA - Remote",
    description: [
      "Contributed to large-scale open source infrastructure components.",
      "Implemented responsive UI dashboards for monitoring system health.",
    ],
    techStack: ["React", "Go", "Kubernetes"],
  },
  {
    id: "exp-3",
    company: "OWASP",
    role: "Open Source Contributor",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_5.png",
    duration: "Feb, 2025 - May, 2025",
    location: "USA - Remote",
    description: [
      "Developed security testing tools for web applications.",
      "Improved documentation for cross-site scripting mitigation strategies.",
    ],
    techStack: ["Python", "Security", "Markdown"],
  },
];

const Experiences = () => {
  const [openId, setOpenId] = useState<string | null>("exp-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative z-50 bg-background">
      <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative p-3">
        <h2 className="text-lg font-semibold text-title mb-4 select-none">Experiences</h2>
        
        <div className="flex flex-col border-t border-border">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-b border-border">
              <button
                onClick={() => toggleAccordion(exp.id)}
                className="w-full flex items-start justify-between py-4 text-left group transition-colors duration-200"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-border overflow-hidden bg-background">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-title">{exp.company}</span>
                      {exp.isFullTime && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-[4px] bg-muted text-muted-foreground font-medium">
                          Full Time
                        </span>
                      )}
                    </div>
                    <span className="text-[13px] text-muted-foreground">{exp.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex flex-col items-end mr-2">
                    <span className="text-[12px] font-medium text-title">{exp.duration}</span>
                    <span className="text-[11px] text-muted-foreground">{exp.location}</span>
                  </div>
                  {openId === exp.id ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === exp.id ? "max-height-[1000px] mb-6" : "max-h-0"
                }`}
                style={{ maxHeight: openId === exp.id ? "1000px" : "0px" }}
              >
                <div className="pl-13 pr-4">
                  <ul className="list-disc list-outside space-y-2 mb-6">
                    {exp.description?.map((item, idx) => (
                      <li key={idx} className="text-[13px] text-foreground leading-relaxed marker:text-muted-foreground pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-[4px] border border-border bg-background text-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-action-hover text-background text-sm font-medium rounded-[9px] transition-colors duration-300"
          >
            View All <MoveUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="w-full h-px bg-border mt-3"></div>
    </section>
  );
};

export default Experiences;