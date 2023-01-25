<script lang="ts">
  import BaseKey from "./BaseKey.svelte";
</script>

<div class="text-xs w-[160px]">
  <div class="flex justify-center items-center">
    <BaseKey>
      <div class="h-[27px] w-[50px]">
        <span class="h-full flex justify-center items-center"
          ><span>▲</span></span
        >
      </div>
    </BaseKey>
  </div>
  <div class="flex">
    <BaseKey
      ><span class="flex justify-center items-center h-[27px] w-[50px]">◄</span
      ></BaseKey
    >
    <BaseKey
      ><span class="flex justify-center items-center h-[27px] w-[50px]">▼</span
      ></BaseKey
    >
    <BaseKey
      ><span class="flex justify-center items-center h-[27px] w-[50px]">►</span
      ></BaseKey
    >
  </div>
</div>
