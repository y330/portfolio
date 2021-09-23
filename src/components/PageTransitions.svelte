<!-- src/component/PageTransitions.svelte -->
<script>
	import { fly } from 'svelte/transition'
</script>

<div
	in:fly={{ x: -500, duration: 250, delay: 0 }}
	out:fly={{ x: -500, duration: 250 }}
>
	<slot />
</div>
