'use client';

import Image from 'next/image';
import { personalInfo } from '@/config/personal';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const urlVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

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
        <motion.div
          className="relative z-50 bg-background"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative px-20 py-24">
            <div className="flex items-center gap-16">
              {/* Profile image */}
              <motion.div
                className="border border-border rounded-[30px] p-[12px] bg-white"
                variants={imageVariants}
              >
                <Image
                  src="/linkedin-pfp.jpg"
                  alt="Profile"
                  width={260}
                  height={260}
                  className="rounded-[20px] object-cover select-none"
                />
              </motion.div>

              {/* Name and title */}
              <motion.div
                className="flex flex-col select-none"
                variants={containerVariants}
              >
                <motion.h1
                  className="text-[5rem] font-bold leading-[1.1] text-title"
                  variants={itemVariants}
                >
                  {personalInfo.name}
                </motion.h1>
                <motion.p
                  className="text-muted-foreground text-4xl mt-5"
                  variants={itemVariants}
                >
                  Software Engineer
                </motion.p>
              </motion.div>
            </div>

            {/* Website URL - bottom right */}
            <motion.span
              className="absolute bottom-10 right-20 text-muted-foreground text-3xl select-none"
              variants={urlVariants}
              initial="hidden"
              animate="visible"
            >
              kevinvalencia.ca
            </motion.span>
          </div>
        </motion.div>

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
