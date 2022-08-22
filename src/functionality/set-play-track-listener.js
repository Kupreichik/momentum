import { playTrack } from "./play-audio";

export function setPlayTrackListener() {
  const playItemList = [ ...document.querySelectorAll('.play-item') ];
  playItemList.forEach(element => {
    element.addEventListener('click', (event) => {
      let trackNum = playItemList.indexOf(event.target);
      playTrack(trackNum);
    });
  });
}