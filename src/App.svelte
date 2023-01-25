<script lang="ts">
  import Board from "./lib/board/Board.svelte";
  import Keyboard from "./lib/keyboard/Keyboard.svelte";
  import { word } from "./swordle-store";

  let key;
  let code;
  const alphaRegex = new RegExp(/^[A-Za-z]{1}/);

  const onLetter = (letter: string) => {
    console.log("onLetter called with", letter);
  };

  const onDelete = () => {
    console.log("onDelete called");
  };

  const onReturn = () => {
    console.log("onReturn called");
  };

  const onSpace = () => {
    console.log("onSpace called");
  };

  const handleKeydown = (event: KeyboardEvent) => {
    const isEnterKey = (code: string) => code === "Enter";
    const isBackSpaceKey = (code: string) => code === "Backspace";

    if (alphaRegex.test(event.key) && event.key.length === 1) {
      key = event.key;
      code = event.code;
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

    // key = "";
    // code = "";
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<main
  class="flex flex-col justify-center items-center h-screen w-screen bg-gray-100"
>
  <h1 class="text-2xl">Yet another Wordle</h1>
  <h2 class="text-xl mb-6">Made with Svelte and Tailwindcss in TS</h2>
  <h3 class="text-lg my-10 text-slate-600">Time to Guess the Word</h3>
  <!-- {#if key}
    <kbd>{key === " " ? "Space" : key}</kbd>
    <p>{code}</p>
  {:else}
    <p>Focus this window and press any key</p>
  {/if} -->
  <div>Word to guess is: <span class="font-bold">{$word}</span></div>
  <Board />
  <span class="mt-10" />
  <Keyboard {onReturn} {onLetter} {onDelete} {onSpace} />
</main>
