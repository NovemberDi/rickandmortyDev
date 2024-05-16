<template>
  <div :class="{ 'green': color == 'green', 'gray': color == 'gray' }" class="btn">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Colors = 'green' | 'gray'
interface Props {
  color?: Colors
}
withDefaults(
  defineProps<Props>(), {
  color: 'green'
})
</script>

<style scoped>
.green {
  background: #00b2cb;

  &:hover {
    background: #2bd8ef;
    color: #e2e2e2;
  }

  &:active {
    background: #0998ab;
    color: #c4c4c4;
  }
}

.gray {
  background: #3c3e44;

  &:hover {
    background: #696c73;
    color: #e2e2e2;
  }
  &:active {
    background: #2e2f32;
    color: #c4c4c4;
  }
}

.btn {
  appearance: none;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  color: #fff;
  padding: 14px 18px;
  margin: 0 14px;
  font-size: 16px;
  min-width: 80px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: 0.2s ease;
}
</style>