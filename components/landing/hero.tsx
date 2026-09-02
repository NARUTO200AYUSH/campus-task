import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-medium text-blue-600">
            Built for students
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-zinc-950">
            Get things done.
            <span className="block text-blue-600">
              Learn together.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            CampusTask connects students who need help with students who have
            the skills to help.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
            >
              Get started
            </Link>

            <Link
              href="#how-it-works"
              className="rounded-xl border border-zinc-200 px-5 py-3 font-medium text-zinc-700"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-xl">
          <p className="text-sm text-zinc-500">
            Welcome back 👋
          </p>

          <h2 className="mt-1 text-2xl font-semibold">
            Find help today
          </h2>

          <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4">
            🔍 Search tasks, subjects...
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-blue-600">
              Study Help
            </p>

            <h3 className="mt-2 font-semibold">
              Need help understanding Calculus
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Looking for someone who can explain integration concepts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}