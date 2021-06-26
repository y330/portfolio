<script>
  // Components
  import { Tabs, Divider, RadioChip, RadioButton, H1 } from "attractions";
  // Pages
  import Skills from "./Skills.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";

  let activeTab = "Skills";
  let sectionTabs = ["About", "Skills", "Projects"];
</script>

<main>
  <Tabs name="menu" items={sectionTabs} bind:value={activeTab} />
  <Divider />

  {#each sectionTabs as tab}
    {#if tab == activeTab}
      <H1>{tab}</H1>
      {#if tab == "About"}
        <About />
      {:else if tab == "Skills"}
        <Skills />
      {:else if tab == "Projects"}
        <Projects />
      {/if}
    {/if}
  {/each}
</main>

<style lang="scss">
  // .flexrow__ {
  //   display: flex;
  //   flex-direction: row;
  //   max-width: 300px !important;
  //   flex-wrap: nowrap;
  //   & label {
  //   }
  // }
</style>
