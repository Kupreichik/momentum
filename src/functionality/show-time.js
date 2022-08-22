import { time } from '../dom-elements/elements';
import { showDate } from './show-date';
import { showGreeting } from './show-greeting';

export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreeting();
}