<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Index from './lib/Index.svelte';

  	const queryClient = new QueryClient();
</script>
<QueryClientProvider client={queryClient}>
	<Index/>
</QueryClientProvider>