import type { IconType } from "react-icons";
import {
  SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiNestjs,
  SiPostgresql, SiSupabase, SiDrizzle, SiDocker, SiGithubactions,
  SiPython, SiN8N,
} from "react-icons/si";

export type Technology = {
  id: string;
  name: string;
  icon: IconType;
  color: string;
  description: string;
  tags: string[];
  projects: string[];
};

export const technologies: Technology[] = [
  {
    id: "typescript", name: "TypeScript", icon: SiTypescript, color: "#3178c6",
    description: "Aplicaciones, backend y lógica de producto.",
    tags: ["Web Apps", "APIs", "SaaS"], projects: ["AIAA", "Moni", "zehrty.dev"],
  },
  {
    id: "nextjs", name: "Next.js", icon: SiNextdotjs, color: "#f1f0ed",
    description: "Aplicaciones web modernas y full-stack.",
    tags: ["SSR", "Web Apps", "Full-stack"], projects: ["AIAA", "Moni", "zehrty.dev"],
  },
  {
    id: "react", name: "React", icon: SiReact, color: "#61dafb",
    description: "Interfaces interactivas enfocadas en producto.",
    tags: ["UI", "Dashboards", "CRM"], projects: ["AIAA", "Moni", "zehrty.dev"],
  },
  {
    id: "nodejs", name: "Node.js", icon: SiNodedotjs, color: "#78b947",
    description: "Runtime para APIs, servicios y tooling.",
    tags: ["APIs", "Workers", "Tooling"], projects: ["AIAA", "Moni"],
  },
  {
    id: "nestjs", name: "NestJS", icon: SiNestjs, color: "#e0234e",
    description: "Backend modular para sistemas escalables.",
    tags: ["APIs", "Auth", "Multitenancy"], projects: ["AIAA"],
  },
  {
    id: "postgresql", name: "PostgreSQL", icon: SiPostgresql, color: "#669ac4",
    description: "Datos estructurados, seguros y consistentes.",
    tags: ["SQL", "RLS", "Data"], projects: ["AIAA", "Moni", "ai-preciosFruver"],
  },
  {
    id: "supabase", name: "Supabase", icon: SiSupabase, color: "#3ecf8e",
    description: "Autenticación, datos y seguridad integrada.",
    tags: ["Auth", "SSR", "RLS"], projects: ["AIAA", "Moni"],
  },
  {
    id: "drizzle", name: "Drizzle ORM", icon: SiDrizzle, color: "#c5f74f",
    description: "Acceso a datos tipado y migraciones versionadas.",
    tags: ["ORM", "Queries", "Migrations"], projects: ["AIAA"],
  },
  {
    id: "docker", name: "Docker", icon: SiDocker, color: "#2496ed",
    description: "Entornos reproducibles desde desarrollo a producción.",
    tags: ["Containers", "Compose", "Deploy"], projects: ["AIAA", "Moni", "ai-preciosFruver"],
  },
  {
    id: "github-actions", name: "GitHub Actions", icon: SiGithubactions, color: "#70b2ff",
    description: "Automatización del ciclo de integración y despliegue.",
    tags: ["CI/CD", "Tests", "Deploy"], projects: ["AIAA", "Moni"],
  },
  {
    id: "python", name: "Python", icon: SiPython, color: "#ffd343",
    description: "Backend y lógica de servidor en productos reales.",
    tags: ["Backend", "APIs", "Automation"], projects: ["ai-preciosFruver"],
  },
  {
    id: "n8n", name: "n8n", icon: SiN8N, color: "#ea4b71",
    description: "Automatizaciones que conectan servicios y procesos.",
    tags: ["Workflows", "APIs", "LLMs"], projects: ["Automatizaciones"],
  },
];
