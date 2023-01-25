import { derived, writable, type Writable } from "svelte/store";

export const sentence = writable("");

export const output = derived<Writable<string>, string>(
  sentence,
  ($sentence) => {
    return $sentence || "please write something";
  }
);
