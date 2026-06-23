export interface Highlight {
  metric: string;
  label: string;
  description: string;
}

export interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface PluginWork {
  name: string;
  description: string;
  creations: string[];
}

export interface TechDocItem {
  pluginName: string;
  topics: string[];
}

export interface AIWorkflowStep {
  phase: string;
  title: string;
  items: string[];
}

export interface TestimonialItem {
  highlight: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  portfolio: string;
  fiverr: string;
}

export const heroData = {
  name: "Yousuf Ali",
  taglines: [
    "AI Content Specialist"
  ],
  description: "I create clear, structured, and conversion-focused content for SaaS, WordPress, and eCommerce products.",
  highlights: [
    "5+ years of experience",
    "125+ Fiverr reviews",
    "50+ global clients",
    "WordPress & WooCommerce content specialist"
  ]
};

export const aboutData = {
  intro: "I am a content writer specializing in SEO blogging, copywriting, and technical documentation.",
  story1: "I started my career on Fiverr, working with 50+ international clients and earning 125+ five-star reviews through consistent delivery of high-quality content.",
  story2: "Currently, I work at ShapedPlugin LLC, where I write blogs, documentation, and product-focused content for WordPress plugins.",
  story3: "I also use AI tools to support content creation, improve structure, and enhance quality through human review and refinement."
};

export const statsData = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 125, suffix: "+", label: "Fiverr Reviews" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 5, suffix: "", label: "Featured Plugins" }
];

export const experienceHighlights: Highlight[] = [
  { metric: "5+ Years", label: "Copywriting Experience", description: "Crafting highly structured, conversion-driven copy for digital storefronts and SaaS landing pages." },
  { metric: "125+", label: "Five-Star Fiverr Reviews", description: "Delivering top-tier client satisfaction with a perfect track record of communication and quality." },
  { metric: "50+", label: "International Clients", description: "Collaborating globally to help brands communicate their products to diverse user bases." },
  { metric: "1+ Year", label: "at ShapedPlugin LLC", description: "Designing SEO structures, plugin manuals, and blog content for leading WordPress tools." },
  { metric: "2 Years", label: "AI-Assisted Workflow", description: "Blending artificial intelligence speed with meticulous human copywriting and editing." },
  { metric: "Multi-Store", label: "E-commerce Experience", description: "Optimizing listings and descriptions across Shopify, WooCommerce, Etsy, and Amazon." }
];

export const featuredWork: FeaturedProject[] = [
  {
    id: "fiverr",
    category: "Fiverr Projects",
    title: "Global E-commerce Copywriting",
    description: "SEO product descriptions, website copy, and high-impact eCommerce content tailored for international clients."
  },
  {
    id: "ecommerce",
    category: "E-commerce Projects",
    title: "Store Optimization",
    description: "Shopify and WooCommerce product pages, Etsy descriptions, and Amazon SEO content aimed at maximizing sales."
  },
  {
    id: "wordpress-saas",
    category: "WordPress & SaaS Content",
    title: "Plugin & Software Blogging",
    description: "Blog articles and educational content focusing on WordPress plugins, explaining complex tech in accessible ways."
  },
  {
    id: "tech-doc",
    category: "Technical Documentation",
    title: "Guides & Manuals",
    description: "Step-by-step installation guides, feature documentations, and troubleshooting manuals for plugin users."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "fiverr-success",
    title: "Fiverr Success Story",
    category: "Fiverr Projects",
    challenge: "eCommerce clients struggled with vague website copy that led to high bounce rates and low customer trust.",
    solution: "Delivered conversion-focused SEO product descriptions and clear, structured copy targeted at user search intent.",
    results: "Significantly improved search engine visibility and drove higher conversion rates across multiple customer storefronts."
  },
  {
    id: "ecommerce-content",
    title: "E-commerce Content Project",
    category: "E-commerce",
    challenge: "Shopify and WooCommerce store owners faced low conversion rates on high-traffic product landing pages.",
    solution: "Created engaging, benefit-driven product listings addressing customer pain points, with optimized calls-to-action.",
    results: "Boosted add-to-cart rates and customer time-on-page through clear layout formatting and persuasive messaging."
  },
  {
    id: "wordpress-blog",
    title: "WordPress Blog Content Project",
    category: "WordPress & SaaS",
    challenge: "Users found technical terms in plugin descriptions confusing, leading to support ticket overload.",
    solution: "Wrote easy-to-read, SEO-optimized blog articles explaining plugin functionalities, use cases, and feature benefits.",
    results: "Increased organic blog traffic and equipped users with self-help guides, reducing routine support queries."
  },
  {
    id: "documentation",
    title: "Documentation Project",
    category: "Technical Documentation",
    challenge: "Users abandoned plugin installations midway due to complex and disorganized configuration manuals.",
    solution: "Developed structured, step-by-step setup guides with clear heading hierarchies, visual highlights, and troubleshooting FAQs.",
    results: "Vastly improved onboarding usability, resulting in higher product adoption rates and lower churn rates."
  },
  {
    id: "ai-workflow",
    title: "AI Workflow Project",
    category: "AI Content & Workflow",
    challenge: "Faced tight deadlines requiring large volumes of educational articles without sacrificing tone and accuracy.",
    solution: "Engineered a custom AI-assisted content pipeline for brainstorming, drafting, and prompt optimization, with strict human review and editing.",
    results: "Cut content production cycles by 50% while maintaining flawless quality and highly authentic brand messaging."
  }
];

