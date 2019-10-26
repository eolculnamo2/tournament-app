// no arguments provided can be blank strings
export function noneAreBlank() {
  return Array.prototype.find.call(arguments, x => x === '') === undefined;
}