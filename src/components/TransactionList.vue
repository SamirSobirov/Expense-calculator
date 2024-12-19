<template>
  <div>
    <h2>История транзакций</h2>
    <div v-for="transaction in filteredTransactions" :key="transaction.id">
      <div class="transaction">
        {{ transaction.date }} - {{ transaction.type }} -
        {{ transaction.amount }} $ - {{ transaction.category }}
      </div>
    </div>
  </div>
</template>

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

<style lang="scss" scoped>
.transaction {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
