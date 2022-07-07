<script lang="ts">
	import { BottomSheetContent } from '~/lib/components/BottomSheet';
	import {
		Contrast,
		Github,
		Home,
		Lightbulb,
		Pencil,
		Twitter,
		LinkedIn
	} from '~/lib/components/Icons';

	import NavItem from './NavItem.svelte';
	import NavSocialItem from './NavSocialItem.svelte';
</script>

<BottomSheetContent>
	<div class="nav-sheet-container">
		<div class="nav-sheet-header">
			<div class="nav-sheet-header-thumb" />
		</div>
		<div class="nav-sheet-items">
			<NavItem href="/home" label="Home">
				<svelte:fragment slot="shortcut">^ 1</svelte:fragment>
				<svelte:component this={Home} slot="icon" />
			</NavItem>
			<NavItem href="/projects" label="Projects">
				<svelte:fragment slot="shortcut">^ 2</svelte:fragment>
				<svelte:component this={Lightbulb} slot="icon" />
			</NavItem>
			<NavItem href="/blog" label="Blog">
				<svelte:fragment slot="shortcut">^ 3</svelte:fragment>
				<svelte:component this={Pencil} slot="icon" />
			</NavItem>
			<NavItem href="/settings" label="Settings">
				<svelte:fragment slot="shortcut">^ 4</svelte:fragment>
				<svelte:component this={Contrast} slot="icon" />
			</NavItem>
		</div>
		<div class="nav-sheet-socials">
			<h3 class="nav-sheet-socials-title">Socials</h3>
			<div class="nav-sheet-socials-items">
				<NavSocialItem href="https://github.com/adamaho" label="Github">
					<Github />
				</NavSocialItem>
				<NavSocialItem href="https://twitter.com/theadamaho" label="Twitter">
					<Twitter />
				</NavSocialItem>
				<NavSocialItem href="https://www.linkedin.com/in/adamaho/" label="LinkedIn">
					<LinkedIn />
				</NavSocialItem>
			</div>
		</div>
	</div>
</BottomSheetContent>

<style>
	.nav-sheet-container {
		background: var(--aho-colors-gradients-brand);
		border-radius: var(--aho-radii-large);
		width: 100%;
	}

	.nav-sheet-header {
		align-items: center;
		display: flex;
		justify-content: center;
		padding: var(--aho-space-small) 0;
	}

	.nav-sheet-header-thumb {
		background-color: rgba(var(--aho-color-grey10), 0.3);
		border-radius: var(--aho-space-small);
		height: var(--aho-space-small);
		width: var(--aho-space-5xlarge);
	}

	.nav-sheet-items {
		display: grid;
		gap: var(--aho-space-small);
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		padding: var(--aho-space-small);
		padding-top: 0;
	}

	.nav-sheet-socials {
		padding: var(--aho-space-small);
		padding-top: var(--aho-space-medium);
	}

	.nav-sheet-socials-title {
		color: rgb(var(--aho-color-grey80));
	}

	.nav-sheet-socials-items {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-small);
		margin-top: var(--aho-space-small);
	}

	@media screen and (min-width: 640px) {
		.nav-sheet-header {
			padding: var(--aho-space-xsmall);
		}

		.nav-sheet-header-thumb {
			display: none;
		}

		.nav-sheet-items {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
