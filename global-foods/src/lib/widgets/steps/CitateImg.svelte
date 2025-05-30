<script lang="ts">
	import { onMount } from 'svelte';
	import { createStepObserver } from '../../features/steps/createStepObserver';
	import WhiteCitateSvg from '../../shared/svg/WhiteCitateSVG.svelte';

	type CitateImgProps = {
		imgSrc: string;
		citate: string;
		about: string;
	}

	let {imgSrc, citate, about}: CitateImgProps = $props();

	let citateImgBlock: Element;
	let citateImgBlockObserver: IntersectionObserver;
	let citateImgBlockBlockVisible = $state(false);

	onMount(() => {
		citateImgBlockObserver = createStepObserver((visible) => {
			citateImgBlockBlockVisible = visible;
		}, 0.3);
		
		if (citateImgBlock) {
			citateImgBlockObserver.observe(citateImgBlock);
		}

		return () => {
			if (citateImgBlock) {
				citateImgBlockObserver.unobserve(citateImgBlock);
			}
		};
	});
</script>

<div class={["item", citateImgBlockBlockVisible && 'img-visible']} bind:this={citateImgBlock}>
	<div class={["item__light", citateImgBlockBlockVisible && 'light-visible']}></div>
	<img class="item__img" src={imgSrc} alt="Шаг">
	<div class="item__info">
		<p class="item__info__text">{about}</p>
		<div class={["item__info__citate", imgSrc === 'images/step-3-2.jpg' && 'center']}>
			<div>
				<WhiteCitateSvg/>
			</div>
			{citate}
		</div>
	</div>
</div>

<style lang="scss">
	.item {
		width: 90%;
		display: flex;

		position: relative;

		opacity: 0;
		translate: 50px 0;

		transition: all 0.7s ease;

		@media (width < 600px) {
			width: 100%;
		}

		&__light {
			width: 35%;
			height: 50%;

			position: absolute;
			right: 2%;
			top: 50%;
			translate: 0 -50%;
			z-index: -1;

			background-color: transparent;
			box-shadow: 0 0 100px 10px var(--light-color);

			opacity: 0;
			transition: opacity 0.2s ease;
			transition-delay: 0.3s;

			@media (width < 600px) {
				width: 87%;
				height: 46%;

				right: initial;
				left: 6%;
				transition-duration: 0.3s;
			}
		}

		&__light.light-visible {
			opacity: 1;
		}

		@media (width < 600px) {
			flex-direction: column;
		}

		&__img {
			max-width: 17rem;

			border-radius: 5px 0 0 5px;

			@media (width < 600px) {
				max-width: 100%;
				max-height: 20rem;
				width: 100%;

				object-fit: cover;

				border-radius: 5px 5px 0 0;
			}
		}

		&__info {
			position: relative;

			padding: 3.2rem 1.5rem 1.5rem 1.5rem;

			background-color: var(--step-bg);
			border-radius: 0 5px 5px 0;

			@media (width < 600px) {
				padding: 2rem 1.5rem 5rem 1.5rem;

				border-radius: 0 0 5px 5px;
			}

			&__text {
				line-height: 1.25rem;
				color: var(--white);
			}

			&__citate {
				width: 90%;

				display: flex;
				align-items: start;
				gap: 0.6rem;

				position: absolute;
				top: 80%;
				left: 50%;
				translate: -60% 0;

				padding: 1rem 0.75rem;

				background-color: var(--white);
				border-radius: 0.25rem;

				font-size: 0.75rem;
				color: var(--black);

				@media (width < 600px) {
					width: 90%;

					top: 77%;
					left: 50%;
					translate: -50% 0;
				}
			}

			&__citate.center {
				align-items: center;
			}
		}
	}

	.item.img-visible {
		opacity: 1;
		translate: 0 0;
	}
</style>