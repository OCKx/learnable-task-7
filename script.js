const taskInput = document.querySelector(".task-input");
const dateInput = document.querySelector(".date-input");
const ulCont = document.querySelector("ul");
const errorMessage = document.querySelector(".error-message");

let taskList = [];

// Using CRUD

// Function to READ the task list
function displayTasks() {
    let todoListHTML = '';
    taskList.forEach((task, index) => {
        let addList = `<div class="list">
                            <li>${task.name}</li>
                            <p>${task.date}</p>
                            <button onclick="deleteTask(${index})" class="delete">X</button>
                        </div>`;
        todoListHTML += addList;
    });
    ulCont.innerHTML = todoListHTML;
}

// Function to CREATE a task
function addTask() {
    const taskValue = taskInput.value;
    const dateValue = dateInput.value;

    if (taskValue.trim() !== "" && dateValue.trim() !== "") {
        taskList.push({
            name: taskValue,
            date: dateValue
        });
        displayTasks();
        taskInput.value = "";
        dateInput.value = "";
        errorMessage.innerHTML = "";
    } else {
        errorMessage.innerHTML = "Task and Date cannot be empty";
    }
}

// Function to DELETE a task
function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

// Function to UPDATE a task (not implemented yet)
function updateTask(index, newName, newDate) {
    // Implement update functionality here
}
