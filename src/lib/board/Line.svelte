<script lang="ts">
  import LetterPlaceHolder from "./LetterPlaceHolder.svelte";

  export let currentGuess: string;
  export let editing: boolean;
  export let solution: string;
</script>

<div class="flex gap-1">
  <LetterPlaceHolder
    {editing}
    letter={currentGuess[0]}
    position={0}
    {solution}
  />
  <LetterPlaceHolder
    {editing}
    letter={currentGuess[1]}
    position={1}
    {solution}
  />
  <LetterPlaceHolder
    {editing}
    letter={currentGuess[2]}
    position={2}
    {solution}
  />
  <LetterPlaceHolder
    {editing}
    letter={currentGuess[3]}
    position={3}
    {solution}
  />
  <LetterPlaceHolder
    {editing}
    letter={currentGuess[4]}
    position={4}
    {solution}
  />
</div>
