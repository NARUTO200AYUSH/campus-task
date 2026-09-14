"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Plus,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  FileText,
  CheckCheck,
  Bell,
  User,
  Settings,
  HelpCircle,
  LayoutDashboard,
  ClipboardList,
  BriefcaseBusiness,
  MessageSquare,
  BellRing,
  ChevronDown,
} from "lucide-react";

type Conversation = {
  id: string;
  name: string;
  initials: string;
  taskId: string;
  taskTitle: string;
  preview: string;
  time: string;
  unread?: number;
  online: boolean;
  avatarClass: string;
};

type ChatMessage = {
  id: number;
  sender: "me" | "them";
  text: string;
  time: string;
};

const conversations: Conversation[] = [
  {
    id: "rahul",
    name: "Rahul Sharma",
    initials: "RS",
    taskId: "physics-assignment",
    taskTitle: "Physics assignment",
    preview: "Hi! I saw your interest in my Physics task.",
    time: "10:42 AM",
    unread: 2,
    online: true,
    avatarClass: "bg-blue-100 text-blue-700",
  },
  {
    id: "priya",
    name: "Priya Singh",
    initials: "PS",
    taskId: "react-teammate",
    taskTitle: "React.js project",
    preview: "Would you like to discuss the React project?",
    time: "9:30 AM",
    online: true,
    avatarClass: "bg-pink-100 text-pink-700",
  },
  {
    id: "aman",
    name: "Aman Kumar",
    initials: "AK",
    taskId: "math-notes",
    taskTitle: "Mathematics notes",
    preview: "Thanks for helping me with the notes!",
    time: "Yesterday",
    online: false,
    avatarClass: "bg-violet-100 text-violet-700",
  },
  {
    id: "sneha",
    name: "Sneha Verma",
    initials: "SV",
    taskId: "python-debugging",
    taskTitle: "Python debugging",
    preview: "I'm still trying to fix that Python error.",
    time: "Yesterday",
    unread: 1,
    online: true,
    avatarClass: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "rohan",
    name: "Rohan Gupta",
    initials: "RG",
    taskId: "presentation-designer",
    taskTitle: "Presentation designer",
    preview: "The presentation requirements look good.",
    time: "Yesterday",
    online: false,
    avatarClass: "bg-orange-100 text-orange-700",
  },
  {
    id: "karan",
    name: "Karan Singh",
    initials: "KS",
    taskId: "interview-help",
    taskTitle: "Interview preparation",
    preview: "Thanks for helping me prepare.",
    time: "Sep 10",
    online: false,
    avatarClass: "bg-sky-100 text-sky-700",
  },
];

const initialMessages: Record<string, ChatMessage[]> = {
  rahul: [
    {
      id: 1,
      sender: "me",
      text: "Hi Rahul! I saw your Physics assignment.",
      time: "10:35 AM",
    },
    {
      id: 2,
      sender: "them",
      text: "Hi! Yes, I need help understanding electromagnetic induction.",
      time: "10:38 AM",
    },
    {
      id: 3,
      sender: "me",
      text: "I can help you with that. Which questions are you struggling with?",
      time: "10:40 AM",
    },
    {
      id: 4,
      sender: "them",
      text: "Mostly the numerical questions related to Faraday's law. Can you help me with a few of them?",
      time: "10:42 AM",
    },
  ],

  priya: [
    {
      id: 1,
      sender: "them",
      text: "Would you like to discuss the React project?",
      time: "9:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Sure! I'd be interested in working on the frontend.",
      time: "9:34 AM",
    },
  ],

  aman: [
    {
      id: 1,
      sender: "them",
      text: "Thanks for helping me with the notes!",
      time: "Yesterday",
    },
    {
      id: 2,
      sender: "me",
      text: "No problem. I'll send the remaining chapters soon.",
      time: "Yesterday",
    },
  ],

  sneha: [
    {
      id: 1,
      sender: "them",
      text: "I'm still trying to fix that Python error.",
      time: "Yesterday",
    },
    {
      id: 2,
      sender: "me",
      text: "Send me the error message and I'll take a look.",
      time: "Yesterday",
    },
  ],

  rohan: [
    {
      id: 1,
      sender: "them",
      text: "The presentation requirements look good.",
      time: "Yesterday",
    },
    {
      id: 2,
      sender: "me",
      text: "Great. I can start working on the design.",
      time: "Yesterday",
    },
  ],

  karan: [
    {
      id: 1,
      sender: "them",
      text: "Thanks for helping me prepare.",
      time: "Sep 10",
    },
    {
      id: 2,
      sender: "me",
      text: "You're welcome! Good luck with the interview.",
      time: "Sep 10",
    },
  ],
};

