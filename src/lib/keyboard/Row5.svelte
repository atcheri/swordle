<script lang="ts">
  import LetterKey from "./Keys/LetterKey.svelte";
  import SquareKey from "./Keys/SquareKey.svelte";
  import ShiftLeftKey from "./Keys/ShiftLeftKey.svelte";
  import ShiftRightKey from "./Keys/ShiftRightKey.svelte";

  export let onLetter: (letter: string) => void;
</script>

<div class="flex justify-around m-2">
  <ShiftLeftKey />
  <LetterKey letter="Z" {onLetter} />
  <LetterKey letter="X" {onLetter} />
  <LetterKey letter="C" {onLetter} />
  <LetterKey letter="V" {onLetter} />
  <LetterKey letter="B" {onLetter} />
  <LetterKey letter="N" {onLetter} />
  <LetterKey letter="M" {onLetter} />
  <SquareKey up="<" down="," />
  <SquareKey up=">" down="." />
  <SquareKey up="?" down="/" />
  <ShiftRightKey />
</div>
