import Cookies from 'universal-cookie';
import type { User } from '../../entities/user';
import ApiClient from '../general/apiClient';

const cookies = new Cookies();
const { instanceAxiosOpen } = ApiClient();

class LoginService {
	login = async (formData: User) => {
		return instanceAxiosOpen()
			.post('/login', {
				login: formData.login,
				password: formData.password,
			})
			.then((res: { data: { access_token: any } }) => {
				const accessToken = res.data.access_token;
				cookies.set('auth_token', accessToken, {
					path: '/',
					maxAge: 86400,
					secure: true,
					sameSite: 'strict',
				});
				return res;
			});
	};
}

export default new LoginService();
