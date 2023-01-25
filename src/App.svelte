<script lang="ts">
  import Board from "./lib/board/Board.svelte";
  import Keyboard from "./lib/keyboard/Keyboard.svelte";

  const onLetter = (letter: string) => {
    console.log("onLetter called");
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
</script>

<main
  class="flex flex-col justify-center items-center h-screen w-screen bg-gray-100"
>
  <h1 class="text-2xl">Yet another Wordle</h1>
  <h2 class="text-xl mb-6">Made with Svelte and Tailwindcss in TS</h2>
  <h3 class="text-lg my-10 text-slate-600">Time to Guess the Word</h3>
  <Board />
  <span class="mt-10" />
  <Keyboard {onReturn} {onLetter} {onDelete} {onSpace} />
</main>
