<script>
	import { onMount } from 'svelte';
	import Form from './sections/Form.svelte';
	import Hero from './sections/Hero.svelte';
	import Partners from './sections/Partners.svelte';
	import Steps from './sections/Steps.svelte';
	import Footer from './widgets/Footer.svelte';
	import Header from './widgets/Header.svelte';
	import Intro from './widgets/Intro.svelte';

	let isLoading = $state(true);

	const onPageLoading = () => {
		setTimeout(() => {
			isLoading = false;
		}, 1000);
	}

	onMount(() => {
		onPageLoading();
	})
</script>

<div class="page-wrapper">
	{#if isLoading}
		<Intro/>
	{/if}
	<Header/>
	<main class="page-wrapper__main">
		<Hero/>
		<Steps/>
		<Form/>
		<Partners/>
	</main>
	<Footer/>
</div>

<style lang="scss">
	.page-wrapper {
		width: 100%;
		min-height: 100vh;

		display: flex;
		flex-direction: column;
		
		&__main {
			flex: 1;
		}
	}
</style>