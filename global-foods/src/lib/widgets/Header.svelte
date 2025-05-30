<script>
	import { checkingFixedOpened } from '../features/all/checkingBurgerOpening';
	import LogoSvg from '../shared/svg/LogoSVG.svelte';
	import BurgerButton from './burger/BurgerButton.svelte';
	import BurgerMenu from './burger/BurgerMenu.svelte';

	let isBurgerMenuOpen = $state(false);

	$effect(() => {
		checkingFixedOpened(isBurgerMenuOpen);
	});
</script>
<header class="header">
	<div class="header__wrapper">
		<div class="header__wrapper__logo-img">
			<LogoSvg/>
		</div>
		<!-- <img class="header__wrapper__logo-img" src="images/logo.png" alt="Логотип"> -->
		<nav class="header__wrapper__navbar">
			<a class="header__wrapper__navbar__link" href="#steps">история</a>
			<a class="header__wrapper__navbar__link" href="#upload">загрузить фото</a>
			<a class="header__wrapper__navbar__link" href="#partners">партнеры</a>
		</nav>
		<a class="header__wrapper__link" href="#contacts">контакты</a>
		<BurgerButton onClick={() => isBurgerMenuOpen = !isBurgerMenuOpen} {isBurgerMenuOpen}/>
		{#if isBurgerMenuOpen}
			<BurgerMenu closeAfterRedirect={() => isBurgerMenuOpen = false}/>
		{/if}
	</div>
</header>

<style lang="scss">
	.header {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.8rem 0;

		&__wrapper {
			width: 65%;

			display: grid;
			grid-template-columns: 11rem auto 11rem;
			align-items: center;
			justify-items: center;

			@media (width < 1400px) {
				width: 100%;

				display: flex;
				align-items: center;
				justify-content: space-between;

				padding: 0 1.25rem;
			}

			&__logo-img {
				scale: 0.9;

				z-index: 10000;
			}

			&__navbar {
				display: flex;
				gap: 2.5rem;

				@media (width < 900px) {
					display: none;
				}

				&__link {
					color: var(--white);
				}	
			}

			&__link {
				justify-self: end;

				color: var(--white);

				@media (width < 900px) {
					display: none;
				}
			}
		}
	}
</style>