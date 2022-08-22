import { name, city, langForm, toggleBloksList, blocksList, selectPhotoForm, photoTag, todoInput } from "../dom-elements/elements";
import { setWidth } from "./set-width";
import { lang, changeLang } from "./change-lang";
import { greetingTranslation } from "./greeting-translation";
import { setTodoItemListener } from "./set-todo-item-listener";


export function getLocalStorage() {

  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  };
  setWidth();

  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  } else {
    city.value = greetingTranslation[lang].city;
  };

  if(localStorage.getItem('ru') === 'true') {
    langForm[1].setAttribute('checked', true)
  } else {
    langForm[0].setAttribute('checked', true)
  }
  changeLang();

  blocksList.forEach(block => {
    if(localStorage.getItem(`${blocksList.indexOf(block)}`) === 'true') {
      block.classList.add('hidden');
    }
  });

  toggleBloksList.forEach( button => {
    if(localStorage.getItem(`${toggleBloksList.indexOf(button)}`) === 'true')
    button.classList.remove('toggle-slider-active');
  })

  if(localStorage.getItem('bgImage')) {
    selectPhotoForm.forEach( input => {
      if(localStorage.getItem('bgImage') === `${input.value}`) {
        input.setAttribute('checked', 0);
      }
    });
    if(localStorage.getItem('bgImage') == 'gitHub') {
      photoTag.setAttribute('disabled', true);
    } else {
      photoTag.removeAttribute('disabled');
    }
  } else {
    selectPhotoForm[0].setAttribute('checked', true);
  };

  if(localStorage.getItem('tag')) {
    photoTag.value = localStorage.getItem('tag');
  }

  if(localStorage.getItem('todo') > 0) {
    let itemsAmount = +localStorage.getItem('todo');
    for(let i = 0; i < itemsAmount; i++) {
      let div = document.createElement('div');
      todoInput.before(div);
      div.outerHTML = localStorage.getItem(`todo${i}`);
    };
    setTodoItemListener();
  }
};