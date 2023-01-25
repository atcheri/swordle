<script lang="ts">
  import BaseKey from "./BaseKey.svelte";

  export let letter: string;
  export let onLetter: (letter: string) => void;
</script>

<BaseKey>
  <span
    class="flex flex-col justify-center items-center h-[50px] w-[50px] m-1"
    on:click={() => onLetter(letter)}
  >
    {letter}
  </span>
</BaseKey>
