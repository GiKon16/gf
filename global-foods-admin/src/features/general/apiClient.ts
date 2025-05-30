import axios from 'axios';
import Cookies from 'universal-cookie';

const ApiClient = () => {
	const cookies = new Cookies();

	const getToken = () => {
		return cookies.get('auth_token');
	};

	const logout = () => {
		cookies.remove('auth_token', { path: '/' });
	};

	const instanceAxiosOpen = () => {
		return axios.create({
			baseURL: 'https://vmeste29.globalfoods.ru/api/v1/admin',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
	};

	const instanceAxiosClose = () => {
		const accessToken = getToken();
		const instance = axios.create({
			baseURL: `https://vmeste29.globalfoods.ru/api/v1/admin`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		instance.interceptors.response.use(
			response => response,
			error => {
				if (error.response && error.response.status === 401) {
					logout();
				}
				return Promise.reject(error);
			}
		);
		return instance;
	};

	return {
		getToken,
		logout,
		instanceAxiosOpen,
		instanceAxiosClose,
	};
};

export default ApiClient;
