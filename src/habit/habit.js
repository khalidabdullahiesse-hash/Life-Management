const dayButtons = document.querySelectorAll(".day");
const progressText = document.getElementById("progress-text");
const progressFill = document.querySelector(".progress-fill");

function updateProgress() {
  let activeCount = 0;

  dayButtons.forEach(btn => {
    if (btn.classList.contains("active")) {
      activeCount++;
    }
  });

  const percentage = Math.round(
    (activeCount / dayButtons.length) * 100
  );

  progressText.textContent = percentage + "%";
  progressFill.style.width = percentage + "%";
}

dayButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    updateProgress();
  });
});
