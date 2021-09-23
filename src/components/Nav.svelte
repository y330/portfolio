<script>
	// Components
	import PageTransitions from './PageTransitions.svelte'
	import Socials from './Socials.svelte'

	// Utils
	// import ripple from "attractions/utils/ripple";
	// import objSelector from "../utils/objSelector";

	export let items = []
	export let selected = 1

	const onPin = () => console.log('pin')
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
<!-- </Headroom> -->
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
		background-color: theme.$background;
		display: flex;
		width: auto;
		z-index: 2;
		flex-direction: row;
		position: fixed;
		flex-wrap: wrap;
		align-content: flex-start;
		// border-radius: 20px 20px 0 0;
		justify-content: space-evenly;
		transition-duration: 500ms;
		&:hover {
			// background-color: #eef;
			// opacity: 0.6;
		}
	}

	.box {
		padding: 0;
		padding-top: 5em;
		padding-inline: 1.5em;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	img {
		height: 2.5em;
		margin: 0;
		// margin-left: 1em;
		// max-height: 3min-content;
		align-self: center;
		padding: 0.1em;
		border-radius: 1.25rem;
		border-width: 3px;
		border-style: dashed;
		border-color: grey;
		transition: all 0.5s ease-in-out;
		&:hover {
			border-style: solid;
			border-color: theme.$main;
		}
	}
	ul {
		display: flex;
		padding-bottom: 0.5vh;
		position: relative;
		flex-wrap: wrap;
		margin-bottom: 0;
		align-content: left;
		list-style: none;
		width: 70vw;

		border-bottom: 1px solid #dee2e6;

		li {
			flex-grow: 10;

			text-align: center;
			margin-bottom: -2px;
			span {
				border: 1px solid transparent;
				border-top-left-radius: 0.5rem;
				border-top-right-radius: 0.5rem;
				border-radius: 0.5rem;
				display: block;
				padding: 0.5rem 1rem;
				cursor: pointer;
				transition: all 300ms ease;

				&:hover {
					border-color: #e9ecef #e9ecef #dee2e6;
					border-style: solid;
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
				border-bottom: theme.$main 3px solid;
				background-color: #e9ecef;
			}
		}
	}
	@media only screen and (max-width: 425px) {
		img {
			height: 10rem;
		}
	}
</style>
