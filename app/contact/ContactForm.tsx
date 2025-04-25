"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconSend } from "@tabler/icons-react";
import React from "react";
import { cn } from "@/lib/utils";

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="fullname">Full name</Label>
        <Input id="fullname" placeholder="Tyler" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-10">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Im Interested ..." />
      </LabelInputContainer>

      <button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        type="submit"
      >
        <span className="flex items-center justify-center gap-2">
          Submit
          <IconSend size={18} />
        </span>
        <BottomGradient />
      </button>

      <p className="mt-10 max-w-sm text-base text-neutral-600 dark:text-neutral-300">
        Not a fan of forms?{" "}
        <span className="font-bold italic px-1 rounded bg-yellow-200 dark:bg-yellow-300 dark:text-amber-950">
          The dock's
        </span>{" "}
        always hanging out down below — hit an icon to reach me on socials!
      </p>
    </form>
  );
}
