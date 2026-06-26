export interface ContactInfo {
  email: string;
  linkedin: string;
  portfolio: string;
  fiverr: string;
  whatsapp: string;
  resume: string;
  github: string;
  location: string;
}

export const heroData = {
  name: "Yousuf Ali",
  tagline: "✦ Write. Connect. Engage. Convert.",
  title1: "Hi, I'm Yousuf Ali,",
  title2: "Senior Content Specialist",
  roles: ["AI Content Specialist", "Technical Writer", "SEO Blogger", "Marketing Strategist"],
  description: "Specialized in Copywriting (5+), AI Driven Content Writing & Training (3+), Blogging (2+), and Technical Writing (1+), creating high-impact content that drives engagement, strengthens brands, and supports business growth.",
  highlights: [
    "5+ Years Experience",
    "125+ Fiverr Reviews",
    "50+ Global Clients",
    "WordPress & WooCommerce Content Specialist"
  ]
};

export const aboutData = {
  intro: "Turning Content Into Revenue",
  body: "Hi, I'm Mohammad Yousuf Ali, an AI-Driven Content Specialist, Copywriter, and Technical Writer with 5+ years of experience creating SEO-driven content, product documentation, and marketing copy for E-Commerce, WordPress, and SaaS businesses. I specialize in transforming content ideas into clear, structured copy that educates users, improves decision-making, and drives measurable business growth while strengthening brand positioning.",
  stats: [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 125, suffix: "+", label: "Fiverr Reviews" },
    { value: 50, suffix: "+", label: "Global Clients" },
    { value: 3, suffix: "+", label: "Years AI Content" }
  ]
};

export const workExperienceData = [
  {
    id: "tech-content-writer",
    date: "Jan 2026 – Present",
    title: "Technical Content Writer",
    company: "ShapedPlugin LLC",
    deliverables: [
      "Creating technical documentation, user guides, feature-focused content, and educational resources for WordPress products and SaaS solutions."
    ]
  },
  {
    id: "content-writer",
    date: "Jul 2025 – Dec 2025",
    title: "Content Writer",
    company: "ShapedPlugin LLC",
    deliverables: [
      "Produced SEO blog content, feature articles, tutorials, and marketing content for WordPress plugins and digital products."
    ]
  },
  {
    id: "shopify-specialist",
    date: "2022 – 2025",
    title: "Shopify Store Assistant & Content Specialist",
    company: "Freelance",
    deliverables: [
      "Managed Shopify stores while creating SEO content, product descriptions, collection content, store optimization strategies, and customer-focused experiences."
    ]
  },
  {
    id: "copywriter",
    date: "2020 – 2022",
    title: "Copywriter",
    company: "Fiverr & Global Clients",
    deliverables: [
      "Created website copy, product descriptions, blog content, and marketing materials for businesses across multiple industries and international markets."
    ]
  }
];

