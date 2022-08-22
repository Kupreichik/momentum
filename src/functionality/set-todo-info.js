import { todoClear, todoCount, todoDoneCount } from "../dom-elements/elements";

export function setTodoInfo() {
  const todoItemsList = Array.from(document.querySelectorAll('.todo-item'));
  let count = todoItemsList.length;
  todoCount.textContent = `   ${count}`;

  const doneList = document.querySelectorAll('.todo-item-done');
  let done = doneList.length;
  todoDoneCount.textContent = `   ${done}`;

  todoClear.addEventListener('click', e => {
    todoItemsList.forEach( element => element.remove());
    todoCount.textContent = `   0`;
    todoDoneCount.textContent = `   0`;
  })
}