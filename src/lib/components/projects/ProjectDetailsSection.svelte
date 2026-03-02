<script lang="ts">
	import { fly } from 'svelte/transition';
	let { header } = $props();
</script>

<section
	in:fly={{ y: 40, duration: 1000, delay: 0 }}
	class="flex min-h-screen flex-col justify-evenly text-xl text-text-muted"
>
	<h1 class="text-8xl text-text">{header}</h1>
	<slot />
</section>
