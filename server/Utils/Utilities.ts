export default class Utilities {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  public static shuffle(array: Array<any>) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
