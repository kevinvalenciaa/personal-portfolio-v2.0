"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Calendar } from 'lucide-react';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SubstackIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { personalInfo } from '@/config/personal';

// const XIcon = ({ size = 14 }: { size?: number }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

interface ContributionDay {
  contributionCount: number;
  date: string;
  level: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface MonthLabel {
  label: string;
  weekIndex: number;
}

const HeroHeader = () => {
  const [contributionData, setContributionData] = React.useState<ContributionDay[][]>([]);
  const [totalContributions, setTotalContributions] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [monthLabels, setMonthLabels] = React.useState<MonthLabel[]>([]);

  // Convert contribution count to level (0-4)
  const getContributionLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  // Format date for tooltip (parse as local date to avoid timezone shifts)
  const formatDate = (dateStr: string): string => {
    // Parse YYYY-MM-DD as local date, not UTC
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get month labels with positions (parse as local date to avoid timezone shifts)
  const getMonthLabels = (weeks: ContributionWeek[]): MonthLabel[] => {
    const labels: MonthLabel[] = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      if (week.contributionDays.length > 0) {
        const firstDay = week.contributionDays[0];
        // Parse YYYY-MM-DD as local date, not UTC
        const [, monthStr] = firstDay.date.split('-');
        const month = parseInt(monthStr, 10) - 1;

        if (month !== lastMonth) {
          labels.push({ label: monthNames[month], weekIndex });
          lastMonth = month;
        }
      }
    });

    // Filter out months with insufficient weeks (not enough space for label)
    const totalWeeks = weeks.length;
    return labels.filter((label, idx) => {
      if (idx === labels.length - 1) {
        // Last label: only show if at least 2 weeks visible from this month
        return totalWeeks - label.weekIndex >= 2;
      }
      const nextLabel = labels[idx + 1];
      return nextLabel.weekIndex - label.weekIndex >= 3; // Need at least 3 weeks gap
    });
  };

  React.useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();

        if (data.error) {
          console.error('GitHub API error:', data.error);
          setIsLoading(false);
          return;
        }

        // Only show last 51 weeks to fit within the container
        const recentWeeks = data.weeks.slice(-51);

        setTotalContributions(data.totalContributions);
        setMonthLabels(getMonthLabels(recentWeeks));

        // Transform weeks data into grid format with full day info
        const grid = recentWeeks.map((week: ContributionWeek) =>
          week.contributionDays.map((day: { contributionCount: number; date: string }) => ({
            ...day,
            level: getContributionLevel(day.contributionCount),
          }))
        );

        setContributionData(grid);
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
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
                    src={personalInfo.profileImage}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-end h-full py-1 select-none">
                <div>
                  <h1 className="text-[1.55rem] font-bold leading-[1.08] text-title relative inline-block">
                    {personalInfo.name}
                  </h1>
                  <div className="mt-1">
                    <span className="text-muted-foreground text-sm">{personalInfo.title}</span>
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
              Hey! I&apos;m Kevin, a Toronto-based CS student at Queen&apos;s University focused on AI and obsessed with building full-stack AI products. I absolutely love to turn ideas from 0 to 1, and I highly prioritize shipping fast, iterating faster, and scaling what works.
            </p>
            <p className="text-[0.875rem] leading-[1.6]">
              Currently, I&apos;m a software engineer at Clover Labs (<a href="https://www.linkedin.com/posts/mattespoz_its-official-clover-labs-is-the-fastest-activity-7356360002451726338-n4V7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADznI0gBv8H0a0vVr2CpHkYl7TNQwDWxpCs" target="_blank" rel="noopener noreferrer" className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Canada&apos;s fastest growing startup</a>), while building a startup in the GPU infrastructure space.
            </p>
          </div>

          <div className="flex pt-6 gap-2 select-none">
            <a
              className="w-fit flex items-center bg-[#404040] hover:bg-[#262626] transition-colors duration-300 gap-1.5 px-3 py-2 text-white text-sm font-medium cursor-pointer rounded-[9px] group overflow-hidden"
              href={personalInfo.calLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <Calendar className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <Calendar className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              Book an intro call
            </a>

            <a
              className="w-fit flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] hover:brightness-[0.97] transition-colors duration-300 text-sm text-foreground font-medium border border-border cursor-pointer rounded-[9px] group overflow-hidden"
              href={`mailto:${personalInfo.email}`}
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <Mail className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <Mail className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              Send an email
            </a>

{/* <a
              className="w-fit flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] hover:brightness-[0.97] transition-colors duration-300 text-sm text-foreground font-medium border border-border cursor-pointer rounded-[9px] group overflow-hidden"
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-4 h-4 overflow-hidden">
                <FileText className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6" size={16} />
                <FileText className="absolute inset-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0" size={16} />
              </div>
              View resume
            </a> */}
          </div>

          <div className="py-8 flex flex-col gap-3">
            <h2 className="text-sm font-medium text-foreground">
              Here are my <span className="font-semibold text-black">socials</span>
            </h2>
            <div className="flex gap-2 items-center flex-wrap">
              <SocialLink href={personalInfo.socials.github} icon={<GithubIcon size={14} />} label="GitHub" />
{/*               <SocialLink href={personalInfo.socials.x} icon={<XIcon size={14} />} label="X" /> */}
              <SocialLink href={personalInfo.socials.linkedin} icon={<LinkedinIcon size={14} />} label="LinkedIn" />
              <SocialLink href={personalInfo.socials.substack} icon={<SubstackIcon size={14} />} label="Substack" />
{/*               <SocialLink href={personalInfo.socials.leetcode} icon={<Code size={14} />} label="LeetCode" /> */}
            </div>
          </div>

          <div className="w-full flex flex-col justify-center select-none">
            <div className="w-full">
              <div className="relative mb-3 h-4">
                {monthLabels.map((month, idx) => (
                  <span
                    key={idx}
                    className="absolute text-[10px] text-muted-foreground"
                    style={{ left: `${month.weekIndex * 13}px` }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>
              <div className="flex gap-[3px]">
                {isLoading ? (
                  <div className="w-full h-[94px] flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Loading contributions...</span>
                  </div>
                ) : (
                  <TooltipProvider delayDuration={0}>
                    {contributionData.map((week: ContributionDay[], weekIdx: number) => (
                      <div key={weekIdx} className="flex flex-col gap-[3px]">
                        {week.map((day: ContributionDay, dayIdx: number) => (
                          <Tooltip key={`${weekIdx}-${dayIdx}`}>
                            <TooltipTrigger asChild>
                              <div
                                className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(day.level)} hover:opacity-80 transition-opacity duration-300 cursor-pointer`}
                              />
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={5} className="z-[100]">
                              <p className="text-primary-foreground/70">{day.contributionCount} contribution{day.contributionCount !== 1 ? 's' : ''}</p>
                              <p className="text-primary-foreground/70">{formatDate(day.date)}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    ))}
                  </TooltipProvider>
                )}
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-[11px] text-muted-foreground">
                  {totalContributions.toLocaleString()} contributions in the last year
                </span>
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
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-2 py-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors duration-200 select-none rounded-[6px] text-sm font-medium text-foreground"
  >
    <span className="flex items-center">{icon}</span>
    <span className="ml-1.5">{label}</span>
  </a>
);

export default HeroHeader;
