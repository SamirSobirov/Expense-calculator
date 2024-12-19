<template>
  <div>
    <h2>Баланс</h2>
    <p>Общий баланс: {{ balance }}$</p>
  </div>
</template>

<script setup lang="ts">
const { balance } = defineProps<{ balance: number }>();
</script>
