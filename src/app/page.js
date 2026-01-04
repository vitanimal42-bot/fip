import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect root to the default language route
  redirect("/tr");
}
