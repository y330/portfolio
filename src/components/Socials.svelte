<script>
	// Components
	import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons'
	import {
		Dialog,
		FormField,
		TextField,
		Button,
		Modal,
		Switch,
		Label,
	} from 'attractions'

	let contactForm = {
		show: false,
		sendEmails: true,
		email: '',
		name: '',
	}
</script>

<div class="row">
	<Label>@</Label>

	<Button
		href="https://github.com/y330"
		title="Yonah Aviv on GitHub"
		neutral
		round
		class="github">
		<GithubIcon strokeWidth="2" /></Button>
	<Button
		href="https://linkedin.com/in/yonahaviv"
		round
		class="linkedin"
		title="Yonah Aviv on Linkedin"
		neutral><LinkedinIcon strokeWidth="1.8" /></Button>
	<Button
		on:click={() => {
			contactForm.show = !contactForm.show
		}}>Contact me</Button>
</div>
{#if contactForm.show}
	<Modal bind:open={contactForm.show} let:closeCallback>
		<Dialog title="Are you sure you want to exit?" {closeCallback}>
			<FormField name="Email" help="i.e. example@gmail.com" required>
				<TextField />
			</FormField>
			<FormField
				name="Send user emails?"
				errors={[contactForm.sendEmails && 'Do not send emails']}>
				<Switch bind:value={contactForm.sendEmails} />
			</FormField>
		</Dialog>
	</Modal>
{/if}

<style lang="scss">
	@use 'theme.scss';

	// Social Media Buttons

	@media only screen and (max-width: 1025px) {
		.row {
			flex-direction: column;
			flex-wrap: wrap;
			.button {
				margin-bottom: 10px;
			}
		}
	}
	div {
		display: flex;
		flex-direction: row;
		:global(.linkedin),
		:global(.github) {
			display: flex;
			justify-content: center;
			flex-direction: row;
			align-self: flex-end;
			flex-wrap: nowrap;
			transition: 300ms ease-out;
			height: 8vh;
			width: 4vw;

			border: 0.125em theme.$main solid;

			& :global(svg) {
				transition: all 300ms ease-in;
				fill: theme.$main;
				stroke: theme.$main;
				border-color: theme.$main;
			}

			&:hover {
				// width: 6vh;
				// float: right;
				// padding: 0.5em;
				color: white !important;

				& :global(svg) {
					stroke: white;
					fill: white;
				}
			}
			&:active {
				opacity: 0.7;
			}
			&:focus {
				opacity: 0.9;
			}
		}
		:global(.github) {
			margin-right: 0.25em;

			&:hover {
				border-color: black;
				background-color: black !important;
			}
		}
		:global(.linkedin) {
			&:hover {
				background-color: #0a66c2 !important;
				border-color: #0a66c2;
			}
		}
	}
</style>
