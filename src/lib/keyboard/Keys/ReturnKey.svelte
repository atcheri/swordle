<script lang="ts">
  import BaseKey from "./BaseKey.svelte";

  export let onReturn: () => void;
</script>

<BaseKey>
  <div
    class="text-xs flex justify-end items-end h-[50px] w-[90px] mr-1"
    on:click={onReturn}
  >
    return
  </div>
</BaseKey>
