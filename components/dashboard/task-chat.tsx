"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCheck,
  MessageSquare,
  Send,
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

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

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
      text: `I posted this because I need some help with ${taskTitle.toLowerCase()}.`,
      time: "10:25 AM",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const firstName = author.split(" ")[0];
  const initials = getInitials(author);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

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
    <section
      id="task-discussion"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      {/* CHAT HEADER */}

      <div className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:hidden"
                aria-label="Back"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {/* AVATAR */}

            <div className="relative">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-sm">
                {initials}
              </div>

              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            </div>

            {/* PERSON */}

            <div className="min-w-0">
              <h2 className="truncate text-base font-bold text-slate-900">
                {author}
              </h2>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                <p className="text-xs font-medium text-slate-500">
                  Active now
                </p>
              </div>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 sm:flex"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* TASK CONTEXT */}

        <div className="border-t border-blue-100 bg-blue-50/70 px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <MessageSquare size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-500">
                Discussing task
              </p>

              <p className="mt-0.5 truncate text-sm font-semibold text-blue-950">
                {taskTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MESSAGES */}

      <div className="h-[420px] overflow-y-auto bg-slate-50/60 px-5 py-6 sm:px-7">
        {/* DATE */}

        <div className="mb-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Today
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="space-y-5">
          {messages.map((item) => {
            const isUser = item.sender === "user";

            return (
              <div
                key={item.id}
                className={`flex items-end gap-2 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {/* OWNER AVATAR */}

                {!isUser && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-[10px] font-bold text-white">
                    {initials}
                  </div>
                )}

                <div
                  className={`max-w-[80%] sm:max-w-[68%] ${
                    isUser ? "text-right" : "text-left"
                  }`}
                >
                  {!isUser && (
                    <p className="mb-1.5 ml-1 text-[11px] font-semibold text-slate-500">
                      {firstName}
                    </p>
                  )}

                  <div
                    className={`inline-block px-4 py-3 text-left shadow-sm ${
                      isUser
                        ? "rounded-2xl rounded-br-md bg-blue-600 text-white"
                        : "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    <p className="text-sm leading-6">{item.text}</p>
                  </div>

                  <div
                    className={`mt-1.5 flex items-center gap-1 text-[10px] text-slate-400 ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span>{item.time}</span>

                    {isUser && (
                      <CheckCheck
                        size={13}
                        className="text-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* MESSAGE INPUT */}

      <form
        onSubmit={handleSendMessage}
        className="border-t border-slate-200 bg-white p-4 sm:p-5"
      >
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={`Message ${firstName}...`}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            <Send size={19} />
          </button>
        </div>

        <p className="mt-3 text-center text-[10px] font-medium text-slate-400">
          This conversation is linked to this task.
        </p>
      </form>
    </section>
  );
}