export const featuredWorkData = {
  ecommerce: [
    {
      id: "uwu",
      name: "UWU Hub",
      industry: "POD T-Shirts & Personalized Gifts",
      role: "Copywriter",
      deliverables: ["Product Descriptions", "Collection Content", "SEO Copy"],
      link: "https://uwuhub.shop/collections/uwu-plushies"
    },
    {
      id: "rusmix",
      name: "RusmixHB",
      industry: "Beauty & Skincare",
      role: "Copywriter",
      deliverables: ["Product Copy", "Feature Descriptions", "SEO Content"],
      link: "https://rusmixhb.com/products"
    },
    {
      id: "furever",
      name: "Furever Adorable",
      industry: "Pet & Lifestyle Products",
      role: "Copywriter",
      deliverables: ["Product Descriptions", "Collection Content"],
      link: "https://fureveradorable.com/collections/toys-plushies"
    },
    {
      id: "scanteak",
      name: "Scanteak",
      industry: "Furniture & Home Decor",
      role: "Copywriter",
      deliverables: ["Category Pages", "Product Content", "Marketing Copy"],
      link: "https://scanteak.com.sg/collections/sofa-and-daybeds"
    },
    {
      id: "tavazo",
      name: "Tavazo",
      industry: "Food & Grocery",
      role: "Copywriter",
      deliverables: ["Collection Content", "Product Descriptions", "SEO Copy"],
      link: "https://tavazo.us/collections/dried-nuts"
    }
  ],
  wordpressSaaS: [
    {
      id: "smartpost",
      name: "Smart Post",
      role: "Content Writer & Technical Content Writer",
      deliverables: ["SEO Blog Articles", "Feature-Focused Content", "Product Education", "User-Focused Tutorials"],
      articles: [
        { title: "How to Add Taxonomy Image & Color in WordPress", url: "https://wpsmartpost.com/how-to-add-taxonomy-image-color-in-wordpress/" },
        { title: "How to Display Custom Taxonomy in WordPress", url: "https://wpsmartpost.com/how-to-display-custom-taxonomy-in-wordpress/" },
        { title: "Smart Post 3.3.0: Smart Blocks & Flexible Modules", url: "https://wpsmartpost.com/smart-post-3-3-0-powerful-blocks-flexible-modules-250-ready-made-patterns/" }
      ],
      link: "https://wpsmartpost.com/author/yousuf/"
    },
    {
      id: "wptabs",
      name: "WP Tabs",
      role: "Content Writer",
      deliverables: ["Educational Content", "Feature Tutorials", "Product Guides"],
      articles: [
        { title: "WP Tabs is Now Smart Tabs (3.0.0): Smarter Product Tabs", url: "https://shapedplugin.com/smart-custom-product-tabs-for-woocommerce/" },
        { title: "How to Create Custom WooCommerce Product Tabs", url: "https://wptabs.com/author/yousuf/" },
        { title: "Smarter Product Tabs for Higher Conversions", url: "https://wptabs.com/author/yousuf/" }
      ],
      link: "https://wptabs.com/author/yousuf/"
    },
    {
      id: "locationweather",
      name: "Location Weather",
      role: "Content Writer & Technical Content Writer",
      deliverables: ["Feature Content", "Tutorials", "Educational Resources"],
      articles: [
        { title: "Location Weather 3.3.0: Visual Gutenberg Forecast Blocks", url: "https://shapedplugin.com/location-weather-3-3-0-released-all-new-visual-gutenberg-weather-forecast-blocks-for-wordpress/" },
        { title: "Create Reusable Weather Blocks with Patterns", url: "https://locationweather.io/docs/how-to-create-reusable-weather-blocks-with-wordpress-patterns/" },
        { title: "Display Real-Time Detailed Weather Updates", url: "https://locationweather.io/display-real-time-detailed-weather-updates/" }
      ],
      link: "https://locationweather.io/author/yousuf/"
    },
    {
      id: "shapedplugin",
      name: "ShapedPlugin",
      role: "Content Writer",
      deliverables: ["WordPress Tutorials", "Product Marketing Content", "Educational Blog Articles"],
      articles: [
        { title: "Introducing AI FAQs Generator: Create FAQs With AI", url: "https://shapedplugin.com/introducing-ai-faqs-generator-create-faq-sections-with-ai/" },
        { title: "Create a Testimonial Grid with AJAX Filters", url: "https://shapedplugin.com/create-testimonial-grid-with-ajax-live-filters-in-wordpress/" },
        { title: "How to Organize Customer Reviews in WordPress", url: "https://shapedplugin.com/how-to-organize-customer-reviews-in-wordpress/" }
      ],
      link: "https://shapedplugin.com/author/yousuf/"
    }
  ],
  technicalDocs: [
    {
      id: "easyaccordion",
      name: "Easy Accordion",
      links: [
        { label: "Vertical Accordion", url: "https://easyaccordion.io/docs/vertical-accordion/" },
        { label: "Generate FAQs with AI", url: "https://easyaccordion.io/docs/generate-faqs-with-ai/" },
        { label: "Accordion Settings", url: "https://easyaccordion.io/docs/general-settings/accordion-settings/" }
      ]
    },
    {
      id: "locationweatherdoc",
      name: "Location Weather",
      links: [
        { label: "AI Weather Assistant", url: "https://locationweather.io/docs/ai-weather-assistant/" },
        { label: "Sun & Moon Times", url: "https://locationweather.io/docs/sun-moon-times/" },
        { label: "Divi Integration", url: "https://locationweather.io/docs/how-to-use-location-weather-blocks-in-divi-by-saved-templates/" },
        { label: "Reusable Weather Blocks", url: "https://locationweather.io/docs/how-to-create-reusable-weather-blocks-with-wordpress-patterns/" }
      ]
    },
    {
      id: "smartpostdoc",
      name: "Smart Post",
      links: [
        { label: "Modules Documentation", url: "https://wpsmartpost.com/docs/docs-cat/modules/" },
        { label: "Website Builder Blocks", url: "https://wpsmartpost.com/docs/docs-cat/website-builder-blocks/" },
        { label: "Gutenberg/WPBakery Integration", url: "https://wpsmartpost.com/docs/page-builder-integrations/integrate-with-gutenberg-editor/integrate-with-wpbakery/" }
      ]
    }
  ]
};

