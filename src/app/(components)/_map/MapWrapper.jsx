"use client";

import dynamic from "next/dynamic";

// dynamic import مع ssr false
const CompanyMap = dynamic(() => import("./CompanyMap"), {
  ssr: false,
});

export default function MapWrapper() {
  return <CompanyMap />;
}