function Sidebar() {
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Browse Tasks",
      icon: ClipboardList,
      href: "/dashboard/tasks",
    },
    {
      label: "My Tasks",
      icon: BriefcaseBusiness,
      href: "/dashboard/my-tasks",
    },
    {
      label: "Applications",
      icon: User,
      href: "/dashboard/applications",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      active: true,
      badge: 3,
    },
    {
      label: "Notifications",
      icon: BellRing,
      href: "/dashboard/notifications",
    },
    {
      label: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
  ];

  return (
    <aside className="hidden w-[220px] shrink-0 border-r border-slate-100 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-[78px] items-center px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            C
          </div>

          <span className="text-[17px] font-bold tracking-tight text-slate-900">
            Campus<span className="text-blue-600">Task</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 pt-6">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
                  item.active
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={item.active ? 2.3 : 1.8}
                />

                <span className="flex-1">{item.label}</span>

                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Minimal community card */}
        <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-800">
            Do more together.
          </p>

          <p className="mt-1 text-[11px] leading-5 text-slate-400">
            Help, learn and grow with your campus community.
          </p>

          <a
            href="/dashboard/tasks"
            className="mt-3 inline-flex items-center text-[11px] font-semibold text-blue-600 hover:text-blue-700"
          >
            Explore tasks
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-5">
        <div className="space-y-1">
          <a
            href="#"
            className="flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings size={17} />
            Settings
          </a>

          <a
            href="#"
            className="flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            <HelpCircle size={17} />
            Help
          </a>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 px-3 pt-4">
          <span className="text-[11px] font-semibold text-slate-500">
            CampusTask
          </span>

          <span className="text-[10px] text-slate-400">
            v1.0.0
          </span>
        </div>
      </div>
    </aside>
  );
}

