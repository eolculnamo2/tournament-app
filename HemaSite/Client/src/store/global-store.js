import {
  writable
} from "svelte/store";

export const username = writable('');
export const firstName = writable('');
export const lastName = writable('');