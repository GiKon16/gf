<script setup lang="ts">
import ExitButton from '../shared/ui/ExitButton.vue';
</script>

<template>
	<div class="w-screen min-h-screen height-full flex flex-col">
		<header class="flex justify-center py-7.5 bg-add-bg">
			<div
				class="w-full sm:w-3/4 flex items-center justify-between px-5 sm:px-0"
			>
				<img src="/images/logo.png" alt="Логотип" />
				<ExitButton />
			</div>
		</header>
		<main class="flex-1 flex justify-center py-7.5 bg-main-bg text-main-fg">
			<div class="w-full sm:w-3/4">
				<RouterView />
			</div>
		</main>
	</div>
</template>
