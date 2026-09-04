"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ClipboardList,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Settings,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Browse Tasks",
    href: "/tasks",
    icon: ClipboardList,
  },
  {
    name: "Post a Task",
    href: "/tasks/create",
    icon: Plus,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE MENU BUTTON ================= */}

      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-lg lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>


      {/* ================= MOBILE OVERLAY ================= */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}


      {/* ================= SIDEBAR ================= */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ================= LOGO ================= */}

        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/25">
              C
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>


          {/* Close button - mobile */}

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Close menu"
          >
            <X size={21} />
          </button>

        </div>


        {/* ================= NAVIGATION ================= */}

        <nav className="flex-1 px-4 py-7">

          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Workspace
          </p>


          <div className="space-y-1">

            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    size={20}
                    className={
                      isActive
                        ? "text-white"
                        : "text-slate-400 transition group-hover:text-blue-600"
                    }
                  />

                  {item.name}

                  {/* Small notification badge */}

                  {item.name === "Messages" && (
                    <span
                      className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                        isActive
                          ? "bg-white text-blue-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      3
                    </span>
                  )}

                </Link>
              );
            })}

          </div>


          {/* ================= QUICK ACTION ================= */}

          <div className="mt-8">

            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick access
            </p>


            <button
              className="flex w-full items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-3 py-3 text-left text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/20">
                <Plus size={18} />
              </div>

              <div>
                <p>Need help?</p>

                <p className="mt-0.5 text-xs font-normal text-blue-500">
                  Post a task
                </p>
              </div>
            </button>

          </div>

        </nav>


        {/* ================= BOTTOM SECTION ================= */}

        <div className="border-t border-slate-100 p-4">


          {/* Notifications */}

          <button className="mb-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">

            <div className="relative">

              <Bell size={20} className="text-slate-400" />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600" />

            </div>

            Notifications

          </button>


          {/* Settings */}

          <Link
            href="/settings"
            className="mb-3 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Settings size={20} className="text-slate-400" />

            Settings
          </Link>


          {/* ================= USER CARD ================= */}

          <div className="border-t border-slate-100 pt-4">

            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

              {/* Avatar */}

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
                A
              </div>


              {/* User info */}

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold text-slate-800">
                  Ayush Anand
                </p>

                <p className="truncate text-xs text-slate-500">
                  Student
                </p>

              </div>


              {/* Logout */}

              <button
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-red-500"
                aria-label="Log out"
                title="Log out"
              >
                <LogOut size={18} />
              </button>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
}