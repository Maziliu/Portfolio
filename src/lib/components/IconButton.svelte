<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import type { LinkWidget } from '$lib/types/project';

	type Size = { width: number; height: number };

	const { logo, link, width = 40, height = 40 } = $props<LinkWidget & Partial<Size>>();

	const isGithub = $derived(logo.toLowerCase().includes('github'));
	const isWebsite = $derived(logo.toLowerCase().includes('website'));
	const isDarkTheme = $derived($theme === 'dark');

	const shouldInvert = $derived(isDarkTheme && (isGithub || isWebsite));
</script>

<a href={link} target="_blank" rel="external noopener noreferrer" class="shrink-0 object-contain">
	<img
		src={`/logos/${logo}`}
		alt={logo}
		{width}
		{height}
		style={`width:${width}px;height:${height}px`}
		class={`transition-all hover:opacity-80 ${shouldInvert ? 'invert' : ''}`}
	/>
</a>
