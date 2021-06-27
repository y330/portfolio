<script>
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";

<<<<<<< HEAD
  import { Subhead, Headline, Card, Divider, Button, Label } from "attractions";

  import GetLinkedProfile from "./utils/getLinkedProfile";
  let profile = GetLinkedProfile("yonahaviv");
</script>

<section>
  <!--Name-->
  <Headline>{profile.name}</Headline>
  <!--Headline-->
  <Subhead>{profile.headline}</Subhead>
  <!--About me-->
  <Divider text="Summary" />
  <!-- <Button round><LinkedinIcon size="20" /></Button> -->
  <Card>{profile.summary} <div class="container__">
  </div></Card>
=======
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

>>>>>>> 7c3862b28022589c289b136a94db7b2d4a0fa94c

<style lang="scss">

<<<<<<< HEAD
</section>

<style lang="scss">
  :global(.linkedin) {
    border: 1px solid black !important;
	transition: all 500ms ease-out;

    &:hover {
      background-color: black !important;
      :global(path) {
        stroke: white !important;
        fill: grey !important;
      }
    }
  }
=======
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
>>>>>>> 7c3862b28022589c289b136a94db7b2d4a0fa94c
</style>
