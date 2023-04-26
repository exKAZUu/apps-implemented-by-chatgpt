document.getElementById('addButton').addEventListener('click', function() {
  const inputValue = document.getElementById('todoInput').value.trim();

  if (inputValue.length === 0) {
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = inputValue;
  listItem.addEventListener('click', function() {
    listItem.classList.toggle('done');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  document.getElementById('todoList').appendChild(listItem);
  document.getElementById('todoInput').value = '';
});
