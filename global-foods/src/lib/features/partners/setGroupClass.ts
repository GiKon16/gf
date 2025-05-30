export const setGroupClass = (index: number) => {
	switch (index) {
		case 0:
			return 'first-group';
		case 1:
			return 'second-group';
		case 2:
			return 'third-group';
		default:
			return '';
	}
};
