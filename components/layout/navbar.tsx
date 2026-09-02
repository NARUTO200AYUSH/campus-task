"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            C
          </div>

          <span className="text-lg tracking-tight">
            CampusTask
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#how-it-works" className="text-sm text-zinc-600 hover:text-zinc-950">
            How it works
          </Link>

          <Link href="#features" className="text-sm text-zinc-600 hover:text-zinc-950">
            Features
          </Link>

          <Link href="#about" className="text-sm text-zinc-600 hover:text-zinc-950">
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              How it works
            </Link>

            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              Features
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}