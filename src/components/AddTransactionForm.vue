<template>
  <div>
    <h3 style="color: brown">Добавить новую транзакцию</h3>
    <div class="addBox">
      <form @submit.prevent="submitForm">
        <div>
          <label for="type">Тип:</label>
          <select v-model="type" id="type">
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
          </select>
        </div>

        <div>
          <label for="amount">Сумма:</label>
          <input v-model="amount" type="number" id="amount" required />
        </div>

        <div>
          <label for="category">Категория:</label>
          <select v-model="category" id="category">
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <div>
          <label for="date">Дата:</label>
          <input v-model="date" type="date" id="date" />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["add-transaction"]);
const type = ref("income");
const amount = ref(0);
const category = ref("");
const date = ref(new Date().toISOString().split("T")[0]);
const categories = ["Еда", "Транспорт", "Развлечения", "Зарплата"];

const submitForm = () => {
  const transaction = {
    id: new Date().getTime().toString(),
    type: type.value,
    amount: Number(amount.value),
    category: category.value,
    date: date.value,
  };

  emit("add-transaction", transaction);
};
</script>

<style lang="scss">
.addBox {
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    gap: 20px;

    div {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
    }
  }
  #category {
    width: 120px;
    height: 30px;
  }

  #amount {
    width: 120px;
    height: 30px;
  }
  #date {
    width: 120px;
    height: 30px;
  }

  #type {
    width: 120px;
    height: 30px;
  }
}
</style>
