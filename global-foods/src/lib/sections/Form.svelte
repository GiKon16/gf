<script lang="ts">
	import { urPersonSrc } from '../features/photos/yourPerson';
	import Collage from '../widgets/collage/Collage.svelte';
	import UploadForm from '../widgets/upload-form/UploadForm.svelte';
</script>
<section class={["section", $urPersonSrc !== 'images/your-person.png' && 'uploaded']} id="upload">
	<Collage/>
	<UploadForm/>
</section>

<style lang="scss">
	.section {
		display: flex;

		@media (width < 1160px) {
			flex-direction: column;
		}
	}

	.section.uploaded {
		flex-direction: column;
		align-items: center;
	}
</style>