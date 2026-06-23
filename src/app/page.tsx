import { Hero } from "@/components/sections/Hero";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WordPressSaaS } from "@/components/sections/WordPressSaaS";
import { TechDoc } from "@/components/sections/TechDoc";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsCounter />
      <About />
      <CaseStudies />
      <WordPressSaaS />
      <TechDoc />
      <AIWorkflow />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
