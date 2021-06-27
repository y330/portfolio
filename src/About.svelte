<script>
	import { GithubIcon,LinkedinIcon } from "svelte-feather-icons"

	import {Subhead,Headline, Card, Divider, Button, Label} from "attractions";

	import GetLinkedProfile from "./utils/getLinkedProfile"
	let profile = GetLinkedProfile("yonahaviv")
</script>
<!--Name-->
<Headline>{profile.name}</Headline>
<!--Headline-->
<Subhead>{profile.headline}</Subhead>
<!--About me-->
<Divider text="Summary"/>
<Card>{profile.summary}</Card>

<Button round  color="#888888"><GithubIcon size="20" />  <Label>GitHub</Label></Button>
<Button round info><LinkedinIcon size="20" /></Button>



<style lang="scss">
	Card {
		width: 50px;
	}
</style>