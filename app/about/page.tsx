"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Grid } from "../contact/GridBackground";
import animationData from "@/public/animations/bearded-male.json";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  return (
    <BackgroundBeamsWithCollision>
      <AnimatePresence mode="wait">
        <motion.div
          key="about-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20"
        >
          <motion.div
            key="about-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[2.618rem] font-bold text-neutral-800 dark:text-neutral-200">
              About Me
            </h1>
            <p className="mt-2 max-w-sm text-base text-neutral-600 dark:text-neutral-300">
              Hi, my name is{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                Moh Dzulfikri Maulana
              </span>
              , but you can call me{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-300">
                Fikri
              </span>
              .
            </p>
            <div className="mt-7 relative flex items-center justify-center">
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-100 h-100"
              />
            </div>
          </motion.div>
          <motion.div
            key="about-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black overflow-hidden"
          >
            <Grid size={20} />
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-gray-700 dark:text-gray-300 mb-4"
              >
                I am a passionate programmer with more than 2 years of
                experience working at a vendor company that specializes in
                digitalizing lottery draws. My main tech stack at work is{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                  Next.js
                </span>{" "}
                and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-300">
                  NestJS
                </span>
                .
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base text-gray-700 dark:text-gray-300 mb-4"
              >
                During my career, I have developed a chatbot for unique code
                validation and prize allocation, and collaborated with
                third-party companies to build APIs and responsive web apps for
                promotional campaigns at several well-known companies in
                Indonesia.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base text-gray-700 dark:text-gray-300 mb-4"
              >
                I have also worked on internal dashboards for approving and
                rejecting entries, visualizing data in flowcharts, and
                integrating chatbots using{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                  Qiscus
                </span>
                . In addition, I have freelance experience building CMS
                platforms and POS systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-base text-gray-700 dark:text-gray-300 mb-4"
              >
                I currently live in Jakarta, but my hometown is Kediri. I am
                always eager to learn new technologies and collaborate on
                exciting projects!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex flex-col items-center"
              >
                <span className="inline-block bg-indigo-600 text-white dark:bg-indigo-500 dark:text-neutral-900 px-4 py-2 rounded-full font-semibold shadow">
                  Let&apos;s build something amazing together!
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </BackgroundBeamsWithCollision>
  );
}
