import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Skills } from "@/components/sections/Skills";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WorkExperience />
      <FeaturedWork />
      <Skills />
      <AIWorkflow />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
