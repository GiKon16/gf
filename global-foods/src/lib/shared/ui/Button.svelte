<script lang="ts">
	type ButtonProps = {
		content?: string;
		class?: string;
		isDisabled?: boolean;
	}

	let {content = 'Кнопка', class: className = '', isDisabled}: ButtonProps = $props()
</script>

<button class={["button", className]} disabled={isDisabled}>{content}</button>

<style lang="scss">
	.button {
		padding: 1rem 3.125rem;

		background: var(--light-gradient);
		border-radius: 5px;
		box-shadow: 0px 4px 25px 0px #74D2F938;

		font-weight: 600;
		color: var(--white);

		&:disabled {
			background-color: var(--passive-color);
			border: 1px dashed var(--white);

			color: var(--white);
		}
	}

	.full-width {
		width: 100%;
	}
</style>