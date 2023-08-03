const inputTask = document.getElementById('taskInput');
const addBtn = document.getElementById('push');
const tasksList = document.getElementById('tasks');
const resultsContainer = document.getElementById('results');

const theBest = 'ronaldo'
function addTask() {

  const taskText = inputTask.value.trim();
  if (taskText === '') return;

  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container');

  const resultInput = document.createElement('input');
  resultInput.type = 'text';
  resultInput.value = taskText;
  resultInput.readOnly = true;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function () {
    tasksList.removeChild(listItem);
  });

  const listItem = document.createElement('li');
  listItem.appendChild(resultContainer);
  resultContainer.appendChild(resultInput);
  resultContainer.appendChild(deleteBtn);
  tasksList.appendChild(listItem);

  inputTask.value = '';
}

addBtn.addEventListener('click', addTask);

inputTask.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function swapListItems() {
  const listItems = tasksList.querySelectorAll('li');
  if (listItems.length < 2) return;

  const firstItem = listItems[0];
  const lastItem = listItems[listItems.length - 1];
  tasksList.insertBefore(lastItem, firstItem);
}

setInterval ( swapListItems,1000)

// function changeBackground() {
//   let targetElement = document.body;
//   let colorInput = document.getElementById("colorInput");
//   let newBackgroundColor = colorInput.value;

//   targetElement.style.backgroundColor = ;
// }
// let button = document.getElementById("changeBackgroundButton");
// button.addEventListener("click", changeBackground);
