import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Alvin Milton',
		phone: '7186692886',
		city: 'Rosedale',
		state: 'New York',
		github: 'https://github.com/alvin-milton',
		roles: [{
			title: 'Engineer',
			company: 'Vox Media'
		}, {
			title: 'Senior Web Developer',
			company: 'New York Magazine'
		}, {
			title: 'Consultant',
			company: 'Wall Street Journal'
		}, {
			title: 'Sr JavaScript Engineer',
			company: 'Bark'
		}, {
			title: 'Sr Web Developer',
			company: 'Complex Media'
		}, {
			title: 'Mobile Developer',
			company: 'Complex Media'
		}, {
			title: 'Developer',
			company: 'Maxim Magazine'
		}]
	}
});

export default app;
