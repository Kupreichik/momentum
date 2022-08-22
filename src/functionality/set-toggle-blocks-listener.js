import { toggleBloksList } from "../dom-elements/elements";
import { blocksList } from "../dom-elements/elements";

export function setToggleBlocksListener() {
  let blockNum;
  toggleBloksList.forEach(element => {
    element.addEventListener('click', (event) => {
      blockNum = toggleBloksList.indexOf(event.currentTarget);
      element.classList.toggle('toggle-slider-active');
      blocksList[blockNum].classList.toggle('hidden');
    },);
  });
}