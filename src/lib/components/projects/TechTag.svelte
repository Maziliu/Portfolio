<script lang="ts">
	import { URLMap } from '$lib/constants/tags';
	import type { TechTag } from '$lib/types/project';

	let { tag }: TechTag = $props();
</script>

<span
	class="rounded-full border border-white/10 bg-bg-front px-3 py-1 text-xs font-medium
         text-white
         backdrop-blur-sm"
>
	<a href={URLMap[tag]} target="_blank" rel="external noopener noreferrer">
		{tag}
	</a>
</span>
