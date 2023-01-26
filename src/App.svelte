<script lang="ts">
  import Board from "./lib/board/Board.svelte";
  import Keyboard from "./lib/keyboard/Keyboard.svelte";
  import ResetGameBtn from "./lib/ResetGameBtn.svelte";
  import {
    guess,
    guesses,
    maxGuessLength,
    maxTries,
    rank,
    word,
  } from "./swordle-store";

  const alphaRegex = new RegExp(/^[A-Za-z]{1}/);

  const onLetter = (letter: string) => {
    if ($guess.length >= maxGuessLength) {
      alert(
        "Max word length reached. Enter key to continue with your next guess"
      );
      return;
    }
    guess.update((g) => g + letter.toUpperCase());
  };

  const onDelete = () => {
    guess.update((g) => g.slice(0, g.length - 1));
  };

  const onReturn = () => {
    if ($guess.length < maxGuessLength) {
      return;
    }

    guesses.update((prev) => {
      const newGuesses = [...prev];
      newGuesses[$rank] = $guess;
      rank.set($rank + 1);
      guess.set("");
      return newGuesses;
    });
  };

  const onSpace = () => {};

  const handleKeydown = (event: KeyboardEvent) => {
    const isEnterKey = (code: string) => code === "Enter";
    const isBackSpaceKey = (code: string) => code === "Backspace";

    if (alphaRegex.test(event.key) && event.key.length === 1) {
      onLetter(event.key);
      return;
    }

    if (isEnterKey(event.key)) {
      onReturn();
      return;
    }

    if (isBackSpaceKey(event.code)) {
      onDelete();
      return;
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<main
  class="flex flex-col justify-center items-center h-screen w-screen bg-gray-100"
>
  <h1 class="text-2xl">Yet another Wordle</h1>
  <h2 class="text-xl mb-6">Made with Svelte and Tailwindcss in TS</h2>
  <h3 class="text-lg my-10 text-slate-600">Time to Guess the Word</h3>
  <div>Word to guess is: <span class="font-bold">{$word}</span></div>
  <div>Your guess is: <span class="font-bold">{$guess}</span></div>
  <div>
    Your guesses are: <span class="font-bold"
      >{JSON.stringify($guesses, null, 2)}</span
    >
  </div>
  <Board />
  {#if $rank === maxTries}
    <div class="my-10">
      <ResetGameBtn />
    </div>
  {:else}
    <div class="mt-10" />
  {/if}
  <Keyboard {onReturn} {onLetter} {onDelete} {onSpace} />
</main>
