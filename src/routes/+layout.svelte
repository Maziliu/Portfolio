<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/navigation/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-bg-back text-text transition-all">
	<Header />
	<main class="mb-auto px-4">
		{@render children()}
	</main>
	<Footer />
</div>
