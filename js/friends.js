import { nav } from "./navs.js";
import { loadTheme } from "./miniFunctionlities.js";

const navigation = nav('friends');

document.body.appendChild(navigation);
loadTheme()