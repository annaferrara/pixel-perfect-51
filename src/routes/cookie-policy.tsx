import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/Layout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Osteria Tarantina" },
      { name: "description", content: "Informativa sui cookie del sito Osteria Tarantina." },
      { property: "og:title", content: "Cookie Policy — Osteria Tarantina" },
      { property: "og:description", content: "Informativa sui cookie del sito Osteria Tarantina." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-5xl">Cookie Policy</h1>
        <p className="mt-6 text-muted-foreground">[INSERIRE TESTO COOKIE POLICY]</p>
      </section>
    </SiteShell>
  ),
});
