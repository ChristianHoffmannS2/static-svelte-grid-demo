<script lang="ts">
	import { Router, Route, Link, createHistory } from "svelte-navigator";
	import Blog from "./routes/Blog/index.svelte";
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
			<Link to="about">About</Link>
			<Link to="blog">Blog</Link>
		</nav>
	</header>

	<main>
		<Route path="blog/*blogRoute" component={Blog} />

		<Route path="home">
			<h3>Home</h3>
			<p>Home sweet home...</p>
		</Route>

		<Route path="about">
			<h3>About</h3>
			<p>That's what it's all about!</p>
		</Route>

		<Route>
			<h3>Default</h3>
			<p>No Route could be matched.</p>
		</Route>
	</main>
</Router>

<style>
	:global(body) {
		font-family: sans-serif;
	}
</style>
