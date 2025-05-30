<script setup lang="ts">
import { useIsMutating } from '@tanstack/vue-query';

type ButtonEmits = {
	(e: 'clickYes', event: MouseEvent): void;
	(e: 'clickBack', event: MouseEvent): void;
};
const emit = defineEmits<ButtonEmits>();

const mutating = useIsMutating();
</script>

<template>
	<div
		class="w-screen h-screen flex items-center justify-center fixed inset-0 z-9999 bg-bg-modal"
	>
		<div
			class="w-4/5 sm:w-70 flex flex-col items-center gap-5 p-5 sm:p-10 bg-add-bg rounded-sm"
		>
			<span>Вы уверены?</span>
			<div v-if="!mutating" class="w-full flex justify-center gap-3">
				<button
					class="px-4 py-2 bg-main-bg rounded-sm cursor-pointer transition-all duration-300 hover:opacity-80"
					@click="emit('clickYes', $event)"
				>
					Да
				</button>
				<button
					class="px-4 py-2 bg-main-bg rounded-sm cursor-pointer transition-all duration-300 hover:opacity-80"
					@click="emit('clickBack', $event)"
				>
					Назад
				</button>
			</div>
			<span v-if="mutating">Удаляем...</span>
		</div>
	</div>
</template>
