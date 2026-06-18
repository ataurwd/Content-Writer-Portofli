import { Service, Project, ProcessStep, Testimonial } from '../types';

export const servicesData: Service[] = [
  { title: 'Content Strategy', description: 'Comprehensive roadmaps aligned with your business goals to ensure long-term organic growth.' },
  { title: 'SEO Content Creation', description: 'High-ranking, engaging articles and blog posts designed to capture and hold reader attention.' },
  { title: 'Copywriting', description: 'Persuasive sales copy, landing pages, and email sequences that drive conversions.' },
  { title: 'Digital Marketing', description: 'Holistic campaign management encompassing social media, paid ads, and analytics.' }
];

export const projectsData: Project[] = [
  { title: 'SaaS Growth Campaign', metric: '+150% Organic Traffic', description: 'Developed a comprehensive content cluster strategy over 6 months resulting in significant SERP ranking improvements.' },
  { title: 'E-commerce Conversion Optimization', metric: '32% Increase in CTR', description: 'Revamped product descriptions and landing page copy utilizing buyer psychology and A/B testing.' },
  { title: 'B2B Thought Leadership', metric: '5k+ Newsletter Subs', description: 'Spearheaded a weekly authoritative newsletter campaign targeting C-suite executives in the tech sector.' }
];

export const processStepsData: ProcessStep[] = [
  { step: '01', title: 'Discovery', desc: 'Understanding your brand voice, goals, and target audience.' },
  { step: '02', title: 'Strategy', desc: 'Crafting a data-backed content roadmap and SEO keyword plan.' },
  { step: '03', title: 'Creation', desc: 'Writing and designing engaging, high-quality deliverables.' },
  { step: '04', title: 'Optimization', desc: 'Analyzing metrics and refining the approach for maximum impact.' }
];

export const testimonialsData: Testimonial[] = [
  { quote: "An absolute game-changer for our content output. The strategic approach to SEO doubled our inbound leads within a quarter.", name: "Sarah Jenkins", role: "CMO at TechFlow" },
  { quote: "Their ability to translate complex B2B concepts into engaging, digestible articles is unmatched. A true professional.", name: "David Chen", role: "Founder of InnovateX" }
];
