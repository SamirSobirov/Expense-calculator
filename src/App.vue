<script setup lang="ts">
import { onMounted } from "vue";
import AddTransactionForm from "./components/AddTransactionForm.vue";
import TransactionList from "./components/TransactionList.vue";
import BalanceSummary from "./components/BalanceSummary.vue";

import { useFinanceStore } from "./stores/useFinanceStore";
const financeStore = useFinanceStore();

onMounted(() => {
  financeStore.loadTransactions();
});
const addTransaction = (transaction: any) => {
  financeStore.addTransaction(transaction);
};
</script>

<template>
  <div class="app">
    <h1>Калькулятор расходов</h1>
    <AddTransactionForm @add-transaction="addTransaction" />
    <TransactionList :transactions="financeStore.transactions" />
    <BalanceSummary :balance="financeStore.balance" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    background-color: #acd0ff;
    text-align: center;
    color: #0077ff;
    padding: 10px;
    border-radius: 12px;

  }
}
</style>