import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';
const KEY = 'theme';

function getInitialTheme(): Theme {
	if (!browser) return 'dark';
	const saved = localStorage.getItem(KEY);
	return saved === 'light' || saved === 'dark' ? saved : 'dark';
}

export const theme = writable<Theme>(getInitialTheme());

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}

export function toggleTheme() {
	theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}

if (browser) {
	theme.subscribe((theme) => {
		localStorage.setItem(KEY, theme);
		document.documentElement.classList.toggle('light', theme === 'light');
	});
}
