<script>
    export let roles;
</script>

{#each roles as role}
	<div>
		Company: {role.company}
		<br>
		Title: {role.title}
	</div>
{/each}
