<script lang="ts">
	import { Carousel, Controls, CarouselIndicators } from 'flowbite-svelte';
	import type { CarouselImage, Project } from '$lib/types/project';
	import IconButton from '../IconButton.svelte';
	import { getProjectImages, slugify } from '$lib/utils/projectImages';
	import TechTag from './TechTag.svelte';

	let { title, description, links, tags }: Project = $props();
	const images: CarouselImage[] = $derived(getProjectImages(slugify(title)));

	let isSM = $state(false);

	$effect(() => {
		function checkWidth() {
			isSM = window.innerWidth >= 640;
		}

		checkWidth();
		window.addEventListener('resize', checkWidth);

		return () => {
			window.removeEventListener('resize', checkWidth);
		};
	});
</script>

<div
	class="group w-full rounded-3xl bg-bg-middle p-4 shadow-sm
         ring-1 ring-white/5 transition-all
         duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-white/10 sm:p-5"
>
	{#if images.length}
		<div class="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
			<Carousel {images}>
				<Controls />
				<CarouselIndicators />
			</Carousel>
		</div>
	{/if}

	<div class="bg flex h-full flex-col justify-between gap-4 sm:items-start">
		<div class="flex h-full min-w-0 flex-col justify-between gap-2">
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold tracking-tight sm:text-2xl">{title}</h2>

				{#if description}
					<p class="text-sm leading-relaxed text-text-muted sm:text-base">
						{description}
					</p>
				{/if}
			</div>
			<div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				{#if tags?.length}
					<div class="mt-2 flex flex-wrap gap-2">
						{#each tags as tag (tag)}
							<TechTag {tag} />
						{/each}
					</div>
				{/if}
				{#if links?.length}
					<div
						class="
    flex shrink-0 flex-row items-center
    gap-3 sm:order-last sm:col-end-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3
  "
					>
						{#if links.length < 4 && isSM}
							{#each Array(4 - links.length), i (i)}
								<div></div>
							{/each}
						{/if}

						{#each links as l (`${l.logo}-${l.link}`)}
							{#if l.link}
								<IconButton
									link={l.link}
									logo={`${l.logo.toLowerCase()}.svg`}
									width={30}
									height={30}
								/>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
