import { faker } from "@faker-js/faker";
import { derived, writable, type Writable } from "svelte/store";

export const word = writable(faker.word.noun({ length: 5 }));
