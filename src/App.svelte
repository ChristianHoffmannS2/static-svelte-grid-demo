<script lang="ts">
  import {
    Router,
    Route,
    Link,
    createHistory,
    useLocation,
  } from "svelte-navigator";
  import Grid from "./routes/Grid/index.svelte";
  import Base from "./routes/Base/index.svelte";
  import Error from "./routes/Error/index.svelte";

  import TopAppBar, {
    Row,
    Section,
    Title as BarTitle,
  } from "@smui/top-app-bar";
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
  } from "@smui/drawer";

  import List, { Item, Text } from "@smui/list";
  import IconButton from "@smui/icon-button";

  let open = false;
  let path: string = '/grid';

  import createHashSource from "./utils/hashHistory";

  const hash = createHistory(createHashSource());

  // const location = useLocation();
  // binds to changes only to pathname deeper from the generated store ;)
  //$: path = $location.pathname;
</script>

<Router history={hash}>
  <header>
    <TopAppBar
      variant="static"
      prominent={false}
      dense={true}
      color={"primary"}
    >
      <Row>
        <Section>
          <IconButton class="material-icons" on:click={() => (open = !open)}
            >menu</IconButton
          >
          <BarTitle>Demo {path}</BarTitle>
        </Section>
      </Row>
    </TopAppBar>
  </header>

	<div class="main-container">
		<div class="drawer-container">
			<Drawer variant="dismissible" bind:open>
				<Header>
					<Title>Svelte Demos</Title>
					<Subtitle>...just in case</Subtitle>
				</Header>
				<Content>
					<List>
						<Item
							activated={path === "/"}
							on:click={() => (open = false)}
						>
							<Text>Home</Text>
						</Item>

						<Item
							activated={path === "/grid"}
							on:click={() => (open = false)}
						>
							<Text>Grid</Text>
						</Item>
					</List>
				</Content>
			</Drawer>

			<AppContent class="app-content">
				<Route path="grid/*gridRoute" component={Grid} />
				<Route path="/" component={Base} />
				<Route component={Error} />
			</AppContent>
		</div>
	</div>


</Router>

<style>
  :global(html) {
    height: 100vh;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
		display: flex;
		flex-direction: column;
  }

	* :global(main) {
		flex: 1;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: hidden;
    position: relative;
    flex-grow: 1;
    padding: 35px;
  }

  .main-container {
		flex: 1;
  }
  .drawer-container {
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
</style>
