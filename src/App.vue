<script setup lang="ts">
import { onMounted, defineComponent } from "vue";
import AddTransactionForm from './components/AddTransactionForm.vue';
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

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
}
</style>