<script lang="ts">
	import { useLocation } from "svelte-navigator";

	const location = useLocation();

	let searchString = '';
	let openId: string | null;

	const onLocationChange = () => {
		const params = new URLSearchParams($location.search);
		openId = params.get('openId');
		searchString = $location.search;
	};

	$: onLocationChange();
</script>

<div>
	<h2>Grid</h2>

	<p>You're at grid</p>
	<p>location.search = {searchString}</p>
	<p>openId = {openId}</p>
</div>
