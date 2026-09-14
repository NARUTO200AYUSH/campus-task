"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ClipboardList,
  Clock3,
  FileText,
  Plus,
  Users,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import TaskCard from "@/components/dashboard/task-card";

import { tasks } from "@/lib/tasks";

export default function MyTasksPage() {
  /*
    For now, these are the tasks posted by the current user.

    Later, when we connect authentication and a database,
    this will automatically show only the logged-in user's tasks.
  */

  const myTasks = [
    {
      id: "my-web-design",
      title: "Need help designing a college website",
      description:
        "Looking for someone who can help me design a clean and responsive website for a college project.",
      category: "Technology",
      author: "Ayush Anand",
      time: "30 min ago",
      status: "Open",
    },
    {
      id: "my-presentation",
      title: "Need a presentation for college project",
      description:
        "Looking for help creating a professional and visually clean presentation for an upcoming project.",
      category: "Creative",
      author: "Ayush Anand",
      time: "2 hours ago",
      status: "Open",
    },
  ];

  const openTasks = myTasks.filter((task) => task.status === "Open");

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-[270px]">
        <Topbar />

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

          {/* HEADER */}

          <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Link
                href="/dashboard"
                className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                <ArrowLeft size={17} />
                Back to dashboard
              </Link>

              <p className="text-sm font-semibold tracking-wide text-blue-600">
                MY TASKS
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                My tasks
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Manage the tasks you have posted and keep track of student
                applications.
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

          {/* STATS */}

          <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total tasks
                  </p>

                  <p className="mt-3 text-3xl font-bold">
                    {myTasks.length}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ClipboardList size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Active tasks
                  </p>

                  <p className="mt-3 text-3xl font-bold">
                    {openTasks.length}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Clock3 size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total applications
                  </p>

                  <p className="mt-3 text-3xl font-bold">
                    7
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Users size={22} />
                </div>
              </div>
            </div>

          </section>

          {/* TASKS */}

          <section className="mt-10">

            <div className="flex items-end justify-between gap-4">

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Your posted tasks
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Tasks you have posted for the CampusTask community.
                </p>
              </div>

            </div>

            {/* TASK LIST */}

            <div className="mt-6 grid gap-5">

              {myTasks.length > 0 ? (
                myTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    category={task.category}
                    author={task.author}
                    time={task.time}
                    status={task.status}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <FileText size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-800">
                    No tasks posted yet
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    You haven't posted any tasks yet. Create your first task and
                    ask your campus community for help.
                  </p>

                  <Link
                    href="/dashboard/tasks/create"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Plus size={18} />
                    Post your first task
                  </Link>

                </div>
              )}

            </div>

          </section>

        </div>
      </div>
    </main>
  );
}