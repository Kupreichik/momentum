import { name, city, langForm, blocksList, selectPhotoForm, photoTag } from "../dom-elements/elements";

export function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value);
  localStorage.setItem('ru', langForm[1].checked);
  blocksList.forEach( block => {
    localStorage.setItem(blocksList.indexOf(block), block.classList.contains('hidden'))
  });
  selectPhotoForm.forEach(input => {
    if(input.checked) {
      localStorage.setItem('bgImage', input.value)
    }
  });
  localStorage.setItem('tag', photoTag.value);

  const todoItemsList = Array.from(document.querySelectorAll('.todo-item'));
  localStorage.setItem('todo', todoItemsList.length);
  if(todoItemsList) {
    todoItemsList.forEach( item => {
      localStorage.setItem(`todo${todoItemsList.indexOf(item)}`, item.outerHTML)
    })
  };
}