<script lang="ts">
  import SquareKey from "./Keys/SquareKey.svelte";
  import DeleteKey from "./Keys/DeleteKey.svelte";

  export let onDelete: () => void;
</script>

<div class="flex justify-around m-2">
  <SquareKey up="~" down="`" />
  <SquareKey up="!" down="1" />
  <SquareKey up="@" down="2" />
  <SquareKey up="#" down="3" />
  <SquareKey up="$" down="4" />
  <SquareKey up="%" down="5" />
  <SquareKey up="^" down="6" />
  <SquareKey up="&" down="7" />
  <SquareKey up="*" down="8" />
  <SquareKey up=")" down="9" />
  <SquareKey up=")" down="0" />
  <SquareKey up="-" down="_" />
  <SquareKey up="=" down="+" />
  <DeleteKey {onDelete} />
</div>
