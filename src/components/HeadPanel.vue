<template>
  <div class="my-head">
    <SearchInput v-model="name" :placeholder="'name'" />
    <SearchSelect :options="options" :placeholder="'All statuses'" v-model="status" />
    <MyButton @click="search">Применить</MyButton>
  </div>
</template>

<script setup lang="ts">
import type { OptionForSelect } from '@/interfaces/OptionForSelect';

import SearchInput from '@/components/SearchInput.vue';
import MyButton from '@/components/MyButton.vue';
import SearchSelect from '@/components/SearchSelect.vue';

import { useMakeData } from '@/composables/useMakeData';

const { name, status, currentPage, makeData } = useMakeData();

const options: OptionForSelect[] = [
  { value: 'Alive', title: 'Alive' },
  { value: 'Dead', title: 'Dead' },
  { value: 'Unknown', title: 'Unknown' },
]

const search = () => {
  currentPage.value = 1;
  makeData()
}
</script>

<style scoped>
.my-head {
  height: 100px;
  width: 100%;
  background-color: #272b33;
  color: rgb(255, 249, 240);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  .my-head {
    flex-direction: column;
    height: 150px;
    gap: 15px
  }
}
</style>