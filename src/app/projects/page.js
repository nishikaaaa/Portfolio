import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects",
  description: "Selected software work by Nishika Sindhwani, including Shotkut, a misinformation detection platform, SoulNest, LabBuddy, and SatQuery.",
  keywords:    ["portfolio projects", "case studies", "freelance work", "client projects"],
  alternates:  { canonical: "https://sarang-space.site/projects" },
  openGraph: {
    title: "Projects — Nishika Sindhwani",
    description: "Software and applied AI projects by Nishika Sindhwani.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
