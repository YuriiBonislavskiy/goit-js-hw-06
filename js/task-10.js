const boxesArya = document.querySelector('#boxes');
const boxesCount = document.querySelector("input");
const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
createBoxesBtn.addEventListener("click", () => { createBoxes(boxesCount.value)});
destroyBoxesBtn.addEventListener("click", destroyBoxes);
const boxes = [];

function createBoxes(amount) {
  destroyBoxes();
  let boxSizes = 20;
  let boxAliase = "";

  if (amount > 0) {
    for (let i = 0; i < amount; i += 1) {
      boxAliase = document.createElement('div');
      boxSizes += 10;
      boxAliase.style.width = String(boxSizes) + 'px';
      boxAliase.style.height = String(boxSizes) + "px";
      boxAliase.style.background = getRandomHexColor();
      boxes.push(boxAliase);
    }
    boxesArya.append(...boxes);
  }

}

function destroyBoxes() {
  boxes.forEach((box) => {
    box.remove();
  }  );
  boxes.splice(0, boxes.length);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
