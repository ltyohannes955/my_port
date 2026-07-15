export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  language: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hr Managmanent System",
    description:
      "Full-stack HR management platform built with Next.js 15 + NestJS + PostgreSQL.",
    longDescription:
      "Full-stack HR management platform built with Next.js 15 + NestJS + PostgreSQL. Features employee self-service (ESS), attendance tracking with GPS geofencing, leave/loan management, performance reviews, payroll, org charts, and real-time dashboards. Includes a Capacitor-based Android mobile app with location-based check-in and offline-ready architecture. Deployed with Docker, Prisma ORM, and Ant Design UI.",
    imageUrl: "/hr.png",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    liveUrl: "https://hr.ethiotimetech.com/",
    language: "TypeScript",
  },
  {
    id: 2,
    title: "Hospital Managment Systme",
    description:
      "Full-stack hospital management system (NestJS + Next.js + PostgreSQL) with AI-assisted clinical workflows.",
    longDescription:
      "Full-stack hospital management system (NestJS + Next.js + PostgreSQL) with AI-assisted clinical workflows. Role-based access (Admin, Doctor, Lab, Radiology, Cashier, Reception). Features patient registration, triage, AI-powered consultation notes, lab & imaging ordering with result entry, pharmacy dispensing, billing/payment, cashier workflows, inpatient management, and printed reports. RBAC via JWT bitmaps.",
    imageUrl: "hospital.png",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    liveUrl: "",
    language: "TypeScript",
  },
  {
    id: 3,
    title: "Photograph portfolio",
    description: "A photography portfolio built with Next.js 14",
    longDescription:
      "A photography portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS. Features a hero collage layout, filterable gallery (7 categories), about page with team bios, journal/blog, contact form, category detail pages, and a full admin panel (CRUD for images/categories with modals). Dark theme support included. Uses static seed data from Unsplash.",
    imageUrl: "/photograph.png",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    repoUrl: "https://github.com/ltyohannes955/sam_proj.",
    liveUrl: "https://sam-proj.vercel.app/",
    language: "TypeScript",
  },
  {
    id: 4,
    title: "Zemen Calender",
    description:
      "Zemen is a dual-calendar (Ethiopian/Gregorian) scheduling platform built as a pnpm monorepo.",
    longDescription:
      "Zemen is a dual-calendar (Ethiopian/Gregorian) scheduling platform built as a pnpm monorepo. It features a zero-dependency Ethiopian calendar engine with date conversion, Ge'ez numerals, and holidays; a React component library with accessible calendar views, drag-drop task management, and dark mode; a NestJS REST API with Prisma/PostgreSQL, JWT+OAuth auth, and task CRUD; and a Next.js 15 dashboard with a Storybook-documented component playground. Built with TypeScript, Tailwind CSS, and Turborepo.",
    imageUrl: "/zemen.png",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    repoUrl: "https://github.com/ltyohannes955/Zemen",
    liveUrl: "https://lyl.tail741446.ts.net/",
    language: "TypeScript",
  },
];