export default function MessagesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const personFromUrl = searchParams.get("person");
  const taskFromUrl = searchParams.get("task");

  const [selectedConversation, setSelectedConversation] =
    useState("rahul");

  const [search, setSearch] = useState("");

  const [messages, setMessages] =
    useState<Record<string, ChatMessage[]>>(initialMessages);

  const [message, setMessage] = useState("");

  /*
   * Open the correct conversation from URL.
   * Supports both:
   * ?person=rahul
   * ?task=physics-assignment
   * ?person=rahul&task=physics-assignment
   */
  useEffect(() => {
    if (personFromUrl) {
      const personConversation = conversations.find(
        (conversation) => conversation.id === personFromUrl
      );

      if (personConversation) {
        setSelectedConversation(personConversation.id);
        return;
      }
    }

    if (taskFromUrl) {
      const taskConversation = conversations.find(
        (conversation) => conversation.taskId === taskFromUrl
      );

      if (taskConversation) {
        setSelectedConversation(taskConversation.id);
        return;
      }
    }

    if (!personFromUrl && !taskFromUrl) {
      setSelectedConversation("rahul");
    }
  }, [personFromUrl, taskFromUrl]);

  const activeConversation =
    conversations.find(
      (conversation) => conversation.id === selectedConversation
    ) ?? conversations[0];

  const activeMessages = messages[selectedConversation] ?? [];

  const filteredConversations = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return conversations;

    return conversations.filter(
      (conversation) =>
        conversation.name.toLowerCase().includes(value) ||
        conversation.taskTitle.toLowerCase().includes(value) ||
        conversation.preview.toLowerCase().includes(value)
    );
  }, [search]);

  const handleConversationChange = (conversation: Conversation) => {
    setSelectedConversation(conversation.id);

    router.replace(
      `/dashboard/messages?person=${conversation.id}&task=${conversation.taskId}`,
      { scroll: false }
    );
  };

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = message.trim();

    if (!trimmed) return;

    const newMessage: ChatMessage = {
      id: Date.now(),
      sender: "me",
      text: trimmed,
      time: "Now",
    };

    setMessages((current) => ({
      ...current,
      [selectedConversation]: [
        ...(current[selectedConversation] ?? []),
        newMessage,
      ],
    }));

    setMessage("");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white text-slate-900">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-[78px] shrink-0 items-center border-b border-slate-100 px-5 sm:px-7">
          <div className="relative max-w-[600px] flex-1">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search tasks, students, or anything..."
              className="h-11 w-full rounded-xl border border-slate-100 bg-slate-50/70 pl-11 pr-16 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-400">
              ⌘ K
            </span>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
            >
              <Bell size={18} />

              <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="hidden h-7 w-px bg-slate-100 sm:block" />

            <button
              type="button"
              className="flex items-center gap-3 rounded-xl px-1.5 py-1.5 transition hover:bg-slate-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                A
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-xs font-semibold text-slate-900">
                  Ayush
                </p>
                <p className="text-[10px] text-slate-400">
                  Student
                </p>
              </div>

              <ChevronDown
                size={15}
                className="hidden text-slate-400 sm:block"
              />
            </button>
          </div>
        </header>

        {/* Main messaging area */}
        <div className="flex min-h-0 flex-1">
          {/* Conversation panel */}
          <section className="flex w-full min-w-0 flex-col border-r border-slate-100 md:w-[360px] lg:w-[390px]">
            {/* Heading */}
            <div className="px-5 pb-4 pt-7 sm:px-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                    Messages
                  </h1>

                  <p className="mt-1 text-xs text-slate-400">
                    Your conversations with fellow students.
                  </p>
                </div>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  aria-label="New message"
                >
                  <Plus size={17} />
                </button>
              </div>

              {/* Search */}
              <div className="relative mt-5">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  type="text"
                  placeholder="Search conversations..."
                  className="h-10 w-full rounded-xl border border-slate-100 bg-slate-50 px-10 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            {/* Conversation list */}
            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">
              {filteredConversations.map((conversation) => {
                const isSelected =
                  conversation.id === selectedConversation;

                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() =>
                      handleConversationChange(conversation)
                    }
                    className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                      isSelected
                        ? "bg-blue-50/70"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-blue-600" />
                    )}

                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ${conversation.avatarClass}`}
                      >
                        {conversation.initials}
                      </div>

                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                          conversation.online
                            ? "bg-emerald-500"
                            : "bg-slate-300"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {conversation.name}
                        </p>

                        <span className="shrink-0 text-[10px] text-slate-400">
                          {conversation.time}
                        </span>
                      </div>

                      <p className="mt-0.5 truncate text-xs text-slate-400">
                        {conversation.preview}
                      </p>

                      <div className="mt-1 flex items-center gap-1.5">
                        <FileText
                          size={11}
                          className="shrink-0 text-blue-500"
                        />

                        <span className="truncate text-[10px] font-medium text-blue-600">
                          {conversation.taskTitle}
                        </span>
                      </div>
                    </div>

                    {conversation.unread && (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[9px] font-bold text-white">
                        {conversation.unread}
                      </span>
                    )}
                  </button>
                );
              })}

              {filteredConversations.length === 0 && (
                <div className="px-5 py-10 text-center">
                  <p className="text-sm font-medium text-slate-500">
                    No conversations found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try a different search.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Chat */}
          <section className="hidden min-w-0 flex-1 flex-col md:flex">
            {/* Chat header */}
            <div className="flex h-[88px] shrink-0 items-center border-b border-slate-100 px-6 lg:px-8">
              <div className="relative shrink-0">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ${activeConversation.avatarClass}`}
                >
                  {activeConversation.initials}
                </div>

                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    activeConversation.online
                      ? "bg-emerald-500"
                      : "bg-slate-300"
                  }`}
                />
              </div>

              <div className="ml-3 min-w-0">
                <h2 className="truncate text-sm font-bold text-slate-900">
                  {activeConversation.name}
                </h2>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  {activeConversation.online ? "Active now" : "Offline"}
                </p>
              </div>

              <div className="ml-auto flex items-center gap-1">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                  aria-label="Call"
                >
                  <Phone size={17} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                  aria-label="Video call"
                >
                  <Video size={18} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                  aria-label="More"
                >
                  <MoreVertical size={17} />
                </button>
              </div>
            </div>

            {/* Linked task */}
            <div className="flex h-12 shrink-0 items-center border-b border-slate-100 px-6 lg:px-8">
              <FileText size={14} className="text-blue-600" />

              <span className="ml-2 text-xs font-medium text-blue-600">
                {activeConversation.taskTitle}
              </span>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-7 lg:px-10">
              <div className="mx-auto max-w-3xl">
                {/* Day divider */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-100" />

                  <span className="text-[10px] font-medium text-slate-400">
                    Today
                  </span>

                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <div className="space-y-6">
                  {activeMessages.map((item) => {
                    const isMe = item.sender === "me";

                    return (
                      <div
                        key={item.id}
                        className={`flex ${
                          isMe
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[75%] ${
                            isMe ? "items-end" : "items-start"
                          }`}
                        >
                          <div
                            className={`rounded-2xl px-4 py-3 ${
                              isMe
                                ? "rounded-br-md bg-blue-600 text-white"
                                : "rounded-bl-md bg-slate-50 text-slate-700"
                            }`}
                          >
                            <p className="text-sm leading-6">
                              {item.text}
                            </p>
                          </div>

                          <div
                            className={`mt-1.5 flex items-center gap-1.5 px-1 text-[10px] text-slate-400 ${
                              isMe
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <span>{item.time}</span>

                            {isMe && (
                              <CheckCheck
                                size={12}
                                className="text-blue-500"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Typing indicator only for Rahul */}
                  {selectedConversation === "rahul" && (
                    <div className="flex items-end gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">
                        RS
                      </div>

                      <div className="rounded-2xl rounded-bl-md bg-slate-50 px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Composer */}
            <div className="shrink-0 px-5 pb-5 pt-2 lg:px-8">
              <form onSubmit={handleSendMessage}>
                <div className="mx-auto max-w-3xl">
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition focus-within:border-blue-200 focus-within:ring-4 focus-within:ring-blue-50">
                    <button
                      type="button"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                      aria-label="Attach file"
                    >
                      <Paperclip size={17} />
                    </button>

                    <input
                      type="text"
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      placeholder={`Message ${activeConversation.name}...`}
                      className="h-9 min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />

                    <button
                      type="button"
                      className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 sm:flex"
                      aria-label="Emoji"
                    >
                      <Smile size={17} />
                    </button>

                    <button
                      type="submit"
                      disabled={!message.trim()}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Send"
                    >
                      <Send size={16} />
                    </button>
                  </div>

                  <p className="mt-2 text-center text-[10px] text-slate-400">
                    This conversation is linked to the{" "}
                    {activeConversation.taskTitle.toLowerCase()} task.
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}