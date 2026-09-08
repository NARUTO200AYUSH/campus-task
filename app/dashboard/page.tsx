"use client";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import TaskCard from "@/components/dashboard/task-card";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Plus,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* ================= SIDEBAR ================= */}

      <Sidebar />

      {/* ================= MAIN AREA ================= */}

      <div className="min-h-screen lg:pl-72">

        {/* ================= TOPBAR ================= */}

        <Topbar />

        {/* ================= CONTENT ================= */}

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

          {/* ================= WELCOME ================= */}

          <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-600">
                DASHBOARD
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome back, Ayush 👋
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Here&apos;s what&apos;s happening in your CampusTask community
                today.
              </p>
            </div>

            <Link
              href="/dashboard/tasks/create"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
            >
              <Plus size={19} />
              Post a task
            </Link>

          </section>


          {/* ================= STATS ================= */}

          <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Active tasks"
              value="12"
              description="Tasks available for you"
              icon={<ClipboardList size={22} />}
            />

            <StatCard
              title="Tasks completed"
              value="08"
              description="Great progress this month"
              icon={<CheckCircle2 size={22} />}
            />

            <StatCard
              title="Pending requests"
              value="03"
              description="Waiting for your response"
              icon={<Clock3 size={22} />}
            />

            <StatCard
              title="Your contribution"
              value="24"
              description="Students helped"
              icon={<TrendingUp size={22} />}
            />

          </section>


          {/* ================= MAIN GRID ================= */}

          <section className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">


            {/* ================= TASKS ================= */}

            <div>

              <div className="mb-6 flex items-center justify-between gap-4">

                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Available tasks
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Discover tasks where you can help other students.
                  </p>
                </div>

                <Link
                  href="/dashboard/tasks"
                  className="hidden items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:flex"
                >
                  View all
                  <ArrowRight size={17} />
                </Link>

              </div>


              {/* ================= TASK LIST ================= */}

              <div className="grid gap-5">

                <TaskCard
                  id="physics-assignment"
                  title="Need help with Physics assignment"
                  description="Looking for someone who can help me understand electromagnetic induction and solve a few questions."
                  category="Academic"
                  author="Rahul Sharma"
                  time="10 min ago"
                  status="Open"
                />

                <TaskCard
                  id="react-teammate"
                  title="Looking for a React.js teammate"
                  description="Need a student interested in frontend development for a small campus project."
                  category="Technology"
                  author="Priya Singh"
                  time="32 min ago"
                  status="Open"
                />

                <TaskCard
                  id="math-notes"
                  title="Need notes for Mathematics"
                  description="Looking for complete notes and important questions for integration and differential equations."
                  category="Academic"
                  author="Aman Kumar"
                  time="1 hour ago"
                  status="Open"
                />

              </div>

            </div>


            {/* ================= RIGHT PANEL ================= */}

            <aside className="space-y-6">


              {/* QUICK ACTIONS */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="text-lg font-bold">
                  Quick actions
                </h3>

                <div className="mt-5 space-y-3">

                  <QuickAction
                    href="/dashboard/tasks/create"
                    icon={<Plus size={18} />}
                    title="Post a task"
                    description="Ask your campus community for help."
                  />

                  <QuickAction
                    href="/dashboard/tasks"
                    icon={<ClipboardList size={18} />}
                    title="Browse tasks"
                    description="Find something you can help with."
                  />

                </div>

              </div>


              {/* ACTIVITY */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-bold">
                    Recent activity
                  </h3>

                  <span className="text-xs font-medium text-slate-400">
                    Today
                  </span>

                </div>


                <div className="mt-6 space-y-5">

                  <ActivityItem
                    title="Your account was created"
                    time="Today"
                  />

                  <ActivityItem
                    title="Email successfully verified"
                    time="Today"
                  />

                  <ActivityItem
                    title="Welcome to CampusTask"
                    time="Today"
                  />

                </div>

              </div>

            </aside>

          </section>

        </div>

      </div>

    </main>
  );
}


/* ================= STAT CARD ================= */

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

      </div>

      <p className="mt-4 text-xs text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ================= QUICK ACTION ================= */

function QuickAction({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-blue-100 hover:bg-blue-50/50"
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

    </Link>
  );
}


/* ================= ACTIVITY ITEM ================= */

function ActivityItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

      <div>
        <p className="text-sm font-medium text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {time}
        </p>
      </div>

    </div>
  );
}