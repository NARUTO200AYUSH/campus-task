"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageSquare,
  User,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

const applications = [
  {
    id: 1,
    taskId: "physics-assignment",
    ownerId: "rahul",
    taskTitle: "Need help with Physics assignment",
    category: "Academic",
    owner: "Rahul Sharma",
    initials: "RS",
    appliedTime: "Today, 10:35 AM",
    status: "Pending",
    budget: "₹200",
    deadline: "2 days left",
    description:
      "Looking for someone who can help me understand electromagnetic induction and solve a few questions.",
    avatar: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    taskId: "react-teammate",
    ownerId: "priya",
    taskTitle: "Looking for a React.js teammate",
    category: "Technology",
    owner: "Priya Singh",
    initials: "PS",
    appliedTime: "Today, 9:20 AM",
    status: "Pending",
    budget: "₹500",
    deadline: "5 days left",
    description:
      "Need a student interested in frontend development for a small campus project.",
    avatar: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    taskId: "presentation-designer",
    ownerId: "rohan",
    taskTitle: "Looking for a presentation designer",
    category: "Creative",
    owner: "Rohan Gupta",
    initials: "RG",
    appliedTime: "Yesterday, 4:15 PM",
    status: "Accepted",
    budget: "₹250",
    deadline: "2 days left",
    description:
      "Need help creating a clean and professional presentation for an upcoming college event.",
    avatar: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    taskId: "interview-help",
    ownerId: "karan",
    taskTitle: "Need help preparing for an interview",
    category: "Career",
    owner: "Karan Singh",
    initials: "KS",
    appliedTime: "Sep 10, 2:30 PM",
    status: "Pending",
    budget: "₹300",
    deadline: "1 week left",
    description:
      "Looking for someone who can help me practice common interview questions and improve my confidence.",
    avatar: "bg-sky-100 text-sky-700",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-72">
        <Topbar />

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* Header */}
          <section className="flex items-end justify-between gap-6">
            <div>
              <Link
                href="/dashboard"
                className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                <ArrowLeft size={17} />
                Back to dashboard
              </Link>

              <p className="text-sm font-semibold tracking-wide text-blue-600">
                WORKSPACE
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Applications
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Keep track of the tasks you have applied for and communicate
                with task owners.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm font-medium text-slate-500 sm:flex">
              <User size={18} />
              {applications.length} applications
            </div>
          </section>

          {/* Applications */}
          <section className="mt-10 space-y-4">
            {applications.map((application) => (
              <article
                key={application.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Left */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-4">
                      {/* Owner avatar */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${application.avatar}`}
                      >
                        {application.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                            {application.taskTitle}
                          </h2>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                              application.status === "Accepted"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {application.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs font-medium text-blue-600">
                          {application.category}
                        </p>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                          {application.description}
                        </p>

                        {/* Meta */}
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <User size={14} />
                            {application.owner}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 size={14} />
                            Applied {application.appliedTime}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {application.deadline}
                          </span>

                          <span className="font-semibold text-slate-700">
                            {application.budget}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right actions */}
                  <div className="flex shrink-0 items-center gap-3 border-t border-slate-100 pt-4 lg:border-0 lg:pt-0">
                    <Link
                      href={`/dashboard/tasks/${application.taskId}`}
                      className="flex h-10 items-center justify-center rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                    >
                      View task
                    </Link>

                    <Link
                      href={`/dashboard/messages?person=${application.ownerId}&task=${application.taskId}`}
                      className="flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
                    >
                      <MessageSquare size={15} />
                      Message {application.owner.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Empty-looking footer hint */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle2 size={14} />
            Your applications will appear here
          </div>
        </div>
      </div>
    </main>
  );
}