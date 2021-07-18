<script>
  // UI
  import { Button } from "attractions";
  // Library
  import { GithubIcon } from "svelte-feather-icons";
  // Properties
  // Stores
  /* import { activeTab } from "./../utils/stores.js";
  // Update tab
  function changeTab(tab) {
    activeTab.set(tab);

  } */
  const logoSize = 30;
</script>

<header>
  <a href="./" class="logo">
    <img src="favicon.png" width={logoSize} height={logoSize} alt="Logo" />
    <span class="hide-on-less-tb">Yonah Aviv</span>
  </a>
  <div class="right-nav">
    <slot></slot>

      <!-- TODO: add the versions here
	  <DropdownShell let:toggle>
		<Button small on:click={toggle}>
		  v{process.latest_version}
		  <ChevronDownIcon size="20" class="dropdown-chevron ml" />
		</Button>
		<Dropdown>
		</Dropdown>
	  </DropdownShell> -->

  </div>

</header>


<style lang="scss">
  @use 'sass:color';
  @use './../css/theme' as vars;

  $side-margin: 1em;

  header {
    padding-top: 0.6em;
    padding-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid color.adjust(vars.$main, $alpha: -0.75);

    .logo,
    .clickables {
      display: flex;
      align-items: center;
    }

    .logo {
      margin-left: $side-margin + 0.7em;
      text-decoration: none;

      span {
        margin-left: 0.7em;
        font-size: 1.25em;
        font-weight: vars.$bold-font-weight;
        color: black;
      }
    }
    .right-nav {
      display: flex;
      flex-flow: row nowrap;
      margin-left: 2vw;
      width: 70vw;
      justify-content: space-between;
      align-self: flex-end;
    }
    .clickables {
      margin-right: $side-margin;

      :global .dropdown-chevron {
        margin-top: -2px;
      }
    }
  }
</style>
