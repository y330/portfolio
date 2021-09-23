<script>
	import { Subhead, Headline, Button } from 'attractions'
	import { configStore } from '/stores/configCopyStore'
	import Typewriter from '../components/Typewriter/Typewriter.svelte'
	import { ArrowDownIcon, InfoIcon } from 'svelte-feather-icons'

	let name
	let headline
	configStore.subscribe((data) => {
		;(name = data.name), (headline = data.headline)
	})
</script>

<section class="hero">
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<Typewriter interval={100} cursor="$main">
		<!--Name-->
		<Headline>{name}</Headline>
	</Typewriter>
	<!--Headline-->
	<Subhead>
		{headline}
	</Subhead>
	<br />
	<br />
	<Button round filled on:click={() => router.push('#summary')}>
		<ArrowDownIcon size="24" />
	</Button>
	<br />
</section>

<style lang="scss">
	@use 'theme.scss';
	.hero  {
		display: flex;
		flex-direction: column;
		:global(.headline) {
			font-size: 100px;
			font-family: theme.$font;
		}
	}
	section {
		text-align: center;
		height: 100vh;
	}
	:global(.hero.btn:not(#summary)) {
		margin-inline: 500px !important;
	}
</style>
