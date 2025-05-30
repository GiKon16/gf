export const Validator = () => {
	const photoValidator = (photo: File | null) => {
		return !photo;
	};

	const nameValidator = (name: string) => {
		return !name || !name.split(' ')[0] || !name.split(' ')[1];
	};

	const phoneValidator = (phone: string) => {
		return !phone || phone.length !== 16;
	};

	const emailValidator = (email: string) => {
		if (email === '') {
			return false;
		}
		const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return !reg.test(email);
	};

	return {
		photoValidator,
		nameValidator,
		phoneValidator,
		emailValidator,
	};
};
