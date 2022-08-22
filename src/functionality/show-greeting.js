import { getTimeOfDay } from "./get-time-of-day";
import { greeting, name } from "../dom-elements/elements";
import { greetingTranslation } from "./greeting-translation";
import { lang } from "./change-lang";

export function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = greetingTranslation[lang][timeOfDay];
  greeting.textContent = greetingText;
  name.placeholder = greetingTranslation[lang].placeholder;
}