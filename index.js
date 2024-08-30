import { nav } from "./js/navs.js";
import { loadTheme} from "./js/miniFunctionlities.js";
import { postCardClass } from "./js/postCard.js";

const navigation = nav();
document.body.appendChild(navigation);
const userName  = document.getElementById('userName')

userName.innerText = 'Goobarrr'


const posts  = document.querySelector('.postsContainer')



let i = 1;

while(i <= 20){ 
new  postCardClass(posts)
    console.log(i);
    i++
}

loadTheme()