import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/get-support")({
  head: () => ({
    meta: [
      { title: "Get Support — One Family Worldwide" },
      { name: "description", content: "Apply for emergency food, business grants, assistive devices, or vocational training. A respectful, accessible intake process for individuals and community leaders." },
      { property: "og:title", content: "Request Assistance — One Family Worldwide" },
      { property: "og:description", content: "Accessible intake for beneficiaries: food, grants, assistive devices, and training." },
    ],
  }),
  component: GetSupport,
});

function GetSupport() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <span className="text-xs uppercase tracking-widest text-earth font-bold">Beneficiary Portal</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-6 leading-[0.95]">
            You are <span className="italic text-earth">family</span>. Tell us how we can help.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            This form is confidential and reviewed by trained caseworkers. Urgent cases receive a callback within 48 hours.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-24">
          <form className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-xs uppercase tracking-widest font-bold">Full name</span>
                <input required className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
              </label>
              <label className="grid gap-1">
                <span className="text-xs uppercase tracking-widest font-bold">Phone / WhatsApp</span>
                <input required className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" placeholder="+254 ..." />
              </label>
            </div>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">County / Region</span>
              <input className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
            </label>
            <fieldset className="grid gap-3">
              <legend className="text-xs uppercase tracking-widest font-bold">Type of support needed</legend>
              {[
                "Emergency food or water (drought)",
                "Business enablement grant / seed capital",
                "Assistive device (wheelchair, hearing aid, etc.)",
                "Vocational training enrollment",
                "Widow / elderly monthly care",
                "Child sponsorship / school fees",
              ].map((label) => (
                <label key={label} className="flex items-start gap-3 p-4 rounded-2xl border border-border hover:border-earth cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-earth" />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>
            <label className="grid gap-1">
              <span className="text-xs uppercase tracking-widest font-bold">Your situation (share as much as you're comfortable)</span>
              <textarea rows={5} className="px-4 py-3 rounded-2xl bg-background border border-border focus:border-earth focus:outline-none" />
            </label>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-earth" />
              <span>I understand this information is confidential and will be reviewed by a caseworker.</span>
            </label>
            <button type="button" className="w-full sm:w-auto px-10 py-4 bg-earth text-earth-foreground rounded-full font-bold text-lg hover:brightness-110">
              Submit application
            </button>
            <p className="text-xs text-muted-foreground">
              In life-threatening emergencies, call our 24/7 WhatsApp desk: <span className="text-earth font-bold">+254 700 000 000</span>.
            </p>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
