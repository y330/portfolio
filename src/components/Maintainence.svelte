<script>
	import { onMount } from 'svelte'
	import { SnackbarContainer } from 'attractions'
	let showMaintainance = false
	onMount(() => {
		async function showAlert() {}
		const interval = setInterval(() => {
			showMaintainance = !showMaintainance
		}, 3000)

		return () => clearInterval(interval)
	})
</script>

{#if showMaintainance}
	<SnackbarContainer let:showSnackbar>
		<div
			style="z-index: 2;"
			on:load={showSnackbar({
				props: { text: 'Site is under contruction!' },
			})}
		/>
	</SnackbarContainer>
{/if}
