"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fc] px-4 py-6 text-slate-900 sm:px-6 lg:px-10 lg:py-10">
      {/* ================= MAIN LOGIN CONTAINER ================= */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        {/* ================= LOGO ================= */}
        <div className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white shadow-lg shadow-blue-600/20">
              C
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <div className="grid min-h-[720px] lg:grid-cols-[0.85fr_1.35fr]">
          {/* ================= LEFT CAMPUS IMAGE ================= */}
          <section className="relative hidden overflow-hidden bg-blue-50 lg:block">
            <Image
              src="/campus.png"
              alt="Students at a campus"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-white/5" />
          </section>

          {/* ================= RIGHT LOGIN AREA ================= */}
          <section className="flex min-h-[720px] items-center justify-center px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:py-16">
            {/* ================= LOGIN CARD ================= */}
            <div className="w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-9">
              {/* Back to Home */}
              <Link
                href="/"
                className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                <ArrowLeft size={16} />
                Back to home
              </Link>

              {/* ================= HEADING ================= */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Welcome back
                </h1>

                <p className="mt-2 text-base text-slate-500">
                  Log in to your account and continue your journey.
                </p>
              </div>

              {/* ================= LOGIN FORM ================= */}
              <form className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email or Username
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="john@college.edu"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-600"
                  >
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                  Log in
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* ================= DIVIDER ================= */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-slate-400">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* ================= SOCIAL LOGIN ================= */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Microsoft
                </button>
              </div>

              {/* ================= SIGN UP ================= */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}