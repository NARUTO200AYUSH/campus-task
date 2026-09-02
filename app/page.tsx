"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  Menu,
  MessageSquare,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900">
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 hover:scale-105">
              C
            </div>

            <span className="text-xl font-bold tracking-tight">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <a
              href="#how-it-works"
              className="transition hover:text-blue-600"
            >
              How it Works
            </a>

            <a
              href="#features"
              className="transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#about"
              className="transition hover:text-blue-600"
            >
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-6 shadow-lg md:hidden">
            <div className="flex flex-col gap-5 font-medium text-slate-700">
              <Link
                href="/"
                onClick={closeMenu}
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="transition hover:text-blue-600"
              >
                How it Works
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="transition hover:text-blue-600"
              >
                Features
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="transition hover:text-blue-600"
              >
                About
              </a>

              <hr className="border-slate-200" />

              <Link
                href="/login"
                onClick={closeMenu}
                className="font-medium transition hover:text-blue-600"
              >
                Log in
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT HERO CONTENT */}

            <div className="max-w-2xl">
              <p className="mb-6 text-sm font-semibold tracking-wide text-blue-600">
                BUILT FOR STUDENTS, BY STUDENTS
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Get things done.
                <span className="block text-blue-600">
                  Learn together.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Post tasks, get help from peers, and build a stronger campus
                community.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>

                <a
                  href="#how-it-works"
                  className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* ================= STUDENT ILLUSTRATION ================= */}

            <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
              {/* Soft background shape */}
              <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-blue-100/80 via-indigo-50 to-blue-50/70" />

              {/* Illustration */}
              <div className="relative z-10 w-full">
                <Image
                  src="/student.png"
                  alt="Students collaborating"
                  width={1000}
                  height={800}
                  priority
                  className="h-auto w-full select-none object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= QUICK FEATURE CARDS ================= */}

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <QuickCard
              icon={<ClipboardList size={28} />}
              title="Post a Task"
              description="Need help with notes, assignments, or projects?"
            />

            <QuickCard
              icon={<MessageSquare size={28} />}
              title="Get Help"
              description="Connect with students and get the support you need."
            />

            <QuickCard
              icon={<BarChart3 size={28} />}
              title="Learn & Grow"
              description="Exchange skills and grow together on campus."
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="scroll-mt-20 border-t border-slate-200 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Helping each other is simple.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              CampusTask makes it easy to ask for help, find tasks, and
              collaborate with other students.
            </p>
          </div>

          {/* Steps */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Step
              number="01"
              title="Post your task"
              description="Tell other students what you need help with."
            />

            <Step
              number="02"
              title="Find the right help"
              description="Connect with students who have the skills you need."
            />

            <Step
              number="03"
              title="Get it done"
              description="Collaborate, learn, and grow together."
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="scroll-mt-20 bg-[#f8fafc] py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              FEATURES
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Everything students need.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A simple platform designed to help students collaborate and
              support each other.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <FeatureBox
              icon={<ClipboardList size={28} />}
              title="Easy Task Posting"
              description="Create and share tasks in just a few simple steps."
            />

            <FeatureBox
              icon={<MessageSquare size={28} />}
              title="Student Collaboration"
              description="Communicate directly and work together easily."
            />

            <FeatureBox
              icon={<BarChart3 size={28} />}
              title="Track Your Progress"
              description="Keep track of tasks and build your experience."
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="scroll-mt-20 border-t border-slate-200 bg-white py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-semibold text-blue-600">
            ABOUT CAMPUSTASK
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Built to make campus collaboration easier.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CampusTask connects students who need help with students who have
            the skills to help. Learn new things, support others, and build a
            stronger student community.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 CampusTask. Built for students.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer transition hover:text-blue-600">
              Privacy
            </span>

            <span className="cursor-pointer transition hover:text-blue-600">
              Terms
            </span>

            <span className="cursor-pointer transition hover:text-blue-600">
              Contact
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ================= QUICK CARD ================= */

function QuickCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ================= HOW IT WORKS STEP ================= */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg">
      <span className="text-sm font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

/* ================= FEATURE BOX ================= */

function FeatureBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}