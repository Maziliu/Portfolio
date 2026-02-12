<script lang="ts">
	import { activeSection } from '$lib/stores/section';
	import type { Section } from '$lib/types/navigation';

	export let section: Section;
</script>

<a
	href={`/#${section}`}
	on:click={() => activeSection.set(section)}
	class="relative transition-opacity hover:opacity-50"
	class:opacity-100={$activeSection === section}
	class:opacity-60={$activeSection !== section}
>
	{section.at(0)?.toUpperCase() + section.substring(1)}
	<span
		class="absolute -bottom-1 left-0 h-0.5 w-full bg-current transition-transform duration-300"
		class:scale-x-100={$activeSection === section}
		class:scale-x-0={$activeSection !== section}
		style="transform-origin:left;"
	></span>
</a>
