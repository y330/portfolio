<script>
  // Library
  import Grid from "svelte-grid";
  import gridHelp from "svelte-grid/src/utils/helper";

  const id = () => "_" + Math.random().toString(36).substr(2, 9);

  let items = [
    {
      6: gridHelp.item({
        x: 0,
        y: 0,
        w: 2,
        h: 2,
      }),
      id: id(),
    },

    {
      6: gridHelp.item({
        x: 2,
        y: 0,
        w: 2,
        h: 2,
      }),
      id: id(),
    },
  ];

  const cols = [[1100, 6]];
</script>

<section>
  <div class="demo-container">
    <!-- <Grid bind:items rowHeight={100} let:item let:dataItem {cols}>
      <div class="demo-widget">{dataItem.id}</div>
    </Grid> -->
    hello
  </div>
</section>

<style>
  :global(.svlt-grid-shadow) {
    /* Back shadow */
    background: pink;
  }
  :global(.svlt-grid-container) {
    /* Container color */
    background: #eee;
  }
  :global(.svlt-grid-resizer::after) {
    /* Resizer color */
    border-color: white !important;
  }
</style>
