<script>
	import ProjectDetailsSection from '$lib/components/projects/ProjectDetailsSection.svelte';
	import { fly } from 'svelte/transition';
</script>

<section
	in:fly={{ y: 40, duration: 1000, delay: 0 }}
	class="flex min-h-screen flex-row items-center justify-center text-[20vw] font-light"
>
	Dailies
</section>

<section>Hero (Project Stats --> Images, Decr, Techstack tags)</section>

<ProjectDetailsSection header="Motivation">
	<p>
		The motivation for creating this app stemmed from 3 key frustrations I had in my daily routine. <br
		/> <br />
		Firstly, at the start of every semester, would I spend over an hour manually parsing through course
		outlines and marking down deadlines into my Samsung Calendar. To make things worse, different professors
		would format each course outline differently making the process even more tedius and time consuming.
		<br />
		<br />
		Secondly, while the University of Calgary provides schedule exports as ICS files, a bug in either
		the file or the Samsung Calendar causes event times to shift during daylight savings. Due to this
		strange behaviour, I would then have to manually set all event series back to the correct times.
		<br />
		Thirdly, I play gacha games that require daily logins in order to use stamina efficiently. I needed
		a reliable way to track stamina regeneration so I could login and spend it before it maxed out but
		no existing solution existed for my niche requirement. <br /> <br />

		What started as a basic calendar app with auto-deadline imports became something personal to me
		that perfectly addressed my daily frustrations. I definetely could've taken the easy route for
		this which would've been just to make the gacha tracker its own app and just swap to a different
		calendar service like Google Calendar (if it was a bug in the Samsung Calendar) or create a
		script to fix the ICS file, but I wanted a challenge and honestly, I was kinda itching for any
		excuse to work on a personal project.
	</p>
</ProjectDetailsSection>

<ProjectDetailsSection header="Solution/Approach">
	<p>
		This app consists of both a frontend and backend. The frontend is created using Dart and Flutter
		that also utilizes DriftORM to interface a sqlite database. I chose Flutter because I wanted to
		explore mobile development whilst also leaving the door open for a web client. I personally
		don;t always have internet connection so I wanted to keep he app as local as possible hence
		sqlite. Should I ever decide to make a web client, sqlite would be the local database that syncs
		to the cloud. This app is mobile first as I also wanted local notifications. <br /> <br />
		The backend is Vercel deployed and is created with Typescript, Fastify, and NextJS. It also utilizes
		Upstash Redis as a cache layer. To explain why I chose these technologies for the backend
	</p>
</ProjectDetailsSection>

<ProjectDetailsSection header="Features">
	<p></p>
</ProjectDetailsSection>

<ProjectDetailsSection header="Technical Implementation">
	<p></p>
	<ul class="list-inside list-disc">
		<li>Overall Diagram</li>
		<li>Frontend</li>
		<li>Backend</li>
	</ul>
</ProjectDetailsSection>
<ProjectDetailsSection header="Challenges">
	<p></p>
</ProjectDetailsSection>
<ProjectDetailsSection header="Key Learnings">
	<p></p>
</ProjectDetailsSection>
<ProjectDetailsSection header="Future Features">
	<p>Auto setting of stamina via wireshark and packet sniffing</p>
</ProjectDetailsSection>
