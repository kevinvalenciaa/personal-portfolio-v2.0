import React from 'react';
import {
  Github,
  FileCode,
  Layers,
  Database,
  Wind,
  Zap,
  Box,
  Code2,
  Coffee,
  Cpu,
  Terminal,
  HardDrive,
  Share2,
  Layout,
  Monitor,
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'React', icon: <Zap className="size-3" /> },
  { name: 'Next', icon: <Zap className="size-3" /> },
  { name: 'Expo', icon: <Zap className="size-3" /> },
  { name: 'Django', icon: <Database className="size-3" /> },
  { name: 'Express', icon: <FileCode className="size-3" /> },
  { name: 'Node', icon: <Box className="size-3" /> },
  { name: 'Bun', icon: <Zap className="size-3" /> },
  { name: 'PostgreSQL', icon: <Database className="size-3" /> },
  { name: 'MongoDB', icon: <Database className="size-3" /> },
  { name: 'Redis', icon: <Zap className="size-3" /> },
  { name: 'Prisma', icon: <Layers className="size-3" /> },
  { name: 'Zustand', icon: <Zap className="size-3" /> },
  { name: 'Tanstack Query', icon: <Share2 className="size-3" /> },
  { name: 'Postman', icon: <Monitor className="size-3" /> },
  { name: 'Tailwind', icon: <Wind className="size-3" /> },
  { name: 'shadcn', icon: <Layout className="size-3" /> },
  { name: 'Motion', icon: <Zap className="size-3" /> },
  { name: 'GSAP', icon: <Zap className="size-3" /> },
  { name: 'JavaScript', icon: <Code2 className="size-3" /> },
  { name: 'TypeScript', icon: <Code2 className="size-3" /> },
  { name: 'Java', icon: <Coffee className="size-3" /> },
  { name: 'Python', icon: <Terminal className="size-3" /> },
  { name: 'C/C++', icon: <Cpu className="size-3" /> },
  { name: 'SQL', icon: <HardDrive className="size-3" /> },
  { name: 'Git', icon: <Share2 className="size-3" /> },
  { name: 'GitHub', icon: <Github className="size-3" /> },
  { name: 'Figma', icon: <Layout className="size-3" /> },
  { name: 'Docker', icon: <Box className="size-3" /> },
  { name: 'Linux', icon: <Terminal className="size-3" /> },
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-[6px] border border-transparent hover:border-border transition-colors duration-200">
    <span className="text-muted-foreground">{skill.icon}</span>
    <span className="text-[13px] font-medium text-foreground">{skill.name}</span>
  </div>
);

const SkillsAndSponsors = () => {
  return (
    <section className="relative p-3 space-y-12 py-8">
      {/* Skills Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-title">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
      </div>
      <div className="dashed-separator mt-8"></div>
    </section>
  );
};

export default SkillsAndSponsors;
