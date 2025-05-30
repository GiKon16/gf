<script lang="ts">
	let sectionWidth = $state(0);
</script>

<section class="section" bind:offsetWidth={sectionWidth}>
	<!-- <img class="section__bg-img" src="images/hero-bg.png" alt="Задний фон первого экрана"> -->
	<div class="section__right-shadow"></div>
	<div class="section__bottom-shadow"></div>
	<div class="section__left-shadow"></div>
	<div class="section__wrapper">
		<div class="section__wrapper__bubble">
			<img class="section__wrapper__bubble__img" src={sectionWidth > 1300 ? "images/hero-bubble.png" : "images/hero-bubble-small.png"} alt="Овощи">
			<div class="section__wrapper__bubble__light"></div>
		</div>
		<div class="section__wrapper__info">
			<h1 class="section__wrapper__info__heading">
				<span class="section__wrapper__info__heading__accent">29 лет вкуса</span><br>
				путь, который мы прошли вместе.
			</h1>
			<p class="section__wrapper__info__text">
				Вместе мы создавали рынок HoReCa – от первых 
				ресторанов до сегодняшней технологичной кухни. 
				GLOBAL FOODS был рядом с самого начала.
				Сегодня мы рассказываем эту историю – с вами и о вас.
			</p>
			<a href="#upload" class="section__wrapper__info__start-button">СТАТЬ ЧАСТЬЮ ИСТОРИИ HoReCa</a>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		width: 100%;

		display: flex;
		justify-content: center;

		position: relative;
		
		padding-top: 2.8rem;

		@media (width < 1300px) {
			padding-top: 1rem;
			padding-bottom: 5rem;
		}

		&__top-shadow,
		&__right-shadow,
		&__bottom-shadow,
		&__left-shadow {
			position: absolute;

			@media (width > 1170px) {
				display: none;
			}
		}

		&__top-shadow,
		&__bottom-shadow {
			width: 100%;
			height: 35%;
			z-index: 3;
		}

		&__right-shadow,
		&__left-shadow {
			width: 10%;
			height: 100%;

			display: none;

			z-index: 1;
		}

		&__top-shadow {
			top: 0;
			left: 0;	

			background: linear-gradient(0deg, rgba(21, 21, 21, 0) 0%, #151515 100%);
		}

		&__bottom-shadow {
			display: none;

			bottom: 4rem;
			right: 0;

			background: linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__right-shadow {
			bottom: 0;
			right: 0;

			background: linear-gradient(90deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		&__left-shadow {
			top: 0;
			left: 0;

			background: linear-gradient(-90deg, rgba(21, 21, 21, 0) 0%, var(--main-bg-color) 100%);
		}

		// &::before {
		// 	content: '';

		// 	width: 100%;
		// 	height: 4rem;

		// 	position: absolute;
		// 	bottom: 0;

		// 	background: linear-gradient(180deg, rgba(14, 27, 44, 0) 0%, #0E1B2C 100%);

		// 	@media (width < 1170px) {
		// 		height: 4rem;

		// 		bottom: 3.5rem;
		// 	}
		// }

		// &__bg-img {
		// 	width: 100%;
		// 	height: 100%;

		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	z-index: -1;

		// 	object-fit: cover;
		// }

		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;

			@media (width < 1300px) {
				flex-direction: column;
				justify-content: initial;

				padding: 0 1rem;
			}

			&__info {
				display: flex;
				flex-direction: column;
				gap: 4rem;

				@media (width < 1300px) {
					order: 1;
					gap: 2rem;
					align-items: center;
				}

				&__heading {
					max-width: 43rem;

					// font-family: 'Cormorant Infant';
					font-size: 2.75rem;
					font-weight: 400;

					@media (width < 1300px) {
						text-align: left;
					}

					@media (width < 700px) {
						font-size: 2rem;
					}

					&__accent {
						// font-family: 'Cormorant Infant';
						font-size: 6rem;
						font-weight: 700;
						color: var(--white);

						@media (width < 1170px) {
							display: block;

							margin-bottom: -20px;
						}

						@media (width < 700px) {
							font-size: 3rem;
						}
					}
				}

				&__text {
					max-width: 40rem;
					

					font-size: 1.5rem;
					color: var(--white);

					@media (width < 1000px) {
						font-size: 1.25rem;
					}
				}

				&__start-button {
					padding: 1.875rem 3.125rem;

					background: var(--light-gradient);
					border-radius: 5px;
					box-shadow: 0px 4px 25px 0px #74D2F938;

					font-weight: 700;
					text-align: center;
					color: var(--white);

					transition: opacity 0.3s ease;

					@media (width < 800px) {
						width: 100%;
					}

					&:hover {
						opacity: 80%;
					}
				}
			}

			&__bubble {
				display: flex;
				justify-content: center;

				position: relative;

				&__light {
					width: 26rem;
					height: 26rem;

					position: absolute;
					top: 50%;
					left: 50%;
					translate: -50% -50%;
					z-index: 10;

					background-color: transparent;
					border-radius: 50%;
					box-shadow: 0 0 200px 100px var(--light-color);

					animation: scalingLight 2.5s infinite linear;

					@media (width < 1300px) {
						width: 15%;
						height: 30%;

						box-shadow: 0 0 125px 55px var(--light-color);
					}
				}

				@keyframes scalingLight {
					0% {
						rotate: 0deg;
					}
					100% {
						rotate: 360deg;
					}
				}
				
				&__img {
					width: 90%;

					z-index: 11;

					animation: scaling 4s infinite linear;

					@media (width < 1300px) {
						width: 75%;
					}
				}
			}	
			
			@keyframes scaling {
				0% {
					scale: 1;
				}
				33% {
					scale: 1.02;
				}
				66% {
					scale: 0.98;
				}
				100% {
					scale: 1;
				}
			}
		}
	}
</style>