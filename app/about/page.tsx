"use client";

import SummaryCard from "@/components/cards/summary-card";
import { about } from "@/data";
import React from "react";

export default function About() {
  const { title, description, imageSrc } = about;
  return (
    <SummaryCard title={title} description={description} imageSrc={imageSrc} />
  );
}
