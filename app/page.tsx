import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProjectsTeaser from "@/components/home/ProjectsTeaser";
import ContactCTA from "@/components/home/ContactCTA";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.home.title,
  description: SEO.home.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <AboutTeaser />
      <ProjectsTeaser />
      <ContactCTA />
    </>
  );
}
