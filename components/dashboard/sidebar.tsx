"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  ClipboardList,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Browse Tasks",
    href: "/dashboard/tasks",
    icon: ClipboardList,
  },
  {
    name: "My Tasks",
    href: "/dashboard/my-tasks",
    icon: FileText,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: Users,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* LOGO */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link
            href="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm">
              C
            </div>

            <span className="text-lg font-bold text-slate-900">
              Campus<span className="text-blue-600">Task</span>
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    size={19}
                    className={isActive ? "text-white" : "text-slate-400"}
                  />

                  <span>{item.name}</span>

                  {item.name === "Messages" && (
                    <span
                      className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
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

          {/* QUICK ACCESS */}
          <div className="mt-8">
            <p className="mb-3 px-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Quick Access
            </p>

            <Link
              href="/dashboard/tasks/create"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                pathname === "/dashboard/tasks/create"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }`}
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                  pathname === "/dashboard/tasks/create"
                    ? "bg-white/20"
                    : "bg-blue-600"
                }`}
              >
                <span
                  className={
                    pathname === "/dashboard/tasks/create"
                      ? "text-white"
                      : "text-lg font-medium text-white"
                  }
                >
                  +
                </span>
              </div>

              <div>
                <p>Need help?</p>
                <p
                  className={`text-[10px] font-medium ${
                    pathname === "/dashboard/tasks/create"
                      ? "text-blue-100"
                      : "text-slate-400"
                  }`}
                >
                  Post a task
                </p>
              </div>
            </Link>
          </div>
        </nav>

        {/* BOTTOM NAVIGATION */}
        <div className="border-t border-slate-100 p-4">
          <Link
            href="/dashboard/settings"
            onClick={() => setMobileOpen(false)}
            className={`mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              isActiveRoute("/dashboard/settings")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Settings
              size={19}
              className={
                isActiveRoute("/dashboard/settings")
                  ? "text-blue-600"
                  : "text-slate-400"
              }
            />
            Settings
          </Link>

          <Link
            href="/dashboard/help"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              isActiveRoute("/dashboard/help")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <HelpCircle
              size={19}
              className={
                isActiveRoute("/dashboard/help")
                  ? "text-blue-600"
                  : "text-slate-400"
              }
            />
            Help
          </Link>

          {/* USER */}
          <div className="mt-3 flex items-center gap-3 rounded-xl px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                Ayush Anand
              </p>

              <p className="text-xs text-slate-500">Student</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}