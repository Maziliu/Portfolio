<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import PROJECTS from '../../data/projects.json';
	import type { Project } from '$lib/types/project';

	const projects = PROJECTS as Project[];
</script>

<section
	id="projects"
	class="grid scroll-mt-24 auto-rows-fr grid-cols-1
         gap-4 md:grid-cols-2 xl:grid-cols-3"
>
	{#each projects as project (project.id)}
		<ProjectCard {...project} />
	{/each}
</section>
