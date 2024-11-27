//js

document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  const todoList = document.getElementById("todoList");

  // Create a new task item
  const listItem = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed", checkbox.checked);
  });

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Control buttons
  const taskControls = document.createElement("div");
  taskControls.className = "task-controls";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  const moveUpButton = document.createElement("button");
  moveUpButton.textContent = "↑";
  moveUpButton.addEventListener("click", () => {
    if (listItem.previousElementSibling) {
      todoList.insertBefore(listItem, listItem.previousElementSibling);
    }
  });

  const moveDownButton = document.createElement("button");
  moveDownButton.textContent = "↓";
  moveDownButton.addEventListener("click", () => {
    if (listItem.nextElementSibling) {
      todoList.insertBefore(listItem.nextElementSibling, listItem);
    }
  });

  // Append controls
  taskControls.appendChild(moveUpButton);
  taskControls.appendChild(moveDownButton);
  taskControls.appendChild(deleteButton);

  // Build task item
  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(taskControls);

  // Add task to list
  todoList.appendChild(listItem);

  // Clear input
  taskInput.value = "";
}
