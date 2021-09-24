<script>
	// ------- imports
	import { onMount } from 'svelte'
	import { fade, slide } from 'svelte/transition'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import Chips from './Chips.svelte'
	import Typewriter from './Typewriter/Typewriter.svelte'
	import { H2, Label } from 'attractions'
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
		window.location = project.url
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
		style="box-shadow: {$shadow * 8}px {$shadow * 4}px #ff3e00, {$shadow *
			16}px {$shadow * 8}px rgba(255, 85, 0, 0.55), {$shadow *
			24}px {$shadow * 12}px rgba(255, 100, 0.6, 0.22);
;"
		class="site dark-mode scroll__ card"
	>
		<H2 class="title">
			<Typewriter interval={100}>
				{project.title}
			</Typewriter>
		</H2>
		<div
			class="description"
			transition:fade={{ delay: randomInt(250, 1000) }}
		>
			{project.description}
		</div>
		<img src={project.imageUrl} alt="A screenshot of {project.title}" />
		<div class="technologies">
			<Label>Technologies used: </Label>
			<Chips tags={project.tech} />
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
		// height: 400px;
		overflow-y: scroll;
		position: relative;
		cursor: pointer;
		justify-content: space-around;
	}

	.site {
		&:hover {
			border-color: theme.$main;
			color: var(--accent-color);
			&::-webkit-scrollbar-thumb {
				background-color: theme.$main;
			}
			& .title {
				/* border: 2px white solid; */
				color: white;

				background-color: theme.$secondary;
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
			// top: 0;
			background-color: theme.$main;
			border-radius: 7px 0px 0 7px;
			/* width: 110%; */
			padding: 0;
			height: fit-content;
			text-align: center;
			position: relative;
			max-height: 5rem;
			font-weight: 400;
			transition-property: opacity, background-color;
			transition-duration: 300ms ease-in-out;
			h2 {
				text-decoration: none;
				&::after {
					font-size: small;
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
		margin-top: 1rem;
		margin-right: 0.5em;
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
