<script>
  import { GithubIcon } from "svelte-feather-icons";
  // Components
  import { Tabs, Divider, Button } from "attractions";
  // Stores
  import { activeTab } from "../utils/stores.js";

  export let tabs;
</script>

<Divider />
<section>
  <container>
    <Tabs
      class="tabs__"
      tabClass="tab__"
      name="navigation"
      items={tabs}
      bind:value={$activeTab}
    />
  </container>
  <!-- <Divider /> -->
  <Button round neutral class="btn__"><GithubIcon size="30" /></Button>
</section>
<Divider />

<style lang="scss">
  @import "../css/theme";

  section {
    background-color: whitesmoke;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    height: fit-content;
    &.btn__ {
      vertical-align: middle;
    }
  }

  :global(nav.tabs__) {
    display: flex !important;
    justify-content: space-evenly !important;
    width: 60vw;
    height: auto;

    & :global(.tab__) {
      flex-grow: 10;
      & :global(div) {
        justify-content: center;
        width: 100%;
      }
      & :global(input:hover) {
      }
    }
  }
</style>
