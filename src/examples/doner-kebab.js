const ingredients = ["pita bread", "tomato", "lettuce", "onion", "kebab"];

const slice = str => `sliced ${str}`;

const donerKebabReducer = (acc, ingredient) => `${acc} ${ingredient}`;

const getDonerKebab = xs =>
  xs.map(slice).reduce(donerKebabReducer, "a delicious doner kebab made with:");

const result = getDonerKebab(ingredients);

console.log(result);
// a delicious doner kebab made with: chopped pita bread chopped tomato chopped lettuce chopped onion chopped kebab
