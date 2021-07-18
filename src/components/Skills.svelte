<script>
  // Library
  import { Card, RadioChip, Divider } from "attractions";
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
  <Card>
    {#each skills as skill}
      <RadioChip value={skill.value} name={skill.label} />
    {/each}
  </Card>
</section>

<style lang="scss">
</style>
