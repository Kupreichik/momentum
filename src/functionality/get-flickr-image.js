import { body, photoTag } from "../dom-elements/elements";
import { getRandomNum } from "./get-random-num";

let randomNum = getRandomNum(0, 100);

export async function getFlickrImage() {
  const tag = photoTag.value ? photoTag.value : 'nature';

  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=90ecdccc1320009cf7a46da251572a57&tags=${tag}&extras=url_h&format=json&nojsoncallback=1&`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    while(data.photos.photo[randomNum].width_h < 1600 || data.photos.photo[randomNum].url_h == undefined) {
      randomNum +=1;
    }
    
    let imgPath = data.photos.photo[randomNum].url_h;
    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
    body.style.backgroundImage = `url('${imgPath}')`;

    randomNum += 2;
  };
  } catch {
    console.log(Error)
  }
}