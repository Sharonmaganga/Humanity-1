import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroPortrait from "@/assets/hero-portrait.jpg";
import reliefImg from "@/assets/relief.jpg";
import trainingImg from "@/assets/training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Family Worldwide — Humanity is One Family" },
      {
        name: "description",
        content:
          "Extending food, dignity, shelter, and economic empowerment to widows, orphans, people with disabilities, and drought-affected communities in Kenya and worldwide.",
      },
      { property: "og:title", content: "One Family Worldwide Foundation" },
      {
        property: "og:description",
        content: "One Human Family. Infinite Ways to Serve. Nairobi HQ, global reach.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: "♿",
    title: "Disability Access",
    tint: "bg-sand",
    dot: "bg-earth",
    desc: "Mobility devices, assistive tech, tactile training, and disability advocacy so no one is left behind.",
    items: ["Wheelchair distribution", "Hearing aids & assistive tech", "Inclusive vocational training"],
  },
  {
    icon: "💧",
    title: "Drought & Famine Relief",
    tint: "bg-amber-50",
    dot: "bg-amber-warm",
    desc: "Clean water trucking, emergency food packs, and climate-resilient farming across arid and semi-arid lands.",
    items: ["Water well drilling", "Emergency food packs", "Sustainable farming inputs"],
  },
  {
    icon: "🌿",
    title: "Widows & Elderly Care",
    tint: "bg-emerald-50",
    dot: "bg-moss",
    desc: "Medical stipends, community shelter restoration, and micro-grants that restore dignity in later years.",
    items: ["Monthly health packs", "Shelter restoration", "Micro-grants"],
  },
  {
    icon: "📚",
    title: "Orphans & Vulnerable Children",
    tint: "bg-sand",
    dot: "bg-earth",
    desc: "School fees, nutrition, and mentorship so every child has a chance at a future they choose.",
    items: ["School sponsorship", "Nutrition programs", "Mentorship"],
  },
  {
    icon: "🛠️",
    title: "Business Enablement",
    tint: "bg-emerald-50",
    dot: "bg-moss",
    desc: "Free vocational training, toolkits, and seed capital that turn beneficiaries into breadwinners.",
    items: ["Vocational bootcamps", "Toolkits & machinery", "Seed capital"],
  },
];

const giveModes = [
  { icon: "💰", label: "Finances", desc: "One-time or monthly giving. M-Pesa STK Push, card, PayPal, wire.", hover: "hover:bg-earth" },
  { icon: "👕", label: "Clothing & Food", desc: "Drop-off or bulk pickup for food, clothing, medical supplies.", hover: "hover:bg-moss" },
  { icon: "🎓", label: "Free Training", desc: "Donate professional skills as a mentor or vocational trainer.", hover: "hover:bg-amber-600" },
  { icon: "📦", label: "Equipment", desc: "Laptops, sewing machines, wheelchairs, business machinery.", hover: "hover:bg-stone-600" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-moss/10 text-moss font-bold text-xs uppercase tracking-widest mb-6">
                Nairobi HQ · Global Reach
              </span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
                One Human Family.
                <br />
                <span className="text-earth italic">Infinite</span> Ways
                <br />
                to Serve.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Extending food, dignity, shelter, and economic empowerment to widows, orphans, people with disabilities, and drought-affected communities in Kenya and worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/ways-to-give"
                  className="px-8 py-4 bg-earth text-earth-foreground rounded-full font-bold text-lg shadow-lg shadow-earth/20 hover:brightness-110 transition-all"
                >
                  Give Support
                </Link>
                <Link
                  to="/get-support"
                  className="px-8 py-4 border-2 border-foreground/15 text-foreground rounded-full font-bold text-lg hover:border-foreground transition-all"
                >
                  Request Assistance
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroPortrait}
                alt="Portrait of a smiling elder from a community we serve"
                width={1080}
                height={1350}
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-card p-6 md:p-8 rounded-3xl shadow-xl max-w-xs border border-earth/5">
                <div className="text-4xl font-serif text-earth mb-2">5,000+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Daily Meals Delivered
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  Immediate nutrition to families in arid lands across northern Kenya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact bar */}
        <section aria-label="Real-time impact metrics" className="bg-ink text-earth-foreground py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
              {[
                ["5,000+", "Meals delivered"],
                ["1,200+", "Businesses enabled"],
                ["800+", "Youth & widows trained"],
                ["10+", "Drought relief drives"],
              ].map(([n, l]) => (
                <div key={l} className="md:pl-8 md:first:pl-0">
                  <div className="text-4xl font-serif">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Pillars of Dignity</h2>
                <p className="text-muted-foreground text-lg">
                  Holistic support designed for the most marginalized members of our family.
                </p>
              </div>
              <Link
                to="/programs"
                className="text-earth font-bold border-b-2 border-earth pb-1 flex items-center gap-2 group hover:gap-4 transition-all self-start"
              >
                View all programs <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pillars.map((p) => (
                <article key={p.title} className="group bg-card p-8 md:p-10 rounded-3xl border border-border hover:border-earth/30 transition-all">
                  <div className={`size-14 ${p.tint} rounded-2xl grid place-items-center mb-8 text-2xl`} aria-hidden>
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2 text-sm font-medium">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`size-1.5 ${p.dot} rounded-full`} aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stories strip */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={reliefImg} alt="Community receiving clean water from a relief truck" width={1200} height={900} loading="lazy" className="size-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Field Report · Turkana</p>
                <p className="font-serif text-2xl mt-1">Water reaches 12 villages this month.</p>
              </figcaption>
            </figure>
            <figure className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={trainingImg} alt="Woman training on a tailoring machine" width={1200} height={900} loading="lazy" className="size-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Story · Kibera</p>
                <p className="font-serif text-2xl mt-1">Grace launched her tailoring business with a seed grant.</p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Multi-format giving */}
        <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
          <div className="bg-ink text-earth-foreground rounded-[32px] md:rounded-[48px] overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Choose Your Impact</h2>
              <p className="text-white/70 text-lg mb-8">
                Whether a financial gift, food drop-off, or professional mentorship — your contribution changes lives immediately.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/ways-to-give"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10"
                >
                  <span>Donate via M-Pesa</span>
                  <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded">STK PUSH</span>
                </Link>
                <Link
                  to="/ways-to-give"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10"
                >
                  <span>International transfer</span>
                  <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded">SWIFT</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 bg-white/5 p-4 gap-4">
              {giveModes.map((m) => (
                <Link
                  key={m.label}
                  to="/ways-to-give"
                  className={`bg-white/5 rounded-3xl p-8 transition-all group ${m.hover}`}
                >
                  <div className="text-3xl mb-4" aria-hidden>{m.icon}</div>
                  <h4 className="font-bold mb-2">{m.label}</h4>
                  <p className="text-white/60 group-hover:text-white/90 text-sm">{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-earth font-bold">Radical Transparency</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Every shilling accounted for.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We are stewards of your trust. Independent auditors review our books annually and quarterly reports are downloadable.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold">NGO Board: 218/05/2023</span>
                <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold">Tax Exempt · KRA</span>
                <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold">GDPR Aligned</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                ["Direct program support", 88, "bg-earth"],
                ["Operations", 8, "bg-moss"],
                ["Emergency reserves", 4, "bg-amber-warm"],
              ].map(([label, pct, color]) => (
                <div key={String(label)}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>{label as string}</span>
                    <span>{pct as number}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${color as string} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
