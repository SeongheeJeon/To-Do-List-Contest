const form_name = document.querySelector(".js-form-name"),
  input_name = document.querySelector(".js-form-name input"),
  greeting = document.querySelector(".js-greeting");

const SHOWING_NAME = "showing_name";

function saveName(name) {
  localStorage.setItem("name", name);
  input_name.value = "";
}

function submitName(event) {
  event.preventDefault();
  const name = input_name.value;
  saveName(name);
  paintGreeting(name);
}

function askForName() {
  form_name.classList.add(SHOWING_NAME);
  form_name.addEventListener("submit", submitName);
}

function paintGreeting(name) {
  const form_todo = document.querySelector(".js-form-toDo");
  const todos = document.querySelector(".js-toDos");
  const weather = document.querySelector(".js-weather");
  const line = document.querySelector(".line");
  const deleteImg = document.querySelector("#deleteAll img");
  const moodBox = document.querySelector(".mood");

  form_name.classList.remove(SHOWING_NAME);
  form_todo.classList.add(SHOWING_NAME);
  todos.classList.add(SHOWING_NAME);
  weather.classList.add(SHOWING_NAME);
  line.classList.add("showing");
  moodBox.classList.add("showing");
  deleteImg.classList.add("showing");

  greeting.classList.add(SHOWING_NAME);
  greeting.innerHTML = `${name}님, 좋은 하루 보내시길 바래요`;
}

function loadName() {
  const name = localStorage.getItem("name");
  if (name === null) {
    askForName();
  } else {
    paintGreeting(name);
  }
}

function init() {
  loadName();
}

init();
