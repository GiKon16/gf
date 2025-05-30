<script lang="ts">
	import { fade } from 'svelte/transition';

	type UploadedPhotoModalProps = {
		previewSrc: string | null;
		isFormUploaded: boolean;
		back: () => void;
	}

	let {isFormUploaded, back, previewSrc}: UploadedPhotoModalProps = $props();
</script>

{#if isFormUploaded}
	<div in:fade out:fade class="modal">
		<h2 class="modal__heading">
			Ты сделал первый шаг. 
			<span class="modal__heading__accent">Коридор вкуса ждёт тебя.</span>
		</h2>
		<div class="modal__img-container">
			<img class="modal__img-container__img" src={previewSrc} alt="">
		</div>
		<button class="modal__button" onclick={back}>
			<!-- <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.8331 1.16683L1.49996 6.49996M1.49996 6.49996L6.83307 11.8331M1.49996 6.49996L17.5 6.49996" stroke="white" stroke-linecap="square"/>
			</svg> -->
			Закрыть
		</button>
	</div>
{/if}

<style lang="scss">
	.modal {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
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

			background-color: var(--add-bg-color);
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
</style>