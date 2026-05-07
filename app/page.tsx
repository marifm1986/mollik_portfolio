"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const SKILLS = {
  Languages: ["C#", "VB.NET", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["ASP.NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "Angular", "Bootstrap"],
  "Cloud & DevOps": ["Azure App Services", "Function Apps", "Azure SQL", "Blob Storage", "Service Bus", "Cognitive Search", "Azure DevOps", "Git"],
  Databases: ["MS SQL Server", "Azure SQL", "MySQL", "MS Access"],
  Tools: ["Visual Studio", "VS Code", "Postman", "Swagger", "Jira", "Trello"],
};

const EXPERIENCE = [
  {
    period: "Mar 2022 – Present",
    title: "Sr. Software Engineer",
    company: "Hoxro LMS",
    location: "Leeds, United Kingdom (Remote)",
    highlights: [
      "Led the development team, provided technical guidance, and conducted code reviews.",
      "Developed and deployed scalable web apps using Azure App Services and Function Apps.",
      "Built and maintained CI/CD pipelines with Azure DevOps, including custom pipeline agents.",
      "Enabled in-browser native document viewing using Office Online Server (OOS) and WOPI.",
      "Integrated Microsoft Graph API for secure access to Microsoft 365 services.",
      "Wrote and optimized complex SQL scripts; designed and developed reports.",
    ],
    projects: ["Hoxro LMS", "Hoxro WOPI", "WebDAV"],
  },
  {
    period: "Sep 2020 – Feb 2022",
    title: "Software Engineer",
    company: "Next IT Limited",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Analyzed business requirements and architectural designs.",
      "Developed full-stack software solutions and performed unit testing.",
      "Wrote and optimized complex SQL scripts.",
      "Identified, troubleshot, and resolved software bugs.",
    ],
    projects: ["Infrastructure Application", "Next ERP", "Next POS", "Next Restaurant Management", "R&D Chromium Browser"],
  },
  {
    period: "Sep 2014 – Mar 2020",
    title: "Sr. Programmer",
    company: "Southtech Group",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Designed, developed, and implemented enterprise-level system components.",
      "Authored technical documents: RSD, DSD; conducted comprehensive testing plans.",
      "Wrote and optimized complex SQL for data processing, reporting, and performance tuning.",
      "Monitored server-side data loading processes and audited HO data for accuracy.",
      "Participated in client meetings and provided ongoing technical support.",
    ],
    projects: ["Asced.Net (Core Banking)", "Ascend Eagle Eye", "Ascend BIX", "Ascend Live Sync"],
  },
];

const PROJECTS = [
  {
    name: "Hoxro LMS",
    tag: "Legal Tech",
    desc: "Full-featured legal case management system with modules for Matter, Contacts, MS Email, Task, Calendar, Forms, Library, Legal Aid, Accounting, Receivables, Payables, VAT, and Transactions.",
    stack: ["ASP.NET Core", "Angular", "Azure", "SQL Server"],
  },
  {
    name: "Hoxro WOPI",
    tag: "Cloud",
    desc: "Web Application Open Platform Interface integrated with Office Online Server for native in-browser document access without third-party plugins.",
    stack: ["WOPI", "OOS", "Azure", "C#"],
  },
  {
    name: "WebDAV Server",
    tag: "Productivity",
    desc: "Custom WebDAV server enabling users to open and edit online Office documents directly in the desktop Office application.",
    stack: ["C#", "WebDAV", "Azure"],
  },
  {
    name: "Asced.Net",
    tag: "FinTech",
    desc: "Core Banking Solution for BRAC micro-finance with Loan, Savings, Micro Insurance, Fixed Asset, Accounting, and HRMS modules.",
    stack: ["VB.NET", "SQL Server", "Crystal Reports"],
  },
];

