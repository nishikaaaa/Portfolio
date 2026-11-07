import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = "https://sarang-space.site";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Nishika Sindhwani — Software Engineer",
    template: "%s — Nishika Sindhwani",
  },
  description:
    "Nishika Sindhwani is a software engineer in New Delhi. She builds full-stack products and practical AI, and is studying computer science at Guru Gobind Singh Indraprastha University.",
  keywords: [
    "Nishika Sindhwani",
    "Software Engineer",
    "Full Stack Engineer",
    "New Delhi",
  ],
  authors: [{ name: "Nishika Sindhwani", url: BASE }],
  creator: "Nishika Sindhwani",
  publisher: "Nishika Sindhwani",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Nishika Sindhwani — Software Engineer",
    title: "Nishika Sindhwani — Software Engineer",
    description: "Software engineer in New Delhi. Full-stack products, backend systems, and practical AI.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Nishika Sindhwani — Software Engineer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nishika Sindhwani — Software Engineer",
    description: "Software engineer in New Delhi. Full-stack products, backend systems, and practical AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Nishika Sindhwani",
      "url": BASE,
      "email": "nishikasindhwanins@gmail.com",
      "jobTitle": "Software Engineer",
      "description": "Software engineer in New Delhi building full-stack products and practical AI. Studying computer science at Guru Gobind Singh Indraprastha University.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Guru Tegh Bahadur 4th Century Engineering College, Guru Gobind Singh Indraprastha University"
      },
      "knowsAbout": [
        "Next.js", "React", "TypeScript", "Python", "FastAPI",
        "Node.js", "MySQL", "MongoDB", "Redux Toolkit"
      ],
      "hasOccupation": [
        { "@type": "Occupation", "name": "Software Engineer" },
        { "@type": "Occupation", "name": "Full Stack Developer Intern", "description": "LabBuddy, a healthcare marketplace" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Nishika Sindhwani — Software Engineer",
      "description": "Portfolio of Nishika Sindhwani, a software engineer in New Delhi.",
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": "Nishika Sindhwani — Software Engineer",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Nishika Sindhwani studying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B.Tech in Computer Science Engineering at Guru Tegh Bahadur 4th Century Engineering College, Guru Gobind Singh Indraprastha University. Expected graduation is 2027."
          }
        },
        {
          "@type": "Question",
          "name": "What did Nishika work on at LabBuddy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LabBuddy is a healthcare marketplace. She joined as a frontend developer and continued as a full stack intern, working with Next.js, React, TypeScript, Redux Toolkit, FastAPI, Python, and MySQL. The product is in production and serves more than 5,000 users."
          }
        },
        {
          "@type": "Question",
          "name": "What is Nishika building now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shotkut, an AI stock footage platform, and a misinformation detection system that uses language models, retrieval, OCR, and embeddings. Other work includes SoulNest and SatQuery."
          }
        },
        {
          "@type": "Question",
          "name": "How can someone reach Nishika Sindhwani?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By email at nishikasindhwanins@gmail.com, or through the contact form on this site."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": BASE,
      "name": "Nishika Sindhwani — Software Engineer",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description": "Portfolio of Nishika Sindhwani, a software engineer in New Delhi.",
      "inLanguage": "en-US"
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}

