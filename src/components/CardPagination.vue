<template>
  <div class="my-pag">
    <MyButton @click="pageDown" :color="'gray'">Назад</MyButton>
    <MyButton @click="pageUp" :color="'gray'">Вперёд</MyButton>
    Страница:
    <select  v-model="currentPage" @change="makeData">
      <option v-for="index in totalPages" :key="index" :value="index">{{ index }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import { useMakeData } from '@/composables/useMakeData';

const { currentPage, totalPages, makeData } = useMakeData();

const pageUp = () => {
if (currentPage.value == totalPages.value) return
currentPage.value += 1;
makeData()
}
const pageDown = () => {
if (currentPage.value == 1) return
currentPage.value -= 1;
makeData()
}

</script>

<style scoped>
select{
  margin-left: 20px;
  padding: 4px 6px;
}
.my-pag {
  height: 50px;
  width: 100%;
  background-color: #596961;
  color: rgb(255, 249, 240);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>