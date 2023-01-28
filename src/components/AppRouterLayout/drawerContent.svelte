<script lang="ts">
	export let onSelectionChange = () => {};

	import { useLocation, useNavigate } from 'svelte-navigator';

	import { Content, Header, Title, Subtitle } from '@smui/drawer';

	import List, { Item, Text } from '@smui/list';

	let path: string = '/grid';
	const location = useLocation();
	const navigate = useNavigate();

	const onRouteLinkClick = (routeString: string) => {
		if (path !== routeString) {
			onSelectionChange();
			navigate(routeString);
		}
	};

	$: path = $location.pathname;
</script>

<Header>
	<Title>Svelte Demos</Title>
	<Subtitle>...just in case</Subtitle>
</Header>
<Content>
	<List>
		<Item
			activated={path === '/'}
			on:click={() => {
				onRouteLinkClick('/');
			}}
		>
			<Text>Home</Text>
		</Item>

		<Item
			activated={path === '/grid'}
			on:click={() => {
				onRouteLinkClick('/grid');
			}}
		>
			<Text>Grid</Text>
		</Item>
	</List>
</Content>
