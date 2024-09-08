import { loadTheme} from "./js/miniFunctionlities.js";
import { signUpModal } from "./js/signup.js";

loadTheme()

const userData = localStorage.getItem('fbUserData');

const checkUser = async () =>{
  
  const userObjectData = await JSON.parse(userData);

  if(userObjectData){
  console.log(userData, userObjectData);
  document.getElementById("userName").value = userObjectData.firstName
  document.getElementById("userPassword").value = userObjectData.password
}
else{
  console.log("no one of such");
  document.body.appendChild(signUpModal())
}
}

window.addEventListener('load', checkUser)

document.addEventListener("DOMContentLoaded", () =>{
     
 document.getElementById("createNewAccount").addEventListener("click", () =>{
  document.body.appendChild(signUpModal())
})

const switchPagesAnimation = () => {
  const welcomePopUpDiv = document.createElement("div");
  const welcomePopUpStyles = document.createElement('style');
    
  welcomePopUpDiv.innerHTML =
  `   
    <article class="welcome animation">
      <h4 class="welcomeText">Welcome Mf</h4>
    </article>
  `;

  welcomePopUpStyles.textContent =
  `
  @keyframes grow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: .5;
    }
    50% {
      opacity: .8;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
     background: hsla(210, 4%, 40%, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0;
  }
  .animation {
    animation: grow 7s 1s 1 forwards;
  }
  .welcomeText {
    position: relative;
    color: var(--textColor);
    background: var(--accentColor);
    padding: 1rem;
    border-radius: .5rem;
  }
  `;
  
  document.head.appendChild(welcomePopUpStyles);
  
    const userData = JSON.parse(localStorage.getItem('fbUserData'));

  if (userData && userData.firstName) {
    welcomePopUpDiv.querySelector('h4').innerText = `Welcome ${userData.firstName}`;
  } else {
    welcomePopUpDiv.querySelector('h4').innerText = `Welcome!`; 
  }


  document.body.appendChild(welcomePopUpDiv);
  


  setTimeout(() => {
    welcomePopUpDiv.remove();
  }, 7500); 

  return welcomePopUpDiv;
};

  

document.getElementById("logIn").addEventListener("click", () =>{

  if(userData){
    switchPagesAnimation()
    setInterval(() => {
      window.location.href = '../html/homePage.html';
    }, 5000);
  }else{
    alert("you need to sign up first lol")
  }
})

document.querySelector(".forgotten").addEventListener("click", () =>{
  alert("omo");
})
})