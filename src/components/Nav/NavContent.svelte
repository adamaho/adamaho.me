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
				<svelte:component this={Home} slot="icon" />
			</NavItem>
			<NavItem href="/writing" label="Writing">
				<svelte:component this={Lightbulb} slot="icon" />
			</NavItem>
			<NavItem href="/bullet" label="Bullet">
				<svelte:component this={Pencil} slot="icon" />
			</NavItem>
			<NavItem href="/preferences" label="Preferences">
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
		--nav-item-count: 4;
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
		grid-template-columns: repeat(calc(var(--nav-item-count) / 2), 1fr);
		grid-template-rows: auto;
		padding: var(--aho-space-large);
	}

	.nav-sheet-socials {
		padding: var(--aho-space-large);
		padding-top: var(--aho-space-medium);
	}

	.nav-sheet-socials-title {
		color: rgb(var(--aho-color-grey80));
		padding-left: var(--aho-space-smedium);
	}

	.nav-sheet-socials-items {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-small);
		margin-top: var(--aho-space-small);
	}

	@media screen and (min-width: 640px) {
		.nav-sheet-header {
			display: none;
		}

		.nav-sheet-items {
			grid-template-columns: repeat(var(--nav-item-count), 1fr);
		}
	}
</style>
