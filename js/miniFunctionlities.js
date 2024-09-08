
const applyTheme = (theme) =>{
    document.body.classList.remove('darkMode', 'lightMode');
    if (theme === 'off') {
        document.body.classList.add('lightMode');
    } else if (theme === 'default') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.add('lightMode');
        }
        document.body.classList.add('darkMode');
    }
}



const createPostsPopUp = (createPostsDiv) =>{
   const  createPostsPopUpDiv =   document.createElement("div");
   const  createPostsPopUStyle =   document.createElement("style");

   createPostsPopUpDiv.innerHTML =
   `
 <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Create post</h2>
                <span class="close">&times;</span>
            </div>
            <hr>
            <!-- Modal Sub-Header with Profile and Privacy -->
            <div class="modal-sub-header">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="Profile"
                    class="profile-pic">
                <div class="header-text">
                    <p class="name">John Doe</p>
                    <button class="privacy-btn">&#128100; Friends &#9660;</button>
                </div>
            </div>

            <!-- Modal Input Field -->
            <textarea placeholder="What's on your mind, User?" class="post-input"></textarea>
            <!-- Modal Footer with Icons -->
            <div class="modal-footer">
                <p>Add to your post</p>
                <div class="icon-container">
                    <button class="icon-btn">&#128247;</button>
                    <button class="icon-btn">&#128100;</button>
                    <button class="icon-btn">&#128515;</button>
                    <button class="icon-btn">&#127758;</button>
                    <button class="icon-btn">GIF</button>
                    <button class="icon-btn">...</button>
                </div>
            </div>
            <!-- Post Button -->
            <button class="post-btn" disabled>Post</button>
        </div>
    </div>
   `
   
createPostsPopUStyle.textContent =
`

/* Modal styling */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bgColor);
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
        align-items: center;
    justify-content: center;
        z-index: 2000000;
        display: none;


}

/* Modal Content */
.modal-content {
    background-color: var(--accentColor);
    max-width: 500px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 2px 10px var(--accentColor2);
}

/* Modal Header */
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

/* Close button */
.close {
    font-size: 17px;
    cursor: pointer;
    color: var(--textColor);
    background: var(--accentColor2);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Horizontal line */
hr {
    border: none;
    border-top: 1px solid var(--accentColor2);
    margin: 0;
}

/* Modal Sub-Header */
.modal-sub-header {
    display: flex;
    align-items: center;
    padding: 15px;
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.header-text {
    margin-left: 10px;
    font-size: 20px;
    font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.name , h2{
    margin: 0;
    font-weight: bold;
    color: var(--textColor);
}
button{
    color: var(--textColor);
}

.privacy-btn {
    background-color: var(--accentColor2);
    border: none;
    cursor: pointer;
    font-size: 10px;
    color: var(--textColor);
    padding: 5px 8px;
    border-radius: 5px;
}

/* Input Field */
.post-input {
    width: calc(100% - 40px);
    height: 150px;
    margin: 0 15px 15px;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    resize: none;
}

textarea::placeholder {
    font-size: 20px;
}

.color-btn {
    background-color: var(--accentColor);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-weight: bold;
    color: var(--textColor);
}

/* Modal Footer Icons */
.modal-footer {
    margin: 15px;
    padding: 5px;
    border-top: 1px solid var(--accentColor2);
    border: 1px solid var(--neutralColor);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-footer p {
    color: var(--textColor);
    font-weight: 600;
}

.icon-container {
    display: flex;
    justify-content: space-between;
}

.icon-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
}

textarea {
    background: var(--accentColor);
}
/* Post Button */
.post-btn {
    width: calc(100% - 30px);
    margin: 0 15px 15px;
    padding: 10px;
    font-size: 16px;
    background-color: var(--mainBlue);
    color: var(--textColor);
    border: none;
    border-radius: 6px;
    cursor: not-allowed;
}

/* Fade-in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
/* Responsiveness */
@media (max-width: 62rem) {
    p{
        font-size: .8rem;
    }
    .modal-content {
        min-width: 100vw;
        min-height: 100vh;
        border-radius: 0;
    }
}
`


const userData = JSON.parse(localStorage.getItem('fbUserData')); 


if(userData) {
createPostsPopUpDiv.querySelector(".name").innerText = `${userData.firstName} ${userData.surName}`;

}
// Get modal element
const modal = createPostsPopUpDiv.querySelector("#myModal");



// Get button that opens the modal
const btn = document.querySelector(`${createPostsDiv}`);
console.log(btn, modal);

// Get the <span> element that closes the modal
const span = createPostsPopUpDiv.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
  document.querySelector("header").style.display = "none";

};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.querySelector("header").style.display = "flex";

};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector("header").style.display = "none";
  }
};

