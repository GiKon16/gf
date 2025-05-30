<script lang="ts">
	import { onMount } from 'svelte';
	import { createPartnerObserver } from '../../features/partners/createStepObserver';

	type PartnerProps = {
		src: string;
	}

	let partnerBlock: Element;
	let partnerObserver: IntersectionObserver;
	let partnerBlockVisible = $state(false);

	onMount(() => {
		partnerObserver = createPartnerObserver((visible) => {
			partnerBlockVisible = visible;
		}, 0.7);
		
		if (partnerBlock) {
			partnerObserver.observe(partnerBlock);
		}

		return () => {
			if (partnerBlock) {
				partnerObserver.unobserve(partnerBlock);
			}
		};
	});

	let {src}: PartnerProps = $props();
</script>

<li bind:this={partnerBlock} class={["item", partnerBlockVisible && 'visible']}>
	<!-- <div class={["item__light", partnerBlockVisible && 'visible']}></div> -->
	<img class="item__img" src={src} alt="Партнер">
</li>

<style lang="scss">
	.item {
		width: 16.5rem;
		height: 9.375rem;

		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;

		background-color: var(--main-bg-color);
		border: 1px dashed var(--passive-color);
		border-radius: 5px;
		opacity: 0;

		transition: all 0.3s ease;

		// &__light {
		// 	width: 60%;
		// 	height: 20%;

		// 	position: absolute;
		// 	top: 80%;
		// 	left: 50%;
		// 	translate: -50% -50%;
		// 	z-index: -1;

		// 	box-shadow: 0 0 30px 6px var(--light-color);
		// 	opacity: 0;
		// 	transition: all 0.3s ease;
		// }

		&__light.visible {
			opacity: 1;
		}

		&__img {
			@media (width < 390px) {
				width: 70%;
			}
		}

		&:nth-child(1),
		&:nth-child(2) {
			@media (width < 950px) {
				flex-basis: calc(50% - 0.5rem);
			}
		}

		&:nth-child(3) {
			translate: 40px 0;

			@media (width < 950px) {
				flex-basis: 100%;

				translate: 0 40px;
			}
		}

		&:nth-child(1) {
			translate: -40px 0;
		}

		&:nth-child(2) {
			translate: 0 40px;

			@media (width < 950px) {
				translate: 40px 0;
			}
		}
	}


	.item.visible {
		opacity: 1;
		translate: 0 0;
	}
</style>