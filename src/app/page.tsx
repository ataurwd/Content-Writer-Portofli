import { Hero } from "@/components/sections/Hero";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsCounter />
      <About />
      <Services />
      <ExperienceTimeline />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
