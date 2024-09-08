const signUpModal = () =>{
    const signUpModalDiv = document.createElement('main');
    const signUpModalStyles = document.createElement('style');

    signUpModalDiv.classList.add('signUpContainer')
    signUpModalDiv.innerHTML = 
    `
    <form id="signUpCard" class="signUpCard">
        <div class="signupHeader">
            <article class="signUpText">
             
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="goBackSignUp">
        <path d="M15 6L9 12L15 18" stroke="var(--neutralColorLight)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
                <h3 style="margin: 0;padding: 0;font-size: 1.5rem;" >Sign Up</h3>
                <p style="margin: 0;padding: 0;font-size: .9rem; "  > It's quick and easy</p>    
            </article>
            <a href="#" class="closeSignUp">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="closeSignupSvg" width="2rem" height="2rem">
                    <title>Close Post</title>
                    <g>
                    <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="var(--neutralColorLight)"stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    </svg>
               </a>
        </div>

        <div class="userInfo">
            <input type="text" placeholder="First name" class="firstName" id="firstName">
            <input type="text" placeholder="Surname" class="surName" id="surName">
            <input type="text" placeholder="email adress or phone number" class="numberOrEmail" id="numberOrEmail">
            <input type="password" placeholder="password ?" class="userPasswordSignUp" id="userPasswordSignUp">
        </div>

        <div class="DOB radioAndSelects">
            <label for="DOB">Date of birth?</label>
           <div class="selectDivs">
            <select class="birthMonth" >
                <option>Jan</option>
                <option>Fab</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option selected >Aug</option>
                <option>Sep</option>
                <option>Nov</option>
                <option>Dec</option>
                </select> 
                
                <select class="birthDay">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option  >7</option>
                    <option>8</option>
                    <option>9</option>
                    <option selected >10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    </select>

                    <select class="birthYear">
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option selected >2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    </select>
           </div>
        </div>

        <div class="gender radioAndSelects">
            <label for="gender">Gender?</label>
<div class="selectDivs">   
    <div class="genderSelects">
        <h6>Female</h6>
        <input type="radio" name="gender" id="female" value="female" class="hiddenRadio">
        
    </div>
    <div class="genderSelects">
        <h6>male</h6>
        <input type="radio" name="gender" id="male" value="male" class="hiddenRadio">
    </div>
    <div class="genderSelects">
        <h6>custom</h6>
        <input type="radio" name="gender" id="custom" value="custom" class="hiddenRadio">
        
    </div>
</div>
        </div>
        <div class="termsOfUse">
        <article style="display: flex; gap:.5rem;align-items: center;">
    <h5 class="userNameWelcome" style="color: var(--textColorLight);margin: 0;padding:0;" >Hi,</h5>
    <h5  style="color: var(--neutralColorLight);margin: 0;padding:0;" > Welcome to</h5>
    <h4  style="color: var(--mainBlue);margin: 0;padding:0;" >FaceTextBook</h4>
          </article>
  <p style="color: var(--textColorLight);margin: 0;padding:0; >
               People who use our service may have uploaded your contact information to <br> Facebook. 
                <span>Learn more.</span>
            </p>
            <p style="color: var(--textColorLight);margin: 0;padding:0; >
                By clicking Sign Up, you agree to our <span>   Terms, Privacy Policy</span> and <span> Cookies Policy.</span> <br> You may receive SMS notifications from us and can opt out at any time.
            </p>
        </div>
        <button  class="signUpButton" id="signUpButton"> Sign Up</button>
    <a href="#" class="iAlreadyHaveAnAccount" >I already  Have an account</a>

    </form>
    `
signUpModalStyles.textContent =  
`
 .signUpContainer{
 
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    z-index: 1000000;
  }
  .signUpCard{
    width: 30rem;
    height: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    background: var(--accentColorLight);
    border-radius: .5rem;
  }
  .signupHeader{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--neutralColorLight);
    height: 4rem;
    padding: .5rem;
    & h3, p{
      color: var(--textColorLight);
    } 
  }
  .userInfo{
    padding: .5rem;
    display: flex;
    flex-wrap: wrap;  
    gap: .5rem;
    width: 100%;
  }
  .userInfo  input
  {
    background: var(--accentColorLight2);
    border: none;
    border:  1px solid var(--neutralColorLight);
    color: var(--textColorLight);
    outline: none;
    padding-left: 1rem;
    height: 2rem;
    border-radius: .5rem;
  }
  .userInfo  input::placeholder{
    color: var(--neutralColorLight);
  }
  .firstName, .surName{
    width: 49%;
  }
  .userPasswordSignUp, .numberOrEmail{
    width: 100%;
  }

  .radioAndSelects{
    padding: .5rem;
    gap: .5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .radioAndSelects label{
    width: 100%;
  }
  .selectDivs{
    display: flex;
    justify-content: space-between;

  }
.selectDivs > select, .genderSelects{
  width: 30%;
  border-radius: .5rem;
  height: 2.5rem;
  color: var(--textColorLight);
  background: transparent;
  border: 1px solid var(--neutralColorLight);
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 0;
  margin: 0;
}
.selectDivs > option{
  background: var(--accentColorLight);
}
.genderSelects > h6{
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
}

.termsOfUse{
  width: 100%;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.termsOfUse > p{
  font-size: .8rem;
  padding: 0;
  margin: 0;
}
.termsOfUse p > span{
  color: var(--mainBlue);
}

.signUpButton{
  padding: .5rem 1rem;
  border-radius: .5rem;
  font-weight: 800;
  background:  #36A420;
  width: 12rem;
  margin-bottom: 0rem;
  color: var(--accentColorLight);
  cursor: pointer;
}
.iAlreadyHaveAnAccount{
  display: none;
  font-weight: 500;
  color: var(--mainBlue);
  flex: 1;
  align-items: flex-end;
  padding: 1rem;
}

#goBackSignUp{
  width: 2rem;
}

.unActive, #goBackSignUp{
  display: none;
}


@media (max-width:40rem) {
  
  .signUpCard{
    width: 100%;
    height: 100%;
  border-radius: 0;
  }
  .signupHeader{
    border: none;
  }
  .closeSignUp,.termsOfUse{
    display: none;
  }


  #goBackSignUp, .iAlreadyHaveAnAccount{
    display: flex;
  }
}
`
document.head.appendChild(signUpModalStyles);



const modalResponsivenes = () => {
  const signUpCard = signUpModalDiv.querySelector('.signUpCard');
  const signupHeader = signUpModalDiv.querySelector('.signupHeader');
  const userInfo = signUpModalDiv.querySelector('.userInfo');
  const radioAndSelects = signUpModalDiv.querySelectorAll('.radioAndSelects');
  const termsOfUse = signUpModalDiv.querySelector('.termsOfUse');
  const signUpButton = signUpModalDiv.querySelector('.signUpButton');
  const goBackSignUp = signUpModalDiv.querySelector('#goBackSignUp');
  const DOB = signUpModalDiv.querySelector('.DOB');
  const genderSection = signUpCard.querySelector('.gender');
  const selectDivs = genderSection.querySelector('.selectDivs');
  const closeSignUp = signUpCard.querySelector(".closeSignUp")
  
  let currentStep = 1; 
  let userData = {}; 

  
  const deviceFormApplication = () => {
    if (window.innerWidth <= 600) {
      showStep(currentStep);
      applyMobileStyles();
    
      signUpButton.removeEventListener("click", handleFormSubmissionSmallScreens);
      signUpButton.addEventListener("click", handleFormSubmissionSmallScreens);
    }
    if(window.innerWidth >= 600){
     
      handleLargeScreenForm();
      signUpButton.addEventListener('click', (e) =>{
        e.preventDefault()
        handleFormSubmission()
      })
    }

  };

  const applyMobileStyles = () => {
    signUpCard.style.gap = "2rem";
    signUpButton.style.borderRadius = "4rem";
    signUpButton.style.background = "var(--mainBlue)";
    signUpButton.style.color = "var(--accentColorLight)";
    signUpButton.innerText = "Next";
    signUpButton.style.width = "18rem";
    signUpButton.style.fontSize = "1.5rem";
    signUpButton.style.margin = "0";
    userInfo.querySelector('.userPasswordSignUp').style.width = "100%";
    userInfo.querySelector('.numberOrEmail').style.width = "100%";
  };

  const showStep = (step) => {
  
    switch (step) {
      case 1:
        showNameStep();
        break;
      case 2:
        showUserPersonalDataStep();
        break;
      case 3:
        showCreateNewUserStep();
        break;
    }
  };

  const showNameStep = () => {
    signUpModalDiv.querySelector("#goBackSignUp").style.display = "none"
    signUpButton.style.borderRadius = "4rem";
    signUpButton.style.background = "var(--mainBlue)";
    signUpButton.style.color = "var(--accentColorLight)";
    signUpButton.innerText = "Next";
    signUpButton.style.width = "18rem";
    signUpButton.style.fontSize = "1.5rem";
    signUpButton.style.margin = "0";
    userInfo.querySelector('.firstName').style.width = "48.5%"
    userInfo.querySelector('.surName').style.width = "48.5%"

    termsOfUse.style.display ="none";    
    userInfo.style.display ="flex";
    radioAndSelects.forEach(radios => (radios.style.display = "none"));
    DOB.style.display = "none";
    selectDivs.style.display = "none";
    genderSection.style.display = "none";
    signupHeader.querySelector('.signUpText h3').innerText = "What's your name?";
    signupHeader.querySelector('.signUpText p').innerText = "Use your real name, man.";
  };

  const showUserPersonalDataStep = () => {

    signUpModalDiv.querySelector("#goBackSignUp").style.display = "flex"

    signUpButton.style.borderRadius = "4rem";
    signUpButton.style.background = "var(--mainBlue)";
    signUpButton.style.color = "var(--accentColorLight)";
    signUpButton.innerText = "Next";
    signUpButton.style.width = "18rem";
    signUpButton.style.fontSize = "1.5rem";
    signUpButton.style.margin = "0";

    signupHeader.querySelector('.signUpText h3').innerText = "User Information";
    signupHeader.querySelector('.signUpText p').innerText = "";
    termsOfUse.style.display ="none";
    userInfo.style.display ="none";
    radioAndSelects.forEach(radios => (radios.style.display = "flex"));
   
   
    DOB.style.display = "flex";
    DOB.innerHTML = `
    <p style="margin: 0;padding: 0;">Input Your Birthday</p>
    <input type="date" name="date" id="userDate">
  `;
    DOB.style.border = "1px solid var(--neutralColorLight)";
    DOB.style.width = "90%";
    DOB.style.borderRadius = ".5rem";
    DOB.style.background = "var(--accentColorLight)";
    DOB.querySelector('input').style.background = "transparent";
    

    selectDivs.style.display = "flex";
    selectDivs.style.flexDirection = "column";
    selectDivs.style.alignItems = "center";
    selectDivs.style.gap = ".5rem";
    
      genderSection.style.display = "flex"
      genderSection.querySelector('label').style.fontSize = "1.5rem";
      genderSection.querySelector('label').style.fontWeight = "600";
      genderSection.querySelectorAll('.genderSelects').forEach(gender => {
      gender.style.width = "90%";
      gender.style.justifyContent = "space-between";
      gender.style.padding = ".5rem";
      gender.querySelector('h6').style.fontSize = '1.5rem';
      gender.querySelector('h6').style.fontWeight = '400';
    });
    genderSection.style.display = "flex";
  };

  const showCreateNewUserStep = () => {
    signUpModalDiv.querySelector("#goBackSignUp").style.display = "flex"

    signUpButton.style.borderRadius = "4rem";
    signUpButton.style.background = "var(--mainBlue)";
    signUpButton.style.color = "var(--accentColorLight)";
    signUpButton.innerText = "Next";
    signUpButton.style.width = "18rem";
    signUpButton.style.fontSize = "1.5rem";
    signUpButton.style.margin = "0";


    termsOfUse.style.display = "flex";
    termsOfUse.querySelector("article").style.display ="flex";
    termsOfUse.querySelector(".userNameWelcome").innerText = `Hi ${userData.firstName}`
    userInfo.classList.add("unActive");
    radioAndSelects.forEach(radios => (radios.style.display = "none"));
    DOB.style.display = "none";
    selectDivs.style.display = "none";
    genderSection.style.display = "none";
    signUpButton.innerText = "Sign up and Continue";
    signUpButton.style.background = "#36A420";
  }; 




  const createNewUser = () => {
    alert(`User created: ${JSON.stringify(userData)}`);
    const userDataInput = JSON.stringify(userData);
    localStorage.setItem("fbUserData", userDataInput);

    document.body.classList.add("fade-out");
    setTimeout(() =>{
    window.location.href = "./html/homePage.html";
   }, 500)

  };





  goBackSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentStep === 1){
      signUpModalDiv.style.display =  "none";
    }
    else if (currentStep > 1) {
      currentStep--; 
      showStep(currentStep);
    }
  });

 

  
  const handleLargeScreenForm = () => {
      signUpButton.style.borderRadius = ".5rem";
    signUpButton.style.background = "#36A420";
    signUpButton.style.color = "var(--accentColorLight)";
    signUpButton.innerText = "Sign Up";
    signUpButton.style.width = "12rem";
    signUpButton.style.fontSize = "1rem";
    signUpButton.style.margin = "0";

      signupHeader.querySelector('.signUpText h3').innerText = "Sign Up";
      signupHeader.querySelector('.signUpText p').innerText = "It's quick and easy";
       termsOfUse.style.display = "flex";
       termsOfUse.querySelector("article").style.display ="none";
    userInfo.classList.remove("unActive");
    radioAndSelects.forEach(radios => (radios.style.display = "flex"));
    DOB.style.display = "flex";
    selectDivs.style.display = "flex";
    genderSection.style.display = "flex";

      signUpCard.style.gap = ".2rem";
      signUpButton.innerText = "Sign Up";
  }
  

  const handleFormSubmission = () => {      

      userData.firstName = userInfo.querySelector('.firstName').value || "Stranger";
      userData.surName = userInfo.querySelector('.surName').value || "Doe";
      userData.email = userInfo.querySelector('.numberOrEmail').value || "email@email.com";
      userData.password = userInfo.querySelector('.userPasswordSignUp').value || "1234";
  
  
      const selectedGender = Array.from(genderSection.querySelectorAll('input[type="radio"]')).find(gender => gender.checked);
      userData.gender = selectedGender ? selectedGender.value : "non-binary";
  
      const birthDay = DOB.querySelector(".birthDay").value;
      const birthMonth = DOB.querySelector(".birthMonth").value;
      const birthYear = DOB.querySelector(".birthYear").value;

      userData.birthDate = `${birthDay}/${birthMonth}/${birthYear}` || "10/10/2343";
  
      createNewUser();
 
  }



  const handleFormSubmissionSmallScreens =(e) =>{
  
    console.log("Curent step " + currentStep);
    
      e.preventDefault();
      if (currentStep === 1) {
        console.log("Yes im being clicked");
        userData.firstName = userInfo.querySelector('.firstName').value || "Stranger";
        userData.surName = userInfo.querySelector('.surName').value || "Doe";
        userData.email = userInfo.querySelector('.numberOrEmail').value || "email@email.com";
        userData.password = userInfo.querySelector('.userPasswordSignUp').value || "1234";
        currentStep++; 
        showStep(currentStep);
      } else if (currentStep === 2) {
        const selectedGender = Array.from(genderSection.querySelectorAll('input[type="radio"]')).find(gender => gender.checked);
        userData.gender = selectedGender ? selectedGender.value : "non-binary";
        userData.birthDate = DOB.querySelector('#userDate').value || "10/10/2343";
        currentStep++;
        showStep(currentStep);
      } else if (currentStep === 3) {
        currentStep++
        showStep(currentStep);
        createNewUser();
      }
  }
  
closeSignUp.addEventListener("click", (e) =>{
  e.preventDefault()
  const  userData = localStorage.getItem("fbUserData");
  if(userData){
    signUpModalDiv.style.display =  "none";
  }
  else{
    alert("You need to sign up first lol")
  }
})


  deviceFormApplication();
  window.addEventListener('resize', deviceFormApplication);

};




modalResponsivenes();
return signUpModalDiv;
}





export {
    signUpModal
}