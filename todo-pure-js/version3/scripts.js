document.getElementById('addButton').addEventListener('click', function() {
  const inputValue = document.getElementById('todoInput').value.trim();

  if (inputValue.length === 0) {
    return;
  }

  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    listItem.classList.toggle('done');
  });
  listItem.appendChild(checkbox);

  const taskLabel = document.createElement('span');
  taskLabel.textContent = inputValue;
  listItem.appendChild(taskLabel);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  document.getElementById('todoList').appendChild(listItem);
  document.getElementById('todoInput').value = '';
});
