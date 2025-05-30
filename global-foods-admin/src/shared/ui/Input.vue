<script setup lang="ts">
type InputProps = {
	type: string;
	placeholder: string;
	modelValue: string;
};
type InputEmits = {
	(e: 'update:modelValue', value: string): void;
};
defineProps<InputProps>();
const emit = defineEmits<InputEmits>();
const handleInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
	<input
		class="p-5 bg-transparent border border-dashed border-passive focus:outline-dashed focus:outline-primary"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="handleInput"
	/>
</template>
