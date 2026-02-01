const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!checkbox.checked) {
    alert("You must accept the privacy policy");
    return;
  }

  try {
    // 1️⃣ Fetch data
    const response = await fetch("http://localhost:3000/users.json");
    const data = await response.json();

    // 2️⃣ Get users array
    const users = data["users-login"];

    // 3️⃣ Check login
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

  } catch (error) {
    console.error(error);
    alert("Error fetching users");
  }
});
