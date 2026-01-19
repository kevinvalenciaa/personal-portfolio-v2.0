"use client";

import React from "react";
import Image from "next/image";

const researchPrompt = `Deep Research: Kevin Valencia
As a potential collaborator, investor, or teammate, I want to concretely understand who Kevin is, what he builds, and how he operates.
Use all available research capabilities - web search, content analysis, cross-referencing sources, and synthesis - to build a comprehensive profile. Go deep, not surface-level.

Professional Background

Review his current role as a Software Engineering Intern at Clover Labs - what is he building, what responsibilities has he taken on, and how has leadership positioned him within the team?
Search for any public mentions, press, or references to his work at Clover Labs or other organizations
What does his work history reveal about his growth trajectory and the types of problems he gravitates toward?


Online Presence & Portfolio
LinkedIn (https://www.linkedin.com/in/kevin-valenciaa/)

Walk through his profile thoroughly - what story does his experience tell?
Analyze the progression of roles, companies, and responsibilities over time
What endorsements, recommendations, or notable connections stand out?
Are there any posts, articles, or engagement patterns that reveal his thinking?

Portfolio Website (https://www.kevinvalencia.ca/)

Explore every section - what projects does he showcase? What's the depth of each case study?
How does he present his work and communicate his value proposition?
What design and UX choices reveal about his attention to detail?
Are there any hidden pages, blog posts, or Easter eggs worth noting?

GitHub (https://github.com/kevinvalenciaa)

Analyze his repository history - what has he built, and what's the scope of each project?
Examine commit frequency, activity patterns, and consistency over time
What languages, frameworks, and tools dominate his work?
Review code quality - structure, documentation, README thoroughness, testing practices
Are there standout open-source contributions, forks, or collaborations?
What do his pinned repos and contribution graph reveal about priorities?

Substack (https://substack.com/@kevinvalencia)

Read through his published writing - what topics does he explore?
What does his writing reveal about his thinking, interests, and intellectual depth?
How does he communicate complex ideas - is he technical, philosophical, practical?
What themes or obsessions recur across posts?
How does his written voice compare to his professional presence?


Technical Profile

Synthesize across all sources: what is his core technical stack and where is he strongest?
What types of systems has he built - frontend, backend, infrastructure, AI/ML, developer tools?
What does the quality and architecture of his code reveal about his engineering maturity?
Are there patterns in the problems he chooses to solve?


Track Record & Results

What has he shipped that's live and used by real people?
Has he generated revenue, led teams, or owned products end-to-end?
What quantifiable outcomes can be attributed to his work?
Cross-reference claims across sources - what's verifiable?


Trajectory & Ambitions

Where is he headed in the next 1-3 years?
What signals suggest his long-term goals - founder path, senior IC, technical leadership, something else?
What patterns in his choices reveal what he optimizes for?


Working Style & Values

What is his approach to collaboration and communication?
What does he value in teammates, partners, and projects?
What is his current availability and what opportunities is he open to?


Synthesis
Compile all findings into a clear, honest profile of Kevin:

Who he is and what drives him
What he's strongest at and where he's still growing
What the experience of working with him would actually be like
Whether he'd be a good fit for [your specific opportunity]

Explain it simply and directly - as if you were briefing someone before their first meeting with him.`;

const encodedPrompt = encodeURIComponent(researchPrompt);

/**
 * Footer Component
 * Includes:
 * 1. AI Summary section with links to various AI assistants.
 * 2. Decorative dot-grid footer block.
 */
export default function NewsletterFooter() {
  return (
    <footer className="w-full">
      {/* AI Summary Section */}
      <div className="relative z-50 bg-background">
        <div className="relative p-8 flex flex-col items-center text-center">
          <h3 className="text-[18px] md:text-[20px] font-medium leading-[1.4] text-title tracking-tight mb-5">
            Request an AI summary of Kevin.
          </h3>

          <div className="flex items-center gap-6 mb-6">
            {/* ChatGPT */}
            <a
              href={`https://chatgpt.com/?q=${encodedPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Ask ChatGPT about Kevin"
            >
              <Image src="/chatgpt-logo.png" alt="ChatGPT" width={28} height={28} />
            </a>

            {/* Claude */}
            <a
              href={`https://claude.ai/new?q=${encodedPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Ask Claude about Kevin"
            >
              <Image src="/black-claude.png" alt="Claude" width={28} height={28} />
            </a>

            {/* Grok */}
            <a
              href={`https://grok.com/?q=${encodedPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Ask Grok about Kevin"
            >
              <Image src="/grok-logo.webp" alt="Grok" width={28} height={28} />
            </a>
          </div>
        </div>
        <div className="dashed-separator"></div>
      </div>

      {/* Decorative Footer Block */}
      <div className="relative z-50 bg-background">
        <div className="relative p-3">
          <div className="w-full h-[60px] sm:h-[100px] dot-grid"></div>
        </div>
      </div>
    </footer>
  );
}