document.body.appendChild(createPostsPopUpDiv);


document.head.appendChild(createPostsPopUStyle);
}




const loadTheme = () =>{
 const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    applyTheme(storedTheme);
} else {
    applyTheme('default');
}
}

const linkShared = (preference) =>{
    const linkSharedDiv = document.createElement('div');
    linkSharedDiv.innerHTML = 
    `
    <a class="linnkShared" >
        ${preference}
    </a>
    `
    const linkSharedStyles = document.createElement('style');
    linkSharedStyles.textContent = 
    `
    .linnkShared{
    position:absolute;
    top:50%;
    left:70%
        width: 200px;height: 50px;
    background:var(--accentColor2);
    color: var(--textColor);
    display: flex;
    align-items: center;justify-content: center;
    font-size: 1.5rem;border-radius: .5rem;
    animation: popUp 3s ease-in-out  1 forwards ;
    }
    @keyframes popUp {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
    
        40% {
            transform: translateY(-300%);
            opacity: 0.8;
        }
    
        80% {
            transform: translateY(-400%);
            opacity: 0.4;
        }
    
        100% {
            transform: translateY(-500%);
            transform: scale(1.1);
            opacity: 0;
        }
    }
    
    `
    document.head.appendChild(linkSharedStyles);
    return linkSharedDiv;
    }


    const friends = [
        "Chuck Wagon",
        "Raph(Oh Chim)",
        "Bright",
        "Emann",
        "Bill Board",
        "Clyde Humps",
        "Ella Vator",
        "Forcewind",
        "Holly Daze",
        "suckondeezBallz",
        "Melody Maker",
        "Sal Ami",
        "Mrr Finbarr"
      ];
      
    const postImages = [
        '../assets/images/postImages/catttt.jpg',
        '../assets/images/postImages/cool.jpg',
        '../assets/images/postImages/donn.jpg',
        '../assets/images/postImages/download.jpg',
        '../assets/images/postImages/drakee.jpg',
        '../assets/images/postImages/this.jpg',
        '../assets/images/postImages/th.jpg',
        '../assets/images/postImages/ehnnn.jpg',
        '../assets/images/postImages/OIP.jpg'
    ]
    const profileImages = [
        '../assets/images/profileImages/catimage.jpg',
        '../assets/images/profileImages/download.jpg',
        '../assets/images/profileImages/haaha.jpg',
        '../assets/images/profileImages/coolkat.jpg',
        '../assets/images/profileImages/naruto.jpg',
        '../assets/images/profileImages/justAnother.jpg',
        '../assets/images/profileImages/yeee.jpg',
        '../assets/images/profileImages/thanuss.jpg',
        '../assets/images/profileImages/baddiiee.jpg'
    ]

    const globeEmoji = '\u{1F30D}';
    const saturnEmoji = '\u{1FA90}';
    const galaxyEmoji = '\u{1F30C}';
    const venusSymbol = '\u{2640}';
    const sunEmoji = '\u{2600}';
    const moonEmoji = '\u{1F315}';
    const starEmoji = '\u{2B50}';
    const starWhiteEmoji = '\u{2606}';
    const cometEmoji = '\u{2604}';
    const asteroidEmoji = '\u{1FA90}';
    const milkyWayEmoji = '\u{1F30C}';
    const globeEmoji3 = '\u{1F310}';
    const newMoonEmoji = '\u{1F311}';
    const waningCrescentMoonEmoji = '\u{1F318}';
    const firstQuarterMoonEmoji = '\u{1F313}';
    const fullMoonEmoji = '\u{1F315}';
    const lastQuarterMoonEmoji = '\u{1F317}';
    const sunBehindCloudEmoji = '\u{1F325}';
    const sunBehindSmallCloudEmoji = '\u{1F324}';
    const cloudWithLightningEmoji = '\u{1F329}';
    const globeEmoji2 = '\u{1F310}';

    const dates = [
        "February 30, 2024 " + globeEmoji2 ,  
        "April 31, 2024 " + globeEmoji ,     
        "November 31, 2024 " + saturnEmoji ,  
        "June 31, 2024 " + sunBehindCloudEmoji ,      
        "January 0, 2024 " +venusSymbol ,   
        "The day before yesterday " + sunBehindSmallCloudEmoji ,     
        "Last Week " + sunEmoji ,         
        "The day after the end of time " + moonEmoji , 
        "Yesterweek " + waningCrescentMoonEmoji ,        
        "Tomorrow's Yesterday " + milkyWayEmoji ,
        "The 13th Month "+ asteroidEmoji  ,  
        "Midnight of the 31st Hour " + starEmoji ,       
        "Adultood " + cometEmoji ,  
        "July 20, 1969 " + newMoonEmoji,    
        "September 1, 1939 " + lastQuarterMoonEmoji,  
        "November 9, 1989 " + globeEmoji3,
        "2000 BC " + starEmoji,
        "-10 BC " + firstQuarterMoonEmoji,
        "200 AC " +cloudWithLightningEmoji,
        "That one Zombie Aplcalype " + fullMoonEmoji,
        "My Birthday " + starWhiteEmoji,
        "Your Birthday " +galaxyEmoji
      ];
      

