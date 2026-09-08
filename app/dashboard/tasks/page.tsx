"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Filter,
  Palette,
  Search,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import TaskCard from "@/components/dashboard/task-card";
import { tasks, Task } from "@/lib/tasks";

const categories = [
  "All Categories",
  "Academic",
  "Technology",
  "Creative",
  "Career",
];

const budgets = [
  "All Budgets",
  "Under ₹200",
  "₹200 - ₹300",
  "Above ₹300",
];

const sortOptions = [
  "Latest",
  "Oldest",
  "Highest Budget",
  "Lowest Budget",
];

export default function TasksPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [selectedBudget, setSelectedBudget] =
    useState("All Budgets");

  const [sortBy, setSortBy] = useState("Latest");

  const [selectedTask, setSelectedTask] =
    useState<Task>(tasks[0]);

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    /* SEARCH */

    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm) ||
          task.author.toLowerCase().includes(searchTerm) ||
          task.category.toLowerCase().includes(searchTerm) ||
          task.description.toLowerCase().includes(searchTerm)
      );
    }

    /* CATEGORY */

    if (selectedCategory !== "All Categories") {
      result = result.filter(
        (task) => task.category === selectedCategory
      );
    }

    /* BUDGET */

    if (selectedBudget !== "All Budgets") {
      result = result.filter((task) => {
        const amount = Number(
          task.budget?.replace(/[₹,]/g, "") || 0
        );

        if (selectedBudget === "Under ₹200") {
          return amount < 200;
        }

        if (selectedBudget === "₹200 - ₹300") {
          return amount >= 200 && amount <= 300;
        }

        if (selectedBudget === "Above ₹300") {
          return amount > 300;
        }

        return true;
      });
    }

    /* SORT */

    if (sortBy === "Highest Budget") {
      result.sort((a, b) => {
        const budgetA = Number(
          a.budget?.replace(/[₹,]/g, "") || 0
        );

        const budgetB = Number(
          b.budget?.replace(/[₹,]/g, "") || 0
        );

        return budgetB - budgetA;
      });
    }

    if (sortBy === "Lowest Budget") {
      result.sort((a, b) => {
        const budgetA = Number(
          a.budget?.replace(/[₹,]/g, "") || 0
        );

        const budgetB = Number(
          b.budget?.replace(/[₹,]/g, "") || 0
        );

        return budgetA - budgetB;
      });
    }

    return result;
  }, [
    search,
    selectedCategory,
    selectedBudget,
    sortBy,
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic":
        return <BookOpen size={21} />;

      case "Technology":
        return <Code2 size={21} />;

      case "Creative":
        return <Palette size={21} />;

      case "Career":
        return <BriefcaseBusiness size={21} />;

      default:
        return <BookOpen size={21} />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-50 text-blue-600";

      case "Technology":
        return "bg-indigo-50 text-indigo-600";

      case "Creative":
        return "bg-purple-50 text-purple-600";

      case "Career":
        return "bg-orange-50 text-orange-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-[270px]">
        <Topbar />

        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10">
          {/* PAGE TITLE */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Browse Tasks
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Find tasks where you can help other students.
            </p>
          </div>

          {/* MAIN GRID */}

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* LEFT SIDE */}

            <section>
              {/* SEARCH */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="relative">
                  <Search
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search tasks..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* FILTERS */}

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {/* CATEGORY */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-500">
                      Category
                    </label>

                    <select
                      value={selectedCategory}
                      onChange={(e) =>
                        setSelectedCategory(e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400"
                    >
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* BUDGET */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-500">
                      Budget
                    </label>

                    <select
                      value={selectedBudget}
                      onChange={(e) =>
                        setSelectedBudget(e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400"
                    >
                      {budgets.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* SORT */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-500">
                      Sort By
                    </label>

                    <select
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400"
                    >
                      {sortOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* TASK LIST */}

              <div className="mt-6 space-y-3">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      category={task.category}
                      author={task.author}
                      budget={task.budget}
                      deadline={task.deadline}
                      status={task.status}
                      isSelected={
                        selectedTask?.id === task.id
                      }
                      onClick={() => setSelectedTask(task)}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <Search
                        size={22}
                        className="text-slate-400"
                      />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-800">
                      No tasks found
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Try changing your filters.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* RIGHT SIDE PREVIEW */}

            <aside className="hidden xl:block">
              {selectedTask && (
                <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  {/* HEADER */}

                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${getCategoryStyles(
                        selectedTask.category
                      )}`}
                    >
                      {getCategoryIcon(
                        selectedTask.category
                      )}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        selectedTask.status === "Open"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {selectedTask.status}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h2 className="mt-6 text-xl font-bold leading-7 text-slate-900">
                    {selectedTask.title}
                  </h2>

                  {/* AUTHOR */}

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {selectedTask.author.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {selectedTask.author}
                      </p>

                      <p className="text-xs text-slate-500">
                        Campus student
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-6 text-sm leading-6 text-slate-600">
                    {selectedTask.description}
                  </p>

                  {/* DETAILS */}

                  <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        Budget
                      </span>

                      <span className="font-bold text-slate-900">
                        {selectedTask.budget}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        Deadline
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {selectedTask.deadline}
                      </span>
                    </div>
                  </div>

                  {/* VIEW BUTTON */}

                  <Link
                    href={`/dashboard/tasks/${selectedTask.id}`}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Details
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}