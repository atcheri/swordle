<script lang="ts">
  import {
    guess as currentGuess,
    guesses,
    maxGuessLength,
    rank,
  } from "../../swordle-store";
  import Line from "./Line.svelte";

  const chooseGuessToDisplay = (
    curr: string,
    prev: string,
    editing: boolean
  ) => {
    return (editing ? curr : prev).concat("      ").slice(0, maxGuessLength);
  };
</script>

<div class="flex flex-col gap-1">
  {#each $guesses as guess, i}
    <Line word={chooseGuessToDisplay($currentGuess, guess, i === $rank)} />
  {/each}
</div>
