export const createPartnerObserver = (
	callback: (visible: boolean) => void,
	threshold: number = 0.2
) => {
	return new IntersectionObserver(
		([entry]) => {
			callback(entry.isIntersecting);
		},
		{ threshold: threshold }
	);
};
