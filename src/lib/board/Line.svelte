<script lang="ts">
  import LetterPlaceHolder from "./LetterPlaceHolder.svelte";

  // export let editing: boolean;
  // export let currentGuess: string;

  export let word: string;

  // const letterToDisplay = (
  //   isEditing: boolean,
  //   curr: string,
  //   prev: string,
  //   i: number
  // ) => {
  //   console.log(
  //     "editing and guess and currentGuess",
  //     editing,
  //     guess,
  //     currentGuess
  //   );
  //   if (isEditing) {
  //     return curr[i] || "";
  //   }

  //   return prev[i] || "";
  // };
</script>

<div class="flex gap-1">
  <LetterPlaceHolder letter={word[0]} />
  <LetterPlaceHolder letter={word[1]} />
  <LetterPlaceHolder letter={word[2]} />
  <LetterPlaceHolder letter={word[3]} />
  <LetterPlaceHolder letter={word[4]} />
</div>
