
export function setTodoItemListener() {
  const todoItemsList = Array.from(document.querySelectorAll('.todo-item'));

  todoItemsList.forEach( item => {
    item.removeEventListener('click', todoItemListener);
    item.addEventListener('click', todoItemListener);
  })
};

function todoItemListener(event) {
  if(event.target.classList.contains('todo-item-checkbox')) {
      event.target.hasAttribute('checked') ?
        event.target.removeAttribute('checked') : event.target.setAttribute('checked', true);
      event.currentTarget.classList.toggle('todo-item-done');
    };
  if(event.target.classList.contains('icon-close')) {
      event.currentTarget.remove();
    };
}

