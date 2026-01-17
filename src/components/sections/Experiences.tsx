"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="relative p-3">
        <h2 className="text-lg font-semibold text-title select-none">Experiences</h2>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative p-3">
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <div key={exp.id} className={experiences.indexOf(exp) < experiences.length - 1 ? "dashed-border-bottom" : ""}>
              <button
                onClick={() => toggleAccordion(exp.id)}
                className="w-full flex items-start justify-between py-4 text-left group transition-colors duration-200"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-border overflow-hidden bg-background">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-bold text-title">{exp.company}</span>
                      {exp.isFullTime && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-[4px] bg-muted text-muted-foreground font-medium">
                          Full Time
                        </span>
                      )}
                    </div>
                    <span className="text-[14px] text-muted-foreground">{exp.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex flex-col items-end mr-2">
                    <span className="text-[13px] font-medium text-title">{exp.duration}</span>
                    <span className="text-[12px] text-muted-foreground">{exp.location}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-13 pr-4 pb-6">
                      <ul className="list-disc list-outside space-y-2 mb-6">
                        {exp.description?.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                            className="text-[13px] text-foreground leading-relaxed marker:text-muted-foreground pl-1"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      {exp.techStack && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex flex-wrap gap-1.5"
                        >
                          {exp.techStack.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: 0.25 + idx * 0.03 }}
                              className="text-[11px] px-2 py-0.5 rounded-[4px] border border-border bg-background text-foreground font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

export default Experiences;