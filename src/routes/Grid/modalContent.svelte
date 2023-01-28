<script lang="ts">
	import type { ModalCloseEvent } from './types';

	export let open = false;
	export let closeHandler = (e: ModalCloseEvent) => {};

	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import { Icon } from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
</script>

<Dialog
	bind:open
	scrimClickAction=""
	escapeKeyAction=""
	aria-labelledby="fullscreen-title"
	aria-describedby="fullscreen-content"
	on:SMUIDialog:closed={closeHandler}
>
	<Header>
		<Title id="fullscreen-title">Item Details</Title>
	</Header>
	<Content id="fullscreen-content">
		{#each Array(3) as _item}
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		{/each}
	</Content>
	<Actions>
		<Button action="cancel">
			<Icon class="material-icons">close</Icon>
			<Label>Cancel</Label>
		</Button>
		<Button action="delete">
			<Icon class="material-icons">delete</Icon>
			<Label>Delete Item</Label>
		</Button>
		<Button action="update" defaultAction>
			<Icon class="material-icons">save</Icon>
			<Label>Save changes</Label>
		</Button>
	</Actions>
</Dialog>
