<script>
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";

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
</style>
