"use client";

import dynamic from "next/dynamic";

const CustomNavbar = dynamic(() => import("@/components/navbar/navbar"), {
  ssr: false,
});

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomNavbar>
      <div className="flex items-center justify-center min-h-[calc(100vh-54px)]">
        {children}
      </div>
    </CustomNavbar>
  );
}
