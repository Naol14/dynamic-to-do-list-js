document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
      tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function addTask(taskText = taskInput.value.trim(), save = true) {
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    const newElement = document.createElement('li');
    newElement.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    removeButton.onclick = function () {
      taskList.removeChild(newElement);
      updateLocalStorage();
    };

    newElement.appendChild(removeButton);
    taskList.appendChild(newElement);
    taskInput.value = "";

    if (save) {
      updateLocalStorage();
    }
  }

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  loadTasks();

  addButton.addEventListener('click', () => addTask());

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});