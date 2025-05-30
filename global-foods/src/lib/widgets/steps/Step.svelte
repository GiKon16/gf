<script lang="ts">
	import { onMount } from 'svelte';
	import type { Step } from '../../entities/step';
	import { createStepObserver } from '../../features/steps/createStepObserver';
	import BlueCitateSvg from '../../shared/svg/BlueCitateSVG.svelte';
	import CitateImg from './CitateImg.svelte';

	type StepProps = Step & {
		isRightAlignInfo?: boolean
	}

	let {years, heading, text, citate, list, stepInfo, isRightAlignInfo}: StepProps = $props();
	
	let stepBlock: Element;
	let stepObserver: IntersectionObserver;
	let stepBlockVisible = $state(false);

	onMount(() => {
		stepObserver = createStepObserver((visible) => {
			stepBlockVisible = visible;
		});
		
		if (stepBlock) {
			stepObserver.observe(stepBlock);
		}

		return () => {
			if (stepBlock) {
				stepObserver.unobserve(stepBlock);
			}
		};
	});
</script>

<div class="step" bind:this={stepBlock}>
	<div class={["step__imgs-citates", stepBlockVisible && 'img-visible']}>
		{#each stepInfo as {imgSrc, citate, about}, index}
			<CitateImg {imgSrc} {citate} {about}/>
		{/each}
	</div>
	<div class={['step__info']}>
		<h3 class={["step__info__heading", stepBlockVisible && 'heading-visible']}>
			<span class="step__info__heading__years">{years}</span>
			{heading}
		</h3>
		<ul class={["step__info__list", stepBlockVisible && 'list-visible']}>
			{#each list as item}
				<li class="step__info__list__item">{item}</li>
			{/each}
		</ul>
		<div class={["step__info__citate", stepBlockVisible && 'citate-visible']}>
			<div>
				<BlueCitateSvg/>
			</div>
			<p class="step__info__citate__text">{citate}</p>
		</div>
		<!-- <p class={["step__info__text", stepBlockVisible && 'text-visible']}>{@html text}</p> -->
	</div>
</div>

<style lang="scss">
	.step {
		display: flex;
		justify-content: space-between;
		
		@media (width < 1150px) {
			flex-direction: column;
			gap: 2rem;
		}

		@media (width < 600px) {
			justify-content: center;

			padding: 0 2rem;
		}

		&__imgs-citates {
			flex-basis: 57%;

			display: flex;
			flex-direction: column;
			gap: 3.125rem;

			@media (width < 1150px) {
				order: 2;
				display: none;
			}

			@media (width < 600px) {
				gap: 7rem;
				align-items: center;
			}
		}

		&__info {
			flex-basis: 43%;
			display: flex;
			flex-direction: column;
			gap: 1.25rem;

			position: relative;

			padding: 1.875rem 0 0 2.6875rem;

			@media (width < 600px) {
				padding: 1.875rem 0 0 1.125rem;
			}

			&__heading {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				text-transform: initial;
				font-size: 1.5rem;
				font-weight: 700;
				white-space: nowrap;
				color: var(--white);

				opacity: 0;

				transition: opacity 0.5s ease;

				@media (width < 1150px) {
					flex-direction: column;
					align-items: start;
					gap: 0.75rem;

					white-space: wrap;
					font-size: 1rem;
				}

				&__years {
					// font-family: 'Cormorant Infant';
					// font-style: italic;
					font-size: 2rem;
					font-weight: 700;
					white-space: nowrap;
					color: var(--light-color);

					@media (width < 1150px) {
						font-size: 2.625rem;
					}
				}
			}
			
			&__heading.heading-visible {
				opacity: 1;
			}

			&__list {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				opacity: 0;

				transition: opacity 0.5s ease;

				&__item {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					color: var(--white);
					line-height: 1.5rem;

					&::before {
						content: '';

						min-width: 5px;
						height: 5px;

						background-color: var(--light-color);
						border-radius: 50%;
					}
				}
			}

			&__list.list-visible {
				opacity: 1;
			}

			&__citate {
				width: 70%;

				display: flex;
				align-items: start;
				gap: 0.75rem;

				padding: 1rem;

				border: 1px solid var(--light-color);
				border-radius: 5px;
				opacity: 0;

				transition: opacity 0.5s ease;

				@media (width < 600px) {
					width: 100%;
				}

				&__text {
					color: var(--white);
					line-height: 1.5rem;
				}
			}

			&__citate.citate-visible {
				opacity: 1;
			}

			&__text {
				position: relative;
				overflow: hidden;

				line-height: 160%;

				opacity: 0;

				transition: opacity 0.5s ease;

				// &::before {
				// 	content: '';

				// 	width: 100%;
				// 	height: 100%;

				// 	position: absolute;
				// 	top: 0;
				// 	right: 0;

				// 	background: linear-gradient(90deg, rgba(21, 21, 21, 0) 0, var(--main-bg-color) 100%);
					
				// 	transition: all 0.3s ease;
				// }
			}

			&__text.text-visible {
				opacity: 1;
			}

			&::before {
				content: '';

				width: 0.625rem;
				height: 0.625rem;

				position: absolute;
				top: 2.1875rem;
				left: -0.35rem;

				background-color: var(--white);
				border-radius: 50%;

				@media (width < 1150px) {
					top: 3.25rem;
					left: 1rem;
				}

				@media (width < 600px) {
					left: -1rem;
				}
			}
		}

		.right-align {
			align-items: end;	

			@media (width < 1150px) {
				align-items: start;
			}
		}
	}
</style>