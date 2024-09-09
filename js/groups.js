import { nav } from "./navs.js";
import { loadTheme } from "./miniFunctionlities.js";




document.addEventListener('DOMContentLoaded', ()=>{
    

    document.body.appendChild(nav("groups"))

    loadTheme()
    
    document.querySelectorAll(".promise").forEach(promise => {
        promise.addEventListener("click", () =>{
            window.location.href = "../html/discoverGroups.html"
        })
    })
      


document.querySelector('.left-header').addEventListener('click', () =>{
    window.location.href = './groups.html'

})
})