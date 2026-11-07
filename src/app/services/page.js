import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description: "Full-stack products, backend systems, and practical AI by Nishika Sindhwani.",
};

export default function Page() {
  return (
    <PageShell>
      <div className="pt-28">
        <Services />
      </div>
    </PageShell>
  );
}
