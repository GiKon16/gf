import type { UploadFormData } from '../../entities/uploadFormData';

class PhotosService {
	getPhotos = async () => {
		const res = await fetch(
			'https://vmeste29.globalfoods.ru/api/v1/photos/?limit=25'
		);
		if (!res.ok) {
			throw new Error('Не получилось получить фото');
		}
		const data = await res.json();
		return data.map((item: { image_url: any; created_at: any }) => ({
			...item,
			imageUrl: item.image_url,
			createdAt: item.created_at,
		}));
	};

	postForm = async (formData: UploadFormData) => {
		const data = new FormData();
		data.append('name', formData.name);
		data.append('surname', formData.surname);
		data.append('phone', formData.phone);
		data.append('position', formData.position);
		data.append('place', formData.place);
		data.append('city', formData.city);
		data.append('email', formData.email);
		data.append('photo', formData.photo);
		const res = await fetch(
			'https://vmeste29.globalfoods.ru/api/v1/photos/submit',
			{
				method: 'POST',
				body: data,
			}
		);
		if (!res.ok) {
			const errorData = await res.json().catch(() => ({}));
			throw new Error(errorData.message || 'Не удалось отправить форму');
		}

		return await res.json();
	};
}

export default new PhotosService();
