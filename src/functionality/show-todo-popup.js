import { todoBtn, todoPopup, todoInfoBtn } from "../dom-elements/elements";
import { showTodoInfo } from "./show-todo-info";
import { showTodoList } from "./show-todo-list";

export function showTodoPopup() {
  todoBtn.classList.toggle('todo-btn-active');
  todoPopup.classList.toggle('todo-popup-active');

  todoInfoBtn.addEventListener('click', showTodoInfo);
  showTodoList();
}