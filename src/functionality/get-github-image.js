import { getTimeOfDay } from "./get-time-of-day";
import { getRandomNum } from "./get-random-num";
import { body } from "../dom-elements/elements";
import { setBg } from "./set-background-image";

export let randomNum = getRandomNum(1, 21);

export function getGithabImg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = randomNum.toString().padStart(2, '0');
  let imgPath = `https://raw.githubusercontent.com/Kupreichik/stage1-tasks-assets/momentum-images/images/${timeOfDay}/${bgNum}.webp`;

  const img = new Image();
  img.src = imgPath;
  img.onload = () => {
    body.style.backgroundImage = `url('${imgPath}')`;
  };
};

export function getSlideNext() {
  randomNum === 20 ? randomNum = 1 : randomNum += 1;
  setBg();
};

export function getSlidePrev() {
  randomNum === 1 ? randomNum = 20 : randomNum -= 1;
  setBg();
}