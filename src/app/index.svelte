<script lang="ts">
  import { onMount } from "svelte";

  let test;

  test = 3;

  onMount(() => {
    console.log("the second component has mounted");
  });
</script>

<input type="text" />

<style>
  input {
    background-color: black;
    color: white;
    min-width: 16em;
  }
</style>
