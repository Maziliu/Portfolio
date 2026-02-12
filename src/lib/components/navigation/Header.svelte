<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { activeSection } from '$lib/stores/section';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import Tab from './Tab.svelte';
	import IconButton from '../IconButton.svelte';

	let headerRef: HTMLElement;
	const TABS = ['about', 'projects'] as const;
	let sections: HTMLElement[] = [];
	let isHomePage = false;

	function updateHeaderHeight() {
		document.documentElement.style.setProperty('--header-h', `${headerRef.offsetHeight}px`);
	}

	function initializeSections() {
		if (browser && isHomePage) {
			sections = TABS.map((id) => document.getElementById(id)).filter(
				(element): element is HTMLElement => !!element
			);
			if (sections.length > 0) {
				onScroll();
			}
		} else {
			sections = [];
		}
	}

	function onScroll() {
		if (!isHomePage || sections.length === 0) return;

		const scrollPosition = window.scrollY + window.innerHeight / 2;

		let current: (typeof TABS)[number] = TABS[0];

		for (const section of sections) {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				current = section.id as (typeof TABS)[number];
				break;
			}
		}

		activeSection.set(current);
	}

	afterNavigate(({ to }) => {
		isHomePage = to?.url.pathname === '/';
		initializeSections();
	});

	onMount(() => {
		updateHeaderHeight();

		// Check initial page
		isHomePage = window.location.pathname === '/';
		initializeSections();

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', updateHeaderHeight);

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
	<div class="flex shrink-0 flex-row items-center justify-end gap-4">
		<div class="flex w-full flex-row items-start gap-4">
			{#each TABS as tab, i (i)}
				<Tab section={tab} />
			{/each}
		</div>
		<ThemeToggleButton />
		<IconButton link="https://github.com/Maziliu" logo="github.svg" width={30} height={30} />
	</div>
</header>
