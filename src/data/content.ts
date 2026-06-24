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
    "AI Content Specialist",
    "Technical Writer",
    "Blogger",
    "SEO & Marketing Strategist"
  ],
  description: "Specialized in Copywriting (5+), AI Driven Content Writing & Training (3+), Blogging (2+), and Technical Writing (1+), creating high-impact content that drives engagement, strengthens brands, and supports business growth.",
  highlights: [
    "5+ years of experience",
    "125+ Fiverr reviews",
    "50+ Satisfied global clients",
    "WordPress & WooCommerce content specialist"
  ]
};

export const aboutData = {
  intro: "Turning Content Into Revenue",
  story1: "Hi, I'm Mohammad Yousuf Ali, an AI Content Trainer, Copywriter, and Technical Writer with 5+ years of experience creating SEO-driven content, product documentation, and marketing copy for E-Commerce, WordPress, and SaaS businesses.",
  story2: "I specialize in transforming content ideas into clear, structured copy that educates users, improves decision-making, and drives measurable business growth while strengthening brand positioning.",
  story3: ""
};

export const statsData = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 125, suffix: "+", label: "Fiverr Reviews" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 3, suffix: "+", label: "Years AI Content" }
];

export const experienceHighlights: Highlight[] = [
  { metric: "Foundation", label: "Copywriting", description: "Built core expertise in SEO content writing, blogging, and marketing copy focused on clarity, engagement, and conversion." },
  { metric: "Global", label: "Freelance Clients", description: "Expanded into international markets through Fiverr and direct clients, delivering website copy, SEO product descriptions, and eCommerce content." },
  { metric: "Expansion", label: "Technical Writing", description: "Developed structured documentation systems for SaaS and WordPress products with a focus on usability and clarity." },
  { metric: "1+ Year", label: "WordPress & SaaS", description: "Worked on WordPress plugin content systems at ShapedPlugin LLC for products like Smart Post, Smart Tabs, and WooGallery." },
  { metric: "3+ Years", label: "AI Content Integration", description: "Integrated AI tools into content workflows for ideation, structuring, and optimization while maintaining human editorial control." },
  { metric: "Multi-Store", label: "E-commerce Experience", description: "Shopify, WooCommerce, Etsy, and Amazon listing optimization experience for clarity and conversion." }
];

export const featuredWork: FeaturedProject[] = [
  {
    id: "freelance",
    category: "Freelance Content Work",
    title: "Global Client Solutions",
    description: "SEO product descriptions, landing pages, and website copy for global eCommerce clients."
  },
  {
    id: "ecommerce",
    category: "E-commerce Content Systems",
    title: "Platform Optimization",
    description: "Shopify, WooCommerce, Etsy, and Amazon product listings optimized for clarity and conversion."
  },
  {
    id: "wordpress-saas",
    category: "WordPress & SaaS Content",
    title: "Structured Plugin Content",
    description: "Feature pages, SEO blog articles, user guides, and educational content for WordPress plugins."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-copywriting",
    title: "eCommerce Copywriting",
    category: "E-commerce",
    challenge: "Product listings lacked clarity, leading to poor customer engagement.",
    solution: "Structured SEO-driven product descriptions and landing pages.",
    results: "Improved product clarity and engagement, driving conversions."
  },
  {
    id: "wordpress-doc",
    title: "WordPress Documentation System",
    category: "Technical Documentation",
    challenge: "Complex plugin configurations caused user confusion.",
    solution: "Created scalable documentation frameworks for multiple plugins.",
    results: "Improved usability and significantly reduced user confusion."
  },
  {
    id: "saas-content",
    title: "SaaS Content Strategy",
    category: "WordPress & SaaS",
    challenge: "End users struggled to understand complex plugin features.",
    solution: "Developed SEO-focused educational content and feature guides.",
    results: "Simplified complex plugin features, educating the user base effectively."
  },
  {
    id: "ai-workflow",
    title: "AI-Assisted Content Workflow",
    category: "AI Content",
    challenge: "Needed to scale content production without sacrificing quality.",
    solution: "Implemented AI tools for ideation, structuring, and optimization with human review.",
    results: "Improved speed and structure while maintaining full quality control."
  }
];

export const wordpressSaaSPlugins: PluginWork[] = [
  {
    name: "Smart Post",
    description: "WordPress plugin for dynamic post grids and lists.",
    creations: ["Feature documentation", "User guides", "SEO blog articles"]
  },
  {
    name: "Smart Tabs",
    description: "Responsive tab creation tool for WordPress.",
    creations: ["Feature documentation", "User guides", "SEO blog articles"]
  },
  {
    name: "Easy Accordion",
    description: "Accordion slider builder for FAQs and content.",
    creations: ["Feature documentation", "User guides", "SEO blog articles"]
  },
  {
    name: "Location Weather",
    description: "Customizable weather widget plugin.",
    creations: ["Feature documentation", "User guides", "SEO blog articles"]
  },
  {
    name: "WooGallery",
    description: "Product gallery slider for WooCommerce.",
    creations: ["Feature documentation", "User guides", "SEO blog articles"]
  }
];

export const techDocs: TechDocItem[] = [
  {
    pluginName: "Documentation Systems",
    topics: ["User guides", "Knowledge base articles", "Feature documentation", "API documentation"]
  }
];

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    phase: "01",
    title: "Brainstorming",
    items: ["Content brainstorming", "Topic generation"]
  },
  {
    phase: "02",
    title: "Structuring",
    items: ["Draft structuring", "SEO optimization"]
  },
  {
    phase: "03",
    title: "Editing",
    items: ["Editing assistance", "Refinement"]
  },
  {
    phase: "04",
    title: "Validation",
    items: ["Quality validation", "Manual review before delivery"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  { highlight: "Clear communication and fast delivery", description: "" },
  { highlight: "High-quality and professional writing", description: "" },
  { highlight: "Strong requirement understanding", description: "" },
  { highlight: "Reliable and consistent performance", description: "" },
  { highlight: "Ability to match brand tone", description: "" }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Content Writing & Copywriting",
    skills: ["SEO Writing", "Blog Writing", "Website Copy", "Landing Pages", "Product Descriptions"]
  },
  {
    category: "Technical Writing",
    skills: ["Documentation", "User Guides", "API Documentation", "Knowledge Base", "SOP Writing"]
  },
  {
    category: "SaaS & WordPress Content",
    skills: ["Plugin Documentation", "Feature Writing", "SaaS Copywriting", "UX Writing"]
  },
  {
    category: "E-commerce Content",
    skills: ["Shopify", "WooCommerce", "Etsy", "Amazon Listings", "Conversion Copy"]
  },
  {
    category: "AI Content Systems",
    skills: ["Prompt Engineering", "Content Structuring", "Editing Workflows", "Content Optimization"]
  }
];

export const contactDetails: ContactInfo = {
  email: "[Your Email]",
  linkedin: "[Your LinkedIn]",
  portfolio: "[Your Website]",
  fiverr: "[Your Profile]"
};
