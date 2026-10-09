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
        <p className="mt-6 text-muted-foreground"><a href="https://www.iubenda.com/privacy-policy/29834779" class="iubenda-white iubenda-noiframe iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script></p>
      </section>
    </SiteShell>
  ),
});
