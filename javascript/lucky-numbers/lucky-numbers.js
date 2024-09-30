// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedString = String(value).split("").reverse().join("");
  return value === Number(reversedString);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  switch (true) {
    case input === "":
    case input === null:
    case input === undefined:
      return "Required field";
    case Number.isNaN(Number(input)):
    case Number(input) === 0:
      return "Must be a number besides 0";
    default:
      return "";
  }
}
