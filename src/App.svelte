<script lang="ts">
	import { Router, Route, Link, createHistory } from "svelte-navigator";
	import Grid from "./routes/Grid/index.svelte";
	import Home from "./routes/Home/index.svelte";
	import Error from "./routes/Error/index.svelte";

	import BackButton from "./components/BackButton/index.svelte";
	import ForwardButton from "./components/ForwardButton/index.svelte";
	import createHashSource from "./utils/hashHistory";

	const hash = createHistory(createHashSource());
</script>

<Router history={hash}>
	<header>
		<h1>History</h1>

		<nav>
			<BackButton />
			<ForwardButton />
			<Link to="/">Base</Link>
			<Link to="home">Home</Link>
			<Link to="grid">Grid</Link>
		</nav>
	</header>

	<main>
		<Route path="grid/*gridRoute" component={Grid} />
		<Route path="home" component={Home} />
		<Route path="/" component={Home} />
		<Route component={Error} />
	</main>
</Router>

<style>
	:global(body) {
		font-family: sans-serif;
	}
</style>
