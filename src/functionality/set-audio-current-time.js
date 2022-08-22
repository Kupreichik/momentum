import { audio } from "./play-audio";
import { audioTimeline } from "../dom-elements/elements";

export function setAudioCurrentTime(event) {
  const timelineWidth = window.getComputedStyle(audioTimeline).width;
  const timeToSeek = event.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}