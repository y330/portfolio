<script>
	// Components
	import PageTransitions from './PageTransitions.svelte'
	import Socials from './Socials.svelte'
	// Utils
	// import ripple from "attractions/utils/ripple";
	// import objSelector from "../utils/objSelector";

	export let items = []
	export let selected = 1

	// const onPin = () => console.log('pin')
	const handleClick = (tabValue) => () => (selected = tabValue)
</script>

<!-- <Headroom on:pin={onPin} duration="350ms" offset={50} tolerance={5}> -->
<header>
	<img src="avatar.png" alt="Icon" />
	<ul>
		<!-- create a scroll  animation for image  -->

		{#each items as item}
			<li class={selected === item.value ? 'active' : ''}>
				<span on:click={handleClick(item.value)}>{item.label}</span>
			</li>
		{/each}
	</ul>
	<Socials />
</header>
<div class="spacer"></div>
{#each items as item}
	{#if selected == item.value}
		<PageTransitions>
			<div class="box">
				<svelte:component this={item.component} />
			</div>
		</PageTransitions>
	{/if}
{/each}

<style lang="scss">
	@use 'theme.scss';

	header {
		background-color: theme.$textfield-bg;
		display: flex;
		width: 100%;
		height: fit-content;
		padding-bottom: 0.5em;
		z-index: 2;
		flex-direction: row;
		position: fixed;
		flex-wrap: nowrap;
		align-content: flex-start;
		// border-radius: 20px 20px 0 0;
		justify-content: space-evenly;
		transition-duration: 500ms;
		&:hover {
			background-color: theme.$light-contrast;
			// opacity: 0.6;
		}
	}
	.spacer {
		height: 10rem;
	}
	.box {
		padding: 0;
		padding-top: 2rem;
		padding-inline: 1.5em;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	img {
		height: 3em;
		margin: 0;
		// margin-left: 1em;

		align-self: center;
		border-radius: 5.25rem;
		border-width: 0.2em;
		border-style: dotted;
		border-color: grey;
		transition: all 0.2s ease-in-out;
		&:hover {
			border-style: solid;
			border-color: theme.$main;
		}
		&:active {
			border: none;
		}
	}
	ul {
		display: flex;
		padding-block: 0.5vh;
		padding-inline: 0.5vw;
		position: relative;
		flex-wrap: wrap;
		// margin-bottom: 0;
		align-content: left;
		list-style: none;
		width: 70vw;
		border-radius: 10em;
		border: 1px solid transparent;
		transition: border-color 0.2s ease-in;
		&:hover {
			// border-color: theme.$light-contrast;
		}

		li {
			text-align: center;
			align-self: center;
			span {
				border: 2px solid theme.$light-contrast;
				border-top-left-radius: 0.5rem;
				border-top-right-radius: 0.5rem;
				border-radius: 5rem;
				display: block;
				padding: 0.5rem 1rem;
				cursor: pointer;
				transition: all 300ms ease;

				&:hover {
					border-color: theme.$light-contrast;
				}
				&:active {
					transform: scaleX(0.95);
					border-color: theme.$main theme.$main theme.$main;
				}
			}

			&.active > span {
				color: #495057;
				background-color: #fff;
				border-color: #dee2e6 #dee2e6 #fff;
				border-bottom: theme.$main solid;
				background-color: #e9ecef;
			}
		}
	}
	@media only screen and (max-width: 700px) {
		ul {
			:first-child {
				span {
					border-right-width: 2px;
				}
				&:active > span {
					border-width: 2px;
				}
			}

			:last-child {
				span {
					border-left-width: 2px;
				}
				&:active > span {
					border-width: 2px;
				}
			}
		}
	}
	@media only screen and (min-width: 700px) {
		ul {
			:first-child {
				span {
					border-bottom-right-radius: 0em;
					border-right-width: 0;
					border-top-right-radius: 0em;
				}
				&:active > span {
					border-width: 2px;
				}
			}

			:nth-child(2) span {
				border-radius: 0;
			}
			:last-child {
				span {
					border-bottom-left-radius: 0em;
					border-top-left-radius: 0em;
					border-left-width: 0;
				}
				&:active > span {
					border-width: 2px;
				}
			}
		}
		.spacer {
			height: 4em;
		}
	}

	@media only screen and (max-width: 700px) {
		img {
			height: 8rem;
		}
	}
</style>
