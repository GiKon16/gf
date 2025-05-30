<script lang="ts">
	import { PARTNERS } from '../features/partners/constants';
	import Partner from '../widgets/partners/Partner.svelte';
</script>
<section class="section" id="partners">
	<h2 class="section__heading">наши партнеры</h2>
	<ul class="section__list">
		{#each PARTNERS as src}
			<Partner {src}/>
		{/each}
	</ul>
	<!-- <PartnersSlider/> -->
	<!-- <a href="#upload">
		<Button content='СТАТЬ ЧАСТЬЮ ИСТОРИИ HoReCa'/>
	</a> -->
</section>

<style lang="scss">
	.section {
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3.875rem;

		overflow: hidden;

		padding: 3.875rem 0 6.25rem 0;

		&__heading {
			// font-family: 'Cormorant Infant';
			font-size: 2.625rem;
			// font-weight: 700;

			@media (width < 1020px) {
				text-align: center;
				font-size: 2rem;
			}
		}

		&__list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 4rem;

			@media (width < 950px) {
				justify-content: center;

				gap: 1rem;

				padding: 0 1rem;
			}
		}
	}
</style>