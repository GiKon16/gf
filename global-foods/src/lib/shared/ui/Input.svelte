<script lang="ts">
	import { maska } from 'maska/svelte';

	type InputProps = {
		type?: string;
		placeholder?: string;
		class?: string;
		isPhone?: boolean;
		value?: string;
		error?: boolean;
		onInput?: () => void;
	}

	let {type = 'text', placeholder = 'Текст', class: className = '', isPhone, value = $bindable(), error = false, onInput}: InputProps = $props();
</script>

<input 
	class={["input", className, error && 'error']} 
	type={type} 
	placeholder={placeholder} 
	use:maska={isPhone ? '+7 ### ### ## ##' : ''} 
	bind:value={value}
	oninput={onInput}>

<style lang="scss">
	.input {
		padding: 1.25rem;

		background-color: transparent;
		border: 1px dashed var(--passive-color);
		border-radius: 5px;

		color: var(--white);

		@media (midth < 500px) {
			flex-basis: 100%;
		}

		&:focus {
			outline: 1px dashed var(--white);
			border-color: transparent;
		}
	}

	.input.error {
		border: 1px dashed var(--warn-color);

		animation: trigger 0.5s linear;

		&::placeholder {
			color: var(--warn-color);
		}

		&:focus {
			outline: 1px dashed var(--white);
			border-color: transparent;

			&::placeholder {
				color: var(--white);
			}
		}
	}

	.form-input {
		flex-basis: calc(50% - 0.75rem);

		@media (width < 500px) {
			flex-basis: 100%;
		}
	}

	@keyframes trigger {
		0% {
			translate: 0 0;
		}
		10% {
			translate: 1rem 0;
		}
		20% {
			translate: -1rem 0;
		}
		30% {
			translate: 1rem 0;
		}
		40% {
			translate: -1rem 0;
		}
		50% {
			translate: 1rem 0;
		}
		60% {
			translate: -1rem 0;
		}
		70% {
			translate: 1rem 0;
		}
		80% {
			translate: -1rem 0;
		}
		90% {
			translate: 1rem 0;
		}
		100% {
			translate: 0 0;
		}
	}
</style>