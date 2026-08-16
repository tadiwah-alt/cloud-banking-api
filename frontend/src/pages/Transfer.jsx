import { useEffect, useState } from "react";
import { getAccounts, transfer } from "../services/api";
import { ElephantCrest } from "../theme/icons";

export default function Transfer() {
  const [accounts, setAccounts] = useState([]);
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getAccounts()
      .then((data) => {
        setAccounts(data);
        if (data.length) setFromId(String(data[0].id));
        if (data.length > 1) setToId(String(data[1].id));
      })
      .catch(() => setMessage({ type: "error", text: "Couldn't load accounts." }));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const numericAmount = Number(amount);
    if (!fromId || !toId) {
      setMessage({ type: "error", text: "Choose both a source and destination account." });
      return;
    }
    if (fromId === toId) {
      setMessage({ type: "error", text: "Source and destination accounts must be different." });
      return;
    }
    if (!numericAmount || numericAmount <= 0) {
      setMessage({ type: "error", text: "Enter an amount greater than zero." });
      return;
    }

    setSubmitting(true);
    try {
      const result = await transfer(fromId, toId, numericAmount);
      setMessage({
        type: "success",
        text: `Transferred $${result.transferred.toFixed(2)}. New balances — from: $${result.from_account.new_balance.toFixed(
          2
        )}, to: $${result.to_account.new_balance.toFixed(2)}.`,
      });
      setAmount("");
    } catch (err) {
      const errText = err.response?.data?.error || "Transfer failed. Try again.";
      setMessage({ type: "error", text: errText });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <header className="mb-10 flex items-start gap-4">
        <ElephantCrest size={44} className="text-gold shrink-0" />
        <div>
          <p className="text-sm text-silver-dark tracking-wide mb-1">Transfer</p>
          <h1 className="font-display text-3xl text-silver-light">
            Move funds between accounts
          </h1>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-charcoal border border-gold/20 rounded-lg p-8 max-w-md space-y-6"
      >
        <div>
          <label className="block text-sm text-silver tracking-wide mb-2">
            From
          </label>
          <select
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            className="w-full bg-bgdark border border-gold/20 rounded-md px-4 py-3 text-silver-light focus:outline-none focus:border-gold"
          >
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name} — #{String(acc.id).padStart(4, "0")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-silver tracking-wide mb-2">
            To
          </label>
          <select
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="w-full bg-bgdark border border-gold/20 rounded-md px-4 py-3 text-silver-light focus:outline-none focus:border-gold"
          >
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name} — #{String(acc.id).padStart(4, "0")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-silver tracking-wide mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-silver-dark font-mono">
              $
            </span>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-bgdark border border-gold/20 rounded-md pl-8 pr-4 py-3 font-mono text-silver-light focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gold hover:bg-gold-light disabled:opacity-50 text-mblack font-body font-medium rounded-md py-3 transition-colors"
        >
          {submitting ? "Transferring…" : "Transfer"}
        </button>

        {message && (
          <p
            className={`text-sm ${
              message.type === "success" ? "text-reserve-light" : "text-rust-light"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}