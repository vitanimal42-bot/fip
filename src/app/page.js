import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function RootPage() {
  // Try to detect country from common edge headers (Vercel, Cloudflare, etc.)
  const hdrs = headers();
  const country = (
    hdrs.get("x-vercel-ip-country") ||
    hdrs.get("cf-ipcountry") ||
    hdrs.get("x-country") ||
    ""
  ).toLowerCase();

  // Rules: Turkey -> /tr, Russia -> /ru, anything else (including most of Europe) -> /en
  if (country === "tr") return redirect("/tr");
  if (country === "ru") return redirect("/ru");

  // If a country header exists but isn't TR/RU, assume English.
  if (country) return redirect("/en");

  // Fallback: no geo header (local dev, unknown) -> Turkish
  return redirect("/tr");
}
