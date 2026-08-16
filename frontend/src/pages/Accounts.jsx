import { useEffect, useState } from "react";
import { getAccounts } from "../services/api";
import { LionCrest } from "../theme/icons";
import ReservesGallery from "../components/ReservesGallery";
import baobabImg from "../assets/baobab.jpg";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getAccounts()
      .then((data) => {
        setAccounts(data);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setStatus("error");
      });
  }, []);

  const total = accounts.reduce((sum, acc) => sum + Number(acc.balance), 0);

  return (
    <div>
      <header className="mb-10">
        <p className="text-sm text-silver-dark tracking-wide mb-1">Overview</p>
        <h1 className="font-display text-3xl text-silver-light">
          Welcome back
        </h1>
      </header>

      <section
        className="relative overflow-hidden bg-cover bg-center border border-gold/20 rounded-lg px-8 py-10 mb-10"
        style={{ backgroundImage: `url(${baobabImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-mblack via-mblack/85 to-mblack/40" />
        <LionCrest
          size={200}
          className="text-silver-light absolute right-6 top-6 opacity-25 pointer-events-none"
          style={{ filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.75))" }}
        />
        <div className="relative">
          <p className="text-sm text-silver-light tracking-wide mb-2">
            Total reserve
          </p>
          <p className="font-mono text-5xl text-gold-light tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {status === "ready" ? formatCurrency(total) : "—"}
          </p>
          <p className="text-sm text-silver-light mt-3">
            Across {accounts.length} account{accounts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <ReservesGallery />

      <h2 className="font-display text-xl text-silver-light mb-4">
        Your accounts
      </h2>

      {status === "error" && (
        <p className="text-rust-light text-sm">
          Couldn't load your accounts. Check that the API is running and try
          again.
        </p>
      )}

      {status === "loading" && (
        <p className="text-silver-dark text-sm">Loading accounts…</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className="bg-charcoal border border-gold/15 rounded-lg p-5 hover:border-gold/40 transition-colors"
          >
            <p className="text-xs text-silver-dark tracking-widest mb-1">
              ACCOUNT #{String(acc.id).padStart(4, "0")}
            </p>
            <h3 className="font-display text-lg text-silver-light mb-4">
              {acc.name}
            </h3>
            <p className="font-mono text-2xl text-gold-light">
              {formatCurrency(acc.balance)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}