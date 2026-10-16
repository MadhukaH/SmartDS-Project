
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const features = [
  {
    icon: "⌁",
    title: "Secure Recovery",
    description: "Your password reset request is protected and verified.",
  },
  {
    icon: "✉",
    title: "Email Verification",
    description: "Receive a secure recovery link to your official email.",
  },
  {
    icon: "✓",
    title: "Quick Access",
    description: "Reset your password and return to SmartDS quickly.",
  },
];

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Please enter your official email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Connect to a secure password reset API.
    // Do not send actual reset emails from this client component.

    setMessage(
      "Email format verified. Password recovery will be available once the backend is connected."
    );
  }

  return (
    <main className="grid min-h-screen bg-white font-sans lg:grid-cols-[54%_46%]">
      {/* LEFT PANEL */}
      <section className="relative flex min-h-[500px] flex-col overflow-hidden bg-gradient-to-br from-[#1261d7] via-[#0750c3] to-[#06368e] px-7 py-10 text-white sm:px-12 lg:min-h-screen lg:px-[8%] lg:py-14">
        {/* Logo */}
        <Link href="/" className="flex w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-xl font-bold">
            SD
          </div>

          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              SmartDS
            </div>
            <div className="text-[10px] font-semibold tracking-[0.14em] text-blue-200">
              DIGITAL SECRETARIAT
            </div>
          </div>
        </Link>

        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]" />
            Secure Account Recovery
          </div>

          <h1 className="max-w-[650px] text-[clamp(3rem,4.2vw,5rem)] font-extrabold leading-[1.12] tracking-[-0.05em]">
            Your Account,
            <br />
            <span className="text-[#9ed5ff]">Always</span> Secure.
          </h1>

          <p className="mt-7 max-w-[650px] text-base leading-7 text-blue-100 sm:text-lg">
            Recover your SmartDS account securely and get back to
            managing digital secretariat operations without interruption.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xl">
                {feature.icon}
              </div>

              <h3 className="text-sm font-bold">{feature.title}</h3>

              <p className="mt-1 text-xs leading-5 text-blue-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex min-h-[650px] items-center justify-center px-6 py-12 sm:px-10 lg:min-h-screen lg:px-[9%]">
        <div className="w-full max-w-[560px]">
          {/* Header */}
          <div className="mb-9 text-center">
            <Link
              href="/"
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-xl font-bold text-white shadow-lg shadow-blue-100"
            >
              SD
            </Link>

            <p className="mb-3 text-xs font-extrabold tracking-[0.14em] text-blue-600">
              SMARTDS PORTAL
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#172744] sm:text-4xl">
              Forgot your password?
            </h2>

            <p className="mx-auto mt-3 max-w-[480px] text-sm leading-6 text-slate-400">
              No worries. Enter your official email address and
              we&apos;ll send you a secure link to reset your password.
            </p>
          </div>

          {/* Recovery Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="recovery-email"
                className="mb-2 block text-xs font-bold text-[#263653]"
              >
                Official Email Address
              </label>

              <div className="flex h-12 items-center gap-3 rounded-lg border border-[#dbe3ef] bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-slate-400"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <input
                  id="recovery-email"
                  type="email"
                  name="email"
                  placeholder="Enter your official email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                    setMessage("");
                  }}
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Success Message */}
            {message && (
              <div
                role="status"
                className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700"
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-gradient-to-r from-[#2167ed] to-[#0750ce] text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:brightness-110"
            >
              SEND RESET LINK
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-bold text-blue-600 hover:underline"
            >
              Back to Sign In
            </Link>
          </p>

          {/* Help Information */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#e0e8f3] bg-[#f4f7fc] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
              i
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#263653]">
                Need help accessing your account?
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-slate-400">
                If you don&apos;t have access to your official email,
                please contact your SmartDS system administrator.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[10px] text-slate-400">
            Secure account recovery · SmartDS Digital Secretariat ·
            Sooriyawawewa AG Office
          </p>
        </div>
      </section>
    </main>
  );
}
