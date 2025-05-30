import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import App from './App.vue';
import router from './features/router';
import './style.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			refetchOnWindowFocus: false,
			retry: 1,
		},
		mutations: {
			retry: 1,
		},
	},
});

createApp(App).use(router).use(VueQueryPlugin, { queryClient }).mount('#app');
