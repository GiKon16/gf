import type { Photo } from '../../entities/photo';
import ApiClient from '../general/apiClient';

const { instanceAxiosClose } = ApiClient();

type ApiPhoto = {
	id: string;
	name?: string;
	surname?: string;
	city?: string;
	place?: string;
	position?: string;
	image_url: string;
	created_at?: string;
	phone?: string;
	email?: string;
	main?: boolean;
};

class PhotoService {
	private transformPhoto = (apiPhoto: ApiPhoto): Photo => {
		return {
			id: apiPhoto.id,
			name: apiPhoto.name,
			surname: apiPhoto.surname,
			city: apiPhoto.city,
			place: apiPhoto.place,
			position: apiPhoto.position,
			imageUrl: apiPhoto.image_url,
			createdAt: apiPhoto.created_at,
			phone: apiPhoto.phone,
			email: apiPhoto.email,
			main: apiPhoto.main,
		};
	};

	getPhotos = async (limit: number): Promise<Photo[]> => {
		try {
			const response = await instanceAxiosClose().get<ApiPhoto[]>(
				`/photos/?limit=${limit}`
			);
			return response.data.map(this.transformPhoto);
		} catch (error) {
			throw error;
		}
	};

	exportUsersData = async () => {
		try {
			const response = await instanceAxiosClose().get('/photos/export', {
				responseType: 'blob',
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	deletePhoto = async (id: string) => {
		try {
			return await instanceAxiosClose().delete(`/photos/${id}`);
		} catch (error) {
			throw error;
		}
	};

	setMainPhoto = async (id: string) => {
		try {
			return await instanceAxiosClose().post(`/photos/main?photo_id=${id}`);
		} catch (error) {
			throw error;
		}
	};

	getPhotosInterval = async () => {
		try {
			const response = await instanceAxiosClose().get('/photos/settings/ws');
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	setPhotosInterval = async (interval: number) => {
		try {
			return await instanceAxiosClose().patch(
				`/photos/settings/ws?interval_seconds=${interval}`
			);
		} catch (error) {
			throw error;
		}
	};
}

export default new PhotoService();
