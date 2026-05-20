"use client";
import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ModernLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`,
        formData,
      );

      const data = res.data.token;

      // save token
      localStorage.setItem("token", data);

      // clear form
      setFormData({
        email: "",
        password: "",
      });

      // redirect
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);

      alert(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-lg">Logging in...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-2xl font-bold shadow-lg">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-300 mt-2">Login to continue your journey</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 focus-within:border-cyan-400 transition">
              <Mail className="text-gray-400 w-5 h-5" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-3 py-4"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Password</label>

            <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 focus-within:border-cyan-400 transition">
              <Lock className="text-gray-400 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-3 py-4"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
