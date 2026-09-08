"use client";

import { useState } from "react";
import {
  ArrowLeft,
  MessageSquare,
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
} from "lucide-react";
import Link from "next/link";

import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

const conversations = [
  {
    id: "rahul",
    name: "Rahul Sharma",
    initials: "RS",
    message: "Hi! I saw your interest in my Physics task.",
    time: "10:42 AM",
    unread: 2,
    online: true,
    task: "Physics assignment",
  },
  {
    id: "priya",
    name: "Priya Singh",
    initials: "PS",
    message: "Would you like to discuss the React project?",
    time: "9:30 AM",
    unread: 0,
    online: true,
    task: "React.js project",
  },
  {
    id: "aman",
    name: "Aman Kumar",
    initials: "AK",
    message: "Thanks for helping me with the notes!",
    time: "Yesterday",
    unread: 0,
    online: false,
    task: "Mathematics notes",
  },
  {
    id: "sneha",
    name: "Sneha Verma",
    initials: "SV",
    message: "I'm still trying to fix that Python error.",
    time: "Yesterday",
    unread: 1,
    online: false,
    task: "Python debugging",
  },
];

const initialMessages: Record<
  string,
  { id: number; text: string; sender: "me" | "them"; time: string }[]
> = {
  rahul: [
    {
      id: 1,
      text: "Hi Rahul! I saw your Physics assignment.",
      sender: "me",
      time: "10:35 AM",
    },
    {
      id: 2,
      text: "Hi! Yes, I need help understanding electromagnetic induction.",
      sender: "them",
      time: "10:38 AM",
    },
    {
      id: 3,
      text: "I can help you with that. Which questions are you struggling with?",
      sender: "me",
      time: "10:40 AM",
    },
    {
      id: 4,
      text: "Hi! I saw your interest in my Physics task.",
      sender: "them",
      time: "10:42 AM",
    },
  ],

  priya: [
    {
      id: 1,
      text: "Hi Priya! I saw your React.js task.",
      sender: "me",
      time: "9:20 AM",
    },
    {
      id: 2,
      text: "Great! Would you like to discuss the React project?",
      sender: "them",
      time: "9:30 AM",
    },
  ],

  aman: [
    {
      id: 1,
      text: "Hey Aman, I have some notes that might help.",
      sender: "me",
      time: "Yesterday",
    },
    {
      id: 2,
      text: "Thanks for helping me with the notes!",
      sender: "them",
      time: "Yesterday",
    },
  ],

  sneha: [
    {
      id: 1,
      text: "Did you manage to solve the Python issue?",
      sender: "me",
      time: "Yesterday",
    },
    {
      id: 2,
      text: "I'm still trying to fix that Python error.",
      sender: "them",
      time: "Yesterday",
    },
  ],
};

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("rahul");
  const [search, setSearch] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const activeConversation = conversations.find(
    (conversation) => conversation.id === selectedConversation
  );

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendMessage = () => {
    const message = newMessage.trim();

    if (!message) return;

    setMessages((previousMessages) => ({
      ...previousMessages,
      [selectedConversation]: [
        ...previousMessages[selectedConversation],
        {
          id: Date.now(),
          text: message,
          sender: "me",
          time: "Now",
        },
      ],
    }));

    setNewMessage("");
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-72">
        <Topbar />

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* ================= HEADER ================= */}

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
                MESSAGES
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Messages
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Connect and communicate with students in your CampusTask
                community.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm font-medium text-slate-500 sm:flex">
              <MessageSquare size={18} />
              {conversations.length} conversations
            </div>
          </section>

          {/* ================= MESSAGING AREA ================= */}

          <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid min-h-[650px] lg:grid-cols-[320px_minmax(0,1fr)]">
              {/* ================= CONVERSATION LIST ================= */}

              <aside className="border-b border-slate-200 lg:border-b-0 lg:border-r">
                {/* SEARCH */}

                <div className="border-b border-slate-100 p-5">
                  <div className="relative">
                    <Search
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search conversations..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* CONVERSATIONS */}

                <div className="max-h-[560px] overflow-y-auto">
                  {filteredConversations.map((conversation) => {
                    const isActive =
                      selectedConversation === conversation.id;

                    return (
                      <button
                        key={conversation.id}
                        onClick={() =>
                          setSelectedConversation(conversation.id)
                        }
                        className={`flex w-full gap-3 border-b border-slate-100 p-4 text-left transition ${
                          isActive
                            ? "bg-blue-50"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        {/* AVATAR */}

                        <div className="relative">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                              isActive
                                ? "bg-blue-600"
                                : "bg-gradient-to-br from-blue-500 to-indigo-600"
                            }`}
                          >
                            {conversation.initials}
                          </div>

                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                          )}
                        </div>

                        {/* CONTENT */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-sm font-bold text-slate-800">
                              {conversation.name}
                            </p>

                            <span className="shrink-0 text-[10px] text-slate-400">
                              {conversation.time}
                            </span>
                          </div>

                          <p className="mt-1 truncate text-xs text-slate-500">
                            {conversation.message}
                          </p>

                          <p className="mt-1 text-[10px] font-medium text-blue-600">
                            {conversation.task}
                          </p>
                        </div>

                        {/* UNREAD */}

                        {conversation.unread > 0 && (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                            {conversation.unread}
                          </span>
                        )}
                      </button>
                    );
                  })}

                  {filteredConversations.length === 0 && (
                    <div className="px-5 py-12 text-center">
                      <Search
                        size={25}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-4 text-sm font-semibold text-slate-600">
                        No conversations found
                      </p>
                    </div>
                  )}
                </div>
              </aside>

              {/* ================= CHAT AREA ================= */}

              {activeConversation && (
                <div className="flex min-h-[650px] flex-col">
                  {/* CHAT HEADER */}

                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                          {activeConversation.initials}
                        </div>

                        {activeConversation.online && (
                          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                        )}
                      </div>

                      <div>
                        <h2 className="text-sm font-bold text-slate-900">
                          {activeConversation.name}
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {activeConversation.online
                            ? "Active now"
                            : "Campus student"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600"
                        aria-label="Voice call"
                      >
                        <Phone size={19} />
                      </button>

                      <button
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600"
                        aria-label="Video call"
                      >
                        <Video size={19} />
                      </button>

                      <button
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label="More options"
                      >
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </div>

                  {/* TASK CONTEXT */}

                  <div className="border-b border-blue-100 bg-blue-50 px-5 py-3 sm:px-6">
                    <p className="text-xs text-blue-700">
                      Discussing:
                      <span className="ml-1 font-semibold">
                        {activeConversation.task}
                      </span>
                    </p>
                  </div>

                  {/* MESSAGES */}

                  <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50/50 p-5 sm:p-6">
                    <div className="flex justify-center">
                      <span className="rounded-full bg-slate-200 px-3 py-1 text-[10px] font-medium text-slate-500">
                        Today
                      </span>
                    </div>

                    {messages[selectedConversation].map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === "me"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 sm:max-w-[70%] ${
                            message.sender === "me"
                              ? "rounded-br-md bg-blue-600 text-white"
                              : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <p className="text-sm leading-6">
                            {message.text}
                          </p>

                          <p
                            className={`mt-1 text-[10px] ${
                              message.sender === "me"
                                ? "text-blue-100"
                                : "text-slate-400"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* MESSAGE INPUT */}

                  <div className="border-t border-slate-100 bg-white p-4 sm:p-5">
                    <div className="flex items-end gap-2">
                      <button
                        className="rounded-xl p-3 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600"
                        aria-label="Attach file"
                      >
                        <Paperclip size={20} />
                      </button>

                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) =>
                            setNewMessage(e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage();
                            }
                          }}
                          placeholder={`Message ${activeConversation.name}...`}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />

                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-200 hover:text-blue-600"
                          aria-label="Add emoji"
                        >
                          <Smile size={19} />
                        </button>
                      </div>

                      <button
                        onClick={handleSendMessage}
                        className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
                        aria-label="Send message"
                      >
                        <Send size={19} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}