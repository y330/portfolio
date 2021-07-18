<script>
  // UI
  import { Button, Label, Subhead } from "attractions";
  // Library
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";
  // Components
  import Nav from "./Nav.svelte"
  // Properties
</script>

<section class="scroll__">
  <Nav>
    <slot></slot>
    <row>
      <Label>@</Label>

      <Button
        href="https://github.com/y330"
        title="Yonah Aviv on GitHub"
        neutral
        round
        class="github"
      >
        <GithubIcon size="20" strokeWidth="2" /></Button
      >
      <Button
        href="https://linkedin.com/in/yonahaviv"
        round
        class="linkedin"
        title="Yonah Aviv on Linkedin"
        neutral><LinkedinIcon size="20" strokeWidth="1.8" /></Button
      >
    </row>
  </Nav>
  <!-- <Divider /> -->


</section>

<style lang="scss">
  @import "../css/theme";
  $background-secondary: whitesmoke;
  :root {
    width: 100%;
  }
  section {
    // border-bottom: 4px grey solid;
    padding: 5px 2px !important;
    border-radius: 8px;
    transition: border 300ms ease;
    // border-bottom-width: 1px !important;
    background-color: $background-secondary;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    // overflow-x: visible;
    // align-items: baseline;
    justify-content: space-between;
    // height: calc(fit-content - 3/px);
    &:hover {
      border-color: $main;
    }
  }
  row {
    flex-wrap: nowrap !important;
  }
  :global(row) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;

    & :global(.btn) {
      padding: 0.25em;
      display: flex;
      justify-content: center;
      flex-flow: row-reverse;
      transition: 300ms ease-out;
      width: 17px;
      border: 0.125em $main solid;

      & :global(svg) {
        transition: all 300ms ease-in;
        fill: $main;
        stroke: $main;
        border-color: $main;
      }

      &:hover {
        width: 70px;
        float: right;
        padding: 0.5em;
        color: white !important;

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
    & :global(.btn.github) {
      margin-right: 0.25em;

      &:hover {
        border-color: black;

        background-color: black !important;
      }
    }
    & :global(.btn.linkedin) {
      &:hover {
        background-color: #0a66c2 !important;
        border-color: #0a66c2;
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
