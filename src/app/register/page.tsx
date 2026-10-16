
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
  confirmPassword: "",
};

const roles = [
  "Staff Officer",
  "Development Officer",
  "Administrative Officer",
  "Grama Niladhari",
  "Other Staff",
];

function InputField({
  label,
  placeholder,
  icon,
  type = "text",
  value,
  onChange,
  rightElement,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  icon: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  rightElement?: React.ReactNode;
  autoComplete?: string;
}) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-xs font-bold text-[#263653]">
        {label}
      </label>
      <div className="flex h-12 items-center gap-3 rounded-lg border border-[#dbe3ef] bg-white px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <span className="shrink-0 text-base text-slate-400">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
        {rightElement}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
    setMessage("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!form.role) {
      setError("Please select your user role.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreed) {
      setError("Please agree to the Terms of Service.");
      return;
    }

    setMessage(
      "Form validation successful. Account registration will be available once the backend is connected."
    );
  };

  return (
    <main className="grid min-h-screen bg-white font-sans lg:grid-cols-[54%_46%]">
      {/* LEFT BLUE PANEL */}
      <section className="relative flex min-h-[480px] flex-col overflow-hidden bg-gradient-to-br from-[#1261d7] via-[#0750c3] to-[#06368e] px-7 py-10 text-white sm:px-12 lg:min-h-screen lg:px-[8%] lg:py-14">
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

        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]" />
            Sooriyawawewa AG Office
          </div>

          <h1 className="max-w-[650px] text-[clamp(3rem,4.2vw,5rem)] font-extrabold leading-[1.12] tracking-[-0.05em]">
            Digitalizing
            <br />
            <span className="text-[#9ed5ff]">Secretariat</span>
            <br />
            Operations.
          </h1>

          <p className="mt-7 max-w-[650px] text-base leading-7 text-blue-100 sm:text-lg">
            Empowering the Sooriyawawewa AG Office with seamless
            digital workflows, smarter document management and
            efficient public service operations.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: "◇",
              title: "Smart Workflows",
              desc: "Streamline daily office processes through digital workflows.",
            },
            {
              icon: "✓",
              title: "Secure Records",
              desc: "Manage official documents and records securely.",
            },
            {
              icon: "≋",
              title: "Better Service",
              desc: "Improve efficiency and deliver faster public services.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xl">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-blue-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT REGISTRATION PANEL */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-[9%]">
        <div className="w-full max-w-[560px]">
          <div className="mb-8">
            <p className="mb-3 text-xs font-extrabold tracking-[0.14em] text-blue-600">
              SMARTDS PORTAL
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#172744] sm:text-4xl">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Register to access the digital secretariat system.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="First Name"
                placeholder="Enter first name"
                icon="♟"
                value={form.firstName}
                onChange={(v) => update("firstName", v)}
                autoComplete="given-name"
              />
              <InputField
                label="Last Name"
                placeholder="Enter last name"
                icon="♟"
                value={form.lastName}
                onChange={(v) => update("lastName", v)}
                autoComplete="family-name"
              />
            </div>

            <InputField
              label="Official Email Address"
              placeholder="Enter your official email"
              icon="✉"
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              autoComplete="email"
            />

            <div>
              <label
                htmlFor="user-role"
                className="mb-2 block text-xs font-bold text-[#263653]"
              >
                User Role
              </label>
              <div className="flex h-12 items-center gap-3 rounded-lg border border-[#dbe3ef] px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <span className="text-slate-400">◉</span>
                <select
                  id="user-role"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  required
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none"
                >
                  <option value="">Select your role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Password"
                placeholder="Create password"
                icon="🔒"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(v) => update("password", v)}
                autoComplete="new-password"
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="text-xs font-semibold text-slate-400 hover:text-blue-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                }
              />
              <InputField
                label="Confirm Password"
                placeholder="Confirm password"
                icon="🔒"
                type={showConfirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(v) => update("confirmPassword", v)}
                autoComplete="new-password"
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                    className="text-xs font-semibold text-slate-400 hover:text-blue-600"
                  >
                    {showConfirm ? "Hide" : "Show"}
                  </button>
                }
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-blue-600"
              />
              <span>
                I agree to the{" "}
                <span className="font-bold text-blue-600">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-bold text-blue-600">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            {error && (
              <div role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {message && (
              <div role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-gradient-to-r from-[#2167ed] to-[#0750ce] text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:brightness-110"
            >
              CREATE ACCOUNT.
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">
              or register with
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() =>
                setError("Google sign-in is not configured yet.")
              }
              className="flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg font-extrabold text-blue-500">
                G
              </span>
              Google
            </button>
            <button
              type="button"
              onClick={() =>
                setError("Microsoft sign-in is not configured yet.")
              }
              className="flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg text-blue-500">▦</span>
              Microsoft
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </p>

          <p className="mt-4 text-center text-[10px] text-slate-400">
            © 2026 SmartDS · Sooriyawawewa AG Office
          </p>
        </div>
      </section>
    </main>
  );
}
