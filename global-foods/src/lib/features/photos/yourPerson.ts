import { writable } from 'svelte/store';

const STORAGE_KEY = 'urPersonSrc';

const getInitialValue = () => {
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) return stored;
	}
	return 'images/your-person.png';
};

export const urPersonSrc = writable(getInitialValue());

urPersonSrc.subscribe(value => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, value);
	}
});
