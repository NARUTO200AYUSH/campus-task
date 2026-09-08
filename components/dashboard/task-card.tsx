"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Code2,
  User,
} from "lucide-react";

type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  time: string;
  status: string;
};

export default function TaskCard({
  id,
  title,
  description,
  category,
  author,
  time,
  status,
}: TaskCardProps) {
  const isAcademic = category.toLowerCase() === "academic";
  const isTechnology = category.toLowerCase() === "technology";

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6">

      {/* ================= TOP SECTION ================= */}

      <div className="flex items-start justify-between gap-4">

        {/* CATEGORY ICON */}

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            isAcademic
              ? "bg-blue-50 text-blue-600"
              : isTechnology
              ? "bg-indigo-50 text-indigo-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {isAcademic ? (
            <BookOpen size={21} />
          ) : isTechnology ? (
            <Code2 size={21} />
          ) : (
            <ClipboardIcon />
          )}
        </div>

        {/* STATUS */}

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status.toLowerCase() === "open"
              ? "bg-green-50 text-green-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {status}
        </span>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="mt-5">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p
              className={`text-xs font-bold uppercase tracking-wider ${
                isAcademic
                  ? "text-blue-600"
                  : isTechnology
                  ? "text-indigo-600"
                  : "text-slate-500"
              }`}
            >
              {category}
            </p>

            <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900 transition group-hover:text-blue-600 sm:text-xl">
              {title}
            </h3>
          </div>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-slate-300 transition group-hover:text-blue-600"
          />

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

      </div>


      {/* ================= FOOTER ================= */}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4 text-xs text-slate-500">

          <div className="flex items-center gap-2">
            <User size={15} className="text-slate-400" />

            <span className="font-medium">
              {author}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-slate-400" />

            <span>{time}</span>
          </div>

        </div>


        {/* VIEW TASK */}

        <Link
          href={`/dashboard/tasks/${id}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          View task
          <ArrowUpRight size={16} />
        </Link>

      </div>

    </article>
  );
}


/* ================= FALLBACK ICON ================= */

function ClipboardIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="8"
        y="3"
        width="8"
        height="4"
        rx="1"
      />

      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0-2-2h-2" />

      <path d="M9 12h6" />

      <path d="M9 16h6" />
    </svg>
  );
}