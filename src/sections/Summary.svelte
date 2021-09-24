<script>
	// Components
	import Chips from './../components/Chips.svelte'
	import { Card, Divider } from 'attractions'
	import { configStore } from '../../stores/configCopyStore'

	let skills
	let summary

	configStore.subscribe((data) => {
		// @ts-ignore
		summary = data.summary
		skills = data.skills
	})
</script>

<section>
	<div>
		<div class="summary">
			<b>
				<!--About me -->
				<Divider text="Summary" />
			</b>
			<Card class="scroll__">
				{summary}
			</Card>
		</div>
		<Divider text="Skills" />
		<Chips tags={skills}  isSkills={true}/>
	</div>
</section>

<style lang="scss">
	section {
		text-align: center;
	}

	.summary :global(.card) {
		text-align: left; // height:
		margin: 2vh 12vw;
		overflow-x: auto;
	}
</style>
