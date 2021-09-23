// poll.js
import { onMount } from 'svelte'

export const poll = (fn, ms) => {
	onMount(() => {
		const interval = setInterval(fn, ms)
		fn()

		return () => clearInterval(interval)
	})
}
