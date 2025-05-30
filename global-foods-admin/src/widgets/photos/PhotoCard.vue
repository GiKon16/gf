<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import type { Photo } from '../../entities/photo';
import PhotosService from '../../features/photos/api';

type ButtonEmits = {
	(e: 'click', event: MouseEvent): void;
};
const emit = defineEmits<ButtonEmits>();
const props = defineProps<Photo>();

const queryClient = useQueryClient();

const setMainPhoto = useMutation({
	mutationFn: () => PhotosService.setMainPhoto(props.id),
	onSuccess: () => queryClient.invalidateQueries({ queryKey: ['photos'] }),
});
</script>

<template>
	<div
		class="flex flex-col items-center gap-2.5 relative overflow-hidden rounded-sm cursor-pointer group card"
	>
		<img
			class="w-full h-full object-cover aspect-square"
			:src="imageUrl"
			alt="Фото человека"
		/>
		<div
			class="h-3/4 w-full absolute bottom-0 bg-linear-to-t from-main-bg to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
		></div>
		<div class="w-full flex flex-col gap-1 text-sm xl:text-base">
			<button
				class="w-full flex justify-center items-center gap-2.5 z-1 p-2.5 bg-gray border border-dashed border-passive rounded-sm cursor-pointer transition-all duration-300 hover: hover:opacity-80"
				:class="{
					'opacity-80': main,
				}"
				:disabled="main"
				@click="setMainPhoto.mutate()"
			>
				Сделать основным
			</button>
			<button
				class="w-full flex justify-center items-center gap-2.5 z-1 p-2.5 bg-gray border border-dashed border-passive rounded-sm cursor-pointer transition-all duration-300 hover: hover:opacity-80"
				@click="emit('click', $event)"
			>
				<!-- <div class="p-1.5 bg-main-bg rounded-sm">
					<svg
						width="14"
						height="15"
						viewBox="0 0 14 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M5.71673 2.51256C6.05707 2.18437 6.51868 2 7 2C7.48132 2 7.94293 2.18437 8.28327 2.51256C8.49831 2.71993 8.65381 2.97397 8.73916 3.25H5.26084C5.34618 2.97397 5.50169 2.71993 5.71673 2.51256ZM3.66974 3.25C3.77901 2.57321 4.10825 1.94227 4.61679 1.4519C5.24886 0.84241 6.10613 0.5 7 0.5C7.89387 0.5 8.75114 0.84241 9.38321 1.4519C9.89175 1.94227 10.221 2.57321 10.3302 3.25H13.2222C13.6518 3.25 14 3.58579 14 4C14 4.41422 13.6518 4.75 13.2222 4.75H12.1852V13C12.1852 13.3978 12.0213 13.7794 11.7296 14.0607C11.4379 14.342 11.0422 14.5 10.6296 14.5H3.37037C2.95781 14.5 2.56215 14.342 2.27043 14.0607C1.97871 13.7794 1.81481 13.3978 1.81481 13V4.75H0.777778C0.348223 4.75 0 4.41422 0 4C0 3.58579 0.348223 3.25 0.777778 3.25H3.66974ZM4.92593 6.37646C5.28389 6.37646 5.57407 6.65629 5.57407 7.00146V11.003C5.57407 11.3481 5.28389 11.628 4.92593 11.628C4.56796 11.628 4.27778 11.3481 4.27778 11.003V7.00146C4.27778 6.65629 4.56796 6.37646 4.92593 6.37646ZM9.72222 7.00146C9.72222 6.65629 9.43204 6.37646 9.07407 6.37646C8.71611 6.37646 8.42593 6.65629 8.42593 7.00146V11.003C8.42593 11.3481 8.71611 11.628 9.07407 11.628C9.43204 11.628 9.72222 11.3481 9.72222 11.003V7.00146Z"
							fill="#F41515"
						/>
					</svg>
				</div> -->
				Удалить
			</button>
		</div>
	</div>
</template>

<style scoped>
.card {
	flex-basis: calc(20% - 20px);
}

@media (width < 1200px) {
	.card {
		flex-basis: calc(33% - 20px);
	}
}

@media (width < 800px) {
	.card {
		flex-basis: calc(50% - 20px);
	}
}
</style>
