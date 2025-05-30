<script setup lang="ts">
type ButtonProps = {
	content: string;
};
type ButtonEmits = {
	(e: 'click', event: MouseEvent): void;
};
defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmits>();
</script>

<template>
	<button
		class="p-5 bg-accent-glass border border-dashed border-accent cursor-pointer text-accent font-semidold transition-all duration-300 hover:opacity-80"
		@click="emit('click', $event)"
	>
		{{ content }}
	</button>
</template>
