<script>
  // Components
  import { H1 } from "attractions";
  import Header from "./components/Header.svelte";
  // Pages
  import Skills from "./Skills.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  // Stores
  import { activeTab } from "./utils/stores.js";

  let sections = ["About", "Skills", "Projects"];
</script>

<main>
  <Header tabs={sections} />

  {#each sections as tab}
    {#if tab == $activeTab}
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
