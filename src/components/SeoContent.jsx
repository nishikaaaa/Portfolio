export default function SeoContent() {
  const nav = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Open Source", href: "/open-source" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="sr-only" aria-hidden="false" itemScope itemType="https://schema.org/Person">
      <h1 itemProp="name">Nishika Sindhwani</h1>
      <p itemProp="jobTitle">Software Engineer</p>
      <p itemProp="description">
        Nishika Sindhwani is a software engineer in New Delhi. She builds
        full-stack products and practical AI, with most of the work in backend
        systems, application architecture, and machine learning that has to
        live inside a real product.
      </p>

      <nav aria-label="Main site navigation">
        <ul>
          {nav.map((item) => (
            <li key={item.href}><a href={item.href}>{item.title}</a></li>
          ))}
        </ul>
      </nav>

      <p>
        She is studying B.Tech Computer Science Engineering at Guru Tegh
        Bahadur 4th Century Engineering College, Guru Gobind Singh
        Indraprastha University, and expects to graduate in 2027.
      </p>
      <p>
        In 2025 she joined LabBuddy, a healthcare marketplace, first on the
        frontend and then across the stack. The internship used Next.js,
        React, TypeScript, Redux Toolkit, FastAPI, Python, and MySQL. The
        product is in production and serves more than 5,000 users.
      </p>
      <p>
        Current work includes Shotkut, an AI stock footage platform, and a
        misinformation detection system built with language models, retrieval,
        OCR, and embeddings. Other projects are SoulNest and SatQuery.
      </p>
      <p>
        <span itemProp="address">New Delhi, India</span>
        {" · "}
        <span itemProp="email">nishikasindhwanins@gmail.com</span>
      </p>
    </div>
  );
}
