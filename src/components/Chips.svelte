<script>
	const assignColorToLanguage = (language) => {
		switch (language) {
			case 'JavaScript':
				return '#f1e05a'
			case 'Python':
				return '#3572A5'
			case 'Java':
				return '#b07219'
			case 'C++':
				return '#f34b7d'
			case 'C':
				return '#f34b7d'
			case 'Ruby':
				return '#701516'
			case 'PHP':
				return '#4F5D95'
			case 'Swift':
				return '#ffac45'
			case 'Go':
				return '#6aac0f'
			case 'Kotlin':
				return '#f18e33'
			case 'Objective-C':
				return '#438eff'
			case 'Svelte':
				return '#ff5500'
			case 'TypeScript':
				return '#2b7489'
			case 'Rust':
				return '#dea584'
			case 'HTML':
				return '#e34c26'
			case 'CSS':
				return '#563d7c'
			case 'NodeJS':
				return '#339933'
			case 'Flask':
				return '#339933'
			default:
				return '#aaa'
		}
	}
	export let tags = []
	export let isSkills = false
	tags = tags.map((str) => ({
		label: str,
		color: assignColorToLanguage(str),
	}))
</script>

<ul class="tags {isSkills ? 'skills' : 'tech'} card scroll__ dark-mode">
	{#each tags as tag}
		<li
			class="tag"
			style="--color: {tag.color}; transform: scale({isSkills
				? '1'
				: '0.7'})"
		>
			<span>{tag.label}</span>
		</li>
	{/each}
</ul>

<style lang="scss">
	.tags {
		--light-color: rgb(34, 45, 55);
		--dark-color: rgb(240, 250, 250);

		padding: 0;
		position: relative;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		// justify-content: baseline;
		list-style-type: none;
		width: 100%;
		/* gap: 0.4em; */
	}
	.skills {
		justify-content: center;
		gap: 0.8em;
	}
	.tech {

		justify-content: left;
		flex-wrap: wrap;
		gap: 0px;
		li {
			flex-grow: 0;
			margin-inline: -0.8em;
		}
	}

	.tag {
		font-size: 1rem;

		border-radius: 100rem;
		box-shadow: 0 0 0 2px var(--light-color);
		background-color: transparent;
		color: var(--dark-color);
		font-weight: bold;
		transition: background-color 250ms ease, box-shadow 250ms ease;
	}

	.tag > span {
		display: inline-block;
		position: relative;
		color: var(--light-color);

		text-decoration: none;
		padding: 0.5rem 1rem 0.5rem 2rem;
	}

	.tag > span::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 1rem;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		background-color: var(--color);
		transform: translateY(-50%);
	}

	.tag:hover {
		background-color: var(--color);
		box-shadow: 0 0 0 calc(2px + 0.25rem) var(--color);
	}
	.tag:hover > span {
		color: var(--dark-color);
	}
	.tag:hover > span::before {
		background-color: var(--dark-color);
	}
</style>
