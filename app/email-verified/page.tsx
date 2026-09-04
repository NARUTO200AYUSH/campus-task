"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  RefreshCw,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendMessage, setResendMessage] = useState(false);
  const [email, setEmail] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("campusTaskEmail");

    if (!storedEmail) {
      router.push("/register");
      return;
    }

    setEmail(storedEmail);
  }, [router]);

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

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedData) return;

    const newOtp = ["", "", "", "", "", ""];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();

    setResendMessage(true);

    setTimeout(() => {
      setResendMessage(false);
    }, 3000);
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length !== 6) return;

    sessionStorage.setItem("campusTaskVerified", "true");

    router.push("/email-verified");
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
              <Image
                src="/campus.png"
                alt="Campus community"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/5 to-transparent" />

              {/* Logo */}

              <Link
                href="/"
                className="absolute left-8 top-8 z-10 flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/30">
                  C
                </div>

                <span className="text-xl font-bold text-slate-900">
                  Campus<span className="text-blue-600">Task</span>
                </span>
              </Link>

              {/* Transparent content */}

              <div className="absolute inset-x-8 top-[20%] z-10">
                <div className="max-w-[350px]">
                  <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900">
                    One step
                    <br />
                    closer to your
                    <br />
                    campus community.
                  </h2>

                  <p className="mt-5 text-base leading-7 text-slate-700">
                    Verify your email to securely activate your CampusTask
                    account.
                  </p>

                  <div className="mt-10 space-y-6">
                    <Feature
                      icon={<Mail size={25} />}
                      title="Check your inbox"
                      description="We've sent a secure verification code."
                    />

                    <Feature
                      icon={<ShieldCheck size={25} />}
                      title="Secure verification"
                      description="Your account is protected every step of the way."
                    />

                    <Feature
                      icon={<UsersRound size={25} />}
                      title="Join the community"
                      description="Connect and collaborate with fellow students."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ================= RIGHT SIDE ================= */}

            <section className="flex items-center justify-center bg-[#fbfdff] px-5 py-12 sm:px-10 lg:px-16">
              <div className="w-full max-w-md">
                <Link
                  href="/register"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                >
                  <ArrowLeft size={17} />
                  Back to sign up
                </Link>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Mail size={30} />
                  </div>

                  {/* Heading */}

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

                    <p className="mt-2 break-all text-sm font-semibold text-slate-800">
                      {email || "you@example.com"}
                    </p>
                  </div>

                  {/* OTP */}

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
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onPaste={handlePaste}
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 text-center text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:h-14"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Verify */}

                  <button
                    onClick={handleVerify}
                    disabled={otp.join("").length !== 6}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    Verify email
                    <CheckCircle2 size={19} />
                  </button>

                  {/* Resend */}

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

                  {/* Security */}

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

                  <p className="mt-7 text-center text-sm text-slate-600">
                    Already verified?{" "}
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

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/45 text-blue-600 shadow-sm backdrop-blur-sm">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-slate-700">
          {description}
        </p>
      </div>
    </div>
  );
}