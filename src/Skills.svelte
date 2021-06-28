<script>
  import { RadioChip, Divider } from "attractions";
  let skills = [
    { value: "Python (Programming Language)", label: "py" },
    { value: "JavaScript", label: "js" },
    { value: "Git", label: "git" },
    { value: "Google Cloud Platformp (GCP)", label: "gcp" },
    { value: "Node.js", label: "node" },
    { value: "Svelte", label: "svelte" },
    { value: "HTML", label: "html" },
    { value: "CSS", label: "css" },
    { value: "Financial Analysis", label: "finance" },
    { value: "Pandas (Software)", label: "pandas" },
    { value: "Web Extensions", label: "webext" },
    { value: "Flask", label: "flask" },
  ];
</script>

<section>
  {#each skills as skill}
    <RadioChip class="tag__" value={skill.value} name={skill.label} />
  {/each}
</section>

<style lang="scss">
  :global(.tag__) {
    display: inline-block !important;
  }
</style>
