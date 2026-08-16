import { NavLink } from "react-router-dom";
import {
  LionCrest,
  ElephantCrest,
  RhinoCrest,
  BuffaloCrest,
  LeopardCrest,
} from "../theme/icons";

const navItems = [
  { to: "/", label: "Overview", Icon: LionCrest, end: true },
  { to: "/deposit", label: "Deposit", Icon: RhinoCrest },
  { to: "/withdraw", label: "Withdraw", Icon: BuffaloCrest },
  { to: "/transfer", label: "Transfer", Icon: ElephantCrest },
  { to: "/transactions", label: "Transactions", Icon: LeopardCrest },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-mblack text-silver-light font-body">
      <aside className="w-64 shrink-0 border-r border-gold/20 bg-charcoal flex flex-col">
        <div className="px-6 py-8 border-b border-gold/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-silver flex items-center justify-center shrink-0">
              <span className="font-extrabold text-mblack">M</span>
            </div>
            <div>
              <p className="font-display text-base text-gold-light leading-tight tracking-[0.1em] uppercase">
                Mwasai
              </p>
              <p className="text-xs text-silver-dark leading-tight -mt-0.5">
                Secure · African · Premium
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map(({ to, label, Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 border-l-2 transition-colors ${
                      isActive
                        ? "border-gold text-gold-light bg-gold/5"
                        : "border-transparent text-silver hover:text-silver-light hover:bg-white/[0.02]"
                    }`
                  }
                >
                  <Icon size={22} className="shrink-0" />
                  <span className="font-body text-sm tracking-wide">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-5 border-t border-gold/10">
          <p className="text-xs text-silver-dark tracking-wide">
            Member since 2026
          </p>
        </div>
      </aside>

      <main className="flex-1 px-4 sm:px-6 md:px-10 py-6 md:py-10 max-w-6xl">{children}</main>
    </div>
  );
}