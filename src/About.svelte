<script>
  import { Subhead, Headline, Card, Divider, RadioChip } from "attractions";

  import GetLinkedProfile from "./utils/getLinkedProfile";
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
    <column class="summary">
      <b>
        <!--About me-->
        <Divider text="Summary" />
      </b>
      <Card>
        {profile.summary}
      </Card>
    </column>
    <column class="details__">
      <Divider text="Recent Project" />
      <Card outline>
        <ul>
          <li>
            Commodo officia et cillum.
            <RadioChip class="tag__" noPadding small value="python" name="py" />
          </li>
          <li>
            Yonah Aviv's Portfolio - Using Svelte so far
            <RadioChip
              class="tag__"
              noPadding
              small
              value="Svelte"
              name="svelte"
            />
          </li>
        </ul>
      </Card>
    </column>
    <column>
      <Divider text="Skills" />
      <Card outline><slot /></Card></column
    >
  </row>
  <!-- <Button round neutral><GithubIcon size="20" /></Button> -->
  <!-- <Button ></Button>LinkedinIcon size="20" /></Button> -->
</section>

<style lang="scss">
  section {
    text-align: center;
  }
  .details__ {
    // width: 40vw;
  }
  row {
    max-width: fit-content
  }
  :global(.card) {
    text-align: left; // height:
    margin: 3vh 1vw;
  }
</style>
