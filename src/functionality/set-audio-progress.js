import { audio } from "./play-audio";
import { progressBar, audioCurrentTime } from "../dom-elements/elements";
import { getTimeCodeFromNum } from "./get-time-code-from-num";

export function setAudioProgress() {
  setInterval(() => {
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);
  }, 500)
}