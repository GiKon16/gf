<script lang="ts">
	type BurgerButtonProps = {
		onClick: () => void;
		isBurgerMenuOpen: boolean;
	}

	let {onClick: onclick, isBurgerMenuOpen}: BurgerButtonProps = $props();
</script>

<button class={["burger-button", isBurgerMenuOpen && "close-mode"]} aria-label="Бургер" {onclick}>
	<span class="burger-button__line"></span>
</button>

<style lang="scss">
	.burger-button {
		width: 2rem;
		height: 1.25rem;

		display: none;
		align-items: center;
		justify-content: center;

		position: relative;
		z-index: 10000;

		background-color: transparent;
		cursor: pointer;

		@media (width < 900px) {
			display: flex;
		}

		&__line {
			width: 100%;
			height: 1px;

			background-color: var(--white);

			transition: all 0.3s ease;
		}

		&::before,
		&::after {
			content: '';

			width: 100%;
			height: 1px;

			position: absolute;
			left: 0;

			background-color: var(--white);

			transition: all 0.3s ease;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}
	}

	.close-mode {

		&::before {
			top: 50%;
			translate: 0 -50%;

			rotate: 45deg;
		}

		&::after {
			top: 50%;
			translate: 0 -50%;

			rotate: -45deg;
		}

		span {
			width: 0;
		}
	}
</style>