export const checkingFixedOpened = (isOpen: boolean) => {
	if (isOpen) {
		document.body.style.top = `-${window.scrollY}px`;
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
	} else {
		const top = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';
		window.scrollTo({
			top: parseInt(top || '0') * -1,
			behavior: 'instant',
		});
	}
};
