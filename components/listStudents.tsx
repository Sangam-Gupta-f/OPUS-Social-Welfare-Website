"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

interface Certificate {
  _id: string;
  certificateId: string;
  name: string;
  fatherName: string;
}

interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalStudents: number;
  totalPages: number;
}

export default function ListStudents() {
  const [search, setSearch] = useState("");
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    pageSize: 10,
    totalStudents: 0,
    totalPages: 0,
  });

  // Fetch certificates with pagination
  const getCertificates = async (page: number) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/students?page=${page}&limit=10`,
      );

      if (!response.data) {
        alert("Error fetching students");
        return;
      }

      setCertificates(response.data?.data);
      setPagination(response.data?.pagination);
    } catch (error) {
      console.error(error);
      alert("Error fetching students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCertificates(currentPage);
  }, [currentPage]);

  // Handle search - reset to page 1
  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // Filter Search
  const filteredCertificates = certificates.filter((certificate) => {
    return (
      certificate.name?.toLowerCase().includes(search.toLowerCase()) ||
      certificate.certificateId?.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Handle page navigation
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

  return (
    <div className="min-h-screen bg-muted/30 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Certified Students
            </h1>

            <p className="text-muted-foreground mt-1">
              Verified internship certificate holders
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
        </div>

        {/* Table Card */}
        <Card className="overflow-hidden py-0 border-0 shadow-xl rounded-2xl">
          {/* Loading */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Certificate No.
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Student Name
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Father Name
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
                            {certificate.fatherName || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
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
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((certificate) => (
                    <Card
                      key={certificate._id}
                      className="p-5 border shadow-sm"
                    >
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Certificate ID
                          </p>

                          <h3 className="font-semibold break-all">
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
                            Father Name
                          </p>

                          <h3 className="font-medium">
                            {certificate.fatherName || "N/A"}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-10 text-muted-foreground">
                    No certificates found.
                  </div>
                )}
              </div>
            </>
          )}
        </Card>

        {/* Pagination Controls */}
        {!loading && pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {pagination.currentPage} of {pagination.totalPages} · Total{" "}
              {pagination.totalStudents} students
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
