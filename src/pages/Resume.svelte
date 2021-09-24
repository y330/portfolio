<script>
	// Components
	import Typewriter from './../components/Typewriter/Typewriter.svelte'
	import { Headline, Subhead } from 'attractions'
</script>

<Typewriter interval={100} cursor="#ff3e00">
	<Headline>Resume</Headline>
</Typewriter>
<section>
	<Subhead><em>Drag corners to resize</em></Subhead>
	<iframe
		src="https://onedrive.live.com/embed?cid=D1BCEE1A2FD48DEE&resid=D1BCEE1A2FD48DEE%213115&authkey=AOaKHaMR46vCr84&em=2"
		height="800"
		frameborder="0"
		width="100%"
		zoom="40"
		scrolling="yes"
	/>
</section>

<style>
	section {
		height: fit-content;
	}
</style>
