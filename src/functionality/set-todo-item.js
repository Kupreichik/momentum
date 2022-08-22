import { todoInput } from "../dom-elements/elements";
import { setTodoItemListener } from "./set-todo-item-listener";

export function setTodoItem() {
  let text = todoInput.value;
  let div = document.createElement('div');
  div.className = 'todo-item';
  div.innerHTML = `<input class="todo-item-checkbox" type="checkbox">
  <span class="todo-item-title">${text}</span>
  <svg data-v-76a7e140="" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="icon-close"><path xmlns="http://www.w3.org/2000/svg" d="M19 32C19 30.3431 20.3431 29 22 29H29V22C29 20.3431 30.3431 19 32 19C33.6569 19 35 20.3431 35 22V29H42C43.6569 29 45 30.3431 45 32C45 33.6569 43.6569 35 42 35H35V42C35 43.6569 33.6569 45 32 45C30.3431 45 29 43.6569 29 42V35H22C20.3431 35 19 33.6569 19 32Z"></path><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z"></path></svg>`;
  todoInput.before(div);
  todoInput.value = null;

  setTodoItemListener();
}