import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import UeberUnsContent from "./UeberUnsContent";

export const metadata: Metadata = {
  title: SEO.ueberUns.title,
  description: SEO.ueberUns.description,
};

export default function UeberUnsPage() {
  return <UeberUnsContent />;
}
