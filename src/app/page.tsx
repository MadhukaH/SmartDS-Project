
import Link from "next/link";

type IconProps = Readonly<{
  name: string;
  size?: number;
  className?: string;
}>;

function Icon({
  name,
  size = 20,
  className = "",
}: IconProps) {
  const paths: Record<string, React.ReactNode> = {
    building: (
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-8h6v8M9 9h.01M15 9h.01" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    layers: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 9h10M7 13h7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const menu = [
  "Dashboard",
  "Documents",
  "Applications",
  "Workflows",
  "Reports",
  "Staff",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans lg:grid lg:grid-cols-[42%_58%]">
      {/* LEFT SIDE */}
      <section className="relative flex min-h-screen flex-col px-7 py-6 sm:px-14 lg:px-[9%]">
        <header className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-200">
            <Icon name="building" size={23} />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">
              SmartDS
            </div>
            <div className="text-[9px] font-bold tracking-[0.14em] text-slate-400">
              DIGITAL SECRETARIAT SYSTEM
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-center py-20">
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-extrabold tracking-wider text-blue-700">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
              <Icon name="check" size={11} />
            </span>
            SMART DIGITAL GOVERNMENT{""}
      
          </div>

          <h1 className="max-w-xl text-[clamp(3rem,4vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#14263e]">
            Simplifying
            <br />
            <span className="text-[#1967d2]">Government</span>
            <br />
            Operations.
          </h1>

          <p className="mt-7 max-w-lg text-[15px] leading-7 text-slate-500">
            SmartDS digitalizes Divisional Secretariat operations with
            seamless workflows, secure document management, and efficient
            task coordination for the{" "}
            <strong className="font-bold text-slate-700">
              Sooriyawawewa AG Office.
            </strong>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex h-12 items-center gap-5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:brightness-110"
            >
              Get Started
              <Icon name="arrow" size={17} />
            </Link>
            <a
              href="#features"
              className="inline-flex h-12 items-center gap-4 rounded-xl border border-slate-200 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore Features
              <Icon name="info" size={16} className="text-blue-600" />
            </a>
          </div>

          <div
            id="features"
            className="mt-9 flex flex-wrap gap-x-7 gap-y-4"
          >
            {[
              {
                icon: "check",
                title: "Secure",
                sub: "Protected data",
              },
              {
                icon: "clock",
                title: "Efficient",
                sub: "Faster workflows",
              },
              {
                icon: "layers",
                title: "Connected",
                sub: "Unified operations",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon name={feature.icon} size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">
                    {feature.title}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {feature.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex flex-wrap gap-3 pb-1 text-[10px] text-slate-400">
          <strong className="text-slate-500">SmartDS</strong>
          <span>•</span>
          <span>Digitalizing Divisional Secretariat Operations</span>
          <span>•</span>
          <span>Sooriyawawewa AG Office</span>
        </footer>
      </section>

      {/* RIGHT SIDE */}
      <section className="relative flex min-h-[650px] flex-col overflow-hidden bg-gradient-to-br from-[#2e7bd2] via-[#1658af] to-[#082e70] p-7 sm:p-10 lg:min-h-screen">
        <div className="relative z-10 flex items-center justify-end gap-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Sooriyawawewa AG Office{}
          </div>
          <Link
            href="/login"
            className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            Staff Login
          </Link>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-16">
          <div className="absolute h-[470px] w-[470px] rounded-full border-[35px] border-white/[0.035]" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/15" />

          {/* Dashboard mockup */}
          <div className="relative z-10 w-full max-w-[620px]">
            <div className="overflow-hidden rounded-[20px] border border-white/20 bg-white shadow-2xl shadow-blue-950/30">
              <div className="flex h-12 items-center justify-between border-b border-slate-100 px-5">
                <span className="text-xs font-extrabold text-slate-800">
                  Dashboard
                </span>
                <div className="flex gap-2">
                  <span className="h-5 w-5 rounded-full bg-slate-100" />
                  <span className="h-5 w-5 rounded-full bg-slate-100" />
                </div>
              </div>

              <div className="grid min-h-[300px] grid-cols-[105px_1fr] sm:grid-cols-[125px_1fr]">
                <aside className="border-r border-slate-100 bg-slate-50 p-3">
                  {menu.map((item, i) => (
                    <div
                      key={item}
                      className={`mb-2 flex items-center gap-2 rounded-md px-2 py-2 text-[9px] font-semibold ${
                        i === 0
                          ? "bg-blue-100 text-blue-700"
                          : "text-slate-400"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-[3px] ${
                          i === 0 ? "bg-blue-600" : "bg-slate-400"
                        }`}
                      />
                      {item}
                    </div>
                  ))}
                </aside>

                <div className="min-w-0 p-4 sm:p-6">
                  <div className="mb-5 flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-sm font-extrabold text-slate-800">
                        Good Morning, Admin
                      </h2>
                      <p className="mt-1 text-[9px] text-slate-400">
                        Here&apos;s what&apos;s happening today.
                      </p>
                    </div>
                    <span className="rounded-md border border-slate-200 px-2 py-2 text-[8px] text-slate-500">
                      OVERVIEW
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        title: "ACTIVE APPLICATIONS",
                        value: "128",
                        detail: "+12.5% this month",
                      },
                      {
                        title: "PENDING DOCUMENTS",
                        value: "24",
                        detail: "8 completed today",
                      },
                      {
                        title: "COMPLETED TASKS",
                        value: "96%",
                        detail: "+8.2% efficiency",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.title}
                        className="min-w-0 rounded-lg border border-slate-200 p-2.5"
                      >
                        <div className="text-[7px] font-bold text-slate-400">
                          {stat.title}
                        </div>
                        <div className="mt-1 text-lg font-extrabold text-slate-800">
                          {stat.value}
                        </div>
                        <div className="text-[7px] text-emerald-600">
                          {stat.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-lg border border-slate-200 p-3">
                    <div className="flex justify-between gap-2">
                      <span className="text-[10px] font-bold text-slate-800">
                        Application Workflow
                      </span>
                      <span className="text-[8px] text-blue-600">
                        View details
                      </span>
                    </div>
                    <div className="mt-3 flex gap-1">
                      {[90, 75, 65, 100].map((width, i) => (
                        <div
                          key={i}
                          className="h-1.5 flex-1 rounded-full bg-slate-100"
                        >
                          <div
                            className={`h-full rounded-full ${
                              i === 3 ? "bg-blue-200" : "bg-blue-600"
                            }`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating security card */}
            <div className="absolute -left-4 -top-8 hidden w-44 rounded-xl border border-white/80 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Icon name="shield" size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-800">
                    Secure System
                  </div>
                  <div className="text-[8px] text-slate-400">
                    Your data is protected
                  </div>
                </div>
              </div>
              <div className="mt-3 text-[8px] font-semibold text-emerald-600">
                ● System protected
              </div>
            </div>

            {/* Floating documents card */}
            <div className="absolute -bottom-10 -right-4 hidden w-48 rounded-xl border border-white/80 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Icon name="layers" size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-800">
                    Digital Documents
                  </div>
                  <div className="text-[8px] text-slate-400">
                    Document processing
                  </div>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-blue-100">
                <div className="h-full w-[76%] rounded-full bg-blue-600" />
              </div>
              <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                <span>Processing</span>
                <span className="font-bold text-blue-600">76%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
