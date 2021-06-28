<script>
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";
  // Components
  import { Tabs, Divider, Button } from "attractions";
  // Stores
  import { activeTab } from "../utils/stores.js";

  export let tabs;
</script>

<section class="scroll__">
  <Tabs
    class="tabs__"
    tabClass="tab__"
    name="navigation"
    items={tabs}
    bind:value={$activeTab}
  />
  <!-- <Divider /> -->
  <row>
    <Button
      href="https://github.com/y330"
      title="Yonah Aviv on GitHub"
      neutral
      round
      class="github"><GithubIcon size="16" strokeWidth="2" /></Button
    >
    <Button
      href="https://linkedin.com/in/yonahaviv"
      round
      class="linkedin"
      title="Yonah Aviv on Linkedin"
      neutral><LinkedinIcon size="16" strokeWidth="1.8" /></Button
    >
  </row>
</section>

<style lang="scss">
  @import "../css/theme";
  $background-secondary: lightgrey;

  section {
    background-color: $background-secondary;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: visible;
    align-items: baseline;
    justify-content: space-between;
    // height: calc(fit-content - 3/px);
    // width: w;
    & row {
      display: flex;
      flex-direction: row;
      vertical-align: middle;
      justify-content: space-between;
      & :global(.btn) {
        padding: 0.25em;
      }
      & :global(.btn.github) {
        margin-right: 0.25em;
        border: 0.125em solid;
        transition: all 300ms ease-in;

        & :global(svg) {
          transition: all 300ms ease-in;
          fill: #333;
        }
        &:hover {
          border-color: black;

          background-color: black;
          & :global(svg) {
            stroke: white;
            fill: white;
          }
        }
        &:active {
          opacity: 0.7;
        }
        &:focus {
          opacity: 0.9;
        }
      }
      & :global(.btn.linkedin) {
        transition: all 300ms ease-in;
        border: 0.125em solid;
        & :global(svg) {
          transition: all 300ms ease-in;
          fill: #333;
        }
        &:hover {
          background-color: #0a66c2;
          border-color: #0a66c2;
          & :global(svg) {
            stroke: white;
            fill: white;
          }
        }
        &:active {
          opacity: 0.7;
        }
        &:focus {
          opacity: 0.9;
        }
      }
    }
  }

  :global(nav.tabs__) {
    display: flex !important;
    justify-content: space-evenly !important;
    width: 60vw;
    min-width: 10em;

    // justify-self: end;

    & :global(.tab__) {
      //   width: 100%;

      flex-grow: 10;
      & :global(div) {
        // background-color: darkgray;
        border-color: darkblue;
        justify-content: center;
        width: 100%;
        border-bottom-width: 3px !important;
      }
    }
  }
</style>
