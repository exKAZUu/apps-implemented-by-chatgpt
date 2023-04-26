function saveTasks() {
  const tasks = [];
  const taskElements = document.querySelectorAll('#todoList li');
  taskElements.forEach(taskElement => {
    tasks.push({
      text: taskElement.querySelector('span').textContent,
      isDone: taskElement.querySelector('input[type="checkbox"]').checked,
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(text, isDone = false) {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isDone;
  checkbox.addEventListener('change', function() {
    listItem.classList.toggle('done');
    saveTasks();
  });
  listItem.appendChild(checkbox);

  const taskLabel = document.createElement('span');
  taskLabel.textContent = text;
  listItem.appendChild(taskLabel);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
    saveTasks();
  });
  listItem.appendChild(deleteButton);

  if (isDone) {
    listItem.classList.add('done');
  }

  document.getElementById('todoList').appendChild(listItem);
  saveTasks();
}

document.getElementById('addButton').addEventListener('click', function() {
  const inputValue = document.getElementById('todoInput').value.trim();

  if (inputValue.length === 0) {
    return;
  }

  addTask(inputValue);
  document.getElementById('todoInput').value = '';
});

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (savedTasks.length === 0) {
  const sampleTasks = [
    { text: 'サンプルタスク1', isDone: false },
    { text: 'サンプルタスク2', isDone: true },
    { text: 'サンプルタスク3', isDone: false },
  ];
  sampleTasks.forEach(task => addTask(task.text, task.isDone));
} else {
  savedTasks.forEach(task => addTask(task.text, task.isDone));
}
