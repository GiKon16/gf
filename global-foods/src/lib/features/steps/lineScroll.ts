export const lineScroll = (stepsList: Element) => {
	let windowCoef = 0;
	const scrollY = window.scrollY;
	if (stepsList) {
		if (window.innerWidth < 1000) {
			windowCoef = 0;
		} else {
			windowCoef = 800;
		}
		const rect = stepsList.getBoundingClientRect();
		const elementTop = rect.top + window.scrollY - windowCoef;
		const elementHeight = rect.height;
		return (
			Math.min(1, Math.max(0, (scrollY - elementTop) / elementHeight)) * 150
		);
	}
};
