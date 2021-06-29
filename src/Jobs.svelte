<script>
    export let career;
</script>

{#each career as role}
	<div>
        <div>
            <strong>Company:</strong> 
            <br>
            {role.company}
        <div>
        </div>
            <strong>Title:</strong>
            <br>
            {role.title}
        </div>
	</div>
{/each}
