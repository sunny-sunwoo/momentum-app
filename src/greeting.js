const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

  const MORNING_MSG = "good morning",
  AFTERNOON_MSG = "good afternoon",
  EVENING_MSG = "good evening",
  NIGHT_MSG = "good night";

const USER_LS = "currentUser",
  DISPLAY_SHOW = "showing",
  DISPLAY_HIDE = "hide";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleForm(event) {
  event.preventDefault();
  const currValue = input.value;
  saveName(currValue);
  showGreeting(currValue);
}

function askName() {
  form.classList.add(DISPLAY_SHOW);
  form.classList.remove(DISPLAY_HIDE);
  form.addEventListener("submit", handleForm);
}


function getGreetingMessage() {
  let hour = new Date().getHours();
  if (5 <= hour && hour < 12) {
    return MORNING_MSG;
  } else if (12 <= hour && hour < 17) {
    return AFTERNOON_MSG;
  } else if (17 <= hour && hour < 21) {
    return EVENING_MSG;
  } else {
    return NIGHT_MSG;
  }
} 

function showGreeting(text) {
  form.classList.remove(DISPLAY_SHOW);
  form.classList.add(DISPLAY_HIDE);
  greeting.classList.add(DISPLAY_SHOW);
  const greetingMessage = getGreetingMessage();
  greeting.innerText = `${greetingMessage} ${text.toLowerCase()}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    showGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
