<script lang="ts">
	import { fade } from 'svelte/transition';
	import UploadSvg from '../svg/UploadSVG.svelte';
	import UploadedSvg from './UploadedSVG.svelte';

	type UploadImageInputProps = {
		files?: FileList | null | undefined;
		error?: boolean
	}

	let fileInput: HTMLDivElement;

	let {files = $bindable(), error = false}: UploadImageInputProps = $props();
</script>

<button class={["upload", files && 'uploaded', error && 'error']} onclick={() => fileInput.click()}>
	{#if !files}
		<UploadSvg isRed={error}/>
	{:else}
		<UploadedSvg/>
	{/if}
	<span class={["upload__text", files && 'uploaded', error && 'error']}>
		{#if !files}
			Загрузить фотографию
		{:else}
			Фотография загружена
		{/if}
	</span>
	{#if files}
		<span in:fade class="upload__success">Нажмите, чтобы изменить</span>
	{/if}
	<input bind:this={fileInput} class="upload__input" type="file" accept="image/*" name="photo" bind:files/>
</button>

<style lang="scss">
	.upload {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		position: relative;

		padding: 3.9375rem 0;

		background-color: transparent;
		border: 1px dashed var(--light-color);
		border-radius: 5px;
		cursor: pointer;

		transition: all 0.3s ease;

		&:hover {
			opacity: 0.7;
		}

		&__text {
			font-size: 0.875rem;
			font-weight: 500;
			color: var(--light-color);

			transition: all 0.3s ease;
		}

		&__success {
			position: absolute;
			bottom: 1.5rem;

			font-size: 0.75rem;
		}

		&__text.uploaded {
			color: var(--good-color);
		}

		&__text.error {
			color: var(--warn-color);
		}

		&__input {
			display: none;
		}
	}

	.upload.uploaded {
		border: 1px dashed var(--good-color);
	}

	.upload.error {
		border: 1px dashed var(--warn-color);
	}
</style>
