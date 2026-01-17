"use client";

import React from "react";

/**
 * NewsletterFooter Component
 * Includes:
 * 1. Newsletter subscription section with diagonal lines background.
 * 2. Famous quote section from Alex Hormozi.
 * 3. Decorative dot-grid footer block.
 */
export default function NewsletterFooter() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="relative z-50 bg-background">
        <div className="relative p-3">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-title">Newsletter</h2>
            <div className="relative rounded-[9px] border border-border overflow-hidden p-8 diagonal-lines">
              <div className="relative z-10 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-[6px] text-sm outline-none focus:ring-1 focus:ring-ring transition-all"
                />
                <button
                  type="button"
                  className="bg-[#404040] hover:bg-[#262626] text-white px-4 py-2 rounded-[6px] text-sm font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dashed-separator mt-3"></div>
      </div>

      {/* AI Summary Section */}
      <div className="relative z-50 bg-background">
        <div className="relative p-12 flex flex-col items-center text-center">
          <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.4] text-title tracking-tight mb-8">
            Request an AI summary of Kevin
          </h3>

          <div className="flex items-center gap-8 mb-10">
            {/* ChatGPT */}
            <a
              href="https://chatgpt.com/?q=Tell%20me%20about%20Kevin%20Valencia%2C%20a%20software%20developer.%20You%20can%20find%20information%20about%20him%20at%20his%20portfolio%20kevinvalencia.ca%20and%20his%20LinkedIn%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-title transition-colors"
              title="Ask ChatGPT about Kevin"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
            </a>

            {/* Claude */}
            <a
              href="https://claude.ai/new?q=Tell%20me%20about%20Kevin%20Valencia%2C%20a%20software%20developer.%20You%20can%20find%20information%20about%20him%20at%20his%20portfolio%20kevinvalencia.ca%20and%20his%20LinkedIn%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-title transition-colors"
              title="Ask Claude about Kevin"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1C12 1 12.5 3.5 13 5C13.5 6.5 15 8 15 8C15 8 13.5 8 12 8C10.5 8 9 8 9 8C9 8 10.5 6.5 11 5C11.5 3.5 12 1 12 1Z"/>
                <path d="M12 23C12 23 12.5 20.5 13 19C13.5 17.5 15 16 15 16C15 16 13.5 16 12 16C10.5 16 9 16 9 16C9 16 10.5 17.5 11 19C11.5 20.5 12 23 12 23Z"/>
                <path d="M1 12C1 12 3.5 12.5 5 13C6.5 13.5 8 15 8 15C8 15 8 13.5 8 12C8 10.5 8 9 8 9C8 9 6.5 10.5 5 11C3.5 11.5 1 12 1 12Z"/>
                <path d="M23 12C23 12 20.5 12.5 19 13C17.5 13.5 16 15 16 15C16 15 16 13.5 16 12C16 10.5 16 9 16 9C16 9 17.5 10.5 19 11C20.5 11.5 23 12 23 12Z"/>
                <path d="M4.22 4.22C4.22 4.22 6.5 5.5 7.5 6.5C8.5 7.5 9.5 9.5 9.5 9.5C9.5 9.5 8.5 8.5 7.5 8C6.5 7.5 4.22 6.78 4.22 6.78"/>
                <path d="M19.78 4.22C19.78 4.22 17.5 5.5 16.5 6.5C15.5 7.5 14.5 9.5 14.5 9.5C14.5 9.5 15.5 8.5 16.5 8C17.5 7.5 19.78 6.78 19.78 6.78"/>
                <path d="M4.22 19.78C4.22 19.78 6.5 18.5 7.5 17.5C8.5 16.5 9.5 14.5 9.5 14.5C9.5 14.5 8.5 15.5 7.5 16C6.5 16.5 4.22 17.22 4.22 17.22"/>
                <path d="M19.78 19.78C19.78 19.78 17.5 18.5 16.5 17.5C15.5 16.5 14.5 14.5 14.5 14.5C14.5 14.5 15.5 15.5 16.5 16C17.5 16.5 19.78 17.22 19.78 17.22"/>
              </svg>
            </a>

            {/* Gemini */}
            <a
              href="https://gemini.google.com/app?q=Tell%20me%20about%20Kevin%20Valencia%2C%20a%20software%20developer.%20You%20can%20find%20information%20about%20him%20at%20his%20portfolio%20kevinvalencia.ca%20and%20his%20LinkedIn%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-title transition-colors"
              title="Ask Gemini about Kevin"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C12 24 12 12 24 12C12 12 12 0 12 0C12 0 12 12 0 12C12 12 12 24 12 24Z"/>
              </svg>
            </a>

            {/* Grok */}
            <a
              href="https://grok.x.ai/?q=Tell%20me%20about%20Kevin%20Valencia%2C%20a%20software%20developer.%20You%20can%20find%20information%20about%20him%20at%20his%20portfolio%20kevinvalencia.ca%20and%20his%20LinkedIn%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-title transition-colors"
              title="Ask Grok about Kevin"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"/>
              </svg>
            </a>

            {/* Perplexity */}
            <a
              href="https://www.perplexity.ai/search?q=Tell%20me%20about%20Kevin%20Valencia%2C%20a%20software%20developer.%20You%20can%20find%20information%20about%20him%20at%20his%20portfolio%20kevinvalencia.ca%20and%20his%20LinkedIn%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-title transition-colors"
              title="Ask Perplexity about Kevin"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.516 4.845V10.5H4.5V7.212L7.516 4.845ZM8.516 3.104L3.5 7.012V11.5H8.516V16.077L5.5 13.345V16.742L8.516 19.113V20H15.484V19.113L18.5 16.742V13.345L15.484 16.077V11.5H20.5V7.012L15.484 3.104V8.5H12.5V1H11.5V8.5H8.516V3.104ZM16.484 4.845L19.5 7.212V10.5H16.484V4.845ZM9.516 11.5H11.5V15.5H9.516V11.5ZM12.5 11.5H14.484V15.5H12.5V11.5ZM9.516 16.5H14.484V18.387L12 20.279L9.516 18.387V16.5Z"/>
              </svg>
            </a>
          </div>

          <p className="text-[14px] text-muted-foreground">
            © Kevin 2026. All rights reserved.
          </p>
        </div>
        <div className="dashed-separator"></div>
      </div>

      {/* Decorative Footer Block */}
      <div className="relative z-50 bg-background">
        <div className="relative p-3">
          <div className="w-full h-[150px] bg-dot-grid opacity-60"></div>
        </div>
      </div>
    </footer>
  );
}