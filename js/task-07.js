const fontSizeControl = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");
fontSizeControl.addEventListener('input', () => {
    const fontSize = String(fontSizeControl.value) + "px";
    targetText.style.fontSize = fontSize;
});
