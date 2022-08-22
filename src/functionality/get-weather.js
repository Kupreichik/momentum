import { weatherIcon, weatherDescription, wind, humidity, city, weatherError } from "../dom-elements/elements";
import { lang } from "./change-lang";

const translation = {
  en: {
    wind: 'Wind speed',
    humidity: 'Humidity',
    ms: 'm/s',
    error1: 'Enter your city',
    error2: 'city not found'
  },
  ru: {
    wind: 'Скорость ветра',
    humidity: 'Влажность',
    ms: 'м/с',
    error1: 'Введите город',
    error2: 'город не найден'
  }
}

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=4e7c624b93480b0e39363e26fa076c1e&units=metric`;
  try {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(res.status)
    }
    const data = await res.json();
    weatherError.textContent = null;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherDescription.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
    wind.textContent = `${translation[lang].wind}: ${Math.round(data.wind.speed)}${translation[lang].ms}`;
    humidity.textContent = `${translation[lang].humidity}: ${data.main.humidity}%`;
  } catch(error) {
    if(error == 'Error: 400') {
      weatherError.textContent = translation[lang].error1;
    } else {
      weatherError.textContent = translation[lang].error2;
    }
    weatherIcon.className = 'weather-icon owf';
    weatherDescription.textContent = null;
    wind.textContent = null;
    humidity.textContent = null;
  }
}
