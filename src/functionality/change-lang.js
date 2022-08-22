import { greetingTranslation } from "./greeting-translation";
import { city } from "../dom-elements/elements";
import { getWeather } from "./get-weather";
import { showDate } from "./show-date";
import { showGreeting } from "./show-greeting";
import { getQuotes } from "./get-quotes";
import { setWidth } from "./set-width";
import { showSettingsMenu } from "./show-settings-menu";
import { showTodoList } from "./show-todo-list";

export let lang = 'en';

export function changeLang(event) {
  if(event == undefined) {
    lang = localStorage.getItem('ru') === 'true' ? 'ru' : 'en'
  } else {
    lang = event.target.defaultValue;
  }

  if(!localStorage.getItem('city')) {
    city.value = greetingTranslation[lang].city;
  };
  getWeather();
  showDate();
  showGreeting();
  setWidth();
  getQuotes();
  showSettingsMenu();
  showTodoList();
}