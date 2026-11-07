import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About",
  description: "Nishika Sindhwani is a software engineer in New Delhi, studying computer science and building full-stack products and practical AI.",
  keywords:    ["Nishika Sindhwani", "Software Engineer", "New Delhi", "Full Stack Engineer"],
  alternates:  { canonical: "https://sarang-space.site/about" },
  openGraph: {
    title: "About — Nishika Sindhwani",
    description: "Software engineer in New Delhi. Full-stack products, backend systems, and practical AI.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
