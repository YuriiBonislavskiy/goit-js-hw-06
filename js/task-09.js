
const body = document.querySelector('body');
const targetText = document.querySelector("p>span.color");
const changeColorBtn = document.querySelector("button.change-color");
changeColorBtn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const newBodyColor = getRandomHexColor();
  body.style.background = newBodyColor;
  targetText.textContent = newBodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

