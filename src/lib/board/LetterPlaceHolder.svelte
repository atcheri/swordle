<script lang="ts">
  export let editing: boolean;
  export let letter: string;
  export let position: number;
  export let solution: string;

  const baseStyle =
    "font-bold text-3xl flex justify-center items-center w-[62px] h-[62px] border-solid border-[2px] border-gray-300 rounded-sm";
  const exact = `${baseStyle} text-white bg-green-400`;
  const exists = `${baseStyle} text-white bg-yellow-500`;

  const findStyle = (
    editing: boolean,
    solution: string,
    letter: string,
    position: number
  ) => {
    if (editing) {
      return baseStyle;
    }

    if (solution[position] === letter) {
      return exact;
    }

    if (solution.includes(letter)) {
      return exists;
    }

    return baseStyle;
  };
</script>

<div class={findStyle(editing, solution, letter, position)}>
  {letter}
</div>
