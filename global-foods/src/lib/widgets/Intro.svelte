<script>
	import { fade } from 'svelte/transition';
	import LogoSvg from '../shared/svg/LogoSVG.svelte';

</script>
<div out:fade class="intro">
	<LogoSvg/>
</div>

<style lang="scss">
	.intro {
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		position: fixed;
		inset: 0;
		z-index: 10001;

		background-color: var(--main-bg-color);
	}
</style>