
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
    "If I wanted to hear from someone who doesn’t know what they’re talking about, I’d just talk to myself.",
    "I’m in no mood to talk today. If you need me, I’ll be busy ignoring you.",
    "I’m so glad we’re all here to have this completely unnecessary discussion about something that literally no one cares about.",
    "Thanks for the advice. I’ll file it right next to the last piece of unsolicited wisdom I didn’t ask for.",
        "I’m not arguing, I’m just explaining why I’m right.",
        "If you were any more inbred, you’d be a sandwich.",
        "I’m not lazy, I’m on energy-saving mode.",
        "I’m not short, I’m concentrated awesome.",
        "I’m not a complete idiot, some parts are missing.",
        "I put the ‘Pro’ in procrastinate.",
        "I don’t need an inspirational quote. I need coffee.",
        "I’m on a seafood diet. I see food, and I eat it.",
        "I’d agree with you, but then we’d both be wrong.",
        "I’m not weird, I’m just limited edition.",
        "I’m not great at the advice. Can I interest you in a sarcastic comment?",
        "I’m on a 30-day diet. So far, I’ve lost 15 days.",
        "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
        "I don’t have a bucket list, but my fucket list is a mile long.",
        "I’m not sure how many problems I have because math is one of them.",
        "I’m not a photographer, but I can picture us together.",
        "I’m not actually funny, I’m just really mean and people think I’m joking.",
        "I’d explain it to you, but I left my patience in the other room.",
        "I’m not late. I’m just early for tomorrow.",
        "I told my boss I needed a raise. I told him I was the best in the company. He said, 'Well, we need to hire someone with experience.' I said, 'Well, I need a raise.'"
    ];






export{
    loadTheme, 
    applyTheme,
    linkShared,
    friends,
    postImages,
    dates,
    postCaptions
};