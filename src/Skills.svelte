<script>
  import { RadioChip } from "attractions";
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

{#each skills as skill}
  <RadioChip class="tag__" value={skill.value} name={skill.label} />
{/each}

<style lang="scss">

<<<<<<< HEAD
:global(.tag__) {
	display: inline-block !important;
}
=======
>>>>>>> 7c3862b28022589c289b136a94db7b2d4a0fa94c
</style>
