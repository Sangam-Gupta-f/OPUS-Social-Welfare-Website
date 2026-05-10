"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import CertificatesTable from "@/components/allCertificate";
import dynamic from "next/dynamic";

const CertificatesTable = dynamic(() => import("@/components/allCertificate"), {
  ssr: false,
});

function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <CertificatesTable />
    </div>
  );
}

export default Page;
