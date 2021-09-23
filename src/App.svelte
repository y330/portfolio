<script>
	// Pages
	import About from './pages/About.svelte'
	import Projects from './pages/Projects.svelte'
	import Resume from './pages/Resume.svelte'
	// Section
	import Nav from './components/Nav.svelte'
	import Footer from './sections/Footer.svelte'

	// Other
	import Maintainence from './components/Maintainence.svelte'

	let items = [
		{ label: 'About', value: 1, component: About },
		{ label: 'Projects', value: 2, component: Projects },
		{ label: 'Resume', value: 3, component: Resume },
	]
</script>

<svelte:head>
	<link href="/static/css/_reset.scss" rel="stylesheet" />
</svelte:head>

<Maintainence />
<main class="scroll__">
	<Nav {items} />

	<Footer />
</main>

<style lang="scss" global>
	@use 'theme.scss';
	@use '_overrides.scss';
	:root {
		// --main: theme.$main;
		// --secondary: theme.$secondary;
		// --tertiary: theme.$tertiary;
	}
	main {
		font-family: theme.$font;
	}
</style>
