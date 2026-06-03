import {
  Globe,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Layers3,
} from "lucide-react";

export const services = [
  {
    title: "Web Design",
    description:
      "Modern premium interfaces focused on user experience and conversion.",
    icon: Globe,
    size: "large" as const,
  },
  {
    title: "Web Development",
    description:
      "High-performance scalable platforms built using modern technologies.",
    icon: Code2,
    size: "small" as const,
  },
  {
    title: "Mobile Apps",
    description:
      "Custom iOS and Android applications with seamless experiences.",
    icon: Smartphone,
    size: "small" as const,
  },
  {
    title: "AI Automation",
    description:
      "Smart automation systems that optimize workflows and productivity.",
    icon: Sparkles,
    size: "large" as const,
  },
  {
    title: "UI/UX Systems",
    description:
      "Design systems crafted for consistency, scalability, and usability.",
    icon: LayoutDashboard,
    size: "small" as const,
  },
  {
    title: "SaaS Platforms",
    description:
      "Enterprise-grade SaaS applications built for ambitious businesses.",
    icon: Layers3,
    size: "small" as const,
  },
];
