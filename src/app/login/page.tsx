
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const features = [
  {
    icon: "◇",
    title: "Smart Workflows",
    description: "Streamline daily office processes through digital workflows.",
  },
  {
    icon: "✓",
    title: "Secure Records",
    description: "Manage official documents and records securely.",
  },
  {
    icon: "≋",
    title: "Better Service",
    description: "Improve efficiency and deliver faster public services.",
  },
];

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {visible ? (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 5.1A11 11 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.1 3.8" />
          <path d="M6.2 6.2C3.5 8.1 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4.1-.9" />
        </>
      )}
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    const cleanEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid official email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // TODO: Connect to the secure authentication backend.
    // Remember Me must be handled by the server's session policy.
    void rememberMe;

    setMessage(
      "Form validation successful. Login will be available once authentication is connected."
    );
  }

  return (
    <main className="grid min-h-screen bg-white font-sans lg:grid-cols-[54%_46%]">
      {/* LEFT BLUE PANEL */}
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

        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]" />
            Sooriyawawewa AG Office
          </div>

          <h1 className="max-w-[650px] text-[clamp(3rem,4.2vw,5rem)] font-extrabold leading-[1.12] tracking-[-0.05em]">
            Smart{" "}
            <span className="text-[#9ed5ff]">Digital</span>
            <br />
            Secretariat
            <br />
            Operations.
          </h1>

          <p className="mt-7 max-w-[650px] text-base leading-7 text-blue-100 sm:text-lg">
            Empowering the Sooriyawawewa AG Office with seamless
            digital workflows, smarter document management and
            efficient public service operations.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-3 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xl">
                {feature.icon}
              </div>

              <h3 className="text-sm font-bold">
                {feature.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-blue-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT LOGIN PANEL */}
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
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue to your digital workspace.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-xs font-bold text-[#263653]"
              >
                Official Email Address
              </label>

              <div className="flex h-12 items-center gap-3 rounded-lg border border-[#dbe3ef] bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <span className="shrink-0 text-slate-400">
                  <MailIcon />
                </span>

                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="Enter your official email"
                  autoComplete="username"
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

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block text-xs font-bold text-[#263653]"
              >
                Password
              </label>

              <div className="flex h-12 items-center gap-3 rounded-lg border border-[#dbe3ef] bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <span className="shrink-0 text-slate-400">
                  <LockIcon />
                </span>

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                    setMessage("");
                  }}
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="shrink-0 text-slate-400 transition hover:text-blue-600"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            {/* Remember and Forgot */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-blue-600"
                />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Validation Result */}
            {message && (
              <div
                role="status"
                className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700"
              >
                {message}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-gradient-to-r from-[#2167ed] to-[#0750ce] text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:brightness-110"
            >
              Login
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">
              or continue with
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setMessage("");
                setError("Google sign-in is not configured yet.");
              }}
              className="flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg font-extrabold text-blue-500">
                G
              </span>
              Google
            </button>

            <button
              type="button"
              onClick={() => {
                setMessage("");
                setError("Microsoft sign-in is not configured yet.");
              }}
              className="flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg text-blue-500">▦</span>
              Microsoft
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Footer */}
          <p className="mt-5 text-center text-[10px] text-slate-400">
            Secure access · SmartDS Digital Secretariat ·
            Sooriyawawewa AG Office
          </p>
        </div>
      </section>
    </main>
  );
}
