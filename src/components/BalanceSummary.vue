<template>
  <div>
    <h2>Баланс:</h2>
    <p><b>Общий баланс: {{ balance }}$ </b></p>
  </div>
</template>

<script setup lang="ts">
const { balance } = defineProps<{ balance: number }>();
</script>

<style lang="scss" scoped>
div {

  padding: 10px;
  background-color: #acd0ff;
  border-radius: 12px;
  h2 {
    color: brown;
  }

  p {
    color: #1d2cff;
    font-size: 25px;

  }
}
</style>
