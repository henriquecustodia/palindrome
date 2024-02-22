import { isPalindrome } from "./is-palindrome";
import { describe, test,  } from "node:test";
import assert from "node:assert";

const createTest = 
  (testMessage: string,  sentence: string, equalTo: boolean) => 
      test(testMessage, () => {
        assert.strictEqual(isPalindrome(sentence), equalTo);
      });

const validPalindromeSentenceTest = (sentence: string) => createTest(`should return TRUE because "${sentence}" is a palindrome`, sentence, true)
const invalidPalindromeSentenceTest = (sentence: string) => createTest(`should return FALSE because "${sentence}" is NOT a palindrome`, sentence, false)

const validPalindromeSentences = [
  "Never odd or even",
  "Live not on evil",
  "Madam",
  "Racecar",
  "Hannah",
];

const invalidPalindromeSentences = [
  "Never odd or eeven",
  "Never odd or evene",
  "job",
  "ferrari",
  "lLive not on evil",
  "Madama",
  "Racecarr",
  "Hannah Montana",
];

describe("isPalindrome()", () => {

  describe('Valid cases', () => {
    validPalindromeSentences.forEach(validPalindromeSentenceTest)
  });

  describe('Invalid cases', () => {
    invalidPalindromeSentences.forEach(invalidPalindromeSentenceTest)
  });

});
