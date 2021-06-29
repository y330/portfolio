<script>
	import Jobs from './Jobs.svelte'
	export let name;
	export let siteName;
	export let roles;
	export let phone;
	export let city;
	export let state;
	export let github;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>{name}</h1>
<h1>{phone}</h1>
<h1>{city}</h1>
<h1>{state}</h1>
<h1><a href="{github}" target="_blank">github</a></h1>
<Jobs career={roles} />
