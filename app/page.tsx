"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import animationData from "@/public/animations/male-profile.json";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <TextFlip />
    </BackgroundBeamsWithCollision>
  );
}

// Component
const TextFlip = () => {
  const words = ["Frontend", "Backend", "Fullstack"];
  return (
    <div className="max-w-4xl grid sm:grid-cols-1 sm:w-[80vw] md:grid-cols-2 lg:grid-cols-2 gap-7 relative items-center justify-center">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className={cn(
          "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
        )}
        layout
      >
        <div className="inline-block">
          Hi, I&apos;m a <ContainerTextFlip words={words} /> Developer
          <p className="text-base md:text-lg mt-4 font-normal text-zinc-600 dark:text-zinc-400 tracking-wider">
            I turn ideas into scalable, maintainable products. Crafting apps
            with Next.js & NestJS.
          </p>
        </div>
      </motion.h1>
      <div className="w-[500px] h-[500px] relative hidden sm:flex items-center justify-center z-10">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};
