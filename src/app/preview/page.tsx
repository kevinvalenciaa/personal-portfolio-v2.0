import Image from 'next/image';
import { personalInfo } from '@/config/personal';

export default function PreviewPage() {
  return (
    <main className="h-screen bg-background dashed-border-container flex flex-col">
      <div className="dashed-content-lines" aria-hidden="true" />
      <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative w-full flex flex-col h-full">
        {/* Top dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-1">
          <div className="relative p-3 h-full">
            <div className="w-full h-full dot-grid"></div>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Profile section - centered */}
        <div className="relative z-50 bg-background">
          <div className="relative p-3 py-6">
            <div className="flex items-center gap-5">
              {/* Profile image */}
              <div className="border border-border rounded-[14px] p-[5px] bg-white">
                <Image
                  src="/linkedin-pfp.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-[10px] object-cover select-none"
                />
              </div>

              {/* Name and title */}
              <div className="flex flex-col select-none">
                <h1 className="text-[1.85rem] font-bold leading-[1.1] text-title">
                  {personalInfo.name}
                </h1>
                <p className="text-muted-foreground text-base mt-1.5">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Website URL - bottom right */}
            <span className="absolute bottom-3 right-3 text-muted-foreground text-sm select-none">
              kevinvalencia.ca
            </span>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Bottom dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-1">
          <div className="relative p-3 h-full">
            <div className="w-full h-full dot-grid"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
