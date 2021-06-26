<script>
	import { GithubIcon,LinkedinIcon } from "svelte-feather-icons"

	import {Subhead,Headline, Card, Divider, Button } from "attractions";
	import GetLinkedProfile from "./utils/getLinkedProfile"
import { svg_element } from "svelte/internal";
	let profile = GetLinkedProfile("yonahaviv")
</script>

<Headline>{profile.name}</Headline>
<Subhead>{profile.headline}</Subhead>
<Divider text="Summary"/>
<Card>{profile.summary}</Card>

<Button round neutral><GithubIcon class="ico-gh" size="20" /></Button>
<Button round neutral><LinkedinIcon size="20" /></Button>



<style lang="scss">
	.ico-gh p {
	fill: red
	}
</style>