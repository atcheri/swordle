<script lang="ts">
  import LetterKey from "./Keys/LetterKey.svelte";
  import CapsKey from "./Keys/CapsKey.svelte";
  import ReturnKey from "./Keys/ReturnKey.svelte";

  export let onLetter: (letter: string) => void;
  export let onReturn: () => void;
</script>

<div class="flex justify-around m-2">
  <CapsKey />
  <LetterKey letter="A" {onLetter} />
  <LetterKey letter="S" {onLetter} />
  <LetterKey letter="D" {onLetter} />
  <LetterKey letter="F" {onLetter} />
  <LetterKey letter="G" {onLetter} />
  <LetterKey letter="H" {onLetter} />
  <LetterKey letter="J" {onLetter} />
  <LetterKey letter="K" {onLetter} />
  <LetterKey letter="L" {onLetter} />
  <LetterKey letter=":" down=";" />
  <LetterKey letter={'"'} down="'" />
  <ReturnKey {onReturn} />
</div>
