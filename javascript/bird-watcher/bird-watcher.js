// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  //Just one week which is 7 days
  //Week 21 means there were 20 weeks before and (20*7) days
  //StartIdx + 7 for the end index

  const startIdx = (week - 1) * 7;
  const endIdx = startIdx + 7;
  const birdsInSpecificWeek = birdsPerDay.slice(startIdx, endIdx);

  return totalBirdCount(birdsInSpecificWeek);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  const firstDayCount = birdsPerDay[0] + 1;
  birdsPerDay.splice(0, 1, firstDayCount);

  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      const countAtEveryOtherDay = birdsPerDay[i] + 1;
      birdsPerDay.splice(i, 1, countAtEveryOtherDay);
    }
  }
  return birdsPerDay;
}
