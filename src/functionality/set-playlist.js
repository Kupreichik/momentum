import { playList } from "../play-list/play-list";
import { playlist as playlistEl } from "../dom-elements/elements";

export function setPlaylist() {
  playList.forEach( el => {
    const li = document.createElement('li');
    li.textContent = el.title;
    li.classList.add('play-item')
    playlistEl.append(li);
  })
}