<script lang="ts">
	import { onMount } from 'svelte';
	import { POVARYATA, STEPS } from '../../features/steps/constants';
	import { lineScroll } from '../../features/steps/lineScroll';
	import CitateImg from './CitateImg.svelte';
	import Step from './Step.svelte';

	let stepsList: Element;
	let scrollPercentage = $state(0);
	let stepsListHeight = $state(0);

	const handleScroll = () => {
		scrollPercentage = lineScroll(stepsList) ?? 0;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="steps-list" bind:this={stepsList} bind:offsetHeight={stepsListHeight}>
	{#each STEPS as {years, heading, text, stepInfo, list, citate}, index}
		<Step {years} {heading} {text} {stepInfo} {list} {citate} isRightAlignInfo={index === 1}/>
	{/each}
	<h3 class="steps-list__heroes">Герои индустрии</h3>
	<div class="steps-list__povaryata">
		{#each POVARYATA as {imgSrc, citate, about}}
			<CitateImg {imgSrc} {citate} {about}/>
		{/each}
	</div>
	<span class="steps-list__road-line" style={`height: 100%`}></span>
</div>

<style lang="scss">
	.steps-list {
		display: flex;
		flex-direction: column;
		gap: 12.5rem;

		position: relative;

		@media (width < 1150px) {
			gap: 6.25rem;
			align-items: center;
		}

		&__heroes {
			display: none;

			align-self: start;

			padding-left: 2rem;
			margin: -1rem 0;

			font-weight: 400;
			font-size: 2rem;
			color: var(--white);

			@media (width < 1150px) {
				display: block;
			}
		}

		&__povaryata {
			display: none;

			flex-direction: column;
			gap: 6.25rem;

			@media (width < 1150px) {
				display: flex;
				padding: 0 2rem;
			}
		}

		&__road-line {
			width: 1px;

			position: absolute;
			top: 0;
			right: 43%;
			z-index: -1;

			border-right: 2px dashed var(--passive-color);

			@media (width < 1150px) {
				left: 1.25rem;
			}
		}
	}
</style>