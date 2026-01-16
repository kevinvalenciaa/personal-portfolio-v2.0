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
        <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative p-3">
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
        <div className="w-full h-px bg-border mt-3"></div>
      </div>

      {/* Quote Section */}
      <div className="relative z-50 bg-background">
        <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative p-12 flex flex-col items-center text-center">
          {/* Large Quote Icon Replacement */}
          <div className="mb-6 opacity-10">
            <svg
              width="45"
              height="34"
              viewBox="0 0 45 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path
                d="M12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25H15C15 28.5 13.5 32 10 34H12.5C18.5 34 22.5 30 22.5 24V10C22.5 4.5 18 0 12.5 0ZM35 0C28.1 0 22.5 5.6 22.5 12.5C22.5 19.4 28.1 25 35 25H37.5C37.5 28.5 36 32 32.5 34H35C41 34 45 30 45 24V10C45 4.5 40.5 0 35 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.4] text-title italic tracking-tight mb-8 max-w-[500px]">
            &ldquo;Do so much work that it would be unreasonable for you to not be successful.&rdquo;
          </h3>

          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px bg-border flex-1 max-w-[40px]"></div>
            <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-widest">
              Alex Hormozi
            </span>
            <div className="h-px bg-border flex-1 max-w-[40px]"></div>
          </div>
        </div>
        <div className="w-full h-px bg-border"></div>
      </div>

      {/* Decorative Footer Block */}
      <div className="relative z-50 bg-background">
        <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative p-3">
          <div className="w-full h-[150px] bg-dot-grid opacity-60"></div>
        </div>
      </div>
    </footer>
  );
}