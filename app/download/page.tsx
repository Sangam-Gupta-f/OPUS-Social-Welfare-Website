"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/");
  }, [router]);
  return <div>page</div>;
}

export default page;
