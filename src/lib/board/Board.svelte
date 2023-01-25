<script lang="ts">
  import Line from "./Line.svelte";

  const tries = [0, 1, 2, 3, 4];
</script>

<div class="flex flex-col gap-1">
  {#each tries as _, i}
    <Line rank={i} />
  {/each}
</div>
