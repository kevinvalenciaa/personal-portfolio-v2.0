import Image from 'next/image';
import { personalInfo } from '@/config/personal';

export default function PreviewPage() {
  return (
    <main className="h-screen bg-background dashed-border-container flex flex-col">
      <div className="dashed-content-lines" style={{ maxWidth: '900px' }} aria-hidden="true" />
      <div className="max-w-[900px] mx-4 sm:mx-12 md:mx-auto relative w-full flex flex-col h-full">
        {/* Top dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-1">
          <div className="relative p-4 h-full">
            <div className="w-full h-full dot-grid" style={{ backgroundImage: 'radial-gradient(#aaa 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}></div>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Profile section - centered */}
        <div className="relative z-50 bg-background">
          <div className="relative p-6 py-10">
            <div className="flex items-center gap-8">
              {/* Profile image */}
              <div className="border border-border rounded-[18px] p-[6px] bg-white">
                <Image
                  src="/linkedin-pfp.jpg"
                  alt="Profile"
                  width={140}
                  height={140}
                  className="rounded-[14px] object-cover select-none"
                />
              </div>

              {/* Name and title */}
              <div className="flex flex-col select-none">
                <h1 className="text-[2.5rem] font-bold leading-[1.1] text-title">
                  {personalInfo.name}
                </h1>
                <p className="text-muted-foreground text-xl mt-2">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Website URL - bottom right */}
            <span className="absolute bottom-4 right-6 text-muted-foreground text-base select-none">
              kevinvalencia.ca
            </span>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Bottom dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-1">
          <div className="relative p-4 h-full">
            <div className="w-full h-full dot-grid" style={{ backgroundImage: 'radial-gradient(#aaa 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
