import {nav} from "./navs.js";
import { loadTheme,notifications, friends,profileImages } from "./miniFunctionlities.js";


loadTheme()
document.body.appendChild(nav())




document.querySelectorAll(".notificationText h5").forEach( notifier =>{
    notifier.innerText = friends[Math.floor(Math.random() * friends.length)]
})
document.querySelectorAll(".notificationText p").forEach(notification =>{
    notification.innerText = notifications[Math.floor(Math.random() * notifications.length)]
})
document.querySelectorAll(".notificationImage").forEach( profileImage =>{
    profileImage.style.background = `url(${profileImages[Math.floor(Math.random() * profileImages.length )]})`
    profileImage.style.backgroundSize = "cover";
    profileImage.style.backgroundPostiton = "center";
    profileImage.style.backgroundRepeat = "no-repeat";
})
