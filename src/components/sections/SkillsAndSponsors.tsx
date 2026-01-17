import React from 'react';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiC,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiKubernetes,
  SiDocker,
  SiJest,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiExpress,
  SiPandas,
  SiRedis,
  SiTailwindcss,
  SiPytorch,
  SiTensorflow,
  SiJupyter,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

const languageSkills: Skill[] = [
  { name: 'Python', icon: <SiPython className="size-3" /> },
  { name: 'Java', icon: <FaJava className="size-3" /> },
  { name: 'JavaScript', icon: <SiJavascript className="size-3" /> },
  { name: 'TypeScript', icon: <SiTypescript className="size-3" /> },
  { name: 'SQL', icon: <FaDatabase className="size-3" /> },
  { name: 'C', icon: <SiC className="size-3" /> },
];

const toolsSkills: Skill[] = [
  { name: 'AWS', icon: <SiAmazonwebservices className="size-3" /> },
  { name: 'Git', icon: <SiGit className="size-3" /> },
  { name: 'GitHub', icon: <SiGithub className="size-3" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="size-3" /> },
  { name: 'Docker', icon: <SiDocker className="size-3" /> },
  { name: 'Jest', icon: <SiJest className="size-3" /> },
  { name: 'Postman', icon: <SiPostman className="size-3" /> },
];

const frameworkSkills: Skill[] = [
  { name: 'React', icon: <SiReact className="size-3" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="size-3" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="size-3" /> },
  { name: 'Redis', icon: <SiRedis className="size-3" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="size-3" /> },
  { name: 'Express.js', icon: <SiExpress className="size-3" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="size-3" /> },
  { name: 'pandas', icon: <SiPandas className="size-3" /> },
  { name: 'PyTorch', icon: <SiPytorch className="size-3" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="size-3" /> },
  { name: 'Jupyter', icon: <SiJupyter className="size-3" /> },
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-[6px] border border-transparent hover:border-border transition-colors duration-200">
    <span className="text-muted-foreground">{skill.icon}</span>
    <span className="text-[13px] font-medium text-foreground">{skill.name}</span>
  </div>
);

const SkillsAndSponsors = () => {
  return (
    <section className="relative z-50 bg-background">
      <div className="relative p-3">
        <h2 className="text-lg font-semibold text-title select-none">My skills.</h2>
      </div>
      <div className="dashed-separator"></div>
      <div className="relative p-3 py-6">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {languageSkills.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {toolsSkills.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {frameworkSkills.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndSponsors;
