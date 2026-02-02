<script lang="ts">
	import { onMount } from 'svelte';
	import { activeSection } from '$lib/stores/section';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import Tab from './Tab.svelte';
	import IconButton from '../IconButton.svelte';

	let headerRef: HTMLElement;

	function updateHeaderHeight() {
		document.documentElement.style.setProperty('--header-h', `${headerRef.offsetHeight}px`);
	}

	onMount(() => {
		updateHeaderHeight();

		const ids = ['projects', 'about'] as const;
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => !!el);

		let io: IntersectionObserver | null = null;

		function setupIntersectionObserver() {
			io?.disconnect();

			const headerH = headerRef.offsetHeight;

			io = new IntersectionObserver(
				(entries) => {
					const visible = entries
						.filter((e) => e.isIntersecting)
						.sort(
							(a, b) =>
								(a.target as HTMLElement).getBoundingClientRect().top -
								(b.target as HTMLElement).getBoundingClientRect().top
						)[0];

					const id = (visible?.target as HTMLElement | undefined)?.id;
					if (id === 'projects' || id === 'about') {
						activeSection.set(id);
					}
				},
				{
					rootMargin: `-${headerH}px 0px -70% 0px`,
					threshold: 0
				}
			);

			sections.forEach((s) => io!.observe(s));
		}

		const ro = new ResizeObserver(() => {
			updateHeaderHeight();
			setupIntersectionObserver();
		});

		ro.observe(headerRef);
		setupIntersectionObserver();

		return () => {
			ro.disconnect();
			io?.disconnect();
		};
	});
</script>

<header
	bind:this={headerRef}
	class="sticky top-0 z-50 w-full px-3
         py-2 text-2xl backdrop-blur sm:px-4 sm:py-3"
>
	<div class="flex shrink-0 flex-row items-center justify-end gap-4 sm:gap-4">
		<Tab section="projects" />
		<Tab section="about" />
		<ThemeToggleButton />
		<IconButton link="https://github.com/Maziliu" logo="github.svg" width={30} height={30} />
	</div>
</header>
