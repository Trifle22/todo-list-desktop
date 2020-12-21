const newTask = document.querySelector('.new-task');
const todoList = document.querySelector('.todo-list')
let tasksWrapper = document.querySelector('.tasks');

addTask();

function addTask() {
  window.addEventListener('keydown', event => {
    if (event.code == 'Enter' && newTask.value.trim()) {
      tasksWrapper.insertAdjacentHTML('beforeend', 
      `<div class="task">
          <input type="checkbox" class="mark">
          <p class="task-text">${newTask.value}</p>
          <button class="delete-task">X</button>
      </div>`
      );
    }
  });
};

todoList.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('mark')) {
    target.nextElementSibling.classList.toggle('complete');
    target.parentElement.style.border = '3px solid SlateBlue';
  }

  if (target.classList.contains('delete-task')) {
    const necessaryTask = target.closest('.task');
    necessaryTask.parentElement.removeChild(necessaryTask);
  }
});








