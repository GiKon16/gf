<script lang="ts">
	import { fade } from 'svelte/transition';

	type CheckUploadPhotoModalProps = {
		isPhotoUploaded: boolean;
		previewSrc: string | null;
		back: () => void;
		accept: () => void;
	}

	let {isPhotoUploaded, previewSrc, back, accept}: CheckUploadPhotoModalProps = $props();
</script>

{#if isPhotoUploaded}
	<div in:fade out:fade class="modal">
		<div class="modal__img-container">
			<img class="modal__img-container__img" src={previewSrc} alt="">
		</div>
		<div class="modal__controls">
			<button class="modal__controls__button" onclick={accept}>
				Подтвердить фото
			</button>
			<button class="modal__controls__button" onclick={back}>
				Закрыть
			</button>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;

		position: fixed;
		inset: 0;
		z-index: 9999;

		padding: 3rem 1rem;

		background: rgba($color: #000000, $alpha: 0.9);

		&__heading {
			font-size: 2rem;
			font-weight: 700;

			&__accent {
				color: var(--light-color);
			}
		}

		&__img-container {
			width: 85vw;
			height: 85vw;

			overflow: hidden;

			background-color: var(--accent-color);
			border-radius: 5px;

			&__img {
				width: 100%;
				height: 100%;

				object-fit: cover;
			}

			@media (width > 800px) {
				width: 500px;
				height: 500px;
			}
		}

		&__controls {
			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			@media (width > 800px) {
				width: auto;

				flex-direction: row;
			}

			&__button {
				width: 100%;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				padding: 1rem 1.5rem;

				background: var(--light-gradient);
				border-radius: 5px;
				cursor: pointer;

				color: var(--white);

				@media (width > 800px) {
					width: 20rem;
				}
			}
		}	
	}
</style>