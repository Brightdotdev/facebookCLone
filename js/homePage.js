import { nav } from "./navs.js";
import { loadTheme } from "./miniFunctionlities.js";
import { postCardClass } from "./postCard.js";




  const navigation = nav("home");
document.body.appendChild(navigation);



const userName  = document.getElementById('userName')

const userData = JSON.parse(localStorage.getItem('fbUserData'));
userName.textContent = `${userData.firstName} ${userData.surName} `;

const posts  = document.querySelector('.postsContainer')

loadTheme()

const postCardInitialization = async () =>  {
     let i  =  1
while(i<10){
  new postCardClass(posts)
    i++
}
}

postCardInitialization();
