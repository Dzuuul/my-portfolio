"use client";

import React from "react";
import Lottie from "lottie-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import animationData from "@/public/animations/male-with-jetpack.json";
import { FloatingDockSocialMedia } from "./FloatingDock";
import ContactForm from "./ContactForm";
import { Grid } from "./GridBackground";

export default function Contact() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-[2.618rem] font-bold text-neutral-800 dark:text-neutral-200">
            Contact Me
          </h1>
          <p className="mt-2 max-w-sm text-base text-neutral-600 dark:text-neutral-300">
            Please reach out to me and I will get back to you at the speed of
            light.
          </p>
          <div className="w-100 h-100 mt-7 relative flex items-center justify-center">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
        <div className="relative shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black overflow-hidden">
          <Grid size={20} />
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Floating Dock */}
      <FloatingDockSocialMedia />
    </BackgroundBeamsWithCollision>
  );
}
