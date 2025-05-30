<script>
	import { PARTNERS } from '../../features/partners/constants';
	import { setGroupClass } from '../../features/partners/setGroupClass';
</script>
<div class="slider">
	{#each Array(3) as _, index}
		<div class="slider__carousel">
			{#each Array(3) as _}
				<div class={['slider__carousel__group', setGroupClass(index)]}>
					{#each PARTNERS as src}
						<div class="slider__carousel__group__item">
							<img class="slider__carousel__group__item__img" src={src} alt="Партнер">
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.slider {
		max-width: 100%;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		overflow: hidden;

		&__carousel {
			max-width: 100%;

			display: flex;
			gap: 1.5rem;

			margin: 0 auto;

			& > * {
				flex: 0 0 100%;
			}

			&__group {
				display: flex;
				gap: 1.5rem;

				&__item {
					width: 16.5rem;
					height: 9.375rem;

					display: flex;
					justify-content: center;
					align-items: center;

					border: 1px dashed var(--passive-color);
					border-radius: 5px;

					@media (width < 1020px) {
						width: 14rem;
						height: 8rem;
					}
				}
			}

			.first-group {
				animation: scrolling-left 80s linear infinite;
			}

			.second-group {
				animation: scrolling-right 100s linear infinite;
			}

			.third-group {
				animation: scrolling-left 120s linear infinite;
			}
		}
	}

	@keyframes scrolling-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes scrolling-right {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>