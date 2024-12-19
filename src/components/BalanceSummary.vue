<template>
  <div>
    <h2>Баланс:</h2>
    <p>Общий баланс: {{ balance }}$</p>
  </div>
</template>

<script setup lang="ts">
const { balance } = defineProps<{ balance: number }>();
</script>

<style lang="scss" scoped>
div {
  margin: 10px;
  padding: 10px;
  border: 1px solid #6dff37;
  background-color: #b1ff95;
  border-radius: 12px;
  h2 {
    color: #ff0000;
  }

  p{
    color: #1d2cff;
    font-size: 17px;
  }
}
</style>
