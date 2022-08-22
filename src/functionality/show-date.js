import { date as dateElement } from "../dom-elements/elements";
import { lang } from "./change-lang";

export function showDate() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString(`${lang}`, options);

  dateElement.textContent = currentDate;
}