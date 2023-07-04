const baseCategories = document.querySelector("#categories");

const categories = baseCategories.querySelectorAll(".item");
const categoriesNumber = categories.length;

console.log(`Number of categories: ${categoriesNumber}`);

categories.forEach((category, index) => {
    console.log('Category: ' + category.querySelector("h2").textContent);
    console.log('Elements: ' + category.querySelectorAll("li").length);
});