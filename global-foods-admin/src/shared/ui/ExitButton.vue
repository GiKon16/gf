<script setup lang="ts">
import { useRouter } from 'vue-router';
import ApiClient from '../../features/general/apiClient';

const { logout } = ApiClient();
const router = useRouter();

const exitFromAccount = () => {
	logout();
	router.push('/');
};
</script>

<template>
	<button
		class="flex items-center gap-2.5 p-2.5 bg-gray rounded-sm cursor-pointer text-main-fg transition-all duration-300 hover:opacity-80"
		@click="exitFromAccount"
	>
		Выйти
		<div class="p-1.5 bg-main-bg rounded-sm">
			<svg
				width="14"
				height="13"
				viewBox="0 0 14 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.14287 9.5V11.2143C9.14287 11.4416 9.05257 11.6597 8.89183 11.8204C8.73108 11.9811 8.51306 12.0714 8.28573 12.0714H2.28573C2.0584 12.0714 1.84039 11.9811 1.67964 11.8204C1.51889 11.6597 1.42859 11.4416 1.42859 11.2143V1.78571C1.42859 1.55838 1.51889 1.34037 1.67964 1.17962C1.84039 1.01888 2.0584 0.92857 2.28573 0.92857H8.28573C8.51306 0.92857 8.73108 1.01888 8.89183 1.17962C9.05257 1.34037 9.14287 1.55838 9.14287 1.78571V3.5M6.57145 6.5H12.5714M12.5714 6.5L10.8572 4.78571M12.5714 6.5L10.8572 8.21428"
					stroke="#686868"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</button>
</template>
