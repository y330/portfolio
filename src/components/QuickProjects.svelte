<script>
  import Grid from "svelte-grid";
  import gridHelp from "svelte-grid/build/helper/index.mjs";

  let items = [
    {
      5: gridHelp.item({ x: 0, y: 0, w: 2, h: 2 }),
      2: gridHelp.item({ x: 0, y: 0, w: 1, h: 2 }),
    },
    {
      /*..*/
    },
  ];

  const cols = [
    [1600, 5],
    [1024, 2],
  ];
</script>

<Grid {items} {cols} rowHeight={150} />

<style>
  :global(.svlt-grid-active) {
    opacity: 1 !important;
  }
</style>
