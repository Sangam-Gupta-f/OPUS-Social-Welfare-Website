"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  CalendarDays,
  Clock3,
  Building2,
  User,
  BadgeCheck,
  FileBadge,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface CertificateData {
  certificateId: string;
  name: string;
  fatherName: string;
  issuedDate: string;
  internshipStartDate: string;
  internshipEndDate: string;
  collegeName: string;
  timing: string;
  shedule: string;
  internshipHours: number;
}

export default function CertificateVerificationPage() {
  const { id } = useParams<{ id: string }>();

  const [certificateData, setCertificateData] =
    useState<CertificateData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch certificate
  const verifyCertificate = async (certificateId: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${certificateId}`,
      );

      return response.data;
    } catch (error) {
      console.error("Error verifying certificate:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        setLoading(true);

        const data = await verifyCertificate(id);

        if (!data) {
          setError("Certificate not found or invalid.");
          return;
        }

        setCertificateData(data);
      } catch (err) {
        setError("Certificate not found or invalid.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCertificate();
    }
  }, [id]);

  const formatDate = (date: string) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-slate-700 font-medium">
            Verifying Certificate...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !certificateData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center border border-red-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10 text-red-600" />
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mt-6">
            Verification Failed
          </h2>

          <p className="text-slate-500 mt-3">
            {error || "Certificate not found."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-5">
      <Header />
      <div className="w-full max-w-5xl px-2">
        {/* Top Banner */}
        <div className="bg-green-600 text-white rounded-t-3xl px-8 py-6 shadow-lg flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-2xl">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Certificate Verified Successfully
            </h1>

            <p className="text-green-100 mt-1 text-sm">
              This certificate is officially issued and verified.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white shadow-2xl rounded-b-3xl overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="border-b border-slate-200 px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                Certificate Verification Portal
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                Internship Completion Certificate
              </h2>
            </div>

            <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
              <CheckCircle2 className="w-4 h-4" />
              VERIFIED
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left */}
            <div className="lg:col-span-2 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Student Name</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800">
                    {certificateData.name}
                  </h3>
                </div>

                {/* Father Name */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Father Name</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800">
                    {certificateData.fatherName || "N/A"}
                  </h3>
                </div>

                {/* Certificate ID */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <FileBadge className="w-4 h-4" />
                    <span className="text-sm">Certificate ID</span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-700 break-all">
                    {certificateData.certificateId}
                  </h3>
                </div>

                {/* College */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">College Name</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800">
                    {certificateData.collegeName || "N/A"}
                  </h3>
                </div>

                {/* Issued Date */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-sm">Issued Date</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800">
                    {formatDate(certificateData.issuedDate)}
                  </h3>
                </div>

                {/* Internship Hours */}
                <div className="bg-slate-50 rounded-2xl p-5 border">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Clock3 className="w-4 h-4" />
                    <span className="text-sm">Internship Hours</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800">
                    {certificateData.internshipHours || 0} Hours
                  </h3>
                </div>
              </div>

              {/* Internship Details */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <BadgeCheck className="text-blue-700" />

                  <h3 className="text-xl font-bold text-slate-800">
                    Internship Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Internship Duration
                    </p>

                    <p className="font-semibold text-slate-800">
                      {formatDate(certificateData.internshipStartDate)} —{" "}
                      {formatDate(certificateData.internshipEndDate)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-1">Schedule</p>

                    <p className="font-semibold text-slate-800">
                      {certificateData.shedule || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-1">Timing</p>

                    <p className="font-semibold text-slate-800">
                      {certificateData.timing || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-slate-900 text-white p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-3 rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Authentic Certificate
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Securely verified through our official system.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="border border-slate-700 rounded-2xl p-4">
                    <p className="text-slate-400 text-sm">
                      Verification Status
                    </p>

                    <p className="text-green-400 font-bold text-lg mt-1">
                      VERIFIED & VALID
                    </p>
                  </div>

                  <div className="border border-slate-700 rounded-2xl p-4">
                    <p className="text-slate-400 text-sm">Verification ID</p>

                    <p className="font-semibold mt-1 break-all">
                      {certificateData.certificateId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 border-t border-slate-700 pt-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  This digital verification confirms that the certificate has
                  been officially issued and authenticated by the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
