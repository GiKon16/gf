<script lang="ts">
	type UploadSVGProps = {
		isRed?: boolean
	}

	let {isRed = false} = $props();
</script>

<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.07115 24.8036C3.25281 24.3051 1.80807 22.9033 1.2497 21.1105M20.9289 24.8036C22.7474 24.3051 24.1919 22.9033 24.7504 21.1105M11.1537 25H14.8459M14.8459 1H11.1537M1 11.1538L1 14.8462M25 11.1538V14.8462M5.07115 1.19634C3.25281 1.69466 1.80807 3.09655 1.2497 4.88927M20.9289 1.19634C22.7474 1.69466 24.1919 3.09655 24.7504 4.88927M12.9998 7.46154V18.5385M12.9998 18.5385L9.30756 14.8462M12.9998 18.5385L16.6921 14.8462" stroke={isRed ? "#f41515" : "#74D2F9"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
