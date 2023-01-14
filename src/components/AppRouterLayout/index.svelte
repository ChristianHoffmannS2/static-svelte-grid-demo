<script lang="ts">
  import { Router, createHistory } from "svelte-navigator";

  import TopAppBar, {
    Row,
    Section,
    Title as BarTitle,
  } from "@smui/top-app-bar";
  import Drawer, { AppContent } from "@smui/drawer";

  import IconButton from "@smui/icon-button";

  import DrawerContent from "./drawerContent.svelte";

  let open = false;

  import createHashSource from "../../utils/hashHistory";
  const hash = createHistory(createHashSource());

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
          <BarTitle>Demo</BarTitle>
        </Section>
      </Row>
    </TopAppBar>
  </header>

  <div class="main-container">
    <div class="drawer-container">
      <Drawer variant="dismissible" bind:open>
        <DrawerContent onSelectionChange={() => (open = false)}/>
      </Drawer>

      <AppContent class="app-content">
        <slot />
      </AppContent>
    </div>
  </div>
</Router>

<style>
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
