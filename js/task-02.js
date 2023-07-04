const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const makeItems = (items) => {
  return items.map( (item) => {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    newItem.classList.add("item");
    return newItem;
  });
};

const ingredientsArray = makeItems(ingredients);

// const ingredientsArray = [];

// ingredients.forEach((ingredient, index) => {
//   ingredientsArray.push(document.createElement("li"));
//   ingredientsArray[index].textContent = ingredient;
//   ingredientsArray[index].classList.add('item');
// });

const elementList = document.querySelector("#ingredients");

elementList.append(...ingredientsArray);
