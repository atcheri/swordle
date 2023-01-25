<script lang="ts">
  import BaseKey from "./BaseKey.svelte";

  export let onSpace: () => void;
</script>

<BaseKey>
  <button class="w-[300px] h-full" on:click={onSpace} />
</BaseKey>
