<script lang="ts">
	import { fly } from 'svelte/transition';
	import ArrowLinkSvg from '../../shared/svg/ArrowLinkSVG.svelte';

	type BurgerMenuProps = {
		closeAfterRedirect: () => void;
	}

	let {closeAfterRedirect}: BurgerMenuProps = $props();
</script>
<div in:fly={{x: 100}} out:fly={{x: -100}} class="burger-menu">
	<div class="burger-menu__wrapper">
		<nav class="burger-menu__wrapper__navbar">
			<a class="burger-menu__wrapper__navbar__link" href="#steps" onclick={closeAfterRedirect}>история</a>
			<a class="burger-menu__wrapper__navbar__link" href="#upload" onclick={closeAfterRedirect}>загрузить фото</a>
			<a class="burger-menu__wrapper__navbar__link" href="#partners" onclick={closeAfterRedirect}>партнеры</a>
			<a class="burger-menu__wrapper__navbar__link" href="#contacts" onclick={closeAfterRedirect}>контакты</a>
		</nav>
		<div class="burger-menu__wrapper__media">
			<a class="burger-menu__wrapper__media__mail-link" href="mailto:info@globalfoods.ru" rel="noreferrer">info@globalfoods.ru</a>
			<a class="burger-menu__wrapper__media__phone-link" href="tel:+74957871144" rel="noreferrer">+7 (495) 787-11-44</a>
			<p class="burger-menu__wrapper__media__support">
				По вопросам поддержки пишите на почту или звоните
			</p>
			<div class="burger-menu__wrapper__media__social">
				<a class="burger-menu__wrapper__media__social__link" href="https://t.me/globalfoodshoreca" target="_blank" rel="noreferrer">
					telegram
					<div class="burger-menu__wrapper__media__social__link__arrow">
						<ArrowLinkSvg/>
					</div>
				</a>
				<a class="burger-menu__wrapper__media__social__link" href="https://vk.com/globalfoodshoreca" target="_blank" rel="noreferrer" >
					вконтакте
					<div class="burger-menu__wrapper__media__social__link__arrow">
						<ArrowLinkSvg/>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.burger-menu {
		width: 100vw;
		height: calc(100vh);

		display: flex;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;

		padding: 4.875rem 1rem 3.125rem 1rem;
		
		background-color: var(--main-bg-color);

		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 3rem;

			&__navbar {
				display: flex;
				flex-direction: column;
				gap: 1.875rem;

				&__link {
					font-size: 2.625rem;
				}
			}

			&__media {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				padding-top: 2rem;

				border-top: 1px dashed var(--passive-color);

				&__mail-link {
					text-transform: uppercase;
					font-size: 1.6rem;
					font-weight: 700;
				}

				&__support {
					max-width: 17rem;

					font-size: 1rem;
					font-weight: 500;
				}

				&__phone-link {
					font-size: 1.5rem;
					font-weight: 600;
					color: var(--white);
				}

				&__social {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					&__link {
						display: flex;
						gap: 0.6rem;

						font-size: 1.5rem;

						&__arrow {
							position: relative;
							bottom: 0.3rem;

							scale: 1.7;
						}
					}
				}
			}
		}
	}
</style>