import { body } from "../dom-elements/elements";
import { photoTag } from "../dom-elements/elements";



export async function getUnsplashImage() {
  const tag = photoTag.value ? photoTag.value : 'nature';

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=bzTJKAE7r_YYiBay2b27G9qIxcVz7ecrA2UmHMTymeA`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    let imgPath = data.urls.regular;
    const img = new Image();
  img.src = imgPath;
  img.onload = () => {
    body.style.backgroundImage = `url('${imgPath}')`;
  };
  } catch {
    console.log(Error)
  }
}
