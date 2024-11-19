// link --> https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
function cakes(recipe, available) {
  let result = 10000000;
  let ingredients = Object.keys(recipe);
  let i = 0;
  let follow = true;
  while (i < ingredients.length && follow) {
    let ingredient = ingredients[i];
    if (available[ingredient] !== undefined) {
      if (available[ingredient] >= recipe[ingredient]) {
        result = Math.min(
          result,
          Math.floor(available[ingredient] / recipe[ingredient])
        );
        i++;
      } else {
        follow = false;
        result = 0;
      }
    } else {
      follow = false;
      result = 0;
    }
  }
  return result;
}
