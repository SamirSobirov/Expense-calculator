<script lang="ts">
interface Transaction {
  id: string;
  date: string;
  type: "income" | "expense";
  amount: number;
  category: string;
}

export default {
  name: "TransactionList",

  props: {
    transactions: {
      type: Array as () => Transaction[],
      required: true,
    },
  },

  computed: {
    filteredTransactions() {
      return this.transactions.filter((transaction) => {
        return transaction.type === "income" || transaction.type === "expense";
      });
    },
  },
};
</script>

<template>
  <div>
    <h2>История транзакций</h2>
    <div v-for="transaction in filteredTransactions" :key="transaction.id">
      <div>
        {{ transaction.date }} - {{ transaction.type }} -
        {{ transaction.amount }} ₽ - {{ transaction.category }}
      </div>
    </div>
  </div>
</template>
