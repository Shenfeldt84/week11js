let input = document.getElementById("container__field");
let button = document.getElementById("container__btn");
let list = document.getElementById("container__list");

function createTask() {
  let newTask = document.createElement("li");
  newTask.textContent = input.value;
  list.append(newTask);

  input.value("");
}

function checkTask(event) {
  let element = event.target;
  element.classList.toggle("completed");
}

button.addEventListener("click", createTask);
list.addEventListener("click", createTask);
