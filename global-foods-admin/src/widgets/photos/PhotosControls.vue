<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { ref, watch } from 'vue';
import PhotosService from '../../features/photos/api';
import downloadUsersData from '../../features/photos/downloadUsersData';

const queryClient = useQueryClient();

const interval = ref(0);

const { data: intervalData } = useQuery({
	queryKey: ['interval'],
	queryFn: () => PhotosService.getPhotosInterval(),
});

const setNewInterval = useMutation({
	mutationFn: () => PhotosService.setPhotosInterval(interval.value),
	onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['interval'] });
		alert(
			'Интервал изменен. \nНовое значение будет применено после завершения предыдущего интервала.'
		);
	},
});

watch(
	intervalData,
	newVal => {
		interval.value =
			typeof newVal === 'object' ? newVal?.interval_seconds : newVal;
	},
	{ immediate: true }
);
</script>

<template>
	<div
		class="w-full flex flex-col gap-2.5 xl:flex-row xl:gap-0 items-start xl:items-center justify-between"
	>
		<button
			class="w-full xl:w-auto flex items-center gap-2.5 p-2.5 bg-gray rounded-sm cursor-pointer text-main-fg transition-all duration-300 hover:opacity-80"
			@click="downloadUsersData"
		>
			<div class="p-1.5 bg-main-bg rounded-sm">
				<svg
					width="10"
					height="13"
					viewBox="0 0 10 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.40147 4.24831V1.38062L9.13709 4.24831H6.40147ZM4.31946 10.1757L2.22399 8.05939L2.87393 7.40769L3.85985 8.40339V4.96338H4.77785V8.404L5.76377 7.40769L6.41432 8.05877L4.31946 10.1757ZM6.70135 0.5H0V12.5H10V3.95846L6.70135 0.5Z"
						fill="#686868"
					/>
				</svg>
			</div>
			Выгрузить в excel личные данные
		</button>
		<div
			class="w-full xl:w-auto flex xl:flex-row flex-col xl:items-center gap-2.5 p-2.5 bg-gray rounded-sm text-main-fg"
		>
			<div class="flex items-center gap-2">
				<div class="p-1.5 bg-main-bg rounded-sm">
					<svg
						width="13"
						height="13"
						viewBox="0 0 13 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.5 12.5C9.81369 12.5 12.5 9.81375 12.5 6.5C12.5 3.18629 9.81369 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 9.81375 3.18629 12.5 6.5 12.5ZM7.12499 3.49985C7.12499 3.15467 6.84517 2.87485 6.49999 2.87485C6.15481 2.87485 5.87499 3.15467 5.87499 3.49985V6.49985C5.87499 6.84503 6.15481 7.12485 6.49999 7.12485H8.99999C9.34517 7.12485 9.62499 6.84503 9.62499 6.49985C9.62499 6.15467 9.34517 5.87485 8.99999 5.87485H7.12499V3.49985Z"
							fill="#686868"
						/>
					</svg>
				</div>
				Интервал обновления главного фото (в сек.)
			</div>
			<input
				class="w-full xl:max-w-30 p-2.5 bg-main-bg rounded-sm"
				type="number"
				v-model="interval"
			/>
			<button
				class="flex items-center gap-2.5 p-2.5 bg-add-bg rounded-sm cursor-pointer text-main-fg transition-all duration-300 hover:opacity-80"
				@click="setNewInterval.mutate()"
			>
				Подтвердить
			</button>
		</div>
	</div>
</template>
