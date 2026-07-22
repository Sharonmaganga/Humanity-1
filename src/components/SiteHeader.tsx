import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [hc, setHc] = useState(false);
  const [size, setSize] = useState(16);

  useEffect(() => {
    document.documentElement.classList.toggle("hc", hc);
  }, [hc]);

  useEffect(() => {
    document.documentElement.style.setProperty("--user-font-size", `${size}px`);
  }, [size]);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-earth/10">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-sm">
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2 border-r border-earth/20 pr-5">
            <button className="font-semibold text-earth" aria-label="English">EN</button>
            <button className="text-muted-foreground hover:text-foreground" aria-label="Swahili">SW</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">Currency</span>
            <select className="bg-transparent font-medium focus:outline-none cursor-pointer" aria-label="Select currency">
              <option>KES</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSize((s) => Math.max(14, s - 1))}
            className="size-7 rounded-full border border-border hover:bg-accent text-xs"
            aria-label="Decrease font size"
          >
            A−
          </button>
          <button
            onClick={() => setSize((s) => Math.min(22, s + 1))}
            className="size-7 rounded-full border border-border hover:bg-accent text-sm"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={() => setHc((v) => !v)}
            aria-pressed={hc}
            className="px-3 py-1 rounded-full border border-border hover:bg-foreground hover:text-background transition-all text-[10px] uppercase tracking-widest font-semibold"
          >
            High Contrast
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="One Family Worldwide home">
          <div className="size-10 bg-earth rounded-full grid place-items-center text-earth-foreground font-serif text-2xl">
            O
          </div>
          <span className="font-serif text-2xl tracking-tight">
            One Family <span className="italic text-earth">Worldwide</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 font-medium text-muted-foreground" aria-label="Primary">
          <Link to="/programs" className="hover:text-earth transition-colors" activeProps={{ className: "text-earth" }}>Programs</Link>
          <Link to="/about" className="hover:text-earth transition-colors" activeProps={{ className: "text-earth" }}>About</Link>
          <Link to="/ways-to-give" className="hover:text-earth transition-colors" activeProps={{ className: "text-earth" }}>Ways to Give</Link>
          <Link to="/get-support" className="hover:text-earth transition-colors" activeProps={{ className: "text-earth" }}>Get Support</Link>
          <Link to="/contact" className="hover:text-earth transition-colors" activeProps={{ className: "text-earth" }}>Contact</Link>
        </nav>
        <div className="flex gap-2">
          <Link
            to="/get-support"
            className="hidden sm:inline-flex px-5 py-2.5 border border-earth text-earth rounded-full font-semibold hover:bg-earth/5 transition-colors"
          >
            Request Aid
          </Link>
          <Link
            to="/ways-to-give"
            className="px-5 py-2.5 bg-earth text-earth-foreground rounded-full font-semibold shadow-lg shadow-earth/20 hover:brightness-110 transition-all"
          >
            Give Support
          </Link>
        </div>
      </div>
    </header>
  );
}
