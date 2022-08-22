import { name, fakeEl } from "../dom-elements/elements";

export function setWidth() {
  const string = name.value || name.getAttribute('placeholder') || '';
  fakeEl.innerHTML = string;
  const fakeElStyles = window.getComputedStyle(fakeEl);
  name.style.width = fakeElStyles.width;
};