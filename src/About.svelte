<script>
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";

  import { Subhead, Headline, Card, Divider, Button } from "attractions";
  import GetLinkedProfile from "./utils/getLinkedProfile";
  let profile = GetLinkedProfile("yonahaviv");
  let logoColors = {
	  default: "darkgray",
	  github: {default:"black"},
	  linkedin: {default:"blue"}
  }
</script>

  <!--Name-->
  <Headline>{profile.name}</Headline>
  <!--Headline-->
  <Subhead>{profile.headline}</Subhead>
  <!--About me-->
  <Divider text="Summary" />
  <Card class="summary__"
    >{profile.summary}
  </Card>
  <div class="socials__">
	<!-- <Button background="red" round neutral ><GithubIcon size="20" /></Button> -->
	<Button round neutral><LinkedinIcon size="20" /></Button>
  </div>


<style lang="scss">

//   .summary__ {
//     width: 40vw;
//     left: 50%;
//     transform: translateX(-50%);
//   }

//   .socials__ {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }
</style>
