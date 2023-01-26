<script lang="ts">
  import Board from "./lib/board/Board.svelte";
  import GameResult from "./lib/GameResult.svelte";
  import Keyboard from "./lib/keyboard/Keyboard.svelte";
  import { guess, guesses, maxGuessLength, rank, word } from "./swordle-store";

  let won = false;
  const alphaRegex = new RegExp(/^[A-Za-z]{1}/);

  guesses.subscribe((val) => {
    won = val.some((guess) => guess === $word);
  });

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
  class="flex flex-col justify-center items-center w-screen bg-gray-100 pt-10"
>
  <h1 class="text-3xl font-bold">Swordle</h1>
  <h2 class="text-xl mb-6 text-center text-slate-800">
    Yet another Wordle <br /> Made with Svelte and Tailwindcss in TS
  </h2>
  <h3 class="text-lg mb-6 text-slate-600">Time to Guess the Word</h3>
  <Board />
  <GameResult {won} />
  <Keyboard {onReturn} {onLetter} {onDelete} {onSpace} />
</main>