const postCaptions = [
    "I’m so glad we’re all here to have this completely unnecessary discussion about something that literally no one cares about.",
    "I’m not lazy, I’m on energy-saving mode.",  
        "I’m not a complete idiot, some parts are missing.",
        "I put the ‘Pro’ in procrastinate.",
        "I don’t need an inspirational quote. I need coffee.",
        "I’m on a seafood diet. I see food, and I eat it.",
        "I’d agree with you, but then we’d both be wrong.",
                "I’m not a photographer, but I can picture us together.",
    "Just tried to adult today. Worst decision ever. 0/10, do not recommend.",
    "I put my phone in airplane mode, but it’s still on the ground. Someone explain.",
    "Can someone teach me how to cook? My smoke detector is tired of our relationship.",
    "I’m on a seafood diet. I see food, and I eat it. Help.",
    "Does anyone else talk to themselves? Or am I just having really deep conversations with a weirdo?",
    "Pro tip: Never trust stairs. They’re always up to something.",
    "I’m not lazy, I’m on energy-saving mode.",
    "The gym called, but I didn’t answer. It must not be that important.",
    "I wish everything was as easy as getting fat.",
    "The only thing I’m exercising is my right to eat more pizza.",
    "They say money can’t buy happiness, but it can buy pizza, which is kinda the same thing.",
    "How do people make life decisions? I can’t even decide what to watch on Netflix.",
    "Sometimes I wish I was an octopus, so I could slap eight people at once.",
    "I don’t need a hairstylist. My pillow gives me a new hairstyle every morning.",
    "I’m not arguing. I’m just explaining why I’m right.",
    "If stress burned calories, I’d be a supermodel by now.",
    "Who needs a therapist when you have a fridge full of snacks?",
    "Out of my mind. Back in five minutes.",
    "Life status: Currently holding it together with a bobby pin.",
    "I’m on a new diet. It’s called, ‘I have no money, so I just don’t eat.’",
        "I told my boss I needed a raise. I told him I was the best in the company. He said, 'Well, we need to hire someone with experience.' I said, 'Well, I need a raise.'",
        "Why do they call it 'beauty sleep' when you wake up looking like a troll?",
        "I don’t mean to brag, but I finished my 14-day diet in 3 hours and 12 minutes.",
        "Why do they call it a 'selfie' if there’s no one else in the picture to appreciate your efforts?",
        "Trying to make fewer bad decisions today. Baby steps.",
        "I can’t believe I forgot to go to the gym today. That’s 7 years in a row now.",
        "Dear math, I’m not a therapist. Solve your own problems.",
        "I’m on the ‘seafood’ diet. I see food, and I eat it. Again.",
        "How do you delete the whole day and start over?",
        "You call it ‘bad attitude,’ I call it ‘charisma.’",
        "No one talks about Jesus’s miracle of having 12 close friends in his 30s.",
        "I told myself I should stop drinking, but I’m not about to listen to a drunk who talks to themselves.",
        "Running late is my cardio.",
        "My hobbies include eating and complaining that I’m gaining weight.",
        "Why is Monday so far from Friday, and Friday so close to Monday?",
        "Is it just me, or does running out of snacks feel like a personal failure?",
        "Do you ever just look at someone and think, ‘This is why we can’t have nice things’?",
        "I have enough money to live comfortably for the rest of my life… if I die next week.",
        "I think the hardest part of the day is waking up and trying to be a functioning adult.",
        "Can I sleep over at your house? I don’t feel like being responsible today.",
        "I’m at the age where I need a morning coffee just to get ready for my afternoon nap."
    ];



    const notifications = [
        "Congrats! You've successfully wasted another minute of your life.",
        "Your device is 99% charged, and so are your anxiety levels.",
        "Achievement unlocked: Still not a millionaire.",
        "Just a friendly reminder: You left the oven on... in a parallel universe.",
        "Breaking News: Your fridge called, it said you're out of snacks.",
        "You've reached 10,000 steps today! Just kidding, we don't care.",
        "Procrastination level: Expert. You're doing great (at doing nothing).",
        "Alert! This is not a drill! But also, nothing important.",
        "Your coffee is cold. Just like your sense of humor.",
        "Your inbox is full. Of junk. Congratulations!",
        "Reminder: You still haven’t won the lottery. Keep dreaming!",
        "Fun fact: The word 'bed' actually looks like a bed.",
        "Warning! Low battery. Both your phone and your social life.",
        "Alert: You haven't checked your social media in 5 minutes. The world might have ended.",
        "You’ve reached your daily limit of doing nothing. Time to overachieve!",
        "This notification is as pointless as the 'close door' button in an elevator.",
        "Breaking News: Your to-do list is longer than your attention span.",
        "This app isn't going to use itself. Or is it?",
        "Congratulations! You've unlocked the achievement of being slightly above average!",
        "Warning: Too much awesomeness detected. Please contain yourself.",
        "Just so you know, your procrastination level is now at expert.",
        "Reminder: Your coffee needs coffee before you can function.",
        "Heads up! You're on the verge of reaching peak laziness.",
        "Alert: You have one new notification—your brain is taking a vacation.",
        "Caution: Daydreaming in progress. Proceed with snacks!",
        "Guess what? You’ve just won a gold medal in overthinking!",
        "Breaking News: Your snack-to-work ratio is dangerously low!",
        "Note: Your life called. It wants you to stop binge-watching and do something productive—like napping."
    
    ];



export{
    loadTheme, 
    applyTheme,
    linkShared,
    createPostsPopUp,
    friends,
    postImages,
    dates,
    postCaptions,
    notifications,
    profileImages
};