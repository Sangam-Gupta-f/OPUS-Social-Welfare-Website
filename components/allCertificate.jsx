"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Eye,
  Trash2,
  Search,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const InternshipCertificatePopup = dynamic(
  () => import("./generateCertificate"),
  { ssr: false },
);

export default function CertificatesTable() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCertificates: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      certificate(storedToken, currentPage);
    }
  }, [currentPage]);

  const [certificates, setCertificates] = useState([]);

  // Filter Search
  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.name.toLowerCase().includes(search.toLowerCase()) ||
      certificate.certificateId.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagination.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this certificate?")) {
      return;
    }
    //
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      alert("Error deleting certificate");
      return;
    }
    const updated = certificates.filter((item) => item._id !== id);

    setCertificates(updated);
  };

  const certificate = async (token, page = 1) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/?page=${page}&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.data) {
        alert("Error fetching certificates");
        router.push("/login");
      }
      const data = response.data?.data;
      setCertificates(data);
      setPagination(response.data?.pagination);
    } catch (error) {
      console.error(error);
      alert("Error fetching certificates");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Generated Certificates
            </h1>

            <p className="text-muted-foreground mt-2">
              Manage and view all internship certificates.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-xl border bg-background pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Button to generate new certificate */}

          <InternshipCertificatePopup />
        </div>

        {/* Table Card */}
        <Card className="overflow-hidden py-0 border-0 shadow-xl rounded-2xl">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Certificate ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Student Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Father Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Issued Date
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Internship Duration
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((certificate, index) => (
                    <tr
                      key={certificate._id}
                      className={`border-b hover:bg-muted/40 transition ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      <td className="px-6 py-5 font-medium">
                        {certificate.certificateId}
                      </td>

                      <td className="px-6 py-5 capitalize">
                        {certificate.name}
                      </td>

                      <td className="px-6 py-5 capitalize">
                        {certificate.fatherName}
                      </td>

                      <td className="px-6 py-5">
                        {new Date(certificate.issuedDate).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-5">
                        {new Date(
                          certificate.internshipStartDate,
                        ).toLocaleDateString()}{" "}
                        →{" "}
                        {new Date(
                          certificate.internshipEndDate,
                        ).toLocaleDateString()}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-3">
                          {/* View */}
                          <Link
                            href={`/download/${certificate.certificateId}`}
                            className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:scale-105 transition"
                          >
                            <Eye size={18} />
                          </Link>

                          {/* Download
                          <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:scale-105 transition">
                            <Download size={18} />
                          </button> */}

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(certificate._id)}
                            className="p-2 rounded-lg bg-red-100 text-red-600 hover:scale-105 transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-12 text-muted-foreground"
                    >
                      No certificates found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden p-4 space-y-4">
            {filteredCertificates.map((certificate) => (
              <Card key={certificate._id} className="p-5 border shadow-sm">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Certificate ID
                    </p>

                    <h3 className="font-semibold">
                      {certificate.certificateId}
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Student Name
                    </p>

                    <h3 className="font-medium">{certificate.name}</h3>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Internship Duration
                    </p>

                    <p className="text-sm">
                      {new Date(
                        certificate.internshipStartDate,
                      ).toLocaleDateString()}{" "}
                      →{" "}
                      {new Date(
                        certificate.internshipEndDate,
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={`/download/${certificate.certificateId}`}
                      className="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-medium text-center"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(certificate._id)}
                      className="flex-1 bg-red-100 text-red-600 py-2 rounded-lg text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Pagination Controls */}
        {pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {pagination.currentPage} of {pagination.totalPages} · Total{" "}
              {pagination.totalCertificates} certificates
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 rounded-lg border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex gap-1">
                {Array.from(
                  { length: pagination.totalPages },
                  (_, i) => i + 1,
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-background border hover:bg-muted"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === pagination.totalPages}
                className="flex items-center gap-1 px-4 py-2 rounded-lg border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
