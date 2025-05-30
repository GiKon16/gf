<script lang="ts">
	import { fade } from 'svelte/transition';
	import CheckedSvg from '../svg/CheckedSVG.svelte';

	type CheckBoxProps = {
		id: string;
		checked: boolean;
		label?: string;
		error?: boolean;
	}

	let {id, checked = $bindable(), label, error}: CheckBoxProps = $props()
</script>

<div class="checkbox">
	<div class="checkbox__container">
		{#if checked}
			<div in:fade={{duration: 100}} out:fade={{duration: 100}}>
				<CheckedSvg/>
			</div>
		{/if}
	</div>
	<input class="checkbox__input" type="checkbox" id={id} bind:checked={checked}/>
	<label class={["checkbox__label", error && 'error']} for={id}>
		даю согласие на обработку персональных данных и соглашаюсь с
		<a class={["checkbox__label__link", error && 'error']} href="/gf_policy.pdf" target="_blank" rel="norefferer">политикой конфиденциальности</a>
	</label>
</div>

<style lang="scss">
	.checkbox {
		display: flex;
		align-items: center;
		gap: 1rem;

		position: relative;

		user-select: none;

		&__container {
			width: 1.5rem;
			height: 1.5rem;

			display: flex;
			align-items: center;
			justify-content: center;

			position: absolute;
			z-index: -1;

			border: 1px solid var(--white);
			border-radius: 5px;
			cursor: pointer;
		}

		&__input {
			display: none;
		}

		&__label {
			padding-left: 2.5rem;

			cursor: pointer;

			@media (width < 600px) {
				font-size: 0.75rem;
			}

			&__link {
				text-decoration: underline;
			}

			&__link.error {
				color: var(--warn-color);
			}
		}

		&__label.error {
			color: var(--warn-color);
		}
	}
</style>