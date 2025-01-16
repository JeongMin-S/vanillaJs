const clock = document.querySelector("h2#clock");

function getClock() {
  clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
}
getClock();
setInterval(getClock, 1000);
