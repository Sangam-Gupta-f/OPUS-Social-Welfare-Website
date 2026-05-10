"use client";
import CertificatesTable from "@/components/allCertificate";

function page() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  return (
    <div>
      <CertificatesTable />
    </div>
  );
}

export default page;
