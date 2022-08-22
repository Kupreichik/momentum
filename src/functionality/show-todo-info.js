import { todoInfo, addHeight } from "../dom-elements/elements";
import { setTodoInfo } from "./set-todo-info";

export function showTodoInfo() {
  todoInfo.classList.toggle('todo-info-active');
  addHeight.classList.toggle('height');
  document.addEventListener('click', function(e) {
    if(todoInfo.classList.contains('todo-info-active') &&
      e.target.closest('.todo-info') === null &&
      e.target.closest('.list-chooser-toggle') === null){
        todoInfo.classList.remove('todo-info-active');
        addHeight.classList.remove('height');
    }});
  
  setTodoInfo();
}