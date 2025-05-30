<script>
	import StepsList from '../widgets/steps/StepsList.svelte';

</script>
<section class="section" id="steps">
	<div class="section__wrapper">
		<h2 class="section__wrapper__heading">
			<span class="section__wrapper__heading__accent">Пройди 
				<span class="section__wrapper__heading__accent__steps">29 шагов</span>
			</span><br>
			от 
			<span class="section__wrapper__heading__year">1996</span> 
			до 
			<span class="section__wrapper__heading__year">2025</span> 
			года
		</h2>
		<StepsList/>
	</div>
</section>

<style lang="scss">
	.section {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		overflow: hidden;

		padding: 8rem 0 6.75rem 0;

		@media (width < 1120px) {
			padding: 0 0 6.75rem 0;
		}

		// @media (width < 700px) {
		// 	margin-top: -3.5rem;
		// }

		&__wrapper {
			width: 65%;

			display: flex;
			flex-direction: column;
			justify-content: center;

			gap: 5.3125rem;

			@media (width < 1700px) {
				width: 85%;
			}

			@media (width < 1300px) {
				width: 100%;

				padding: 0 1.25rem;
			}

			@media (width < 1150px) {
				padding: 0 0;
			}

			@media (width < 1050px) {
				gap: 3.75rem;
			}

			&__heading {
				text-align: center;
				// font-family: 'Cormorant Infant';
				font-weight: 400;
				font-size: 1.5rem;

				@media (width < 1150px) {
					align-self: center;

					text-align: left;
				}

				&__accent {
					// font-family: 'Cormorant Infant';
					font-size: 2.625rem;

					&__steps {
						// font-family: 'Cormorant Infant';
						font-weight: 600;
					}
				}

				&__year {
					// font-family: 'Cormorant Infant';
					font-weight: 700;
				}
			}
		}
	}
</style>