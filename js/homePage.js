import { nav } from "./navs.js";
import { friends, loadTheme,profileImages, createPostsPopUp } from "./miniFunctionlities.js";
import { postCardClass } from "./postCard.js";


document.addEventListener("DOMContentLoaded", () =>{
  
  const navigation =  nav("home");
const userName  = document.getElementById('userName')

const posts  = document.querySelector('.postsContainer')

loadTheme()

const postCardInitialization = async () =>  {
  let i  =  1
while(i<10){
  new postCardClass(posts)
  i++
}
}

const storyInitializetion = () =>{
document.querySelectorAll(".friendStory").forEach(friend =>{
  friend.style.background = `url(${profileImages[Math.floor(Math.random() * profileImages.length)]})`
  friend.style.backgroundPosition = "center";
  friend.style.backgroundSize = "cover";

  friend.querySelector(".friendName").innerText = `${friends[Math.floor(Math.random() * friends.length)]}`
  friend.addEventListener("mouseover", () =>{
    friend.style.backgroundRepeat = "no-repeat";
    friend.style.backgroundSize = "250%";
  })
  friend.addEventListener("mouseout", () =>{
    friend.style.backgroundRepeat = "no-repeat";
    friend.style.backgroundSize = "cover";
  })

})

document.querySelector("#rightChevron").addEventListener('click', (e) => {
  e.preventDefault()
 console.log("right is being clicked");

  document.querySelector(".storyContainer").scrollBy({
    left: 300, 
    behavior: 'smooth'  
  });
});

document.querySelector("#leftChevron").addEventListener('click', (e) => {
  e.preventDefault()
 console.log("left is being clicked");
  document.querySelector(".storyContainer").scrollBy({
    left: -300,
    behavior: 'smooth'  
  });
});

}


const main =  async () =>{
  let seemore = false

document.querySelector(".seeMore").addEventListener("click", () =>{
  if (!seemore){
    seemore = true;
    document.querySelector(".extraActionsLists").style.overflowY = "auto";
  document.querySelector(".seeMore svg").classList.add("rotate")
  document.querySelector(".seeMore h5").innerText = "See Less"
  }
  else{
    seemore = false;
    document.querySelector(".extraActionsLists").style.overflow = "hidden";
  document.querySelector(".seeMore svg").classList.remove("rotate")
  document.querySelector(".seeMore h5").innerText = "See More"
  }
}) 

createPostsPopUp(".whatsOnYourMind");

document.body.appendChild(navigation);
 const userData = await JSON.parse(localStorage.getItem('fbUserData'));
userName.textContent = `${userData.firstName} ${userData.surName} `;
  storyInitializetion();
await postCardInitialization();

} 

main();
})