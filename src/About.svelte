<script>
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

  <Card>
	  {profile.summary}
  </Card>
  <!-- <Button round neutral><GithubIcon size="20" /></Button> -->
  <!-- <Button ></Button>LinkedinIcon size="20" /></Button> -->
</section>

<style lang="scss">
  .card {
    width: 50vw;
	margin: 5vh 22vw;
	min-width: 25vw;
  }
</style>
