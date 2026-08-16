import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import { LeopardCrest } from "../theme/icons";

const typeStyles = {
  DEPOSIT: "text-reserve-light bg-reserve/10 border-reserve/30",
  WITHDRAW: "text-rust-light bg-rust/10 border-rust/30",
  TRANSFER: "text-gold-light bg-gold/10 border-gold/30",
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function formatDate(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getTransactions()
      .then((data) => {
        setTransactions(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div>
      <header className="mb-10 flex items-start gap-4">
        <LeopardCrest size={44} className="text-gold shrink-0" />
        <div>
          <p className="text-sm text-silver-dark tracking-wide mb-1">
            Transactions
          </p>
          <h1 className="font-display text-3xl text-silver-light">
            The trail
          </h1>
        </div>
      </header>

      {status === "loading" && (
        <p className="text-silver-dark text-sm">Loading transactions…</p>
      )}
      {status === "error" && (
        <p className="text-rust-light text-sm">
          Couldn't load transaction history.
        </p>
      )}
      {status === "ready" && transactions.length === 0 && (
        <p className="text-silver-dark text-sm">No transactions yet.</p>
      )}

      {transactions.length > 0 && (
        <div className="bg-charcoal border border-gold/20 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/15 text-left">
                <th className="px-5 py-3 font-body font-medium text-silver-dark tracking-wide">
                  Date
                </th>
                <th className="px-5 py-3 font-body font-medium text-silver-dark tracking-wide">
                  Type
                </th>
                <th className="px-5 py-3 font-body font-medium text-silver-dark tracking-wide">
                  From
                </th>
                <th className="px-5 py-3 font-body font-medium text-silver-dark tracking-wide">
                  To
                </th>
                <th className="px-5 py-3 font-body font-medium text-silver-dark tracking-wide text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gold/5 last:border-0">
                  <td className="px-5 py-3 text-silver font-mono">
                    {formatDate(tx.created_at)}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded border text-xs tracking-wide ${
                        typeStyles[tx.transaction_type] ||
                        "text-silver bg-white/5 border-white/10"
                      }`}
                    >
                      {tx.transaction_type}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-silver font-mono">
                    #{String(tx.from_account_id).padStart(4, "0")}
                  </td>
                  <td className="px-5 py-3 text-silver font-mono">
                    #{String(tx.to_account_id).padStart(4, "0")}
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-gold-light">
                    {formatCurrency(tx.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}