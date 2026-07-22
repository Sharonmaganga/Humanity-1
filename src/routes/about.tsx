import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — One Family Worldwide Foundation" },
      { name: "description", content: "Our founding story in Nairobi, our leadership, and how we govern our promise: humanity is one family." },
      { property: "og:title", content: "About One Family Worldwide" },
      { property: "og:description", content: "Founded in Nairobi. Serving marginalized communities globally with dignity." },
    ],
  }),
  component: About,
});

const leaders = [
  { name: "Amina Njeri", role: "Founder & Executive Director", bio: "Nairobi-born humanitarian; twenty years across disability and widow-support programs." },
  { name: "Dr. Samuel Kiptoo", role: "Programs Director", bio: "Public health physician leading drought and famine response in ASAL regions." },
  { name: "Fatima Hussein", role: "Community Organizer", bio: "Coordinates vocational training cohorts and micro-enterprise mentors." },
  { name: "James Otieno", role: "Finance & Compliance", bio: "CPA overseeing audit readiness, donor reporting, and grants compliance." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          <span className="text-xs uppercase tracking-widest text-earth font-bold">Our Story</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-8 leading-[0.95]">
            Founded in Nairobi. <span className="italic text-earth">Rooted in dignity.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            One Family Worldwide Foundation began in a small Nairobi office in 2018 with a single conviction — humanity is one family, and no member should be left to struggle alone. What started as a widows' meal program has grown into a multi-country operation serving drought-stricken villages, people with disabilities, orphans, and the elderly across Kenya and beyond.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="font-serif text-4xl mb-10">The Inclusion Matrix</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Widows", "Widowhood in many communities means economic collapse overnight. We provide healthcare stipends, shelter restoration, and micro-grants tailored to grief-aware recovery."],
              ["People with Disabilities", "Disability without support is exclusion. Our programs deliver mobility devices, assistive tech, and disability-specific vocational training."],
              ["Orphans & Children", "Every child deserves a future they choose. We fund school fees, nutrition, and long-term mentorship relationships."],
              ["Elderly", "Aging with dignity is not optional. We deliver monthly health packs, community integration, and safe shelter."],
              ["Drought & Famine Victims", "Climate shocks demand rapid response. We truck clean water and food packs into ASAL regions and build resilience through drought-tolerant farming."],
              ["Economically Disadvantaged", "Poverty is solvable when families have tools. Vocational bootcamps, toolkits, and seed capital create generational independence."],
            ].map(([title, body]) => (
              <div key={title} className="bg-card border border-border rounded-3xl p-8">
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border-y border-border py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-4xl mb-10">Governance & Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l) => (
                <div key={l.name} className="p-6 bg-background rounded-2xl border border-border">
                  <div className="size-16 rounded-full bg-earth/10 mb-4 grid place-items-center font-serif text-earth text-2xl">
                    {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="font-serif text-xl">{l.name}</div>
                  <div className="text-xs uppercase tracking-widest text-earth font-bold mt-1 mb-3">{l.role}</div>
                  <p className="text-sm text-muted-foreground">{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl mb-4">Financial Transparency Hub</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Independent auditors review our books annually. Download the latest reports and tax status below.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Annual Report 2024", "PDF · 2.4 MB"],
              ["Q4 2024 Financials", "PDF · 890 KB"],
              ["Independent Audit 2023", "PDF · 1.7 MB"],
              ["Tax Exemption Certificate", "PDF · 220 KB"],
              ["Board Registration", "PDF · 180 KB"],
              ["Impact Measurement Framework", "PDF · 600 KB"],
            ].map(([title, meta]) => (
              <a key={title} href="#" className="p-6 bg-card border border-border rounded-2xl hover:border-earth transition-colors group">
                <div className="font-semibold group-hover:text-earth transition-colors">{title}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{meta}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
