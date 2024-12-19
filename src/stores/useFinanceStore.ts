import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
}

export const useFinanceStore = defineStore("finance", () => {
  const transactions = ref<Transaction[]>([]);

  const loadTransactions = () => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      transactions.value = JSON.parse(saved);
    }
  };

  const saveTransactions = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions.value));
  };

  const addTransaction = (transaction: Transaction) => {
    transactions.value.push(transaction);
    saveTransactions();
  };

  const filteredTransactions = (
    type: "all" | "income" | "expense",
    category: string
  ) => {
    return transactions.value.filter((transaction) => {
      const matchesType = type === "all" || transaction.type === type;
      const matchesCategory =
        category === "" || transaction.category === category;
      return matchesType && matchesCategory;
    });
  };

  const balance = computed(() => {
    const totalIncome = transactions.value
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions.value
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    return totalIncome - totalExpense;
  });

  return {
    transactions,
    loadTransactions,
    addTransaction,
    filteredTransactions,
    balance,
  };
});
