const form = document.querySelector("form.login-form");

form.addEventListener("submit", isSubmit);

function isSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const alertMassage = "Не всі поля форми заповнено!";
    alert(alertMassage);
    return;
  }
  const formData = {};
  formData[email.name] = email.value;
  formData[password.name] = password.value;
  console.log(formData);
  event.currentTarget.reset();
}
