/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case 0:
      return "Lasagna is done.";
    case undefined:
    case null:
      return "You forgot to set the timer.";
    default:
      return "Not done, please wait.";
  }
}

export function preparationTime(layers, prepTimePerLayer = 2) {
  return layers.length * prepTimePerLayer;
}

export function quantities(layers) {
  let noodlesCount = 0;
  let sauceCount = 0;

  layers.forEach((layer) => {
    if (layer === "noodles") noodlesCount += 1;
    if (layer === "sauce") sauceCount += 1;
  });

  return {
    noodles: noodlesCount * 50,
    sauce: sauceCount * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  const lastIngredient = friendsList[friendsList.length - 1];

  myList.push(lastIngredient);
}

export function scaleRecipe(recipe, portion) {
  const scaledRecipe = { ...recipe };

  for (let ingredient in scaledRecipe) {
    scaledRecipe[ingredient] = (scaledRecipe[ingredient] * portion) / 2;
  }

  return scaledRecipe;
}
