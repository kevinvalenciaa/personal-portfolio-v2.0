"use client";

import React from "react";
import Image from "next/image";

const researchPrompt = `As a potential collaborator, investor, or teammate, I want to concretely understand who Kevin is, what he builds, and how he operates.
Detail step by step how to research Kevin:
Professional Background

Review his current role as a Software Engineering Intern at Clover Labs - what is he building, what responsibilities has he taken on, and how has leadership positioned him within the team?
What does his work history reveal about his growth trajectory and the types of problems he gravitates toward?

Online Presence & Portfolio

Walk through his LinkedIn profile (https://www.linkedin.com/in/kevin-valenciaa/) - what story does his experience tell? What endorsements, recommendations, or connections stand out?
Explore his portfolio website (https://www.kevinvalencia.ca/) - what projects does he showcase? How does he present his work and communicate his value?
Analyze his GitHub history (https://github.com/kevinvalenciaa) - what repos has he contributed to? What's his commit frequency and activity pattern? What languages and frameworks dominate his work? Are there any standout open-source contributions or personal projects?

Technical Profile

What is his core technical stack and where is he strongest?
What types of systems has he built - frontend, backend, infrastructure, AI/ML?
What does the quality and structure of his code reveal about his engineering maturity?

Track Record & Results

What has he shipped that's live and used by real people?
Has he generated revenue, led teams, or owned products end-to-end?
What quantifiable outcomes can be attributed to his work?

Trajectory & Ambitions

Where is he headed in the next 1-3 years?
What signals suggest his long-term goals - founder path, senior IC, technical leadership?

Working Style

What is his approach to collaboration and communication?
What does he value in teammates and partners?
What is his current availability and what opportunities is he open to?

Synthesize this into a clear picture of who Kevin is - explained simply, as if describing the real experience of partnering with or hiring him.`;

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
            Request an AI summary of Kevin
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