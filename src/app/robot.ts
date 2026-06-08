export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://repurpose-ai-landing.vercel.app/sitemap.xml",
  };
}