const date = document.querySelector(".dataEscolhida");
const submitButton = document.querySelector(".countdown-button");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

setInterval(() => { 
  if (date.value != '') {
  const choosenDate = new Date(date.value);
  const actualDate = new Date();
  const days = Math.floor((choosenDate - actualDate) / 24 / 60 / 60 / 1000);
  const hours = Math.floor((choosenDate - actualDate) / 60 / 60 / 1000) % 24;
  const minutes = Math.floor((choosenDate - actualDate) / 60 / 1000) % 60;
  const seconds = Math.floor((choosenDate - actualDate) / 1000) % 60;
  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
  }
}, 100);
