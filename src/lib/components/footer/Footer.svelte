<script lang="ts">
	import { Footer, FooterIcon } from 'flowbite-svelte';
	import {
		LinkedinSolid,
		GithubSolid,
		EnvelopeSolid,
		EnvelopeOpenSolid
	} from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia">
	<hr class="my-6 border-bg-front sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<div class="w-full text-text-muted">
			<p>
				This site was partially designed in <a href="https://www.figma.com"><b>Figma</b></a> and
				built using <b>SvelteKit</b>,
				<a href="https://tailwindcss.com"><b>TailwindCSS</b></a>, and
				<a href="https://flowbite-svelte.com/"><b>Flowbite</b></a>
			</p>
		</div>
		<div class="mt-4 flex space-x-2 sm:mt-0 sm:justify-center rtl:space-x-reverse">
			<FooterIcon href="mailto:martinliu906@gmail.com" target="_blank" class="group relative">
				<EnvelopeSolid
					class="h-7 w-7 text-gray-500 transition-opacity duration-100 group-hover:opacity-0 dark:text-gray-500"
				/>
				<EnvelopeOpenSolid
					class="absolute inset-0 h-7 w-7 text-gray-900 opacity-0 transition-opacity duration-100 group-hover:opacity-100 dark:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<LinkedinSolid
					class="h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="https://github.com/Maziliu/Portfolio">
				<GithubSolid
					class="h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
