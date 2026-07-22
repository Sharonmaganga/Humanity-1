import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Impact Programs — One Family Worldwide" },
      { name: "description", content: "Five program pillars: drought response, economic enablement, disability access, child care, and dignified aging." },
      { property: "og:title", content: "Impact Programs" },
      { property: "og:description", content: "Deep-dive into our five program pillars serving marginalized communities." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    n: "01",
    title: "Emergency & Drought Response",
    tagline: "Acute hunger relief and water access in ASAL regions.",
    details: [
      "Water trucking to drought-stricken villages",
      "Emergency food packs with high-nutrition staples",
      "Borehole rehabilitation & new drilling",
      "Climate-resilient farming inputs and training",
    ],
  },
  {
    n: "02",
    title: "Economic Enablement & Training",
    tagline: "Entrepreneurship bootcamps, seed capital, and vocational toolkits.",
    details: [
      "8-week entrepreneurship bootcamps",
      "Seed capital grants for widows and youth",
      "Toolkits: tailoring, carpentry, welding, salons",
      "Financial literacy and market access support",
    ],
  },
  {
    n: "03",
    title: "Disability Access & Inclusion",
    tagline: "Assistive devices, disability-specific training, and advocacy.",
    details: [
      "Wheelchair and mobility device distribution",
      "Hearing aids and low-vision assistive technology",
      "Disability-specific vocational training",
      "Community advocacy and rights education",
    ],
  },
  {
    n: "04",
    title: "Child & Orphan Care",
    tagline: "Educational sponsorships, healthcare, and safe housing.",
    details: [
      "Full school fee sponsorships",
      "Monthly nutrition and healthcare",
      "Long-term mentorship pairings",
      "Safe housing partnerships",
    ],
  },
  {
    n: "05",
    title: "Dignified Aging & Widow Support",
    tagline: "Shelter, social integration, and monthly healthcare packs.",
    details: [
      "Shelter repair and restoration",
      "Monthly medical stipends and care packs",
      "Community integration circles",
      "Bereavement counseling",
    ],
  },
];

function Programs() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          <span className="text-xs uppercase tracking-widest text-earth font-bold">Impact Programs</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-8 leading-[0.95]">
            Five pillars. <span className="italic text-earth">One family.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our programs are designed around the specific vulnerabilities of the people we serve — because tailored interventions restore dignity faster than generic ones.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-6">
          {programs.map((p) => (
            <details key={p.n} className="group bg-card border border-border rounded-3xl overflow-hidden" open={p.n === "01"}>
              <summary className="cursor-pointer list-none p-8 md:p-10 flex items-center justify-between gap-8">
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-serif text-3xl md:text-4xl text-earth">{p.n}</span>
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl">{p.title}</h2>
                    <p className="text-muted-foreground mt-2">{p.tagline}</p>
                  </div>
                </div>
                <span className="size-10 rounded-full bg-earth/10 grid place-items-center text-earth transition-transform group-open:rotate-45 text-xl shrink-0" aria-hidden>
                  +
                </span>
              </summary>
              <div className="px-8 md:px-10 pb-10 md:pl-24">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 size-1.5 rounded-full bg-earth shrink-0" aria-hidden />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