const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science & Engineering",
    institution: "Jahangirnagar University, Dhaka",
    year: "2024",
    cgpa: "3.93",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology, Dhaka",
    year: "2018",
    cgpa: "3.84",
  },
  {
    degree: "Diploma Engineering in Computer Technology",
    institution: "Tangail Polytechnic Institute, Tangail",
    year: "2014",
    cgpa: "3.83",
  },
];

const CERTS = [
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", year: "2021" },
  { name: "Microsoft Certified: ASP.NET Core MVC Web Application (20486-D)", year: "2021" },
  { name: "Microsoft Certified: Analyzing Data with Power BI (DA-100T00)", year: "2021" },
  { name: "ASP.NET MVC Core with SQL Server 2017", year: "2019" },
];

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors tracking-widest uppercase"
    >
      {label}
    </button>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/40 text-cyan-400 bg-cyan-500/10">
      {text}
    </span>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-cyan-500 font-mono text-xs">//</span>
      <h2 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight">{text}</h2>
      <div className="flex-1 h-px bg-slate-700/60" />
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-300 font-sans">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#0a0f1a]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-mono text-sm font-bold text-white hover:text-cyan-400 transition-colors"
          >
            &lt; Md. Azizul Mollik /&gt;
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <NavLink key={l} label={l} onClick={() => scrollTo(l.toLowerCase())} />
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-xs font-mono px-4 py-1.5 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors tracking-widest"
            >
              HIRE ME
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0a0f1a] px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <NavLink key={l} label={l} onClick={() => scrollTo(l.toLowerCase())} />
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-14 px-4"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl">
          <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-4">
            // SENIOR SOFTWARE ENGINEER
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              scalable
            </span>{" "}
            &amp; secure solutions.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            10+ years of experience in full-stack development, cloud infrastructure (Microsoft Azure),
            and CI/CD pipelines across Legal Tech, ERP, FinTech, and HRMS domains.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0a0f1a] font-mono text-sm font-bold rounded transition-colors tracking-wider"
            >
              VIEW MY WORK
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-mono text-sm rounded transition-colors tracking-wider"
            >
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <SectionLabel text="SYSTEM_ARCHITECTURE" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="w-full max-w-sm mx-auto aspect-square rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
              <div className="relative text-center p-8">
               <Image src="/profile.webp" alt="Profile Photo" width={200} height={200} className="rounded-full border-2 border-cyan-500/50 mb-4" />
                <p className="font-mono text-slate-400 text-xs">Md. Azizul Mollik</p>
                <p className="font-mono text-cyan-400 text-xs mt-1">Eberswalde, Germany</p>
              </div>
              {/* Corner decorations */}
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/60" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/60" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/60" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/60" />
            </div>
          </div>

          <div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Results-driven Software Engineer with over{" "}
              <span className="text-cyan-400 font-semibold">10 years of experience</span> across multiple
              organizations, delivering scalable, secure, and maintainable software solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Proficient in full-stack development, cloud infrastructure (especially Microsoft Azure),
              and CI/CD pipelines. Adept at leading projects, collaborating within agile teams, and
              optimizing systems for performance and reliability across Legal Tech, ERP, POS, HRMS,
              and micro-finance domains.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "3", label: "Organizations" },
                { value: "15+", label: "Projects Delivered" },
                { value: "AZ-900", label: "Azure Certified" },
              ].map((stat) => (
                <div key={stat.label} className="border border-slate-700/60 rounded p-4 bg-slate-800/30">
                  <div className="text-2xl font-mono font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/in/azizulmollik/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-cyan-500 rounded font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.xing.com/profile/Azizul_Mollik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-cyan-500 rounded font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Xing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <SectionLabel text="TECH_STACK.JSON" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-slate-700/60 bg-slate-800/30 p-6 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <h3 className="font-mono text-xs text-slate-400 tracking-widest uppercase">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded bg-slate-700/60 border border-slate-600/60 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
        <SectionLabel text="LOG --GRAPH EXPERIENCE" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-slate-700/60" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-[19px] top-1.5 w-3 h-3 rounded-full border-2 border-cyan-500 bg-[#0a0f1a]" />

                <div className="border border-slate-700/60 rounded-lg p-6 bg-slate-800/20 hover:border-cyan-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-mono">{job.title}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{job.company}</p>
                      <p className="text-slate-500 text-xs font-mono mt-0.5">{job.location}</p>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 border border-slate-700 rounded text-slate-400 bg-slate-800/60 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.projects.map((p) => (
                      <Tag key={p} text={p} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 font-mono text-xs">//</span>
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight">
                FEATURED PROJECTS
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">LS PROJECTS</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.name}
                className="group rounded-lg border border-slate-700/60 bg-slate-800/20 p-6 hover:border-cyan-500/50 transition-all hover:bg-slate-800/40"
              >
                {/* Mock code window header */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[10px] font-mono text-slate-500">
                    {proj.name.toLowerCase().replace(/\s/g, "_")}.ts
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold font-mono text-base group-hover:text-cyan-400 transition-colors">
                    {proj.name}
                  </h3>
                  <Tag text={proj.tag} />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{proj.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700/60 text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <SectionLabel text="EDUCATION.MD" />
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex gap-4 border-l-2 border-cyan-500/40 pl-4 hover:border-cyan-500 transition-colors"
                >
                  <div>
                    <h3 className="text-white font-semibold font-mono text-sm">{edu.degree}</h3>
                    <p className="text-slate-400 text-xs mt-1">{edu.institution}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="text-[10px] font-mono text-cyan-400">YEAR: {edu.year}</span>
                      <span className="text-[10px] font-mono text-slate-500">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionLabel text="CERTS.CONF" />
            <div className="space-y-4">
              {CERTS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 p-4 border border-slate-700/60 rounded-lg bg-slate-800/20 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="shrink-0 w-8 h-8 rounded border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 font-mono text-xs font-semibold">{cert.name}</p>
                    <p className="text-slate-500 font-mono text-[10px] mt-1">Year: {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <SectionLabel text="LANG --SPOKEN" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { lang: "English", level: "Professional", percent: 85, code: "EN" },
              { lang: "German", level: "Intermediate", percent: 60, code: "DE" },
              { lang: "Bengali", level: "Native", percent: 100, code: "BN" },
            ].map(({ lang, level, percent, code }) => (
              <div
                key={lang}
                className="border border-slate-700/60 rounded-lg p-6 bg-slate-800/20 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                      {code}
                    </span>
                    <div>
                      <p className="text-white font-mono text-sm font-semibold">{lang}</p>
                      <p className="text-slate-500 font-mono text-[10px]">{level}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-cyan-400">{percent}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-700/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-mono text-cyan-500 text-xs tracking-[0.3em] mb-3">// NEXT --STEPS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to discuss your next technical challenge?
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Available for senior engineering roles, technical leadership, and Azure cloud projects.
            Let&apos;s build something great together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:azizulmollik@gmail.com"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0a0f1a] font-mono text-sm font-bold rounded transition-colors tracking-wider"
            >
              {"{ SEND_EMAIL }"}
            </a>
            <a
              href="https://www.linkedin.com/in/azizulmollik/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-mono text-sm rounded transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.xing.com/profile/Azizul_Mollik"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-mono text-sm rounded transition-colors"
            >
              Xing
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Email", value: "azizulmollik@gmail.com" },
              { label: "Phone", value: "+49 163 8985047" },
              { label: "Location", value: "Eberswalde, Germany" },
            ].map((c) => (
              <div key={c.label} className="p-4 border border-slate-700/60 rounded-lg bg-slate-800/20">
                <p className="text-[10px] font-mono text-slate-500 mb-1">{c.label}</p>
                <p className="text-xs font-mono text-slate-300">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-600">
            &copy; 2025 Md. Azizul Mollik. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-slate-700">v1.0.0</span>
            <span className="text-[10px] font-mono text-cyan-800">ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
