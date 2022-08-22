import {
  todoHeader,
  todoPlan,
  todoDone,
  todoClear,
  todoInput
} from '../dom-elements/elements';
import { lang } from './change-lang';

const translation = {
  en: {
    header: 'Today',
    plan: 'Planned',
    done: 'Done',
    clear: 'Clear',
    placeholder: 'New Todo'
  },
  ru: {
    header: 'Сегодня',
    plan: 'Запланировано',
    done: 'Выполнено',
    clear: 'Очистить',
    placeholder: 'Новая задача'
  },
};

export function showTodoList() {
  todoHeader.textContent = translation[lang].header;
  todoPlan.textContent = translation[lang].plan;
  todoDone.textContent = translation[lang].done;
  todoClear.textContent = translation[lang].clear;
  todoInput.placeholder = translation[lang].placeholder;
}