import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 bg-earth rounded-full grid place-items-center text-earth-foreground font-serif text-lg">
                O
              </div>
              <span className="font-serif text-xl">One Family Worldwide</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-serif text-earth">88%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-2">
                  Direct Program Support
                </div>
              </div>
              <div className="border-l border-border pl-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Registered NGO in Kenya (No. 218/05/2023). Every shilling is audited annually by third-party auditors.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Global Hubs</h5>
            <address className="not-italic text-muted-foreground text-sm leading-loose">
              Nairobi HQ<br />
              Riverside Drive, Office 4B<br />
              P.O. Box 10294-00100, Kenya<br />
              <span className="text-earth font-semibold">+254 700 000 000</span>
            </address>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Transparency</h5>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><Link to="/about" className="hover:text-earth">Annual Report 2024</Link></li>
              <li><Link to="/about" className="hover:text-earth">Audited Financials</Link></li>
              <li><Link to="/about" className="hover:text-earth">Tax Exemption Status</Link></li>
              <li><Link to="/contact" className="hover:text-earth">Contact Media Desk</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>&copy; 2026 One Family Worldwide Foundation. Built for Dignity.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-earth">Privacy Policy</a>
            <a href="#" className="hover:text-earth">Whistleblower</a>
            <a href="#" className="hover:text-earth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
