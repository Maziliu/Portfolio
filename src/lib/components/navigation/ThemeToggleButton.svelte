<script lang="ts">
	import { onMount } from 'svelte';

	let isDark = false;

	function syncTheme(dark: boolean) {
		isDark = dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('color-theme', dark ? 'dark' : 'light');
	}

	function toggleTheme() {
		syncTheme(!isDark);
	}

	onMount(() => {
		const stored = localStorage.getItem('color-theme');

		if (
			stored === 'dark' ||
			(!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			syncTheme(true);
		} else {
			syncTheme(false);
		}
	});
</script>

<button
	type="button"
	aria-label="Toggle theme"
	on:click={toggleTheme}
	class="flex cursor-pointer items-center"
>
	<i class="bi bi-moon-fill hidden text-blue-400 dark:inline"></i>

	<i class="bi bi-sun-fill inline text-bg-front dark:hidden"></i>
</button>
