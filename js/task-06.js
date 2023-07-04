const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener('blur', onInputLengthControl);

function onInputLengthControl(event) {
  const targetInput = event.currentTarget;

  if (targetInput.classList.contains("valid")) {
    targetInput.classList.remove("valid");
  }
  if (targetInput.classList.contains("invalid")) {
    targetInput.classList.remove("invalid");
  }

  if (targetInput.value.length === inputLength) {
    targetInput.classList.add("valid");
    return;
  }

  targetInput.classList.add("invalid");
}
