"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Menu,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* ================= MOBILE NAVBAR ================= */}

      <nav className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex h-20 items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
              C
            </div>

            <span className="text-xl font-bold tracking-tight">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-6">
            <div className="flex flex-col gap-5 text-sm font-medium text-slate-700">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-600"
              >
                Log in
              </Link>

              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Sign up
              </Link>

            </div>
          </div>
        )}
      </nav>


      {/* ================= MAIN SECTION ================= */}

      <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10 lg:py-12">

        {/* ================= OUTER DESKTOP CARD ================= */}

        <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">

          <div className="grid min-h-[760px] lg:grid-cols-[0.85fr_1.15fr]">


            {/* ================= LEFT SIDE ================= */}

            <section className="relative hidden overflow-hidden lg:block">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100 to-indigo-100" />

              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src="/campus.png"
                  alt="Campus students"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-white/10" />

              {/* Logo */}
              <Link
                href="/"
                className="absolute left-8 top-8 z-10 flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/30">
                  C
                </div>

                <span className="text-xl font-bold text-slate-800">
                  Campus<span className="text-blue-600">Task</span>
                </span>
              </Link>

              {/* Bottom Information */}
              <div className="absolute bottom-10 left-8 right-8 z-10">

                <div className="rounded-2xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-md">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Sparkles size={21} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Your campus community starts here.
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Connect with students, collaborate on tasks, and grow
                    together.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600">
                    <Check size={17} />
                    Built for students, by students
                  </div>

                </div>

              </div>

            </section>


            {/* ================= RIGHT SIDE ================= */}

            <section className="flex items-center justify-center bg-[#fbfdff] px-5 py-12 sm:px-10 lg:px-16">

              <div className="w-full max-w-md">


                {/* Back Button */}
                <Link
                  href="/"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                >
                  <ArrowLeft size={17} />
                  Back to home
                </Link>


                {/* ================= FORM CARD ================= */}

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">


                  {/* Heading */}

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-sm font-semibold tracking-wide text-blue-600">
                        JOIN CAMPUSTASK
                      </p>

                      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Create your account
                      </h1>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Join CampusTask and start collaborating with your
                        campus community.
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Sparkles size={21} />
                    </div>

                  </div>


                  {/* ================= FORM ================= */}

                  <form className="mt-8 space-y-5">


                    {/* Full Name */}

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Full name
                      </label>

                      <div className="relative">

                        <User
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />

                      </div>
                    </div>


                    {/* Email */}

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email address
                      </label>

                      <div className="relative">

                        <Mail
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />

                      </div>
                    </div>


                    {/* Password */}

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Password
                      </label>

                      <div className="relative">

                        <Lock
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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


                    {/* Confirm Password */}

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Confirm password
                      </label>

                      <div className="relative">

                        <Lock
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                          aria-label="Toggle confirm password visibility"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={19} />
                          ) : (
                            <Eye size={19} />
                          )}
                        </button>

                      </div>
                    </div>


                    {/* Terms */}

                    <label className="flex cursor-pointer items-start gap-3 pt-1">

                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        I agree to the{" "}
                        <span className="font-semibold text-blue-600">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-blue-600">
                          Privacy Policy
                        </span>
                        .
                      </span>

                    </label>


                    {/* Sign Up Button */}

                    <button
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
                    >
                      Create account
                    </button>

                  </form>


                  {/* Login */}

                  <p className="mt-7 text-center text-sm text-slate-600">
                    Already have an account?{" "}

                    <Link
                      href="/login"
                      className="font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Log in
                    </Link>

                  </p>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}