export const wordpressSaaSPlugins: PluginWork[] = [
  {
    name: "Smart Post",
    description: "Advanced post grid, list, and carousel plugin for displaying articles dynamically in Gutenberg, Elementor, and more.",
    creations: ["SEO blog articles", "Feature-focused content", "Educational guides", "User-focused explanations"]
  },
  {
    name: "Smart Tabs",
    description: "Responsive tab creation tool designed for organizing complex site information in tab layouts.",
    creations: ["SEO blog articles", "Feature-focused content", "Educational guides", "User-focused explanations"]
  },
  {
    name: "Easy Accordion",
    description: "The best accordion slider builder to group complex FAQs, services, and queries in collapsible cards.",
    creations: ["SEO blog articles", "Feature-focused content", "Educational guides", "User-focused explanations"]
  },
  {
    name: "Location Weather",
    description: "Highly customizable weather widget plugin to showcase real-time weather alerts and details.",
    creations: ["SEO blog articles", "Feature-focused content", "Educational guides", "User-focused explanations"]
  },
  {
    name: "WooGallery",
    description: "A premium product gallery slider for WooCommerce to display product images from multiple angles.",
    creations: ["SEO blog articles", "Feature-focused content", "Educational guides", "User-focused explanations"]
  }
];

export const techDocs: TechDocItem[] = [
  {
    pluginName: "Easy Accordion",
    topics: ["Setup guides", "Feature explanations", "User instructions"]
  },
  {
    pluginName: "Smart Post",
    topics: ["Block usage guides", "Feature documentation", "Configuration help"]
  },
  {
    pluginName: "Location Weather",
    topics: ["Sun & Moon times", "Weather setup guides", "Widget integration docs", "Historical weather documentation"]
  }
];

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    phase: "01",
    title: "Brainstorming & Prompting",
    items: ["Ideation generation", "Outline framing", "Prompt optimization"]
  },
  {
    phase: "02",
    title: "Drafting & Structuring",
    items: ["AI-assisted rough draft", "Information hierarchy structure", "Technical term checks"]
  },
  {
    phase: "03",
    title: "Human Editing & Polish",
    items: ["Deep stylistic editing", "Brand tone alignment", "Meticulous grammar audit"]
  },
  {
    phase: "04",
    title: "Quality Validation",
    items: ["SEO check & optimization", "Fact verification", "Readability verification"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  { highlight: "Clear communication & fast delivery", description: "Consistently meets tight deadlines while maintaining transparent and prompt updates." },
  { highlight: "High-quality & professional writing", description: "Delivers clean, engaging, and well-researched pieces suitable for highly demanding audiences." },
  { highlight: "Strong understanding of requirements", description: "Grasps complex guidelines quickly and implements them accurately with minimal back-and-forth." },
  { highlight: "Reliable & consistent performance", description: "A trusted content partner who delivers outstanding work over long-term projects." },
  { highlight: "Ability to match brand tone", description: "Seamlessly adapts language to resonate with tech, casual, or conversion-focused demographics." }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Content Writing",
    skills: ["SEO Writing", "Copywriting", "Blogging", "Product Descriptions"]
  },
  {
    category: "Technical Writing",
    skills: ["Documentation", "User Guides", "Feature Writing", "Information Design"]
  },
  {
    category: "E-commerce",
    skills: ["Shopify", "WooCommerce", "Etsy", "Amazon Content", "Product Landing Pages"]
  },
  {
    category: "AI Tools",
    skills: ["Prompting", "Editing", "Content Evaluation", "Workflow Optimization"]
  }
];

export const contactDetails: ContactInfo = {
  email: "yousuf.ali.writer@gmail.com",
  linkedin: "https://linkedin.com/in/yousufali-writer",
  portfolio: "https://yousufali.com",
  fiverr: "https://fiverr.com/yousufali_writer"
};
