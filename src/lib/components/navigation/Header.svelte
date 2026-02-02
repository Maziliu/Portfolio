<script lang="ts">
	import { onMount } from 'svelte';
	import { activeSection } from '$lib/stores/section';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import Tab from './Tab.svelte';
	import IconButton from '../IconButton.svelte';

	let headerRef: HTMLElement;

	const TABS = ['about', 'projects'] as const;
	let sections: HTMLElement[] = [];

	function updateHeaderHeight() {
		document.documentElement.style.setProperty('--header-h', `${headerRef.offsetHeight}px`);
	}

	function onScroll() {
		const scrollPosition = window.scrollY + headerRef.offsetHeight + 1;

		let current: (typeof TABS)[number] | null = null;

		for (const section of sections) {
			if (scrollPosition >= section.offsetTop) {
				current = section.id as (typeof TABS)[number];
			}
		}

		if (current) {
			activeSection.set(current);
		}
	}

	onMount(() => {
		updateHeaderHeight();

		sections = TABS.map((id) => document.getElementById(id)).filter(
			(element): element is HTMLElement => !!element
		);

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', updateHeaderHeight);

		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', updateHeaderHeight);
		};
	});
</script>

<header
	bind:this={headerRef}
	class="sticky top-0 z-50 w-full px-3
         py-2 text-2xl backdrop-blur sm:px-4 sm:py-3"
>
	<div class="flex shrink-0 flex-row items-center justify-end gap-4 sm:gap-4">
		{#each TABS as tab, i (i)}
			<Tab section={tab} />
		{/each}
		<ThemeToggleButton />
		<IconButton link="https://github.com/Maziliu" logo="github.svg" width={30} height={30} />
	</div>
</header>
