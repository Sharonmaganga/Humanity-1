import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — One Family Worldwide" },
      { name: "description", content: "Reach our Nairobi headquarters, global hubs, and specialist desks: donations, beneficiaries, media, and emergency WhatsApp." },
      { property: "og:title", content: "Contact One Family Worldwide" },
      { property: "og:description", content: "Nairobi HQ, phone, WhatsApp, and departmental email routing." },
    ],
  }),
  component: Contact,
});

const hubs = [
  { city: "Nairobi (HQ)", addr: "Riverside Drive, Office 4B\nP.O. Box 10294-00100", phone: "+254 700 000 000" },
  { city: "London", addr: "51 Eastcheap\nEC3M 1JP", phone: "+44 20 0000 0000" },
  { city: "New York", addr: "300 Park Avenue South\nNY 10010", phone: "+1 212 000 0000" },
];

const desks = [
  ["Donations", "give@onefamily.org"],
  ["Beneficiaries", "care@onefamily.org"],
  ["Media & press", "press@onefamily.org"],
  ["Partnerships", "partners@onefamily.org"],
];

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          <span className="text-xs uppercase tracking-widest text-earth font-bold">Contact</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-6 leading-[0.95]">
            Talk to a <span className="italic text-earth">real human</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Nairobi is our home. Whether you're giving, receiving, or reporting — the right desk is one message away.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">
          {hubs.map((h) => (
            <div key={h.city} className="bg-card border border-border rounded-3xl p-8">
              <h2 className="font-serif text-2xl mb-4">{h.city}</h2>
              <address className="not-italic text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {h.addr}
              </address>
              <div className="mt-4 text-earth font-bold">{h.phone}</div>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
            <h2 className="font-serif text-3xl mb-6">Department desks</h2>
            <ul className="space-y-4">
              {desks.map(([dept, mail]) => (
                <li key={dept} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span className="font-semibold">{dept}</span>
                  <a href={`mailto:${mail}`} className="text-earth font-medium hover:underline">{mail}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-2xl bg-moss/10 border border-moss/20">
              <div className="text-xs uppercase tracking-widest text-moss font-bold mb-1">24/7 Emergency</div>
              <p className="text-sm">WhatsApp our emergency help desk: <span className="text-earth font-bold">+254 700 000 000</span></p>
            </div>
          </div>

          <form className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-4">
            <h2 className="font-serif text-3xl mb-2">Send a message</h2>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">Your name</span>
              <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
            </label>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">Email</span>
              <input type="email" className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
            </label>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">Route to</span>
              <select className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none">
                {desks.map(([d]) => <option key={d}>{d}</option>)}
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">Message</span>
              <textarea rows={5} className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
            </label>
            <button type="button" className="px-8 py-4 bg-earth text-earth-foreground rounded-full font-bold hover:brightness-110">
              Send message
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
