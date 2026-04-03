import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import LeistungenContent from "./LeistungenContent";

export const metadata: Metadata = {
  title: SEO.leistungen.title,
  description: SEO.leistungen.description,
};

export default function LeistungenPage() {
  return <LeistungenContent />;
}
