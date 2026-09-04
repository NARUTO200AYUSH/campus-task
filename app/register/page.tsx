"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  AlertCircle,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  Menu,
  ShieldCheck,
  User,
  UsersRound,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agree?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      agree?: string;
    } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Please create a password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!agree) {
      newErrors.agree = "You must agree to continue.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    sessionStorage.setItem("campusTaskEmail", email);
    sessionStorage.setItem("campusTaskName", fullName);

    setTimeout(() => {
      router.push("/verify-email");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ================= MOBILE NAVBAR ================= */}

      <nav className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
              C
            </div>

            <span className="text-xl font-bold tracking-tight">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

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

      {/* ================= MAIN ================= */}

      <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">
          <div className="grid min-h-[760px] lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= LEFT SIDE ================= */}

            <section className="relative hidden overflow-hidden lg:block">
              <Image
                src="/campus.png"
                alt="Campus students"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Soft readability overlay */}
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

              {/* ================= FLOATING TRANSPARENT CONTENT ================= */}

              <div className="absolute inset-x-8 top-[18%] z-10">
                <div className="max-w-[340px]">
                  <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900">
                    Your campus
                    <br />
                    community
                    <br />
                    starts here.
                  </h2>

                  <p className="mt-5 text-base leading-7 text-slate-700">
                    Connect with students, collaborate on tasks, and grow
                    together.
                  </p>

                  <div className="mt-10 space-y-6">
                    <Feature
                      icon={<UsersRound size={25} />}
                      title="Built for students"
                      description="By students, for students."
                    />

                    <Feature
                      icon={<BriefcaseBusiness size={25} />}
                      title="Collaborate easily"
                      description="Find help, offer help, get things done."
                    />

                    <Feature
                      icon={<ShieldCheck size={25} />}
                      title="Safe & trusted"
                      description="A secure space just for your campus."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ================= RIGHT SIDE ================= */}

            <section className="flex items-center justify-center bg-[#fbfdff] px-5 py-12 sm:px-10 lg:px-16">
              <div className="w-full max-w-md">
                <Link
                  href="/"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                >
                  <ArrowLeft size={17} />
                  Back to home
                </Link>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
                  {/* Heading */}

                  <div>
                    <p className="text-sm font-semibold tracking-wide text-blue-600">
                      JOIN CAMPUSTASK
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      Create your account
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Join CampusTask and start collaborating with your campus
                      community.
                    </p>
                  </div>

                  {/* Form */}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Enter your name"
                          className={`w-full rounded-xl border bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                            errors.fullName
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                          }`}
                        />
                      </div>

                      {errors.fullName && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={14} />
                          {errors.fullName}
                        </p>
                      )}
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
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="you@example.com"
                          className={`w-full rounded-xl border bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                          }`}
                        />
                      </div>

                      {errors.email && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={14} />
                          {errors.email}
                        </p>
                      )}
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
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: undefined });
                          }}
                          placeholder="Create a password"
                          className={`w-full rounded-xl border bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                            errors.password
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                          }`}
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                        >
                          {showPassword ? (
                            <EyeOff size={19} />
                          ) : (
                            <Eye size={19} />
                          )}
                        </button>
                      </div>

                      {errors.password && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={14} />
                          {errors.password}
                        </p>
                      )}
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
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrors({
                              ...errors,
                              confirmPassword: undefined,
                            });
                          }}
                          placeholder="Confirm your password"
                          className={`w-full rounded-xl border bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                            errors.confirmPassword
                              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                          }`}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={19} />
                          ) : (
                            <Eye size={19} />
                          )}
                        </button>
                      </div>

                      {errors.confirmPassword && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={14} />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* Terms */}

                    <div>
                      <label className="flex cursor-pointer items-start gap-3 pt-1">
                        <input
                          type="checkbox"
                          checked={agree}
                          onChange={(e) => {
                            setAgree(e.target.checked);
                            setErrors({ ...errors, agree: undefined });
                          }}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
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

                      {errors.agree && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle size={14} />
                          {errors.agree}
                        </p>
                      )}
                    </div>

                    {/* Button */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create account"
                      )}
                    </button>
                  </form>

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
        <p className="mt-1 text-sm text-slate-700">{description}</p>
      </div>
    </div>
  );
}