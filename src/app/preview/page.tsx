import Image from 'next/image';
import { personalInfo } from '@/config/personal';

export default function PreviewPage() {
  return (
    <main className="h-screen bg-background dashed-border-container flex flex-col">
      <div className="dashed-content-lines" style={{ maxWidth: '1150px' }} aria-hidden="true" />
      <div className="max-w-[1150px] mx-4 sm:mx-12 md:mx-auto relative w-full flex flex-col h-full">
        {/* Top dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-[0.8]">
          <div className="relative p-4 h-full">
            <div className="w-full h-full dot-grid" style={{ backgroundImage: 'radial-gradient(#aaa 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}></div>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Profile section - centered */}
        <div className="relative z-50 bg-background">
          <div className="relative p-10 py-20">
            <div className="flex items-center gap-12">
              {/* Profile image */}
              <div className="border border-border rounded-[26px] p-[10px] bg-white">
                <Image
                  src="/linkedin-pfp.jpg"
                  alt="Profile"
                  width={210}
                  height={210}
                  className="rounded-[18px] object-cover select-none"
                />
              </div>

              {/* Name and title */}
              <div className="flex flex-col select-none">
                <h1 className="text-[4rem] font-bold leading-[1.1] text-title">
                  {personalInfo.name}
                </h1>
                <p className="text-muted-foreground text-3xl mt-4">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Website URL - bottom right */}
            <span className="absolute bottom-8 right-10 text-muted-foreground text-xl select-none">
              kevinvalencia.ca
            </span>
          </div>
        </div>

        <div className="dashed-separator"></div>

        {/* Bottom dot grid section - fills remaining space */}
        <div className="relative z-50 bg-background flex-[0.8]">
          <div className="relative p-4 h-full">
            <div className="w-full h-full dot-grid" style={{ backgroundImage: 'radial-gradient(#aaa 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
