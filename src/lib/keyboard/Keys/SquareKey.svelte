<script lang="ts">
  import BaseKey from "./BaseKey.svelte";

  export let up: string;
  export let down: string = "";
</script>

<BaseKey>
  <div class="flex flex-col justify-center items-center h-[50px] w-[50px] m-1">
    <span>{up}</span>
    <span>{down}</span>
  </div>
</BaseKey>
