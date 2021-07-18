<script>
  // UI
    import { Subhead, Headline, Divider, Card} from "attractions";
  // Components
  import Summary from "./../components/Summary.svelte"
  // Scripts
  import GetLinkedProfile from "./../utils/getLinkedProfile";

  let profile = GetLinkedProfile("yonahaviv");
</script>

<section>
  <!--Name-->
  <Headline>{profile.name}</Headline>
  <!--Headline-->
  <Subhead>
    {profile.headline}
  </Subhead>
  <br />
  <row>
    <column class="summary__">
      <b><Divider text="Summary" /></b>
      <!--About me-->
      <Summary>
        <span>{profile.summary}</span>
      </Summary>
    </column>
  </row>
  <Card outline clas="section2">
    <div class="recents__">
      <Divider text="Recent Projects" />
      <slot name="recents" />
    </div>
    <div class="skills__">
      <Divider text="Skills" />
      <slot name="skills" />
    </div>
  </Card>
  <!-- <Button round neutral><GithubIcon size="20" /></Button> -->
  <!-- <Button ></Button>LinkedinIcon size="20" /></Button> -->
</section>

<style lang="scss">
  .section2 {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  section {
    text-align: center;
  }
  .recents__ {
    max-width: 200px;
  }
  row {
    max-width: fit-content;
  }
  :global(.card) {
    text-align: left; // height:
    margin: 3vh 1vw;
  }
</style>
