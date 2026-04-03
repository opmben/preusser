import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import ProjekteContent from "./ProjekteContent";

export const metadata: Metadata = {
  title: SEO.projekte.title,
  description: SEO.projekte.description,
};

export default function ProjektePage() {
  return <ProjekteContent />;
}
