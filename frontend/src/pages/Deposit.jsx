import { useEffect, useState } from "react";
import { getAccounts, deposit } from "../services/api";
import { RhinoCrest } from "../theme/icons";
import LandmarkBanner from "../components/LandmarkBanner";
import rhinoImg from "../assets/rhino.jpg";

export default function Deposit() {
  const [accounts, setAccounts] = useState([]);
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getAccounts()
      .then((data) => {
        setAccounts(data);
        if (data.length) setAccountId(String(data[0].id));
      })
      .catch(() => setMessage({ type: "error", text: "Couldn't load accounts." }));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const numericAmount = Number(amount);
    if (!accountId || !numericAmount || numericAmount <= 0) {
      setMessage({ type: "error", text: "Enter an account and an amount greater than zero." });
      return;
    }

    setSubmitting(true);
    try {
      const result = await deposit(accountId, numericAmount);
      setMessage({
        type: "success",
        text: `Deposited $${result.deposited.toFixed(2)}. New balance: $${result.new_balance.toFixed(2)}.`,
      });
      setAmount("");
    } catch (err) {
      const errText = err.response?.data?.error || "Deposit failed. Try again.";
      setMessage({ type: "error", text: errText });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <LandmarkBanner
        image={rhinoImg}
        eyebrow="Deposit"
        title="Add funds to your account"
        Icon={RhinoCrest}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-charcoal border border-gold/20 rounded-lg p-8 max-w-md space-y-6"
      >
        <div>
          <label className="block text-sm text-silver tracking-wide mb-2">
            Account
          </label>
          <select
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
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
          {submitting ? "Depositing…" : "Deposit"}
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