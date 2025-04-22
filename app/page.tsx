"use client";

import SummaryCard from "@/components/cards/summary-card";
import { homeItems } from "@/data";

export default function Home() {
  return <Content />;
}

const Content = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 w-full h-full">
        {homeItems.map((box) => (
          <div
            key={box.id}
            className={`flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <SummaryCard
              title={box.title}
              description={box.description}
              imageSrc={box.imageSrc}
              width={box.width}
              height={box.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
