const taskInput = document.querySelector(".task-input");
const dateInput = document.querySelector(".date-input");
const olCont = document.querySelector("ol");
const errorMessage = document.querySelector(".error-message");

let taskList = [];

// Using CRUD

// Function to READ the task list
function displayTasks() {
    let todoListHTML = '';
    taskList.forEach((task, index) => {
        let listItem = `
            <li>
                <div class="list">
                    <p>${task.name}</p>
                    <p>${task.date}</p>
                    <div class="button-div">
                        <button onclick="editTask(${index})" class="edit">Edit</button>
                        <button onclick="deleteTask(${index})" class="delete">Delete</button>
                    </div>
                </div>
                <form class="edit-form" style="display: none;">
                    <input type="text" class="edit-task-input" value="${task.name}">
                    <input type="date" class="edit-date-input" value="${task.date}">
                    <button type="submit" onclick="updateTask(event, ${index})" class="update">Update</button>
                </form>
            </li>
        `;
        todoListHTML += listItem;
    });
    olCont.innerHTML = todoListHTML;
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

// Function to EDIT a task
function editTask(index) {
    const editForm = document.querySelectorAll(".edit-form");
    const listItem = editForm[index].parentElement;

    editForm.forEach((form) => {
        form.style.display = "none";
    });
    listItem.querySelector(".list").style.display = "none";
    editForm[index].style.display = "block";
}

// Function to UPDATE a task
function updateTask(event, index) {
    event.preventDefault();
    const newName = event.target.parentElement.querySelector(".edit-task-input").value;
    const newDate = event.target.parentElement.querySelector(".edit-date-input").value;

    if (newName.trim() !== "" && newDate.trim() !== "") {
        taskList[index].name = newName;
        taskList[index].date = newDate;
        displayTasks();
    } else {
        alert("Task and Date cannot be empty");
    }
}

displayTasks();
