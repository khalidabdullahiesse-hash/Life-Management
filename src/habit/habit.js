const dayButtons = document.querySelectorAll(".day");
const progressPercentage= document.getElementById("progress-text");









dayButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });

     let per = 0;

    dayButtons.forEach(btn => {
      if (btn.classList.contains("active")) {
        per++;
      }
    });
    

});
