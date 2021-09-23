<script>
	import {
		Subhead,
		Headline,
	} from 'attractions'
	import { configStore } from '/stores/configCopyStore'
	import Typewriter from '../components/Typewriter/Typewriter.svelte'

	let name
	let headline
	configStore.subscribe((data) => {
		;(name = data.name), (headline = data.headline)
	})


</script>

<section class="hero">
	<br />
	<br />
	<br /> <br />
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
	<br />
</section>

<style lang="scss">
	@use 'theme.scss';

	section {
		text-align: center;
		height: 100vh;
		// transform: rotate3d(1, 0, 0, -90deg);
	}
	:global(.hero.btn) {
		margin-inline: 500px !important;
	}
	.card.contact-form > * {
		max-width: 400px;
		margin: auto;
		position: relative;
	}
	.primary {
		position: absolute;
		right: 45%;
		bottom: 0;
	}
</style>
