import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Osteria Tarantina" },
      { name: "description", content: "Informativa sulla privacy del sito Osteria Tarantina." },
      { property: "og:title", content: "Privacy Policy — Osteria Tarantina" },
      { property: "og:description", content: "Informativa sulla privacy del sito Osteria Tarantina." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">[INSERIRE TESTO INFORMATIVA PRIVACY]</p>
      </section>
    </SiteShell>
  ),
});
