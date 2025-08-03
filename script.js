// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(){

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the task-adding function
  function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText===""){
      alert("Please enter a task");
      return;
    } 
    
    // Create new task element
    const newElement = document.createElement('li');
    newElement.textContent = taskText;

    // Create and attach remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Set up remove action
    removeButton.addEventListener('click', function (){
      taskList.removeChild(newElement);
    });

    newElement.appendChild(removeButton);
    taskList.appendChild(newElement);
    taskInput.value = "";
  }

  // Handle add button click
  addButton.addEventListener('click', addTask);

  // Handle 'Enter' key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Challenge requirement: invoke addTask on page load
  addTask();

});