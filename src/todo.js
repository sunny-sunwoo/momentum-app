const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDos=[];

function loadTodos() {
	const loadedToDos = localStorage.getItem(TODO_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(todo) {
			drawToDo(todo.text);
		});
	}
}

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(todo){
		return todo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function drawToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	delBtn.innerText = "❌";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = text.toLowerCase();

	li.appendChild(delBtn);
	li.appendChild(span);

	li.id = newId;
	toDoList.appendChild(li);

	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	console.log(toDos);
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const value = toDoInput.value;
	drawToDo(value);
	toDoInput.value = "";
}

function init() {
	loadTodos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();