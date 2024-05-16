<template>
  <HeadPanel />
  <CardPagination />
  <MyLoader v-if="isLoading" class="loader" />
  <div v-else id="content">
    <div v-if="!persons" id="mute">Ничего не найдено</div>
    <PersonCard v-for="person in persons" :key="person.id" v-else :person="person" />
  </div>

</template>


<script setup lang="ts">
import { computed, onMounted } from 'vue'

import PersonCard from '@/components/PersonCard.vue';
import CardPagination from '@/components/CardPagination.vue';
import HeadPanel from '@/components/HeadPanel.vue';
import MyLoader from '@/components/MyLoader.vue';

import { useMakeData } from '@/composables/useMakeData';

const { persons, makeData, isLoading } = useMakeData();


onMounted(() => {
  makeData();
})

</script>


<style scoped>
.loader {
  margin-top: 20%;
}

#mute {
  font-size: 38px;
  position: absolute;
  top: 50%;
  left: 50;
  transform: translate(-50%, -50%);
}

.page-wrap {
  position: relative;
  width: 100%;
}

#content {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1024px) {
  #content {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
