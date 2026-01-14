import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  outcome: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  metrics: { label: string; value: string }[];
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
