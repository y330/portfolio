<script>
	// ------- imports
	import { onMount } from 'svelte'
	import { fade, slide } from 'svelte/transition'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import Chips from './Chips.svelte'

	// ------- parameters
	export let project = {
		title: '',
		description: '',
		tech: [],
		url: '#',
		imageUrl: '#',
	}
	// -------- state
	let hovered = false
	// -------- code
	const shadow = tweened(0, { duration: 500, easing: cubicOut })
	const handleClick = () => {
		window.location = project.link
	}
	const handleMouseEnter = () => {
		shadow.set(1)
		hovered = true
	}
	const handleMouseLeave = () => {
		shadow.set(0)
		hovered = false
	}
	const randomInt = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
	}

	let mounted = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<div
		on:click={handleClick}
		on:mouseenter={handleMouseEnter}
		on:touchstart={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		on:touchend={handleMouseLeave}
		transition:slide={{ delay: randomInt(200, 500) }}
		style="box-shadow: {$shadow * 10}px {$shadow * 5}px #ff3e00, {$shadow *
			20}px {$shadow * 10}px rgba(255, 85, 0, 0.55), {$shadow *
			30}px {$shadow * 15}px rgba(255, 100, 0.6, 0.22);
;"
		class="site dark-mode scroll__ card">
		<h2
			class="title"
			on:load={(e) => typewriter(e)}
			transition:fade={{ delay: randomInt(250, 500) }}>
			<a href={project.url}>{project.title}<br /></a>
		</h2>
		<div
			class="description"
			transition:fade={{ delay: randomInt(250, 1000) }}>
			{project.description}
			<img src={project.imageUrl} alt="A screenshot of {project.title}" />
		</div>
		<div class="code">
			<div class="technologies">
				<Chips tags={project.technologies} />
			</div>
			<!-- {#if project.code != ''}Source: <a href={project.code}
					>{project.code}</a
				>{/if} -->
		</div>
	</div>
{/if}

<style lang="scss">
	@use 'theme.scss';

	.site {
		flex: 1 1 450px;
		display: flex;
		flex-direction: column;
		border: 2px theme.$tertiary solid;
		border-radius: 15px;
		margin: 1rem;
		padding: 1rem;
		padding-top: 0;
		padding-right: 0;
		min-width: 150px;
		max-width: 700px;
		height: 450px;
		overflow-y: scroll;
		position: relative;
		cursor: pointer;
		justify-content: space-between;
	}

	.site {
		&:hover {
			color: var(--accent-color);
			& .title {
				/* border: 2px white solid; */
				color: white;

				background-color: #ff3e0363;
				a {
					&::after {
						content: ' (click to view project)';
						opacity: 1;
						text-decoration: none;
					}
				}
				& .description {
					color: theme.$main;
				}
			}
		}
		.title {
			top: 0;
			border-radius: 0 0 7px 7px;
			/* width: 110%; */
			padding: 1rem;
			text-align: center;
			position: sticky;
			min-height: 5rem;
			background-color: transparent;
			font-weight: 400;
			transition-property: opacity, background-color;
			transition-duration: 300ms ease-in-out;
			a {
				text-decoration: none;
				&::after {
					font-size: small;
					content: '';
					transition-duration: 0.5s;
					text-decoration: none;
					opacity: 0;
				}
			}
			& .description {
				padding-top: 2rem;
				flex: 1;
				padding: 1rem;
			}
		}
	}

	img {
		/* margin-top: 10rem; */
		max-height: 70%;
		max-width: 100%;
		/* border-right: 20px solid black; */
		align-self: center;
		border-radius: 10px;
	}
	.code {
		flex: 1;
	}
	.technologies {
		padding-right: 1em;
		transform: scale(0.75);
	}
</style>
