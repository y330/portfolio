<script>
  // Component
  import {
    ClockIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "svelte-feather-icons/";
  import { Card, Divider } from "attractions";
  // Svelte
  import { fly } from "svelte/transition";
  // Utils

  let projects = [
    {
      label: "FragmentQR",
      desc: "Browser extension that allows for the generation of QR codes linking to arbitrary text on a page. <a style='color:lightgray' href='#'>Read more</a> <br><a href='https://bit.ly/FQRInstall'>Go to project.</a>",
    },
    {
      label: "QuickSum",
      desc: "QUcik summarization tool. <a style='color:lightgray' href='https://github.com/y330/quicksum'>Read more</a> <br><a href='https://quicksum.vercel.app'>Go to project.</a>",
    },
    {
      label: "Sveltekit + TailwindCSS Blog on Dystopian Literature",
      desc: "Blog on various dystopian texts, coded with SvelteKit, tailwind.css with Daisy UI components, and Graph CMS.  <a style='color:lightgray' href='#'>Read more</a><br> <a href='https://yonahs-fst.vercel.app'>Go to Project</a>",
    },
    {
      label: "Jesture",
      desc: "Gesture based map navigator, using tesorflow.js and svelt. <a style='color:lightgray' href='#'>Read more<a> <br> <em> Coming Soon </em>(WIP) ",
    },
    {
      label: "Q-Article Audio",
      desc: "Chrome extension to let you listen to an article as a podcast in the browser or optionally on your phone by scanning a QR code while in the middle of an article/webpage. <a style='color:lightgray' href='#'>Read more<a> <br> <a href='https://y330.github.io/q-article-audio'>Go to Project</a>",
      tech: ["svelte", "JavaScript", "material design", "chrome extension"],
    },
    {
      label: "Generolio",
      desc: "Tool to generate high quality personal websites (WIP)",
    },
  ];
  let expanded = false;
  /* {label:Sveltkit CMS Blog, desc: "Blog for my Grade 11 English Culminating Assignment written in SvelteKit(Svelte with SSR and Routing), GraphCMS(Content Management System for the blog posts), GraphQL(GraphQL API for the blog posts), tailwindCSS(css framework)"} */
</script>

<section>
  <Divider text="Recent Projects" />
  {#each projects as proj}
    <div class="accordion-item" class:active={expanded === proj.label}>
      <button
        style="transition:all 300ms ease; padding: 1em;"
        class:active={expanded === proj.label}
        on:click={() => {
          expanded = proj.label;
        }}
      >
        <div>
          <b>{proj.label}</b>
          <code>
            <ClockIcon size="10" />
            {new Date().getMinutes().toString()} min ago</code
          >
        </div>
        <div>
          {#if expanded === proj.label}
            <ChevronDownIcon size="25" strokeWidth="2" />
          {:else}
            <ChevronRightIcon size="25" strokeWidth="2" />
          {/if}
        </div>
      </button>

      {#if expanded === proj.label}
        <div
          class="info"
          in:fly={{ x: -200, duration: 1500 }}
          out:fly={{ x: 50, duration: 500 }}
        >
          <Card outline tight>
            <p>
              {@html proj.desc}
            </p></Card
          >
        </div>
      {/if}
    </div>
  {/each}
</section>

<style lang="scss">
  @import "theme.scss";
  :host {
    width: auto;
    // justify-items: left;
  }

  button {
    border-radius: 10px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.08);
    color: #656565;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: none;

    code {
      // margin-left: 100%;
      color: #bbbb;
    }
    div {
      // flex-grow:20;
    }
    :hover {
      cursor: pointer;
    }
  }
  .active {
    position: sticky;
    z-index: 1;
    & button {
      background-color: $main;
      color: #fff;
      transition: all 300ms ease;
      code {
        color: red;
      }
    }
  }
  .info {
    margin-bottom: 2rem;
    max-width: fit-content;
    word-wrap: break-word;
    p {
      padding-inline: 10px;
      padding-bottom: 1em;
    }
  }
</style>
