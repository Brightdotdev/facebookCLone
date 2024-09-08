import { loadTheme } from "./miniFunctionlities.js";
       

loadTheme();
        const videos = document.querySelectorAll('video');

        for(const video of videos){
            video.addEventListener('click', function() {
                if(video.paused) {
                    video.play()
                }else {
                    video.pause()
                    
                }
            })
        }

        document.querySelectorAll(".closeReels").forEach(closePage =>{
            closePage.addEventListener("click", () =>{
                window.location.href = './homepage.html';
            })
        })