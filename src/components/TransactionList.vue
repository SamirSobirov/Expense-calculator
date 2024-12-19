<script setup lang="ts">
import { defineProps, computed } from "vue";

const { transactions } = defineProps<{ transactions: Array<any> }>();

const filteredTransactions = computed(() => {
  return transactions.filter((transaction) => {
    return transaction.type === "income" || transaction.type === "expense";
  });
});
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
