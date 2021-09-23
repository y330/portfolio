<script>
	// Stores
	import { configStore } from '/stores/configCopyStore.js'
	// Components
	import { RadioChip, Divider } from 'attractions'

	// Fetch skills from json
	let skills = []
	configStore.subscribe((data) => {
		// @ts-ignore
		skills = data.skills
	})
	// convert list to object
	skills = skills.map((str, index) => ({ value: index + 1, label: str }))
</script>

<section>
	<Divider text="Skills" />
	{#each skills as skill}
		<RadioChip class="tag__" value={skill.label} name={skill.value} small />
	{/each}
	<!-- <CheckboxChipGroup {items} name="group1" max={1} small/> -->
</section>

<style lang="scss">
	section {
		width: 20vw;
		justify-self: left;
	}
	@media only screen and (max-width: 425px) {
		section {
			width: auto;
		}
	}
	:global(.tag__) {
		display: inline-block !important;
		padding-inline: 0.1em;
		padding-block: 0.1em;
	}
</style>
