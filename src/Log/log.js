const nameInput = document.getElementById("Name");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");

let dataName = "";
let dataPassword = "";

// Fetch data
fetch("./json/accounts.json")
  .then(response => response.json())
  .then(account => {
    dataName = account.name;
    dataPassword = account.password;
  })
  .catch(error => console.error("Error:", error));

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!checkbox.checked) {
    alert("You must accept the privacy policy");
    return;
  }

  if (
    nameInput.value === dataName &&
    passwordInput.value === dataPassword
  ) {
    window.location.href = "../task/task.html";
  } else {
    alert("Wrong username or password");
  }
});
