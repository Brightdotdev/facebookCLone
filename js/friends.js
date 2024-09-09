import { nav } from "./navs.js";
import { loadTheme,profileImages } from "./miniFunctionlities.js";

const navigation = nav('friends');

document.body.appendChild(navigation);
loadTheme()

console.log(profileImages[Math.floor(Math.random() * profileImages.length)]);

