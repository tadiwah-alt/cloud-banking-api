import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost",
});

export const getAccounts = () => api.get("/accounts").then((r) => r.data);

export const getBalance = (accountId) =>
  api.get(`/balance/${accountId}`).then((r) => r.data);

export const deposit = (accountId, amount) =>
  api
    .post("/deposit", { account_id: accountId, amount })
    .then((r) => r.data);

export const withdraw = (accountId, amount) =>
  api
    .post("/withdraw", { account_id: accountId, amount })
    .then((r) => r.data);

export const transfer = (fromAccountId, toAccountId, amount) =>
  api
    .post("/transfer", {
      from_account_id: fromAccountId,
      to_account_id: toAccountId,
      amount,
    })
    .then((r) => r.data);

export const getTransactions = () =>
  api.get("/transactions").then((r) => r.data);