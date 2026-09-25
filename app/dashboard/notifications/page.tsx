"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquare,
  UserPlus,
  X,
} from "lucide-react";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

type NotificationType =
  | "application"
  | "message"
  | "accepted"
  | "deadline"
  | "task";

type Notification = {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  group: "Today" | "Earlier";
  read: boolean;
  href: string;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "application",
    title: "New application received",
    description:
      "Rahul Sharma applied to your Physics assignment.",
    time: "10 min ago",
    group: "Today",
    read: false,
    href: "/dashboard/applications",
  },
  {
    id: 2,
    type: "message",
    title: "New message from Rahul Sharma",
    description:
      "Mostly the numerical questions related to Faraday's law.",
    time: "25 min ago",
    group: "Today",
    read: false,
    href: "/dashboard/messages?person=rahul&task=physics-assignment",
  },
  {
    id: 3,
    type: "accepted",
    title: "Application accepted",
    description:
      "Your application for the React.js project was accepted.",
    time: "1 hour ago",
    group: "Today",
    read: false,
    href: "/dashboard/tasks/react-teammate",
  },
  {
    id: 4,
    type: "task",
    title: "Your Physics task is getting attention",
    description:
      "Your Physics assignment has received 4 applications.",
    time: "3 hours ago",
    group: "Today",
    read: true,
    href: "/dashboard/tasks/physics-assignment",
  },
  {
    id: 5,
    type: "deadline",
    title: "Task deadline approaching",
    description:
      "Your React.js teammate task has 2 days remaining.",
    time: "Yesterday",
    group: "Earlier",
    read: true,
    href: "/dashboard/tasks/react-teammate",
  },
  {
    id: 6,
    type: "message",
    title: "New message from Priya Singh",
    description:
      "Would you like to discuss the React project?",
    time: "Yesterday",
    group: "Earlier",
    read: true,
    href: "/dashboard/messages?person=priya&task=react-teammate",
  },
  {
    id: 7,
    type: "task",
    title: "Task completed",
    description:
      "Your Mathematics notes task has been marked completed.",
    time: "2 days ago",
    group: "Earlier",
    read: true,
    href: "/dashboard/tasks/math-notes",
  },
];

export default function NotificationsPage() {
  const router = useRouter();

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const groupedNotifications = useMemo(() => {
    return {
      Today: notifications.filter(
        (notification) => notification.group === "Today"
      ),
      Earlier: notifications.filter(
        (notification) => notification.group === "Earlier"
      ),
    };
  }, [notifications]);

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const openNotification = (notification: Notification) => {
    markAsRead(notification.id);
    router.push(notification.href);
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-72">
        <Topbar />

        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

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
                NOTIFICATIONS
              </p>

              <div className="mt-2 flex items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Notifications
                </h1>

                {unreadCount > 0 && (
                  <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                    {unreadCount} new
                  </span>
                )}
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Stay updated about your tasks, applications and
                conversations.
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Check size={16} />
                Mark all as read
              </button>
            )}
          </section>

          {/* NOTIFICATION LIST */}

          <section className="mt-10">
            {notifications.length > 0 ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* TODAY */}

                {groupedNotifications.Today.length > 0 && (
                  <NotificationGroup
                    title="Today"
                    notifications={groupedNotifications.Today}
                    onRead={markAsRead}
                    onOpen={openNotification}
                    onRemove={removeNotification}
                  />
                )}

                {/* EARLIER */}

                {groupedNotifications.Earlier.length > 0 && (
                  <NotificationGroup
                    title="Earlier"
                    notifications={groupedNotifications.Earlier}
                    onRead={markAsRead}
                    onOpen={openNotification}
                    onRemove={removeNotification}
                  />
                )}
              </div>
            ) : (
              <EmptyNotifications />
            )}
          </section>

          {/* FOOTER */}

          {notifications.length > 0 && (
            <p className="mt-5 text-center text-xs text-slate-400">
              You&apos;re all caught up with your CampusTask activity.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   NOTIFICATION GROUP
========================================================= */

function NotificationGroup({
  title,
  notifications,
  onRead,
  onOpen,
  onRemove,
}: {
  title: string;
  notifications: Notification[];
  onRead: (id: number) => void;
  onOpen: (notification: Notification) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div>
      <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-3.5 sm:px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {title}
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={onRead}
            onOpen={onOpen}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   NOTIFICATION ITEM
========================================================= */

function NotificationItem({
  notification,
  onRead,
  onOpen,
  onRemove,
}: {
  notification: Notification;
  onRead: (id: number) => void;
  onOpen: (notification: Notification) => void;
  onRemove: (id: number) => void;
}) {
  const Icon = getNotificationIcon(notification.type);
  const iconStyle = getNotificationIconStyle(notification.type);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(notification)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(notification);
        }
      }}
      className={`group relative flex cursor-pointer gap-4 px-5 py-5 transition sm:px-6 ${
        notification.read
          ? "bg-white hover:bg-slate-50"
          : "bg-blue-50/35 hover:bg-blue-50/70"
      }`}
    >
      {/* UNREAD DOT */}

      {!notification.read && (
        <span className="absolute left-2 top-7 h-2 w-2 rounded-full bg-blue-600 sm:left-3" />
      )}

      {/* ICON */}

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}
      >
        <Icon size={19} />
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
          <p
            className={`text-sm leading-6 transition group-hover:text-blue-600 ${
              notification.read
                ? "font-semibold text-slate-700"
                : "font-bold text-slate-900"
            }`}
          >
            {notification.title}
          </p>

          <span className="shrink-0 text-[10px] font-medium text-slate-400">
            {notification.time}
          </span>
        </div>

        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
          {notification.description}
        </p>

        {/* MARK AS READ */}

        {!notification.read && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onRead(notification.id);
            }}
            className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 transition hover:text-blue-700"
          >
            <Check size={13} />
            Mark as read
          </button>
        )}
      </div>

      {/* REMOVE */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onRemove(notification.id);
        }}
        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-300 opacity-0 transition hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100"
        aria-label={`Remove ${notification.title}`}
      >
        <X size={15} />
      </button>
    </div>
  );
}

/* =========================================================
   ICON HELPERS
========================================================= */

function getNotificationIcon(type: NotificationType) {
  switch (type) {
    case "application":
      return UserPlus;

    case "message":
      return MessageSquare;

    case "accepted":
      return CheckCircle2;

    case "deadline":
      return Clock3;

    case "task":
      return FileText;

    default:
      return Bell;
  }
}

function getNotificationIconStyle(type: NotificationType) {
  switch (type) {
    case "application":
      return "bg-blue-50 text-blue-600";

    case "message":
      return "bg-violet-50 text-violet-600";

    case "accepted":
      return "bg-emerald-50 text-emerald-600";

    case "deadline":
      return "bg-orange-50 text-orange-600";

    case "task":
      return "bg-slate-100 text-slate-600";

    default:
      return "bg-blue-50 text-blue-600";
  }
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyNotifications() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
        <Bell size={24} />
      </div>

      <h2 className="mt-5 text-lg font-bold text-slate-800">
        You&apos;re all caught up
      </h2>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
        There are no notifications to show right now. New activity
        from your CampusTask community will appear here.
      </p>

      <Link
        href="/dashboard"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
      >
        Back to dashboard
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}