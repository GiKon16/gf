import PhotosService from './api';

const downloadUsersData = async () => {
	try {
		const blob = await PhotosService.exportUsersData();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'Личные_данные.xlsx';
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		}, 100);
	} catch (error) {
		throw error;
	}
};

export default downloadUsersData;
