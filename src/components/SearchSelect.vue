<template>
    <select @change="updateModel">
        <option value="" selected>{{placeholder || 'Not selected'}}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.title }}</option>
    </select>
</template>

<script setup lang="ts">
import type { OptionForSelect } from '@/interfaces/OptionForSelect';

interface Props {
    modelValue: string,
    options: OptionForSelect[],
    placeholder?: string
}
defineProps<Props>()

const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
}>();

const updateModel = (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)

</script>

<style scoped>
select {
    display: block;
    width: 300px;
    height: 24px;
    padding: 0px 6px;
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

select:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}
</style>