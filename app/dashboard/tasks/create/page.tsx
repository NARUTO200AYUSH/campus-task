"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  ImagePlus,
  Palette,
  Send,
  X,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

const categories = [
  {
    name: "Academic",
    icon: BookOpen,
    description: "Assignments, notes, and study help",
  },
  {
    name: "Technology",
    icon: Code2,
    description: "Programming, projects, and technical help",
  },
  {
    name: "Creative",
    icon: Palette,
    description: "Design, presentations, and creative work",
  },
  {
    name: "Career",
    icon: BriefcaseBusiness,
    description: "Interviews, resumes, and career guidance",
  },
];

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !category || !description) {
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setTitle("");
      setCategory("");
      setDescription("");
      setBudget("");
      setDeadline("");
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-72">
        <Topbar />

        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* ================= HEADER ================= */}

          <section>
            <Link
              href="/dashboard/tasks"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={17} />
              Back to tasks
            </Link>

            <p className="mt-7 text-sm font-semibold tracking-wide text-blue-600">
              CREATE TASK
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Post a new task
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Tell your campus community what you need help with. The clearer
              your task is, the easier it is for the right student to help you.
            </p>
          </section>

          {/* ================= SUCCESS MESSAGE ================= */}

          {submitted && (
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Send size={19} />
              </div>

              <div>
                <h3 className="font-semibold text-green-800">
                  Task posted successfully!
                </h3>

                <p className="mt-1 text-sm text-green-700">
                  Your task is now visible to the CampusTask community.
                </p>
              </div>
            </div>
          )}

          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            {/* ================= BASIC DETAILS ================= */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileText size={19} />
                </div>

                <div>
                  <h2 className="text-lg font-bold">Task details</h2>

                  <p className="text-sm text-slate-500">
                    Provide the basic information about your task.
                  </p>
                </div>
              </div>

              {/* TITLE */}

              <div className="mt-8">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-slate-700"
                >
                  Task title <span className="text-red-500">*</span>
                </label>

                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="For example: Need help with Physics assignment"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Keep your title short and clear.
                </p>
              </div>

              {/* ================= CATEGORY ================= */}

              <div className="mt-8">
                <label className="text-sm font-semibold text-slate-700">
                  Category <span className="text-red-500">*</span>
                </label>

                <p className="mt-1 text-xs text-slate-400">
                  Select the category that best describes your task.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {categories.map((item) => {
                    const Icon = item.icon;
                    const selected = category === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setCategory(item.name)}
                        className={`flex items-center gap-4 rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-blue-500 bg-blue-50 shadow-sm"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            selected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <div>
                          <p
                            className={`text-sm font-semibold ${
                              selected
                                ? "text-blue-700"
                                : "text-slate-700"
                            }`}
                          >
                            {item.name}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="mt-8">
                <label
                  htmlFor="description"
                  className="text-sm font-semibold text-slate-700"
                >
                  Description <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain what you need help with, what the expected outcome is, and any important details..."
                  rows={7}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>Be as specific as possible.</span>
                  <span>{description.length} characters</span>
                </div>
              </div>
            </div>

            {/* ================= ADDITIONAL DETAILS ================= */}

            <div className="mt-10 border-t border-slate-100 pt-8">
              <h2 className="text-lg font-bold">Additional details</h2>

              <p className="mt-1 text-sm text-slate-500">
                These details are optional but can help students understand your
                task better.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* BUDGET */}

                <div>
                  <label
                    htmlFor="budget"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Budget
                  </label>

                  <input
                    id="budget"
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="For example: ₹200"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    Leave empty if the task is unpaid.
                  </p>
                </div>

                {/* DEADLINE */}

                <div>
                  <label
                    htmlFor="deadline"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Deadline
                  </label>

                  <input
                    id="deadline"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    When do you need this task completed?
                  </p>
                </div>
              </div>

              {/* ATTACHMENTS */}

              <div className="mt-6">
                <label className="text-sm font-semibold text-slate-700">
                  Attachments
                </label>

                <button
                  type="button"
                  className="mt-2 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 px-6 py-8 text-center transition hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                    <ImagePlus size={21} />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    Add attachments
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Upload images, PDFs, documents, or other useful files.
                  </p>
                </button>
              </div>
            </div>

            {/* ================= ACTIONS ================= */}

            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/dashboard/tasks"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={!title || !category || !description}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                <Send size={18} />
                Post task
              </button>
            </div>
          </form>

          {/* ================= TIP ================= */}

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                💡
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Tip for getting better responses
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Clearly explain what you need, mention any deadlines, and add
                  relevant details so other students can quickly understand your
                  task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}