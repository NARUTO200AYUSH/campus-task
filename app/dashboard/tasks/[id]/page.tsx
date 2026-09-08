"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import {
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  Code2,
  DollarSign,
  MapPin,
  MessageSquare,
  Palette,
  Send,
  Users,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import TaskChat from "@/components/dashboard/task-chat";

import { tasks } from "@/lib/tasks";

export default function TaskDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [chatOpen, setChatOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  const task = tasks.find((task) => task.id === id);

  /* ================= TASK NOT FOUND ================= */

  if (!task) {
    return (
      <main className="min-h-screen bg-[#f8fafc] text-slate-900">
        <Sidebar />

        <div className="min-h-screen lg:pl-[280px]">
          <Topbar />

          <div className="flex min-h-[80vh] items-center justify-center px-5">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                <BookOpen size={28} className="text-slate-400" />
              </div>

              <h1 className="mt-6 text-2xl font-bold text-slate-900">
                Task not found
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                The task you are looking for does not exist.
              </p>

              <Link
                href="/dashboard/tasks"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <ArrowLeft size={17} />
                Back to tasks
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ================= CATEGORY ICON ================= */

  const getCategoryIcon = () => {
    switch (task.category) {
      case "Academic":
        return <BookOpen size={25} />;

      case "Technology":
        return <Code2 size={25} />;

      case "Creative":
        return <Palette size={25} />;

      case "Career":
        return <BriefcaseBusiness size={25} />;

      default:
        return <BookOpen size={25} />;
    }
  };

  /* ================= CATEGORY STYLE ================= */

  const getCategoryStyles = () => {
    switch (task.category) {
      case "Academic":
        return {
          icon: "bg-blue-50 text-blue-600",
          text: "text-blue-600",
        };

      case "Technology":
        return {
          icon: "bg-indigo-50 text-indigo-600",
          text: "text-indigo-600",
        };

      case "Creative":
        return {
          icon: "bg-purple-50 text-purple-600",
          text: "text-purple-600",
        };

      case "Career":
        return {
          icon: "bg-orange-50 text-orange-600",
          text: "text-orange-600",
        };

      default:
        return {
          icon: "bg-slate-100 text-slate-600",
          text: "text-slate-600",
        };
    }
  };

  const categoryStyles = getCategoryStyles();

  /* ================= PAGE ================= */

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-[280px]">
        <Topbar />

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* ================= BACK BUTTON ================= */}

          <Link
            href="/dashboard/tasks"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Browse Tasks
          </Link>

          {/* ================= MAIN GRID ================= */}

          <div className="mt-7 grid gap-7 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* ========================================= */}
            {/* LEFT SIDE */}
            {/* ========================================= */}

            <div className="space-y-7">
              {/* ================= TASK CARD ================= */}

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                {/* HEADER */}

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    {/* CATEGORY ICON */}

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${categoryStyles.icon}`}
                    >
                      {getCategoryIcon()}
                    </div>

                    {/* TITLE */}

                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-wider ${categoryStyles.text}`}
                      >
                        {task.category}
                      </p>

                      <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {task.title}
                      </h1>

                      <p className="mt-3 text-sm text-slate-500">
                        Posted {task.time}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}

                  <span
                    className={`self-start rounded-full px-4 py-2 text-sm font-semibold ${
                      task.status.toLowerCase() === "open"
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                {/* ================= QUICK DETAILS ================= */}

                <div className="mt-8 grid gap-3 border-y border-slate-100 py-6 sm:grid-cols-3">
                  <QuickDetail
                    icon={<DollarSign size={18} />}
                    label="Budget"
                    value={task.budget || "Not specified"}
                  />

                  <QuickDetail
                    icon={<Calendar size={18} />}
                    label="Deadline"
                    value={task.deadline || "Not specified"}
                  />

                  <QuickDetail
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={task.location || "Not specified"}
                  />
                </div>

                {/* ================= DESCRIPTION ================= */}

                <section className="mt-8">
                  <h2 className="text-lg font-bold text-slate-900">
                    About this task
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {task.description}
                  </p>
                </section>

                {/* ================= TASK DETAILS ================= */}

                <section className="mt-10 border-t border-slate-100 pt-8">
                  <h2 className="text-lg font-bold text-slate-900">
                    Task details
                  </h2>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <DetailItem
                      icon={<DollarSign size={19} />}
                      label="Budget"
                      value={task.budget || "Not specified"}
                    />

                    <DetailItem
                      icon={<Calendar size={19} />}
                      label="Deadline"
                      value={task.deadline || "Not specified"}
                    />

                    <DetailItem
                      icon={<MapPin size={19} />}
                      label="Location"
                      value={task.location || "Not specified"}
                    />

                    <DetailItem
                      icon={<Users size={19} />}
                      label="Applications"
                      value={`${task.applications || 0} students`}
                    />
                  </div>
                </section>
              </article>

              {/* ================= TASK CHAT ================= */}

              {chatOpen && (
                <TaskChat
                  taskTitle={task.title}
                  author={task.author}
                  onClose={() => setChatOpen(false)}
                />
              )}
            </div>

            {/* ========================================= */}
            {/* RIGHT SIDEBAR */}
            {/* ========================================= */}

            <aside className="space-y-5">
              {/* ================= POSTED BY ================= */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Posted by
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
                    {task.author.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-semibold text-slate-900">
                      {task.author}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Campus student
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= APPLICATION ================= */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Send size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      Interested in helping?
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Apply for this task and connect with the student.
                    </p>
                  </div>
                </div>

                {/* APPLY BUTTON */}

                <button
                  onClick={() => setApplied(true)}
                  disabled={applied}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    applied
                      ? "cursor-default bg-green-50 text-green-600"
                      : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                  }`}
                >
                  {applied ? (
                    <>
                      <CheckCircle2 size={18} />
                      Application submitted
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Apply for task
                    </>
                  )}
                </button>

                {/* MESSAGE BUTTON */}

                <button
                  onClick={() => {
                    setChatOpen(true);

                    setTimeout(() => {
                      document
                        .getElementById("task-discussion")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 100);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <MessageSquare size={18} />
                  Message {task.author.split(" ")[0]}
                </button>
              </div>

              {/* ================= APPLICATION COUNT ================= */}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Users size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {task.applications || 0} applications
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Students interested in this task
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SAFETY NOTE ================= */}

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-semibold text-blue-900">
                  Keep it task-related
                </p>

                <p className="mt-2 text-xs leading-5 text-blue-700">
                  Discuss requirements, deadlines and expectations directly
                  within this task conversation.
                </p>
              </div>
            </aside>
          </div>

          {/* ================= HIDDEN ANCHOR ================= */}

          {chatOpen && (
            <div
              id="task-discussion"
              className="pointer-events-none h-1"
            />
          )}
        </div>
      </div>
    </main>
  );
}

/* ===================================================== */
/* QUICK DETAIL COMPONENT */
/* ===================================================== */

function QuickDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
      <div className="text-blue-600">{icon}</div>

      <div>
        <p className="text-xs text-slate-500">{label}</p>

        <p className="mt-1 text-sm font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ===================================================== */
/* DETAIL ITEM COMPONENT */
/* ===================================================== */

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}