import { quote, author } from "../dom-elements/elements";
import { getRandomNum } from "./get-random-num";
import { lang } from "./change-lang";

export async function getQuotes() {
  const quotes = '../assets/data.json';
  try {
    const res = await fetch(quotes);
    if(!res.ok) {
      throw new Error('Ошибка при получении данных')
    }
    const data = await res.json();
    const quoteNum = getRandomNum(0, data.length);
    quote.textContent = data[quoteNum][lang].text;
    author.textContent = data[quoteNum][lang].author;
  } catch(error) {
    console.log(error)
  }
}