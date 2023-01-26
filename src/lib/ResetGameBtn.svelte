<script lang="ts">
  import { initializeGame } from "../swordle-store";

  const resetGame = () => {
    initializeGame();
  };
</script>

<button
  class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
  on:click={resetGame}
>
  Play again
</button>
