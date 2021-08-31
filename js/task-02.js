const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector("#ingredients");

  const ingredientsList = ingredients => {
    return ingredients.map(item => {
      const list = document.createElement("li");
      list.textContent = item; 
      return list;
    })
  }

  const ingredientsMarkup = ingredientsList(ingredients);
  ingredientsRef.append(...ingredientsMarkup);