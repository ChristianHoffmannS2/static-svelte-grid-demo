<script lang="ts">
	import { Link } from 'svelte-navigator';
	const welcomeString: string = 'Welcome to the svelte/smui/ag-grid demo!';
</script>

<h1>{welcomeString}</h1>
<p>
	Visit <a href="https://svelte.dev/docs">svelte.dev</a> to read the svelte language documentation
</p>
<p>
	Visit <a href="https://sveltematerialui.com">sveltematerialui.com</a> to read the svelte material ui
	documentation
</p>
<p>
	Visit <a href="https://www.ag-grid.com/javascript-data-grid/grid-api/">ag-grid.com</a> to read the
	ag-grid documentation
</p>

<hr />
<p>Jump to the <Link to="/grid">grid</Link>!</p>
