import {
  Layout,
  Zap,
  Target,
  BarChart3,
  MapPin,
  Store,
  Globe,
  Briefcase,
  Search,
  Bot,
  RefreshCw,
  Rocket,
  PenTool,
} from "lucide-react";
import { Service, CaseStudy, Testimonial } from "./types";

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "GBP Optimization", path: "/services/gbp-optimization" },
      { label: "SEO", path: "/services/seo" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Landing Page", path: "/services/landing-page" },
      { label: "Social Media Marketing", path: "/services/smm" },
      { label: "Google Ads", path: "/services/google-ads" },
      { label: "Branding", path: "/services/branding" },
      { label: "AI Solutions", path: "/services/ai-solutions" },
    ],
  },
  { label: "How We Work", path: "/process" },
  { label: "Results", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
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
    id: "1",
    client: "Fine Paint Works",
    industry: "House Painter • Wantirna South",
    title: "Domatating Local Search Results",
    metrics: [
      { label: "Local Ranking", value: "#1 Spot" },
      { label: "Monthly Calls", value: "300+" },
      { label: "Avg Review", value: "4.9/5" },
    ],
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769597882/House_Interior_Painters_in_Scoresby_and_Knoxfield_arqe10.jpg",
    description:
      "We were invisible on Maps before. Now we're the #1 result for 'House Painter near me'. Our phone hasn't stopped ringing.",
  },
  {
    id: "2",
    client: "Metro HVAC Services",
    industry: "Home Services • Sydney",
    title: "Scaling Lead Generation with PPC",
    metrics: [
      { label: "Lead Increase", value: "240%" },
      { label: "Lower CPC", value: "35%" },
      { label: "Map Ranking", value: "Top 3" },
    ],
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769598140/HVAC_1_rtgvii.jpg",
    description:
      "We were struggling to get calls in the off-season. GMBOPTIMIZATION completely revamped our Google Ads and now we're booked out 3 weeks in advance.",
  },
  {
    id: "3",
    client: "Elite Law Firm",
    industry: "Legal • Brisbane",
    title: "High-Conversion Website Redesign",
    metrics: [
      { label: "Load Speed", value: "< 1.5s" },
      { label: "Organic Growth", value: "150%" },
      { label: "New Inquiries", value: "50+" },
    ],
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769598543/office_law_xu7gfo.jpg",
    description:
      "Our previous website was slow and outdated. The new site isn't just beautiful it actually converts visitors into clients. Best investment we've made.",
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

export const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

export const ROTATING_WORDS = [
  "Scalable Growth",
  "Global Reach",
  "More Leads",
  "Brand Authority",
  "Visibility",
];

// ... (Keep your existing Data Arrays: HERO_REVIEWS, WHO_WE_SERVE, FAQ, SUCCESS_STORIES, METHODOLOGY, CAPABILITIES) ...
// NOTE: For brevity, I am not repeating the data arrays here, assume they exist as before.
// Paste your data arrays here if you are copying the whole file.

// --- DATA ARRAYS START (Copy from previous file if replacing whole file) ---
export const HERO_REVIEWS = [
  {
    text: "GMBOPTIMIZATION completely transformed our online presence. Our comprehensive SEO strategy led to a 200% increase in leads within 3 months.",
    name: "Sarah Jenkins",
    role: "CEO, Hudson Retail",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    text: "The team is professional, responsive, and incredibly talented. Our new website is lightning fast and looks amazing.",
    name: "Michael Rodriguez",
    role: "Founder, TechStream",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    text: "Finally an agency that delivers on their promises. The ROI we've seen from the Google Business Profile optimization is unmatched.",
    name: "Emily Chen",
    role: "Director, Chen Dental",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export const WHO_WE_SERVE_DATA = [
  {
    id: 1,
    title: "Small Businesses",
    desc: "Local market challengers looking to establish a dominant digital footprint.",
    icon: Store,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-500/0",
  },
  {
    id: 2,
    title: "One Location Business",
    desc: "Brick-and-mortar stores needing hyper-local SEO to drive foot traffic.",
    icon: MapPin,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-pink-500/0",
  },
  {
    id: 3,
    title: "Agencies & Consultants",
    desc: "B2B professionals requiring high-ticket lead generation strategies.",
    icon: Briefcase,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/0",
  },
  {
    id: 4,
    title: "Multi-Location Brands",
    desc: "Franchises needing unified reputation management across territories.",
    icon: Globe,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-orange-500/0",
  },
];

export const FAQ_DATA = [
  {
    question: "Which company is best for digital marketing?",
    answer:
      "GMB OPTIMIZATION is a trusted partner for all your digital marketing needs...",
  },
  {
    question: "What key factors should be considered?",
    answer:
      "Check customer reviews, case studies, experience in the industry...",
  },
  {
    question: "How much does it cost?",
    answer:
      "The cost varies depending on the project. Schedule a consultation call...",
  },
];

export const SUCCESS_STORIES = [
  {
    id: 1,
    company: "Fine Paint Works",
    category: "House Painter • Wantirna South",
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769597882/House_Interior_Painters_in_Scoresby_and_Knoxfield_arqe10.jpg",
    quote: "We were invisible on Maps before. Now we're the #1 result...",
    stats: [
      { label: "Local Ranking", value: "#1 Spot" },
      { label: "Monthly Calls", value: "300+" },
      { label: "Avg Review", value: "4.9/5" },
    ],
    highlight: "text-blue-400",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    id: 2,
    company: "Metro HVAC Services",
    category: "Home Services • Sydney",
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769598140/HVAC_1_rtgvii.jpg",
    quote:
      "We were struggling to get calls in the off-season. GMBOPTIMIZATION completely revamped our Google Ads and now we're booked out 3 weeks in advance.",
    stats: [
      { label: "Lead Increase", value: "240%" },
      { label: "Lower CPC", value: "35%" },
      { label: "Map Ranking", value: "Top 3" },
    ],
    highlight: "text-orange-400",
    gradient: "from-orange-500/10 to-transparent",
  },
  {
    id: 3,
    company: "Elite Law Firm",
    category: "Legal • Brisbane",
    image:
      "https://res.cloudinary.com/dznywn6ek/image/upload/v1769598543/office_law_xu7gfo.jpg",
    quote:
      "Our previous website was slow and outdated. The new site isn't just beautiful—it actually converts visitors into clients. Best investment we've made.",
    stats: [
      { label: "Load Speed", value: "< 1.5s" },
      { label: "Organic Growth", value: "150%" },
      { label: "New Inquiries", value: "50+" },
    ],
    highlight: "text-purple-400",
    gradient: "from-purple-500/10 to-transparent",
  },
];

export const METHODOLOGY_STEPS = [
  {
    id: 1,
    title: "ANALYSIS",
    desc: "Deep dive into your market...",
    icon: Search,
  },
  {
    id: 2,
    title: "STRATEGY",
    desc: "Custom roadmap designed to hit KPIs...",
    icon: Target,
  },
  {
    id: 3,
    title: "EXECUTION",
    desc: "Building high-converting assets...",
    icon: PenTool,
  },
  {
    id: 4,
    title: "OPTIMIZE",
    desc: "Continuous A/B testing...",
    icon: RefreshCw,
  },
  { id: 5, title: "GROWTH", desc: "Scaling what works...", icon: Rocket },
];

export const CAPABILITIES = [
  {
    id: "gbp",
    title: "Google Business Profile",
    description: "Dominate Competitors...",
    icon: MapPin,
    outcome: "Local Dominance",
    path: "/services/gbp-optimization",
  },
  {
    id: "web",
    title: "Web Development",
    description: "High performance web design...",
    icon: Layout,
    outcome: "High Conversion",
    path: "/services/web-developement",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Align your website with user intent...",
    icon: Search,
    outcome: "Max Visibility",
    path: "/services/seo",
  },
  {
    id: "ai",
    title: "AI Receptionist",
    description: "Deploy intelligent voice agents...",
    icon: Bot,
    outcome: "24/7 Automation",
    path: "/services/ai-solutions",
  },
];
