"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [search, setSearch] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">

        {/* SEARCH */}
        <div className="relative hidden max-w-xl flex-1 md:block">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks, skills, or students..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* MOBILE LOGO */}
        <div className="flex flex-1 justify-center md:hidden">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Campus<span className="text-blue-600">Task</span>
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-3">

          {/* Mobile Search */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 md:hidden"
            aria-label="Search"
          >
            <Search size={21} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Notifications"
            >
              <Bell size={20} />

              <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600" />
            </button>

            {notificationOpen && (
              <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      You have 3 new updates
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    3 new
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  <NotificationItem
                    title="New task available"
                    description="A new academic task was posted."
                    time="2 min ago"
                  />

                  <NotificationItem
                    title="Someone responded"
                    description="You received a response to your task."
                    time="15 min ago"
                  />

                  <NotificationItem
                    title="Welcome to CampusTask!"
                    description="Your account is ready to go."
                    time="Today"
                  />
                </div>

                <button className="w-full border-t border-slate-100 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  View all notifications
                </button>
              </div>
            )}
          </div>

          {/* User Profile */}
          <button className="hidden items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-slate-100 sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
              A
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold text-slate-800">
                Ayush
              </p>

              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>

            <ChevronDown
              size={17}
              className="hidden text-slate-400 lg:block"
            />
          </button>

          {/* Mobile Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white sm:hidden">
            A
          </div>

        </div>
      </div>
    </header>
  );
}

function NotificationItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <button className="w-full px-5 py-4 text-left transition hover:bg-slate-50">
      <div className="flex gap-3">
        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-semibold text-slate-800">
              {title}
            </p>

            <span className="shrink-0 text-xs text-slate-400">
              {time}
            </span>
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}