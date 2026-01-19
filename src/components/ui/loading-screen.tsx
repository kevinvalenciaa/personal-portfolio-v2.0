"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Circular loading spinner */}
        <motion.div
          className="absolute w-24 h-24"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: -90 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#171717"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 1.2,
                ease: "linear",
              }}
            />
          </svg>
        </motion.div>

        {/* Logo in the center */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          <Image
            src="/black-k-logo.webp"
            alt="K Logo"
            width={48}
            height={48}
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
