<script>
  // UI
  import { H1, Tabs } from "attractions";
  // Components
  import Header from "./components/Header.svelte";
  import Recents from "./components/Recents.svelte";
  import Skills from "./components/Skills.svelte";
  // Pages
  import About from "./pages/about.page.svelte";
  import Projects from "./pages/projects.page.svelte";
  import Experience from "./pages/experience.page.svelte";
  // Stores
	// import { activeTab } from "./utils/stores.js"


  const sections = ["About", "Projects", "Work", "Contact"];
  let activeTab = "About";


 </script>

<main>
  <section>
    <Header >
      <Tabs

      class="tabs__"
      tabClass="tab__"
      name="navigation"
      items={sections}
      bind:value={activeTab}
    />
    </Header>

    {#each sections as tab}

      {#if tab == activeTab}

        {#if tab == "About"}
          <About>
            <span slot="recents"><Recents /></span>
            <span slot="skills"><Skills /></span>
          </About>
          {:else if tab == "Projects"}
          <Projects></Projects>
        {:else if tab == "Work"}
        <Experience></Experience>
        {:else}
        <button>Hello WOrld</button>
      {/if}
      {/if}
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    margin-inline: 0 !important;
    padding-inline: 1%;
  }
  // .flexrow__ {
  //   display: flex;
  //   flex-direction: row;
  //   max-width: 300px !important;
  //   flex-wrap: nowrap;
  //   & label {
  //   }
  // }
</style>
