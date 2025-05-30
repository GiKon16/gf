<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { Photo } from '../../entities/photo';
	import PhotosService from '../../features/photos/api';
	import { urPersonSrc } from '../../features/photos/yourPerson';

	const photos = createQuery<Photo[]>({
		queryKey: ['photos'],
		queryFn: () => PhotosService.getPhotos(),
	});
</script>

<div class={["collage", $urPersonSrc !== 'images/your-person.png' && 'uploaded']}>
	<div class="collage__top-shadow"></div>
	<div class="collage__right-shadow"></div>
	<div class="collage__bottom-shadow"></div>
	<div class="collage__left-shadow"></div>
	{#if $urPersonSrc !== 'images/your-person.png'}
		<div class="collage__your-person">
			<img class="collage__your-person__your-img" src={$urPersonSrc} alt="Ваша персона">
		</div>
	{:else}
		<div class="collage__no-img">
			<img class="collage__no-img__your-img" src={$urPersonSrc} alt="Ваша персона">
		</div>
	{/if}
	
	<div class="collage__persons">
		{#if $photos.isLoading}
			{null}
		{:else if $photos.isError}
			{null}
		{:else if $photos.isSuccess && Array.isArray($photos.data)}
			{#each $photos.data as {imageUrl}, index}
			<div class="collage__persons__person">
				<img class="collage__persons__person__img" src={imageUrl} alt="Человек">
			</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	.collage {
		min-height: 45.625rem;
		flex-basis: 45%;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		overflow: hidden;

		@media (width < 1160px) {
			order: 2;
		}

		@media (width < 1550px) {
			min-height: 35rem;
		}

		@media (width < 680px) {
			min-height: 25rem;
		}

		@media (width < 420px) {
			min-height: 20rem;
		}

		&__top-shadow,
		&__right-shadow,
		&__bottom-shadow,
		&__left-shadow {
			position: absolute;
		}

		&__top-shadow,
		&__bottom-shadow {
			width: 100%;
			height: 10%;
			z-index: 3;
		}

		&__right-shadow,
		&__left-shadow {
			width: 10%;
			height: 100%;
			z-index: 4;
		}

		&__top-shadow {
			top: 0;
			left: 0;	

			background: linear-gradient(0deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__bottom-shadow {
			bottom: 0;
			right: 0;

			background: linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__right-shadow {
			bottom: 0;
			right: 0;

			background: linear-gradient(90deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__left-shadow {
			top: 0;
			left: 0;

			background: linear-gradient(-90deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__no-img {
			width: 12vw;
			height: 12vw;

			display: flex;
			justify-content: center;
			align-items: center;

			overflow: hidden;
			z-index: 5;

			background-color: var(--white);
			border-radius: 5px;

			@media (width < 1150px) {
				width: 20vw;
				height: 20vw;
			}

			@media (width < 800px) {
				width: 30vw;
				height: 30vw;
			}

			&__your-img {
				object-fit: cover;

				@media (width< 700px) {
					scale: 0.7;
				}
			}	
		}

		&__your-person {
			width: 12vw;
			height: 12vw;

			display: flex;
			justify-content: center;
			align-items: center;

			overflow: hidden;
			z-index: 5;

			background-color: var(--white);
			border-radius: 5px;
			box-shadow: 0 0 10px 10px rgba($color: #000000, $alpha: 0.7);

			@media (width < 1150px) {
				width: 20vw;
				height: 20vw;
			}

			@media (width < 800px) {
				width: 35vw;
				height: 35vw;
			}

			&__your-img {
				width: 100%;
				height: 100%;

				object-fit: cover;
			}	
		}

		&__persons {
			width: 100%;

			display: flex;
			gap: 0.5rem;
			flex-wrap: wrap;

			position: absolute;
			z-index: 1;

			&__person {
				flex-basis: calc(20% - 0.5rem);

				position: relative;
				overflow: hidden;
				
				aspect-ratio: 1/1;
				border-radius: 5px;

				&__img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			&__empty {
				flex-basis: calc(20% - 0.5rem);
			}
		}
	}

	.collage.uploaded {
		width: 50%;

		order: 2;

		@media (width < 1600px) {
			width: 60%;
		}

		@media (width < 1000px) {
			width: 100%;
		}

		@media (width < 680px) {
			min-height: 25rem;
		}

		@media (width < 420px) {
			min-height: 20rem;
		}
	}
</style>