<script setup lang="ts">
import {
	keepPreviousData,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/vue-query';
import { onMounted, onUnmounted, ref } from 'vue';
import PhotosService from '../features/photos/api';
import PhotoCard from '../widgets/photos/PhotoCard.vue';
import PhotoDeleteModal from '../widgets/photos/PhotoDeleteModal.vue';
import PhotosControls from '../widgets/photos/PhotosControls.vue';

const PAGE_SIZE = 20;
const limit = ref(PAGE_SIZE);
const isDeleteModalVisible = ref(false);
const photoIdForDelete = ref('');
const queryClient = useQueryClient();

const {
	data: photos,
	error,
	isLoading,
	isPending,
	isFetching,
} = useQuery({
	queryKey: ['photos', limit],
	queryFn: () => PhotosService.getPhotos(limit.value),
	refetchInterval: 60 * 200,
	placeholderData: keepPreviousData,
});

const loadMoreTrigger = ref<null | HTMLElement>(null);

let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
	if (
		entries[0].isIntersecting &&
		!isLoading.value &&
		!isFetching.value &&
		photos.value &&
		photos.value.length >= limit.value
	) {
		limit.value += PAGE_SIZE;
	}
};

onMounted(() => {
	observer = new IntersectionObserver(handleIntersect);
	if (loadMoreTrigger.value) {
		observer.observe(loadMoreTrigger.value);
	}
});

onUnmounted(() => {
	if (observer && loadMoreTrigger.value) {
		observer.unobserve(loadMoreTrigger.value);
	}
	observer = null;
});

const deletePhoto = useMutation({
	mutationFn: () => PhotosService.deletePhoto(photoIdForDelete.value),
	onSuccess: () => {
		isDeleteModalVisible.value = false;
		queryClient.invalidateQueries({ queryKey: ['photos'] });
	},
});

const cardClick = (id: string) => {
	photoIdForDelete.value = id;
	isDeleteModalVisible.value = true;
};
</script>

<template>
	<PhotoDeleteModal
		v-if="isDeleteModalVisible"
		@click-yes="deletePhoto.mutate()"
		@click-back="() => (isDeleteModalVisible = false)"
	/>
	<div class="flex flex-col sm:items-start gap-10 px-5 sm:px-0">
		<PhotosControls />
		<div v-if="error">Ошибка при загрузке фотографий: {{ error.message }}</div>
		<div v-else-if="isLoading || isPending">Загрузка...</div>
		<div v-else class="flex flex-col">
			<div class="flex justify-center sm:justify-start gap-6 flex-wrap">
				<PhotoCard
					v-for="{ id, imageUrl, main } in photos"
					:id="id"
					:image-url="imageUrl"
					:main="main"
					@click="() => cardClick(id)"
				/>
			</div>
		</div>
		<div ref="loadMoreTrigger" class="h-px"></div>
	</div>
</template>
