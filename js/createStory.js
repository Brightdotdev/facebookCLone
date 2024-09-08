import { loadTheme } from "./miniFunctionlities.js";
import { nav } from "./navs.js";


loadTheme()
document.body.appendChild(nav("home"));


const userData = JSON.parse(localStorage.getItem('fbUserData')); 
if(userData){
document.querySelector(".storyUserName").innerText = `${userData.firstName} ${userData.surName}`;

}