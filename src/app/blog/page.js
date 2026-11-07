import Link from "next/link";
import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Notes",
  description: "Writing from Nishika Sindhwani.",
};

const POSTS = [
  {
    href: "/blog/videoad-open-source-video-downloader",
    title: "VideoAd: The Best Free Open-Source Video Downloader for YouTube, Instagram & 1000+ Sites",
    excerpt: "Downloading videos shouldn't require expensive subscriptions, slow online converters, or sharing your files with a third-party site.",
  },
  {
    href: "/blog/free-india-post-tracking-api-for-developers",
    title: "Free India Post Tracking API for Developers",
    excerpt: "Build an open-source India Post tracking API and deploy it on Vercel.",
  },
  {
    href: "/blog/free-self-hosted-whatsapp-api-crm-ai-bot",
    title: "Free Self-Hosted WhatsApp API, CRM Dashboard & AI Autoreply Bot",
    excerpt: "A free alternative to the WhatsApp Cloud API, with a CRM dashboard and an AI autoreply bot.",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <section className="px-6 md:px-20 pt-36 pb-24">
        <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">Blog</p>
        <h1 className="font-black tracking-tighter leading-none mb-16" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
          Notes.
        </h1>
        <div className="flex flex-col border-t border-white/10">
          {POSTS.map((post) => (
            <Link key={post.href} href={post.href} className="group py-10 border-b border-white/10">
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-[#ff6b1a] transition-colors duration-300 mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-white/40 font-light max-w-2xl">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}
