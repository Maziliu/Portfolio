<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import PROJECTS from '../../data/projects.json';
	import type { Project } from '$lib/types/project';

	const projects = PROJECTS as Project[];
</script>

<section
	id="projects"
	class="mt-(--header-h) grid
         min-h-[calc(100svh-var(--header-h))] scroll-mt-(--header-h) auto-rows-fr grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3"
>
	{#each projects as project (project.id)}
		<ProjectCard {...project} />
	{/each}
</section>
