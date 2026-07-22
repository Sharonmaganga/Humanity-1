import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/ways-to-give")({
  head: () => ({
    meta: [
      { title: "Ways to Give — One Family Worldwide" },
      { name: "description", content: "Donate via M-Pesa STK Push, card, PayPal, wire transfer, or in-kind. Multi-currency giving that reaches marginalized communities." },
      { property: "og:title", content: "Ways to Give" },
      { property: "og:description", content: "Financial, in-kind, skill, and equipment donation pathways." },
    ],
  }),
  component: Give,
});

type Tab = "financial" | "inkind" | "skill";

const urgentNeeds = [
  { item: "Wheelchairs (adult, standard)", qty: "20 units" },
  { item: "Non-perishable maize flour", qty: "500 kg" },
  { item: "Sewing machines", qty: "12 units" },
  { item: "Refurbished laptops", qty: "15 units" },
  { item: "Warm blankets", qty: "300 units" },
  { item: "Solar lamps", qty: "150 units" },
];

function Give() {
  const [tab, setTab] = useState<Tab>("financial");
  const [amount, setAmount] = useState(2500);
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [currency, setCurrency] = useState("KES");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <span className="text-xs uppercase tracking-widest text-earth font-bold">Ways to Give</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-6 leading-[0.95]">
            Your gift <span className="italic text-earth">reaches a family</span> today.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Choose the giving pathway that matches your season. Every route is logged, receipted, and audited.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div role="tablist" aria-label="Giving pathways" className="inline-flex flex-wrap gap-2 p-1.5 bg-card border border-border rounded-full mb-10">
            {[
              ["financial", "Financial"],
              ["inkind", "Food & Clothing"],
              ["skill", "Skills & Equipment"],
            ].map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id as Tab)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  tab === id ? "bg-earth text-earth-foreground shadow-lg shadow-earth/20" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "financial" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <h2 className="font-serif text-3xl mb-6">Give now</h2>
                <div className="mb-6">
                  <div className="flex gap-2 mb-3">
                    {(["once", "monthly"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFreq(f)}
                        className={`flex-1 py-3 rounded-full font-semibold text-sm ${
                          freq === f ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {f === "once" ? "One-time" : "Monthly"}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 mb-4">
                    {["KES", "USD", "EUR", "GBP"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`px-4 py-2 rounded-full text-xs font-bold ${
                          currency === c ? "bg-earth text-earth-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[500, 2500, 5000, 10000].map((v) => (
                      <button
                        key={v}
                        onClick={() => setAmount(v)}
                        className={`py-3 rounded-2xl font-semibold ${
                          amount === v ? "bg-earth text-earth-foreground" : "bg-muted hover:bg-earth/10"
                        }`}
                      >
                        {v.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Custom amount ({currency})</span>
                    <input
                      type="number"
                      min={1}
                      value={amount}
                      onChange={(e) => setAmount(Math.max(1, Number(e.target.value) || 0))}
                      className="w-full mt-2 px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none text-lg font-semibold"
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:brightness-110">
                    <span>Pay with M-Pesa (STK Push)</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Instant</span>
                  </button>
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-foreground text-background font-bold">
                    <span>Card · Visa / Mastercard / Amex</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Stripe</span>
                  </button>
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-[#003087] text-white font-bold">
                    <span>PayPal</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Wallet</span>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="font-serif text-2xl mb-4">M-Pesa Paybill</h3>
                  <dl className="text-sm space-y-2">
                    <div className="flex justify-between"><dt className="text-muted-foreground">Paybill</dt><dd className="font-mono font-bold">400 200</dd></div>
                    <div className="flex justify-between"><dt className="text-muted-foreground">Account</dt><dd className="font-mono font-bold">ONEFAMILY</dd></div>
                  </dl>
                </div>
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="font-serif text-2xl mb-4">Wire Transfer</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Local (KES)</div>
                      <p className="mt-1">Equity Bank · Riverside Branch<br />A/C 0180 2947 3812</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">International (USD / EUR)</div>
                      <p className="mt-1 font-mono">SWIFT: EQBLKENAXXX<br />IBAN on request</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  All donors receive an instant PDF tax receipt by email. NGO Board No. 218/05/2023 · KRA Tax Exempt.
                </p>
              </div>
            </div>
          )}

          {tab === "inkind" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <h2 className="font-serif text-3xl mb-2">Drop-off & pickup</h2>
                <p className="text-muted-foreground mb-6">
                  Deliver items to our Nairobi HQ or request a pickup for bulk donations within major urban areas.
                </p>
                <div className="mb-6 p-5 rounded-2xl bg-sand border border-border">
                  <div className="text-xs uppercase tracking-widest text-earth font-bold mb-1">Nairobi HQ Drop-off</div>
                  <address className="not-italic text-sm leading-relaxed">
                    Riverside Drive, Office 4B<br />
                    Mon–Fri · 9:00–17:00 · Sat · 10:00–14:00
                  </address>
                </div>
                <form className="grid gap-4">
                  <label className="grid gap-1">
                    <span className="text-xs uppercase tracking-widest font-bold">Category</span>
                    <select className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none">
                      <option>Clothing</option>
                      <option>Food (non-perishable)</option>
                      <option>Medical supplies</option>
                      <option>Equipment / electronics</option>
                    </select>
                  </label>
                  <label className="grid gap-1">
                    <span className="text-xs uppercase tracking-widest font-bold">Quantity & condition</span>
                    <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" placeholder="e.g. 3 boxes, gently used" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-xs uppercase tracking-widest font-bold">Contact (phone or email)</span>
                    <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" placeholder="+254 ..." />
                  </label>
                  <button type="button" className="mt-2 px-6 py-4 bg-earth text-earth-foreground rounded-full font-bold hover:brightness-110">
                    Request pickup
                  </button>
                </form>
              </div>
              <div className="bg-ink text-earth-foreground rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="size-2 rounded-full bg-amber-warm animate-pulse" aria-hidden />
                  <span className="text-xs uppercase tracking-widest text-amber-warm font-bold">Urgent needs</span>
                </div>
                <h2 className="font-serif text-3xl mb-6">This month's list</h2>
                <ul className="space-y-3">
                  {urgentNeeds.map((n) => (
                    <li key={n.item} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span>{n.item}</span>
                      <span className="text-white/60 text-sm">{n.qty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "skill" && (
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-3xl">
              <h2 className="font-serif text-3xl mb-2">Give your expertise</h2>
              <p className="text-muted-foreground mb-8">
                Offer vocational training, business mentoring, or donate machinery and business tools.
              </p>
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-xs uppercase tracking-widest font-bold">Full name</span>
                    <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-xs uppercase tracking-widest font-bold">Profession</span>
                    <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" placeholder="e.g. Tailor, accountant" />
                  </label>
                </div>
                <label className="grid gap-1">
                  <span className="text-xs uppercase tracking-widest font-bold">I want to offer</span>
                  <select className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none">
                    <option>Vocational training (workshops)</option>
                    <option>1:1 business mentorship</option>
                    <option>Donate machinery / tools</option>
                    <option>Pro-bono professional service</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-xs uppercase tracking-widest font-bold">Tell us more</span>
                  <textarea rows={4} className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
                </label>
                <button type="button" className="justify-self-start px-8 py-4 bg-earth text-earth-foreground rounded-full font-bold hover:brightness-110">
                  Submit application
                </button>
              </form>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
