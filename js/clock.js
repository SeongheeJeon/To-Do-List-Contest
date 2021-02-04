const clock = document.querySelector(".js-clock p");

function update_clock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  update_clock();
  setInterval(update_clock, 1000);
}

init();
