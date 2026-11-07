import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Nishika Sindhwani",
    title: "Software Engineer",
    website: "https://sarang-space.site",
    email: "nishikasindhwanins@gmail.com",
    location: "New Delhi, India",
    education: {
      degree: "B.Tech Computer Science Engineering",
      college: "Guru Tegh Bahadur 4th Century Engineering College",
      university: "Guru Gobind Singh Indraprastha University",
      expectedGraduation: 2027,
    },
    summary:
      "Software engineer in New Delhi. She builds full-stack products and practical AI, with most of the work in backend systems and machine learning that has to live inside a real product.",
    projects: [
      {
        name: "Shotkut",
        description: "AI-powered stock footage platform. Current work is semantic search and video editing.",
        technologies: ["FastAPI", "Node.js", "MongoDB", "Pinecone", "S3", "OpenAI"],
      },
      {
        name: "Misinformation Detection",
        description: "Detection software using language models, retrieval, OCR, and embeddings.",
        technologies: ["LLMs", "RAG", "OCR", "Embeddings", "FastAPI", "Python", "MongoDB"],
      },
      {
        name: "SoulNest",
        description: "Commerce software spanning the storefront and the API.",
        technologies: ["Next.js", "FastAPI", "React", "TypeScript", "MySQL", "Redux Toolkit"],
      },
      {
        name: "LabBuddy",
        description: "Healthcare marketplace. Internship work from frontend into the full stack, in production.",
        technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "FastAPI", "Python", "MySQL"],
      },
      {
        name: "SatQuery",
        description: "Remote sensing with AI.",
        technologies: ["Python"],
      },
    ],
    skills: {
      core: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Node.js", "Redux Toolkit", "MySQL", "MongoDB", "Git"],
      appliedAi: ["OpenAI", "Embeddings", "RAG", "Pinecone", "OCR"],
    },
    experience: [
      { role: "Started Computer Science", period: "2023" },
      { role: "Joined LabBuddy", period: "2025" },
      { role: "Built production healthcare software", period: "2025" },
      { role: "Building AI products", period: "2026" },
      { role: "Exploring intelligent systems", period: "Now" },
    ],
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
