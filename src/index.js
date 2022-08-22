import { showTime } from "./functionality/show-time";
import { setLocalStorage } from './functionality/set-local-storage';
import { getLocalStorage } from './functionality/get-local-storage';
import { name, slideNextBtn, slidePrevtBtn, city, changeQuoteBtn, playBtn, playNextBtn, playPrevBtn, volumeBtn, settingsBtn, langForm, selectPhotoForm, photoTag, todoInput, todoBtn } from './dom-elements/elements';
import { setWidth } from './functionality/set-width';
import { setBg } from './functionality/set-background-image';
import { getSlideNext, getSlidePrev } from "./functionality/get-github-image";
import { getWeather } from './functionality/get-weather';
import { getQuotes } from './functionality/get-quotes';
import { playAudio, playNext, playPrev, audio, turnOffVolume } from './functionality/play-audio';
import { setPlaylist } from './functionality/set-playlist';
import { setPlayTrackListener } from './functionality/set-play-track-listener';
import { showSettingsPopup } from './functionality/show-settings-popup';
import { changeLang } from './functionality/change-lang';
import { setTodoItem } from "./functionality/set-todo-item";
import { showTodoPopup } from "./functionality/show-todo-popup";

showTime();
getQuotes();
setPlaylist();
setPlayTrackListener();
getLocalStorage();
getWeather();
setBg();

window.addEventListener('beforeunload', setLocalStorage);
name.addEventListener('input', setWidth);
slideNextBtn.addEventListener('click', getSlideNext);
slidePrevtBtn.addEventListener('click', getSlidePrev);
city.addEventListener('change', getWeather);
changeQuoteBtn.addEventListener('click', getQuotes);
playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
audio.addEventListener('ended', playNext);
volumeBtn.addEventListener('click', turnOffVolume);
settingsBtn.addEventListener('click', showSettingsPopup);
langForm.addEventListener('change', changeLang);
selectPhotoForm.forEach(input => input.addEventListener('change', event => {
  setBg(event.target.value);
  if(event.target.value == 'gitHub') {
    photoTag.setAttribute('disabled', true);
  } else {
    photoTag.removeAttribute('disabled');
  }
}));
photoTag.addEventListener('change', e => setBg());
todoInput.addEventListener('change', setTodoItem);
todoBtn.addEventListener('click', showTodoPopup);

window.onload = function () {
  document.body.classList.add('loaded-hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded-hiding');
  }, 500);
}

console.log('Score 160/150\n\nЧасы и календарь 15\n-время выводится в 24-часовом формате, например: 21:01:00 +5\n-время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5\n-выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5\n\n Приветствие 10\n-текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5\n -пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5\n\n Смена фонового изображения 20\n -ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5\n -изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5\n -изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5\n -при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения.+5\n\n Виджет погоды 15\n -при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5\n -для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5\n -выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5\n\n Виджет цитата дня +10\n -при загрузке страницы приложения отображается рандомная цитата и её автор +5\n -при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5\n\n Аудиоплеер 15\n -при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3\n -при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3\n-треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3\n -трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3\n -после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3\n\n Продвинутый аудиоплеер (реализуется без использования библиотек) 20\n -добавлен прогресс-бар в котором отображается прогресс проигрывания +3\n -при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3\n -над прогресс-баром отображается название трека +3\n -отображается текущее и общее время воспроизведения трека +3\n -есть кнопка звука при клике по которой можно включить/отключить звук +2\n -добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука +3\n -можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте +3\n\n Перевод приложения на два языка (en/ru или en/be) 15\n-переводится язык и меняется формат отображения даты +3\n -переводится приветствие и placeholder +3\n -переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3\n -переводится цитата дня +3\n -переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3\n\n Получение фонового изображения от API 10\n -в качестве источника изображений может использоваться Unsplash API +5\n -в качестве источника изображений может использоваться Flickr API +5\n\n Настройки приложения 20\n -в настройках приложения можно указать язык приложения (en/ru или en/be) +3\n -в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3\n -если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +3\n -в настройках приложения можно скрыть/отобразить любой из блоков +3\nскрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3\n -настройки приложения сохраняются при перезагрузке страницы +5\n\n Дополнительный функционал на выбор 10\n -ToDo List - список дел (как в оригинальном приложении) +10\n');