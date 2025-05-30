<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import LoginService from '../features/login/api';
import Button from '../shared/ui/Button.vue';
import Input from '../shared/ui/Input.vue';

const router = useRouter();

const loginData = reactive({
	login: '',
	password: '',
});

const loginMutation = useMutation({
	mutationFn: () => LoginService.login(loginData),
	onSuccess: () => {
		router.push('/photos');
	},
	onError: () => alert('Вы ввели неправильный логин или пароль'),
});

const login = (event: { preventDefault: () => void }) => {
	event.preventDefault();
	loginMutation.mutate();
};
</script>

<template>
	<div
		class="min-h-screen min-w-screen flex items-center justify-center relative bg-main-bg"
	>
		<div class="w-full flex justify-center fixed top-0 py-7.5 bg-add-bg">
			<img src="/images/logo.png" alt="Логотип" />
		</div>
		<div class="flex flex-col items-center gap-7.5 p-12.5 bg-add-bg">
			<h1 class="text-xl font-bold">Вход</h1>
			<form class="w-80 flex flex-col gap-2.5">
				<Input type="text" placeholder="Логин" v-model="loginData.login" />
				<Input
					type="password"
					placeholder="Пароль"
					v-model="loginData.password"
				/>
				<Button content="Войти" @click="login" />
			</form>
			<div class="flex gap-20 text-white underline">
				<a href="https://vmeste29.globalfoods.ru/">Главная</a>
				<a href="https://vmeste29.globalfoods.ru/tv">TV</a>
			</div>
		</div>
	</div>
</template>
