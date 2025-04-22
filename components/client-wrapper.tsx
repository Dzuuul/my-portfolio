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
  return <CustomNavbar>{children}</CustomNavbar>;
}
