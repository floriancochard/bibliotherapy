export default function robots() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://bibliotherapy.vercel.app/";
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: BASE_URL + "/sitemap.xml",
  };
}
