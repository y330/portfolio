<script>
  // UI
  import { Card, RadioChip, AccordionSection } from "attractions";
  // Library
  import { ArrowRightIcon } from "svelte-feather-icons"
</script>

<section>
  <ul>
    <li>
      <p>Pydash</p>
      <span class="stack_tags">
      <RadioChip  small value="python" name="py" />
      <RadioChip  small value="pygame" name="pygame" />
      </span>
    </li>
    <li>
      <p>Yonah Aviv's Portfolio</p>
      <a href="https://yonah.vercel.app">Go to project <div class="arrow"><ArrowRightIcon size="15"/></div></a>
      <span class="stack_tags"
        ><RadioChip small value="JS" name="js" />
        <RadioChip small value="Svelte" name="svelte" />
      </span>
    </li>
    <li>
      <AccordionSection on:
      label="Q-Article Audio"
    >
    With Q-Article Audio, listen to the rest of an article as a podcast within the extension popup or on your smartphone using a QR code.

  </AccordionSection>
  </li>
    </ul>
  </section>

<style>
  section {
    max-width: 200px;
  }
  span.stack_tags {
    display: inline-block !important;
  }
  :global(.chip.small) {
    transform: scale(0.8);
  }
  div.arrow {
    visibility: hidden
  }
  a:hover div.arrow {
  visibility: visible
  }
  </style>
