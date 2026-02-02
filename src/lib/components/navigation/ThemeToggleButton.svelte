<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button type="button" aria-label="Toggle Theme" on:click={toggleTheme}>
	<i class={`bi ${$theme === 'dark' ? 'bi-moon-fill text-blue-400' : 'bi-sun-fill text-bg-front'}`}
	></i>
</button>
