"use client";

import { FormEvent, useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "owner";
  text: string;
  time: string;
};

type TaskChatProps = {
  taskTitle: string;
  author: string;
  onClose?: () => void;
};

export default function TaskChat({
  taskTitle,
  author,
  onClose,
}: TaskChatProps) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "owner",
      text: `Hi! Thanks for your interest in my task.`,
      time: "10:24 AM",
    },
    {
      id: 2,
      sender: "owner",
      text: `I posted this task because I need some help with ${taskTitle.toLowerCase()}.`,
      time: "10:25 AM",
    },
  ]);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        sender: "user",
        text: trimmedMessage,
        time: "Now",
      },
    ]);

    setMessage("");
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* ================= CHAT HEADER ================= */}

      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
              {author.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-base font-bold text-slate-900">
                  {author}
                </h2>

                <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
              </div>

              <p className="mt-0.5 text-xs text-slate-500">
                Task owner
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* TASK CONTEXT */}

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
            <MessageSquare size={17} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-500">
              Discussing task
            </p>

            <p className="truncate text-sm font-semibold text-blue-900">
              {taskTitle}
            </p>
          </div>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}

      <div className="max-h-[420px] min-h-[300px] space-y-5 overflow-y-auto bg-slate-50/60 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-[11px] font-medium text-slate-400">
            Today
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {messages.map((item) => (
          <div
            key={item.id}
            className={`flex ${
              item.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[75%] ${
                item.sender === "user"
                  ? "rounded-2xl rounded-br-md bg-blue-600 text-white"
                  : "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700"
              } px-4 py-3 shadow-sm`}
            >
              <p className="text-sm leading-6">{item.text}</p>

              <p
                className={`mt-1 text-right text-[10px] ${
                  item.sender === "user"
                    ? "text-blue-100"
                    : "text-slate-400"
                }`}
              >
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MESSAGE INPUT ================= */}

      <form
        onSubmit={handleSendMessage}
        className="border-t border-slate-100 bg-white p-4 sm:p-5"
      >
        <div className="flex items-end gap-3">
          <div className="flex flex-1 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={`Message ${author}...`}
              className="h-12 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            <Send size={19} />
          </button>
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          This conversation is linked to this specific task.
        </p>
      </form>
    </section>
  );
}