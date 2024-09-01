import { nav } from "./js/navs.js";
import { loadTheme} from "./js/miniFunctionlities.js";
import { postCardClass } from "./js/postCard.js";

const navigation = nav();
document.body.appendChild(navigation);
const userName  = document.getElementById('userName')

userName.innerText = 'Gooarrr'


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