<script lang="ts">
  import { Route } from "svelte-navigator";
  import Grid from "./routes/Grid/index.svelte";
  import Base from "./routes/Base/index.svelte";
  import Error from "./routes/Error/index.svelte";

  import AppRouterLayout from "./components/AppRouterLayout/index.svelte";
</script>

<AppRouterLayout>
  <Route path="grid/*gridRoute" component={Grid} />
  <Route path="/" component={Base} />
  <Route component={Error} />
</AppRouterLayout>

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
</style>
