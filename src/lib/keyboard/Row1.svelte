<script lang="ts">
  import Escape from "./Keys/Escape.svelte";
  import FKey from "./Keys/FKey.svelte";
  import IDKey from "./Keys/IDKey.svelte";
</script>

<div class="flex justify-around m-2">
  <Escape />
  <FKey index={1} />
  <FKey index={2} />
  <FKey index={3} />
  <FKey index={4} />
  <FKey index={5} />
  <FKey index={6} />
  <FKey index={7} />
  <FKey index={8} />
  <FKey index={9} />
  <FKey index={10} />
  <FKey index={11} />
  <FKey index={12} />
  <IDKey />
</div>
