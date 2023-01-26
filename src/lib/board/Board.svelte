<script lang="ts">
  import {
    guess as currentGuess,
    guesses,
    maxGuessLength,
    rank,
    word,
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
    {@const editing = i === $rank}
    <Line
      {editing}
      currentGuess={chooseGuessToDisplay($currentGuess, guess, editing)}
      solution={$word}
    />
  {/each}
</div>
