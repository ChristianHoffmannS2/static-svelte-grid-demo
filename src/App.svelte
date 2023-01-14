<script lang="ts">
  import Index from "./app/index.svelte";
  const peter: number = 5;

  let test;


</script>

<div class="test">
  <label for="testingInput"
    >This gets changed when you press the button:
  </label>
  <input type="text" name="testingInput" />
</div>

<div class="secondStyle">
  <Index />
</div>

<style>
  .test {
    display: inline-block;
    background-color: #ff3e00;
    color: white;
  }

  .secondStyle {
    display: block;
  }
</style>
