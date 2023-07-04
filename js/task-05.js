const refs = {
  input: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  let value = event.currentTarget.value;

  value
    ? (refs.spanText.textContent = value)
    : (refs.spanText.textContent = "Anonymous");
}
