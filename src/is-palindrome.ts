const toLowerCase = (word: string) => word.toLocaleLowerCase();
const removeWhitespaces = (word: string) => word.replace(/ /g, "");
const toArray = (word: string) => word.split("");

export function isPalindrome(word: string): boolean {
  const wordAsArray = toArray(removeWhitespaces(toLowerCase(word)))

  const middleIndex = Math.floor(wordAsArray.length / 2) - 1;

  let start = 0;
  let end = wordAsArray.length - 1;

  while (start <= middleIndex) {
    if (wordAsArray[start] !== wordAsArray[end]) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
}
