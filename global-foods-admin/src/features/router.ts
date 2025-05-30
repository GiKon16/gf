import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/login.vue';
import Photos from '../pages/photos.vue';
import Layout from '../widgets/Layout.vue';
import ApiClient from './general/apiClient';

const { getToken } = ApiClient();

const routes = [
	{ path: '/', component: Login },
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: 'photos',
				component: Photos,
				meta: { requiresAuth: true },
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/admin/'),
	routes,
});

router.beforeEach((to, from, next) => {
	const token = getToken();
	console.log(from);
	if (to.matched.some(record => record.meta.requiresAuth) && !token) {
		next({ path: '/' });
	} else {
		next();
	}
});

export default router;