export const skillsData = [
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
    category: "E-Commerce Content",
    skills: ["Shopify", "WooCommerce", "Etsy", "Amazon Listings", "Conversion Copy"]
  },
  {
    category: "AI Content Systems",
    skills: ["Prompt Engineering", "Content Structuring", "Editing Workflows", "Content Optimization"]
  }
];

export const toolsData = [
  {
    category: "AI & Content Creation",
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"]
  },
  {
    category: "SEO & Analytics",
    tools: ["Google Analytics", "Google Search Console", "Ahrefs", "SEMrush"]
  },
  {
    category: "Content & Documentation",
    tools: ["Google Docs", "Microsoft Word", "Notion", "Markdown"]
  },
  {
    category: "WordPress & E-Commerce",
    tools: ["WordPress", "WooCommerce", "Shopify", "Elementor"]
  },
  {
    category: "Email Marketing & Automation",
    tools: ["Mailchimp", "Klaviyo"]
  },
  {
    category: "Design & Visual Content",
    tools: ["Canva", "Figma"]
  },
  {
    category: "Collaboration & Workflow",
    tools: ["ClickUp", "Trello", "Google Workspace", "Slack"]
  }
];

export const aiWorkflowSteps = [
  { phase: "01", title: "Research & Ideation" },
  { phase: "02", title: "Content Planning" },
  { phase: "03", title: "Draft Structuring" },
  { phase: "04", title: "Optimization & Editing" },
  { phase: "05", title: "Quality Review" }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Wow, always I return to Mr Yousuf, he's the best seller on Fiverr I've ever met. Super fast delivery, and excellent work that exceeded my expectations! Will back again, 100% recommended.",
    name: "zelda_shop",
    country: "France 🇫🇷",
    type: "Repeat Client",
    stars: 5
  },
  {
    id: 2,
    quote: "It was a pleasure to meet Yousuf, a pleasure to see my website evolve step by step. I am truly amazed by his professionalism and his professional vision. I 100% recommend this web engineer developer. It was a great meeting, now preciously registered in my address book.",
    name: "stilladeco",
    country: "France 🇫🇷",
    type: "Client",
    stars: 5
  },
  {
    id: 3,
    quote: "Amazing work! Yousuf is brilliant and eager to do everything right. He improves very quickly even for hard tasks and delivers work of high quality quickly. I definitely recommend working with him!",
    name: "zelda_shop",
    country: "France 🇫🇷",
    type: "Client",
    stars: 5
  },
  {
    id: 4,
    quote: "Very detailed minded and easy to communicate! Will definitely order more from him. I am very happy with his work!",
    name: "vicky_hui",
    country: "Hong Kong 🇭🇰",
    type: "Client",
    stars: 5
  },
  {
    id: 5,
    quote: "Very nice guy who goes the extra mile for you! There were some problems with my website which resulted in some extra work for him but he did it without problem. Would recommend everyone to work with him.",
    name: "dylan030493",
    country: "Netherlands 🇳🇱",
    type: "Client",
    stars: 5
  },
  {
    id: 6,
    quote: "The communication was excellent and the service was a great price for the effort put forth. I will continue using the provider for my ongoing project. It was a team effort and I am appreciative of that.",
    name: "nexthomerealest",
    country: "France 🇫🇷",
    type: "Client",
    stars: 5
  }
];

export const contactData = {
  heading: "Let's Work Together",
  subheading: "Need Content That Educates, Engages, and Converts?",
  body: "Whether you're looking for SEO blog content, technical documentation, WordPress product content, SaaS marketing copy, or AI-assisted content solutions, I'd be happy to discuss how I can help support your goals.\nLet's connect and explore how strategic content can improve user experience, strengthen your brand, and drive measurable results."
};

export const contactDetails: ContactInfo = {
  email: "mryousufali79@gmail.com",
  linkedin: "https://www.linkedin.com/in/yousuf-ali-cu-ctg/",
  fiverr: "https://www.fiverr.com/shopify_pro49/",
  portfolio: "https://www.fiverr.com/users/shopify_pro49/portfolio/",
  whatsapp: "+8801516338379",
  resume: "https://drive.google.com/file/d/1A7HAF8EjQkMonls2vXuzabEk5K2ujDY8/view?usp=drivesdk",
  github: "https://github.com/yousufwriter",
  location: "Dhaka, Bangladesh"
};
