<script lang="ts">
  import LetterKey from "./Keys/LetterKey.svelte";
  import SquareKey from "./Keys/SquareKey.svelte";
  import TabKey from "./Keys/TabKey.svelte";

  export let onLetter: (letter: string) => void;
</script>

<div class="flex justify-around m-2">
  <TabKey />
  <LetterKey letter="Q" {onLetter} />
  <LetterKey letter="W" {onLetter} />
  <LetterKey letter="E" {onLetter} />
  <LetterKey letter="R" {onLetter} />
  <LetterKey letter="T" {onLetter} />
  <LetterKey letter="Y" {onLetter} />
  <LetterKey letter="U" {onLetter} />
  <LetterKey letter="I" {onLetter} />
  <LetterKey letter="O" {onLetter} />
  <LetterKey letter="P" {onLetter} />
  <SquareKey up={"{"} down={"["} />
  <SquareKey up={"}"} down={"]"} />
  <SquareKey up="|" down="\" />
</div>
