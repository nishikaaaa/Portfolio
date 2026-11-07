// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiTypescript, SiPython,
  SiFastapi, SiNodedotjs, SiRedux, SiMysql, SiMongodb, SiGit, SiOpenai,
} from "react-icons/si";
import { TbSearch, TbScan, TbVector } from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "Building",
  line2: "systems",
  line3: "that last.",
};

// *word* = italic emphasis in BlurText
export const BIO = [
  "Software engineer focused on *backend systems*, *full-stack applications*, and *practical AI*. Currently building products that combine machine learning with thoughtful software engineering.",
  "I like to understand a system before changing it. Most of the work lives in the architecture, the data, and whether people actually use what ships.",
];

export const RESUME_URL = "/resume.pdf";

export const TECH = [
  { name: "Next.js",       icon: SiNextdotjs },
  { name: "React",         icon: SiReact },
  { name: "TypeScript",    icon: SiTypescript },
  { name: "Python",        icon: SiPython },
  { name: "FastAPI",       icon: SiFastapi },
  { name: "Node.js",       icon: SiNodedotjs },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "MySQL",         icon: SiMysql },
  { name: "MongoDB",       icon: SiMongodb },
  { name: "Git",           icon: SiGit },
];

export const CREATIVE = [
  { name: "OpenAI",     icon: SiOpenai },
  { name: "Pinecone",   icon: TbVector },
  { name: "RAG",        icon: TbSearch },
  { name: "Embeddings", icon: TbVector },
  { name: "OCR",        icon: TbScan },
];

export const EXPERIENCE = [
  { role: "Started Computer Science",             period: "2023" },
  { role: "Joined LabBuddy",                      period: "2025" },
  { role: "Built production healthcare software", period: "2025" },
  { role: "Building AI products",                 period: "2026" },
  { role: "Exploring intelligent systems",        period: "Now" },
];
