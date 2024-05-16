<template>
  <input @input="updateModel" class="input-nickname" type="text" :placeholder="placeholder">
</template>

<script setup lang="ts">
interface Props {
  placeholder?: string
  modelValue: string
}
defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void;
}>();

const updateModel = (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)

</script>

<style scoped>
.input-nickname {
  display: block;
  width: 300px;
  height: 24px;
  padding: 0.375rem 0.75rem;
  margin: 0 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #373f47;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-nickname::placeholder {
  color: #212529;
  opacity: 0.4;
}

.input-nickname:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.input-nickname:disabled,
.input-nickname[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
</style>