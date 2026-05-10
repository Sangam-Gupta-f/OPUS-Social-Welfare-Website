"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function InternshipCertificatePopup() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [formData, setFormData] = useState({
    certificateId: "",
    name: "",
    faterName: "",
    issuedDate: "",
    expiryDate: "",
    internshipStartDate: "",
    internshipEndDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        alert("Error generating certificate");
        return;
      }

      // Convert response to blob
      const blob = await response.blob();

      // Create download URL
      const url = window.URL.createObjectURL(blob);

      // Create temporary anchor tag
      const a = document.createElement("a");
      a.href = url;

      // File name
      a.download = `${formData.name}-certificate.pdf`;

      // Trigger download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      a.remove();
      window.URL.revokeObjectURL(url);

      alert("Certificate downloaded successfully");
      setFormData({
        certificateId: "",
        name: "",
        faterName: "",
        issuedDate: "",
        expiryDate: "",
        internshipStartDate: "",
        internshipEndDate: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <Dialog>
      {/* Open Button */}
      <DialogTrigger asChild>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          Generate Internship Certificate
        </button>
      </DialogTrigger>

      {/* Popup */}
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              Internship Certificate Generator
            </DialogTitle>

            <p className="text-muted-foreground mt-2">
              Fill in the details below to generate an internship certificate.
            </p>
          </DialogHeader>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
        >
          {/* Certificate ID */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Certificate ID *
            </label>

            <input
              type="text"
              name="certificateId"
              value={formData.certificateId}
              onChange={handleChange}
              placeholder="Enter certificate ID"
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Father Name
            </label>

            <input
              type="text"
              name="faterName"
              value={formData.faterName}
              onChange={handleChange}
              placeholder="Enter father name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Issued Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Issued Date *
            </label>

            <input
              type="date"
              name="issuedDate"
              value={formData.issuedDate}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Expiry Date
            </label>

            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Internship Start Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Internship Start Date
            </label>

            <input
              type="date"
              name="internshipStartDate"
              value={formData.internshipStartDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Internship End Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Internship End Date
            </label>

            <input
              type="date"
              name="internshipEndDate"
              value={formData.internshipEndDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              Generate Certificate
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
