import { faker } from "@faker-js/faker";
import { writable } from "svelte/store";

export const maxGuessLength = 5;
export const maxTries = 6;

export const generateWord = () => faker.word.noun({ length: maxGuessLength });

export const word = writable(generateWord());
export const guess = writable("");
export const rank = writable(0);
export const guesses = writable<string[]>(
  Array.from(Array(maxTries)).map(() => "")
);

const initializeGuesses = () => {
  guesses.set(Array.from(Array(maxTries)).map(() => ""));
};

const initializeWord = () => {
  word.set(generateWord());
};

const initRank = () => {
  rank.set(0);
};

export const initializeGame = () => {
  initializeWord();
  initializeGuesses();
  initRank();
};
