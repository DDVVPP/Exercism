// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // small: 6, medium: 8, large: 10
  // if item 1 wedges is >= wedgesNeeded, return 1
  // if item 1 wedges + item 2 wedges is >= wedgesNeeded, return 2

  let currTotalWedges = 0;

  if (wedgesNeeded === 0) {
    return 0;
  }

  for (let i = 0; i < limes.length; i++) {
    if (limes[i] === "small") {
      currTotalWedges += 6;

      if (currTotalWedges >= wedgesNeeded) {
        return i + 1;
      }
    } else if (limes[i] === "medium") {
      currTotalWedges += 8;

      if (currTotalWedges >= wedgesNeeded) {
        return i + 1;
      }
    } else if (limes[i] === "large") {
      currTotalWedges += 10;

      if (currTotalWedges >= wedgesNeeded) {
        return i + 1;
      }
    }
  }

  if (currTotalWedges < wedgesNeeded) {
    return limes.length;
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // use timeToMixJuice function to return time for each juice
  let currTotalTime = 0;

  for (let i = 0; i < orders.length; i++) {
    currTotalTime += timeToMixJuice(orders[i]);

    if (currTotalTime >= timeLeft) {
      return orders.slice(i + 1);
    }
  }

  if (timeLeft >= currTotalTime) {
    return [];
  }
}
