import { playList } from '../play-list/play-list';
import { playBtn, volume, volumeBtn, audioLength, audioName, audioTimeline, progressBar } from '../dom-elements/elements';
import { setAudioProgress } from './set-audio-progress';
import { setAudioCurrentTime } from './set-audio-current-time';

export const audio = new Audio();

let playNum = 0;
let isPlay = false;

audio.src = playList[playNum].src;
audio.volume = volume.value;

export function playAudio() {

  volume.addEventListener('input', () => {
    audio.volume = volume.value;
    setVolumeBtn();
  });
  
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioLength.textContent = playList[playNum].duration;
  audioName.textContent = playList[playNum].title;

  setAudioProgress();

  audioTimeline.addEventListener('click', setAudioCurrentTime)

  const playItemEls = document.querySelectorAll('.play-item');

  if(!isPlay) {
    audio.play();
    playBtn.classList.add('pause');
    playItemEls[playNum].classList.add('item-active');
    isPlay = true;
  } else if(playItemEls[playNum].classList.contains('item-active')) {
    audio.pause();
    isPlay = false;
    playBtn.classList.remove('pause');
    playItemEls[playNum].classList.remove('item-active');
  } else {
    audio.src = playList[playNum].src;
    audio.play();
    playItemEls.forEach( el => {
    el == playItemEls[playNum] ?
    el.classList.toggle('item-active') :
    el.classList.remove('item-active');
  });
  }
};

export function playNext() {
  playNum === playList.length - 1 ? playNum = 0 : playNum += 1;
  playAudio();
}

export function playPrev() {
  playNum === 0 ? playNum = playList.length - 1 : playNum -= 1;
  playAudio();
}

export function playTrack(trackNum) {
  playNum = trackNum;
  if(audioName.textContent !== playList[playNum].title) {
    audio.src = playList[playNum].src;
  }
  playAudio();
}

export function turnOffVolume() {
  audio.volume > 0 ?
  audio.volume = 0 :
  audio.volume = volume.value;
  setVolumeBtn();
}

function setVolumeBtn() {
  if(audio.volume == 0) {
    volumeBtn.classList.remove('volume-on');
    volumeBtn.classList.add('muted');
  } else {
    volumeBtn.classList.remove('muted');
    volumeBtn.classList.add('volume-on');
  }
}