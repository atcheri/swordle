<script lang="ts">
  import { maxTries, rank, word } from "../swordle-store";
  import ResetGameBtn from "./ResetGameBtn.svelte";

  export let won: boolean;

  $: wonTheGame = won;
  $: finished = won || $rank === maxTries;
</script>

{#if finished}
  <div class="text-center my-10">
    <div class="text-4xl my-4">
      {#if wonTheGame}
        🎉 Wow! You found it!
      {:else}
        <div class="mb-1">It was <span class="font-bold">{$word}</span></div>
        🫥 Don't worry, try again
      {/if}
    </div>
    <ResetGameBtn />
  </div>
{:else}
  <div class="mt-10" />
{/if}
