
import { friends, loadTheme } from "./miniFunctionlities.js"
import { nav } from "./navs.js"
import { postImages } from "./miniFunctionlities.js"
import { postCardClass } from "./postCard.js"

document.addEventListener('DOMContentLoaded', () =>{

  const navigtion = nav()
document.body.appendChild(navigtion)
loadTheme()


const userPhotos = document.querySelectorAll('.photos')

console.log(userPhotos);



userPhotos.forEach((photos, index) =>{
    photos.style.background = `url(${postImages[index]})`;
    photos.style.backgroundPosition = "center" 
    photos.style.backgroundRepeat = `no-repeat`;
    photos.style.backgroundSize = `cover`;
})



const AddFriendCard = () =>{
    const AddFriendCardDiv = document.createElement('div');
    const AddFriendCardDivStyles = document.createElement('style');
    AddFriendCardDiv.innerHTML = 
    `

    <div class="AddFriendCard">

    <div class="AddFriendCardImage">
        <p class="friendName" style='font-weight:700;margin:0;' >
            that person
                   </p>
    </div>
    
          <div class="closeAddFriendCard">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"   >
           <title>Close Post</title>
           <g id="closeAddFriendCardSvg">
           <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="var(--neutralColor)"stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" />
           </g>
           </svg>
      </div>
      <button class="addFriend" >Add Friend</button>
      <button class="removeFriend" >Remove</button>
    </div>  
    `

    AddFriendCardDivStyles.textContent = 
    `
    
.AddFriendCard{
  display: flex;
  flex-direction: column;
  background: var(--accentColor);
  align-items: center;
  justify-content: flex-start;
  width: 12rem;
  gap: .5rem;
  position: relative;
  border-radius: 1rem;
  padding: 0 0 1rem;
  border:1px solid var(--accentColor2);
}

.AddFriendCardImage{
  width: 100%;
  height: 9rem;
  background: red;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: .5rem;
  color: var(--textColor);
  position:relative;
  cursor: pointer;
}

.AddFriendCardImage > p {
    z-index: 2;
  }
  .AddFriendCardImage:after{
  content:'';
  position:absolute;
  width:100%;
  height: 60%;
  bottom:0;
  left: 0;
  z-index: 1;
  background: linear-gradient(to top, var(--accentColor2) 1%,  transparent 99%);
  }
.closeAddFriendCard{
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
align-items: center;  
position: absolute;
background: #000;
border-radius: 2rem;
right: 5px;
top: 5px;
cursor: pointer;
}
.closeAddFriendCard > svg{
  width: 1.5rem;
}
.AddFriendCard button{
  width: 90%;
  padding: .2rem;
  border-radius: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
}
.AddFriendCard button:hover {
  filter:brightness(1.2);
  }

.AddFriendCard button:nth-of-type(1){
  background: var(--mainBlue);
  color: var(--textColor);
}

.AddFriendCard button:nth-of-type(2){
  background: var(--accentColor2);
  color: var(--mainBlue);
}
    `
 AddFriendCardDiv.querySelector('.closeAddFriendCard').addEventListener('click', () =>{
    AddFriendCardDiv.style.display = 'none'
});
 AddFriendCardDiv.querySelector('.removeFriend').addEventListener('click', () =>{
    AddFriendCardDiv.style.display = 'none'
});;

const AddFriendCardImage =  AddFriendCardDiv.querySelector('.AddFriendCardImage')
AddFriendCardImage.style.background =`url(${postImages[Math.floor(Math.random() * postImages.length )]})`;
AddFriendCardImage.style.backgroundPosition = "center" 
AddFriendCardImage.style.backgroundRepeat = `no-repeat`;
AddFriendCardImage.style.backgroundSize = `cover`;
const userName = friends[Math.floor(Math.random() * friends.length )]
AddFriendCardDiv.querySelector('.friendName').innerText = userName;
 AddFriendCardDiv.querySelector('.addFriend').addEventListener('click', () =>{
    AddFriendCardDiv.querySelector('.removeFriend').style.display = 'none';
    AddFriendCardDiv.querySelector('.addFriend').innerText = userName + " has just being added"
});


    document.head.appendChild(AddFriendCardDivStyles);
    return AddFriendCardDiv
 }


const userFriendsImage = document.querySelectorAll('.userFriendsImage img')
console.log(userFriendsImage);
userFriendsImage.forEach((userFriend) =>{
    userFriend.src = `${postImages[Math.floor(Math.random() * postImages.length )]}`;
})
loadTheme()


 document.querySelectorAll('.friendName').forEach((userFriends) =>{
    userFriends.innerText = friends[Math.floor(Math.random() * friends.length)]
    userFriends.style.padding ='0'
    userFriends.style.margin ='0'
    userFriends.style.zIndex ='2'
    userFriends.style.color ='var(--textColor)'


});
 document.querySelectorAll('.friendImageCard').forEach((profileImage) =>{
    profileImage.style.background = `url(${postImages[Math.floor(Math.random() * postImages.length)]})`;
    profileImage.style.backgroundPosition = "center" 
    profileImage.style.backgroundRepeat = `no-repeat`;
    profileImage.style.backgroundSize = `cover`;
    profileImage.style.borderRadius = `.5rem`;
});

const test =  document.querySelector('.stuff')

for(let fNum = 0; fNum <= 20; fNum++){
    
test.appendChild(AddFriendCard())
test.appendChild(AddFriendCard())
test.appendChild(AddFriendCard())

}



 document.getElementById('closeAndOpenPeople').addEventListener('click', ()=>{
    test.classList.toggle('unActive');
    document.querySelector('.closeAndOpenPeople svg').classList.toggle('rotate')
});


const userPostSection = document.querySelector('.rightContents')

const userData = JSON.parse(localStorage.getItem('fbUserData'));
document.title = `${userData.surName} ${userData.firstName}'s profile | faceTextbook`;


 const userPostCard = () =>{
    const  userPost = new postCardClass(userPostSection);
   const userPostElement = userPost.returnPostCardElement()

    const postUser = userPostElement.querySelector('.uploderName');
    const postAtricle = userPostElement.querySelector('.postPopUpArticle')
    postUser.innerText =`${userData.firstName} ${userData.surName}`    
    postAtricle.querySelector('h4').innerText = `${userData.firstName} ${userData.surName}'s post`;
   return userPost
 }
for (let i = 0; i <= 10; i++) {
  userPostCard()
}
const userProfileTextName = document.getElementById('userProfileTextName')


userProfileTextName.innerText =`${userData.firstName} ${userData.surName} `
})