<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import PROJECTS from '../../data/projects.json';
	import type { Project } from '$lib/types/project';

	const projects = PROJECTS as Project[];
</script>

<section
	id="projects"
	class="mt-(--header-h) flex
         min-h-[calc(100svh-var(--header-h))] scroll-mt-(--header-h) auto-rows-fr flex-col gap-4 py-4 md:grid md:grid-cols-2 xl:grid-cols-3"
>
	{#each projects as project (project.id)}
		<ProjectCard {...project} />
	{/each}
</section>
