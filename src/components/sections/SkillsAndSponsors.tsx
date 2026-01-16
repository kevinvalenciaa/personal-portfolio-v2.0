import React from 'react';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Globe, 
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
  Smartphone, 
  Cloud, 
  Infinity as InfinityIcon,
  BadgeCheck
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface Sponsor {
  name: string;
  amount: string;
  image: string;
  links: {
    label: string;
    url: string;
    icon: 'github' | 'twitter' | 'web';
  }[];
  isTopSponsor?: boolean;
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

const sponsors: Sponsor[] = [
  {
    name: 'DonnieBLT',
    amount: '$350',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_6.png',
    isTopSponsor: true,
    links: [
      { label: 'github.com/DonnieBLT', url: 'https://github.com/DonnieBLT', icon: 'github' },
      { label: 'x.com/OWASP_BLT', url: 'https://x.com/OWASP_BLT', icon: 'twitter' },
    ]
  },
  {
    name: 'Avid',
    amount: '$10',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_7.png',
    links: [
      { label: 'x.com/Av1dlive', url: 'https://x.com/Av1dlive', icon: 'twitter' },
    ]
  },
  {
    name: 'Sudip Biswas',
    amount: '$2',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_8.png',
    links: [
      { label: 'sudip.fyi', url: 'https://sudip.fyi', icon: 'web' },
      { label: 'github.com/sudipfyi', url: 'https://github.com/sudipfyi', icon: 'github' },
    ]
  },
  {
    name: 'Aryan Bola',
    amount: '$2',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fddff065-18c4-4d35-bf6d-0756710f78d7-rinkitadhana-com/assets/images/images_9.png',
    links: [
      { label: 'aryanbola.tech', url: 'https://aryanbola.tech', icon: 'web' },
      { label: 'x.com/BolatwtX', url: 'https://x.com/BolatwtX', icon: 'twitter' },
    ]
  }
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-[6px] border border-transparent hover:border-border transition-colors duration-200">
    <span className="text-muted-foreground">{skill.icon}</span>
    <span className="text-[13px] font-medium text-foreground">{skill.name}</span>
  </div>
);

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="relative p-0.5 rounded-[12px] group">
    <div className="bg-white border border-border rounded-[10px] p-3 flex gap-3 h-full">
      <div className="relative size-[68px] flex-shrink-0">
        <Image
          src={sponsor.image}
          alt={sponsor.name}
          fill
          className="rounded-[8px] object-cover"
        />
        {sponsor.isTopSponsor && (
          <div className="absolute -top-1.5 -right-1.5 bg-white rounded-full p-0.5 border border-border text-foreground">
            <BadgeCheck className="size-4 animate-pulse" />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-title truncate">{sponsor.name}</h3>
          </div>
          <p className="text-[#22c55e] text-xs font-bold mt-0.5">{sponsor.amount}</p>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          {sponsor.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors truncate"
            >
              {link.icon === 'github' && <Github className="size-2.5" />}
              {link.icon === 'twitter' && <Twitter className="size-2.5" />}
              {link.icon === 'web' && <Globe className="size-2.5" />}
              <span className="truncate">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SkillsAndSponsors = () => {
  return (
    <section className="container space-y-12 py-8">
      {/* Skills Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-title">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="space-y-5">
        <h2 className="text-lg font-semibold text-title">Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {sponsors.map((sponsor, idx) => (
            <SponsorCard key={idx} sponsor={sponsor} />
          ))}
        </div>
        
        <div className="flex justify-center pt-2">
          <a
            href="https://github.com/sponsors/rinkitadhana"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-primary hover:bg-action-hover text-primary-foreground text-sm font-medium rounded-[9px] transition-colors duration-300"
          >
            View All <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndSponsors;