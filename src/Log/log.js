const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");

class Contact {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

const users = [
  new Contact("khalid", 22, "khalidabdullahiesse@gmail.com", "1234"),
  new Contact("siciid", 23, "siciidmohmaed@gmail.com", "3515")
];

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!checkbox.checked) {
    alert("You must accept the privacy policy");
    return;
  }

  const user = users.find(
    u =>
      u.name === nameInput.value &&
      u.password === passwordInput.value
  );

  if (user) {
    window.location.href = "../task/task.html";
  } else {
    alert("Wrong username or password");
  }
});
