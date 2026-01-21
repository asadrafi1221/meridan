import { Layout, Zap, Target, BarChart3 } from "lucide-react";
import { NavItem, Service, CaseStudy, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },

  { label: "Services", path: "/services" },
  { label: "How We Work", path: "/process" },
  { label: "Results", path: "/work" },
  { label: "About", path: "/about" },
];

export const SERVICES: Service[] = [
  {
    id: "growth-systems",
    title: "Growth Systems & Automation",
    description:
      "We don't just run ads; we build self-sustaining marketing ecosystems that nurture leads automatically.",
    icon: Zap,
    outcome: "Reduced CAC, Higher LTV",
  },
  {
    id: "web-engineering",
    title: "High-Performance Web Engineering",
    description:
      "Enterprise-grade React and Next.js development. Fast, secure, and built to scale globally.",
    icon: Layout,
    outcome: "99.9% Uptime, <1s Load Times",
  },
  {
    id: "conversion-design",
    title: "Conversion-Led Design",
    description:
      "Aesthetics meet psychology. We design interfaces specifically engineered to turn visitors into revenue.",
    icon: Target,
    outcome: "2x - 5x Conversion Rate Lift",
  },
  {
    id: "seo-content",
    title: "Strategic SEO & Content",
    description:
      "Dominating search intent with authoritative content that positions you as the industry leader.",
    icon: BarChart3,
    outcome: "Sustainable Organic Traffic",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-scale",
    client: "NovaPay",
    industry: "FinTech / SaaS",
    title: "Scaling a Dubai Fintech to 50k Users",
    metrics: [
      { label: "User Growth", value: "+340%" },
      { label: "CPA Reduction", value: "-45%" },
    ],
    image: "https://picsum.photos/800/600?grayscale&random=1",
    description:
      "We re-architected their entire acquisition funnel and implemented a headless CMS architecture.",
  },
  {
    id: "ecom-brand",
    client: "Lumina Home",
    industry: "E-Commerce",
    title: "From Local Shopify Store to Global Brand",
    metrics: [
      { label: "Revenue", value: "$2.4M" },
      { label: "ROAS", value: "6.2x" },
    ],
    image: "https://picsum.photos/800/600?grayscale&random=2",
    description:
      "A comprehensive rebrand combined with aggressive meta-ads strategy managed by our Lahore dedicated team.",
  },
  {
    id: "health-tech",
    client: "VitalCheck",
    industry: "HealthTech",
    title: "Automating Patient Intake for a UK Clinic Network",
    metrics: [
      { label: "Admin Hours Saved", value: "1,200+" },
      { label: "Booking Efficiency", value: "+85%" },
    ],
    image: "https://picsum.photos/800/600?grayscale&random=3",
    description:
      "Custom software development connecting legacy EMR systems with a modern React frontend.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I was hesitant about working with an agency across the globe. Meridian erased that fear in week one. Their execution speed is faster than my local team in London.",
    author: "James Miller",
    role: "COO",
    company: "TechFlow UK",
  },
  {
    id: "t2",
    quote:
      "They don't act like freelancers. They act like owners. The strategic depth they bring to the table is rare to find.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Opus SaaS (Canada)",
  },
];
