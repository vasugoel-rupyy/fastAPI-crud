"use client";

import { useEffect } from "react";
import { apiFetch } from "@/lib/api";

export default function Home() {
  useEffect(() => {
    apiFetch("/health")
      .then((data) => console.log(data))
      .catch(console.error);
  }, []);

  return <div>Check console</div>;
}
