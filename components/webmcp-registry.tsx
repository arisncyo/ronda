"use client";

import { useEffect } from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ronda-cctv.vercel.app";

export default function WebMCPRegistry() {
  useEffect(() => {
    const mc = (document as any).modelContext;
    if (!mc?.registerTool) return;

    mc.registerTool({
      name: "searchProducts",
      description: "Search and filter CCTV products by name, brand, or description on Ronda CCTV",
      inputSchema: {
        type: "object",
        properties: {
          q: { type: "string", description: "Search query for product name, brand, or description" },
        },
        required: ["q"],
      },
      execute: async ({ q }: { q: string }) => {
        window.location.href = `/katalog?q=${encodeURIComponent(q)}`;
        return `Redirecting to product search results for: ${q}`;
      },
    });

    mc.registerTool({
      name: "searchArticles",
      description: "Search and filter articles by title or summary on Ronda CCTV",
      inputSchema: {
        type: "object",
        properties: {
          q: { type: "string", description: "Search query for article title or summary" },
        },
        required: ["q"],
      },
      execute: async ({ q }: { q: string }) => {
        window.location.href = `/artikel?q=${encodeURIComponent(q)}`;
        return `Redirecting to article search results for: ${q}`;
      },
    });

    mc.registerTool({
      name: "consultationViaWhatsApp",
      description: "Send a consultation request via WhatsApp to Ronda CCTV",
      inputSchema: {
        type: "object",
        properties: {
          text: {
            type: "string",
            description: "The consultation message to send via WhatsApp",
          },
        },
      },
      execute: async ({ text }: { text?: string }) => {
        const wa = process.env.NEXT_PUBLIC_WHATSAPP || "628176655959";
        const msg = encodeURIComponent(text || "Halo Ronda CCTV, saya ingin konsultasi.");
        window.open(`https://wa.me/${wa}?text=${msg}`, "_blank", "noopener,noreferrer");
        return `WhatsApp consultation opened with message: ${text || "Halo Ronda CCTV, saya ingin konsultasi."}`;
      },
    });
  }, []);

  return null;
}
