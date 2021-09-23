<script>

	// Sections

	import Chips from './../components/Chips.svelte'
	// import Skills from '../sections/Skills.svelte'
	import Summary from '../sections/Summary.svelte'
	// import RecentProjects from "../sections/RecentProjects.svelte";
	import Hero from '../sections/Hero.svelte'
	import { configStore } from '/stores/configCopyStore'
	let skills
	configStore.subscribe((data) => {
		let skills = data.skills
	})
</script>

<container>
	<Hero />
	<Summary />
	<Chips tags={skills} />
	<section class="row">
		<!-- <RecentProjects /> -->
		<!-- <Skills /> -->
	</section>
</container>

<style>
	section {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
</style>
