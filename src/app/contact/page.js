import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact",
  description: "Contact Nishika Sindhwani, a software engineer in New Delhi. Email nishikasindhwanins@gmail.com.",
  keywords:    ["Nishika Sindhwani", "contact", "Software Engineer", "New Delhi"],
  alternates:  { canonical: "https://sarang-space.site/contact" },
  openGraph: {
    title: "Contact — Nishika Sindhwani",
    description: "Write to Nishika Sindhwani at nishikasindhwanins@gmail.com.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
