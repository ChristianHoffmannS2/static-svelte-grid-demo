<script lang="ts">
	import { useLocation } from "svelte-navigator";

	const location = useLocation();

	let searchString = '';

	const onLocationChange = () => {
		searchString = $location.search;
	};

	$: onLocationChange();
</script>

<div>
	<h2>Grid</h2>

	<p>You're at grid</p>
	<p>location.search = {searchString}</p>
</div>
