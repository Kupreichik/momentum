import { 
  menuLang,
  menuShow,
  menuPlayer,
  menuWeather,
  menuClock,
  menuDate,
  menuGreeting,
  menuQuote,
  menuTodo,
  menuPhoto,
  menuGithub,
  menuUnsplash,
  menuFlickr,
  menuPlaceholder,
  todoBtn} from "../dom-elements/elements";
import { lang } from "./change-lang";

const settingsTranslation = {
  en: {
    lang: 'Language',
    show: 'Show',
    audio: 'Audio player',
    weather: 'Weather',
    time: 'Clock',
    date: 'Date',
    greeting: 'Greeting',
    quote: 'Quote',
    todo: 'Todo',
    photo: 'Photo',
    github: 'GitHub collection',
    unsplash: 'Unsplash API',
    flickr: 'Flickr API',
    placeholder: 'photo tag'
  },
  ru: {
    lang: 'Язык',
    show: 'Отображение элементов',
    audio: 'Аудиоплеер',
    weather: 'Погода',
    time: 'Часы',
    date: 'Дата',
    greeting: 'Приветствие',
    quote: 'Цитата дня',
    todo: 'Список дел',
    photo: 'Фоновое изображение',
    github: 'Коллекция GitHub',
    unsplash: 'Коллекция Unsplash',
    flickr: 'Коллекция Flickr',
    placeholder: 'фото тег'
  },
};

export function showSettingsMenu() {
  menuLang.textContent = settingsTranslation[lang].lang;
  menuShow.textContent = settingsTranslation[lang].show;
  menuPlayer.textContent = settingsTranslation[lang].audio;
  menuWeather.textContent = settingsTranslation[lang].weather;
  menuClock.textContent = settingsTranslation[lang].time;
  menuDate.textContent = settingsTranslation[lang].date;
  menuGreeting.textContent = settingsTranslation[lang].greeting;
  menuQuote.textContent = settingsTranslation[lang].quote;
  menuTodo.textContent = settingsTranslation[lang].todo;
  menuPhoto.textContent = settingsTranslation[lang].photo;
  menuGithub.textContent = settingsTranslation[lang].github;
  menuUnsplash.textContent = settingsTranslation[lang].unsplash;
  menuFlickr.textContent = settingsTranslation[lang].flickr;
  menuPlaceholder.placeholder = settingsTranslation[lang].placeholder
  todoBtn.textContent = settingsTranslation[lang].todo;
}