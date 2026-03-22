import { Cpu, Share2, GraduationCap, Calendar, Video } from "lucide-react";

export const SERVICES = [
  {
    id: "technology",
    slug: "technology",
    title: "Technology Solutions",
    shortDesc: "Build the Infrastructure of Your Growth",
    icon: Cpu,
    description: "Technology is not an expense — it is your growth engine.",
    bullets: [
      { title: "Website Development", desc: "Clearly position your brand, generate qualified leads, and integrate with CRM & automation." },
      { title: "Mobile Applications", desc: "Improve customer engagement, increase retention, and create recurring revenue models." },
      { title: "AI Automation & Smart Systems", desc: "Automate customer follow-ups, lead nurturing, and internal workflows." }
    ],
    callout: "A website is not a brochure. It is your digital sales system. Even if you only request a website — we design it to support expansion, marketing, and automation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
  },
  {
    id: "social-media",
    slug: "social-media",
    title: "Social Media Strategy",
    shortDesc: "Turn Visibility into Revenue",
    icon: Share2,
    description: "Being present online is not enough. You need structure.",
    bullets: [
      { title: "Content Strategy", desc: "Align your messaging with business objectives." },
      { title: "Paid Campaigns", desc: "Targeted advertising that drives measurable ROI." },
      { title: "Lead Funnels & Community", desc: "Build an audience that converts to loyal customers." }
    ],
    callout: "Social media is not about likes — it is about authority, trust, and consistent lead generation. We structure it to support long-term positioning.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80"
  },
  {
    id: "training",
    slug: "training",
    title: "Training & Mentorship",
    shortDesc: "Clarity Before Expansion",
    icon: GraduationCap,
    description: "We provide frameworks that ensure your systems, team, and strategy are aligned before scaling.",
    bullets: [
      { title: "Business Growth Workshops", desc: "Interactive sessions to redefine your trajectory." },
      { title: "Founder Mentoring", desc: "1-on-1 guidance for high-level decision making." },
      { title: "Revenue Model Development", desc: "Structuring your offerings for maximum profitability." }
    ],
    callout: "Growth without clarity leads to chaos. Our training ensures your foundation is solid before you push on the accelerator.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80"
  },
  {
    id: "events",
    slug: "events",
    title: "Event Management",
    shortDesc: "From Brand to Experience",
    icon: Calendar,
    description: "Events create momentum, visibility, and strategic positioning.",
    bullets: [
      { title: "Business Launch Events", desc: "Make a statement from day one." },
      { title: "Corporate Conferences", desc: "Position your brand as an industry leader." },
      { title: "Brand Activation Campaigns", desc: "Interactive experiences that leave a lasting impression." }
    ],
    callout: "An event is not decoration — it is a market entry strategy.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
  },
  {
    id: "media",
    slug: "media",
    title: "Media Production",
    shortDesc: "Visual Authority",
    icon: Video,
    description: "Strong visuals increase perceived value — and perceived value increases revenue.",
    bullets: [
      { title: "Professional Photography", desc: "Elevate your brand's visual identity." },
      { title: "Corporate Videos", desc: "Tell your story with cinematic quality." },
      { title: "Short-Form Content", desc: "Engaging reels and motion graphics for social channels." }
    ],
    callout: "Even a simple profile design is part of your brand architecture.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
  }
];
