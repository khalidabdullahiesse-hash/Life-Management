fetch("https://worldtimeapi.org/api/timezone/Africa/Mogadishu")
  .then(response => response.json())
  .then(data => {
    const time = data.datetime.split("T")[1].split(".")[0];
    const formattedTime = time;
    document.getElementById("time").textContent = formattedTime;
  });