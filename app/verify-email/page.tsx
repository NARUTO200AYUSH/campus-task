"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendMessage, setResendMessage] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedData) return;

    const newOtp = [...otp];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    setResendMessage(true);

    setTimeout(() => {
      setResendMessage(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* ================= MOBILE NAVBAR ================= */}

      <nav className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex h-20 items-center px-6">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
              C
            </div>

            <span className="text-xl font-bold tracking-tight">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>

        </div>
      </nav>


      {/* ================= MAIN ================= */}

      <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10 lg:py-12">

        <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">

          <div className="grid min-h-[700px] lg:grid-cols-[0.85fr_1.15fr]">


            {/* ================= LEFT SIDE ================= */}

            <section className="relative hidden overflow-hidden lg:block">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100 to-indigo-100" />

              {/* Campus Image */}
              <div className="absolute inset-0">

                <Image
                  src="/campus.png"
                  alt="Campus community"
                  fill
                  priority
                  className="object-cover object-center"
                />

              </div>


              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-blue-900/10 to-white/10" />


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


              {/* Bottom Card */}

              <div className="absolute bottom-10 left-8 right-8 z-10">

                <div className="rounded-2xl border border-white/40 bg-white/85 p-6 shadow-xl backdrop-blur-md">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <ShieldCheck size={22} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Almost there.
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Verify your email to activate your CampusTask account and
                    join your student community.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600">
                    <CheckCircle2 size={17} />
                    Secure account verification
                  </div>

                </div>

              </div>

            </section>


            {/* ================= RIGHT SIDE ================= */}

            <section className="flex items-center justify-center bg-[#fbfdff] px-5 py-12 sm:px-10 lg:px-16">

              <div className="w-full max-w-md">


                {/* Back Button */}

                <Link
                  href="/register"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                >
                  <ArrowLeft size={17} />
                  Back to sign up
                </Link>


                {/* ================= VERIFICATION CARD ================= */}

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">


                  {/* ICON */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

                    <Mail size={30} />

                  </div>


                  {/* HEADING */}

                  <div className="mt-6">

                    <p className="text-sm font-semibold tracking-wide text-blue-600">
                      EMAIL VERIFICATION
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      Check your inbox
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      We&apos;ve sent a 6-digit verification code to your email
                      address.
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      you@example.com
                    </p>

                  </div>


                  {/* ================= OTP ================= */}

                  <div className="mt-9">

                    <p className="mb-4 text-sm font-semibold text-slate-700">
                      Enter verification code
                    </p>


                    <div className="flex justify-between gap-2 sm:gap-3">

                      {otp.map((digit, index) => (

                        <input
                          key={index}
                          ref={(el) => {
                            inputRefs.current[index] = el;
                          }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) =>
                            handleChange(e.target.value, index)
                          }
                          onKeyDown={(e) =>
                            handleKeyDown(e, index)
                          }
                          onPaste={handlePaste}
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 text-center text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:h-14"
                        />

                      ))}

                    </div>

                  </div>


                  {/* VERIFY BUTTON */}

                  <button
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
                  >
                    Verify email
                    <CheckCircle2 size={19} />
                  </button>


                  {/* RESEND */}

                  <div className="mt-7 text-center">

                    <p className="text-sm text-slate-600">
                      Didn&apos;t receive the code?
                    </p>

                    <button
                      type="button"
                      onClick={handleResend}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      <RefreshCw size={16} />
                      Resend verification code
                    </button>


                    {resendMessage && (

                      <p className="mt-4 text-sm font-medium text-green-600">
                        A new verification code has been sent!
                      </p>

                    )}

                  </div>


                  {/* SECURITY NOTE */}

                  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4">

                    <div className="flex gap-3">

                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        For your security, the verification code will expire
                        after a few minutes.
                      </p>

                    </div>

                  </div>


                  {/* LOGIN */}

                  <p className="mt-7 text-center text-sm text-slate-600">

                    Already verified?

                    {" "}

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