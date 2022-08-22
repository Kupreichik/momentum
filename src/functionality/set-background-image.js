import { getFlickrImage } from "./get-flickr-image";
import { getGithabImg } from "./get-github-image";
import { getUnsplashImage } from "./get-unsplash-image";

export function setBg(value) {
  let srcName = value || (localStorage.getItem('bgImage') ? localStorage.getItem('bgImage') : 'unsplash');
  localStorage.setItem('bgImage', srcName);
  
  if(srcName == 'gitHub') {
    getGithabImg();
  };
  if(srcName == 'unsplash') {
    getUnsplashImage();
  };
  if(srcName == 'flickr') {
    getFlickrImage();
  };
}