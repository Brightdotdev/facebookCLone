import { nav } from "./navs.js";
import { loadTheme } from "./miniFunctionlities.js";
const navigation = nav()




console.log("Dont tell me");
document.body.appendChild(navigation);



loadTheme();

/* 

const hamburgerSvgEDivElement = document.querySelector('.menuHambugerSection');

const userName = hamburgerSvgEDivElement.querySelector('.userName')

const friends = hamburgerSvgEDivElement.querySelector('.friends')
const memories = hamburgerSvgEDivElement.querySelector('.memories')
const saved = hamburgerSvgEDivElement.querySelector('.saved')
const groups = hamburgerSvgEDivElement.querySelector('.groups')
const videos = hamburgerSvgEDivElement.querySelector('.videos')
const marketplace = hamburgerSvgEDivElement.querySelector('.marketplace')
const messenger = hamburgerSvgEDivElement.querySelectorAll('.messenger')
const settings = hamburgerSvgEDivElement.querySelectorAll('.settings')

const reels = hamburgerSvgEDivElement.querySelector('.reels')
const feeds = hamburgerSvgEDivElement.querySelector('.userName')
const pages = hamburgerSvgEDivElement.querySelector('.pages')
const events = hamburgerSvgEDivElement.querySelector('.events')
const adsManager = hamburgerSvgEDivElement.querySelector('.adsManager')
const games = hamburgerSvgEDivElement.querySelector('.games')
const settingsAndPrivacyDropDown = hamburgerSvgEDivElement.querySelector('.settingsAndPrivacyDropDown');
const settingsAndPrivacyDropDownUl = hamburgerSvgEDivElement.querySelectorAll('.settingsAndPrivacyDropDownUl li');
const settingsAndPrivacyDropDownSvg = hamburgerSvgEDivElement.querySelector('.settingsAndPrivacyDropDownSvg');



const helpAndSupportDropDown = hamburgerSvgEDivElement.querySelector('.helpAndSupportDropDown');
const helpAndSupportDropDownUl = hamburgerSvgEDivElement.querySelectorAll('.helpAndSupportDropDownUl li');
const helpAndSupportDropDownSvg = hamburgerSvgEDivElement.querySelector('.helpAndSupportDropDownSvg');


userName.textContent = 'haha'

settingsAndPrivacyDropDown.addEventListener('click', () =>{
    settingsAndPrivacyDropDownSvg.classList.toggle('rotate');
settingsAndPrivacyDropDownUl.forEach(list =>{
list.classList.toggle("unActive")
})
})

helpAndSupportDropDown.addEventListener('click', () =>{
    helpAndSupportDropDownSvg.classList.toggle('rotate');
    helpAndSupportDropDownUl.forEach(helpList =>{
        helpList.classList.toggle("unActive")
        })
    })

friends.addEventListener("click", () =>{
    window.location.href = '../html/friends.html'
})

groups.addEventListener("click", () =>{
    window.location.href = '../html/groups.html'
})
videos.addEventListener("click", () =>{
    window.location.href = '../html/videos.html'
})
marketplace.addEventListener("click", () =>{
    window.location.href = '../html/marketPlace.html'
})
feeds.addEventListener("click", () =>{
    window.location.href = '../index.html'
})
pages.addEventListener("click", () =>{
    window.location.href = '../index.html'
})
messenger.forEach(message =>{
    message.addEventListener("click", () =>{
        window.location.href = '../messenger.html'
    })
})

settings.forEach(setting =>{
    setting.addEventListener("click", () =>{
        window.location.href = '../settings.html'
    })
})

 */