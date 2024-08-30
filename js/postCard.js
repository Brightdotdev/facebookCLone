import { postCardDivElement } from "./postCardElement.js";
import { commentElement} from "./postCardElement.js";


class postCardClass  {

    constructor(containerElement){
    this.containerElement = containerElement;
    this.postCardElement = this.getPostCardElement();
    this.containerElement.appendChild(this.postCardElement);
    this.normalState = true;
    this.largePostCard = this.largePostCard.bind(this);
    this.normalPostCard = this.normalPostCard.bind(this);
    this.reactionPopUpDiv = this.reactions();
   
    this.normalPostCardInitialisation = this.normalPostCardInitialisation.bind(this);
    this.largePostCardInitialisation = this.largePostCardInitialisation.bind(this);
    

    this.postCardElement.querySelector('.closePopUp').addEventListener('click', this.normalPostCardInitialisation);
    this.postCardElement.querySelector('.postImage').addEventListener('click', this.largePostCardInitialisation);

    this.reactionDiv = this.postCardElement.querySelector('#likePost');
    
    this.postLikes = Math.floor(Math.random() *  200 );
    this.comments = Math.floor(Math.random() *  200 );
    this.shares = Math.floor(Math.random() *  200 );

    this.postCardElement.querySelector('.postLikesNumber').innerText =  this.postLikes
    this.postCardElement.querySelector('.postCommentsNumber').innerText = this.comments
    this.postCardElement.querySelector('.postSharesNumber').innerText =  this.shares
    this.reactionDiv.addEventListener('mouseover', () =>{
        this.reactionDiv.appendChild(this.reactionPopUpDiv);
    })

    this.reactionDiv.addEventListener('mouseleave', () =>{
        if(this.reactionDiv.contains(this.reactionPopUpDiv)){
            setTimeout(() =>{
                this.reactionDiv.removeChild(this.reactionPopUpDiv);
            }, 1500)
        }
    })

    this.reactionDiv.addEventListener('touchstart', () =>{
        this.reactionDiv.appendChild(this.reactionPopUpDiv);
    })
    
    this.reactionDiv.addEventListener('touchend', () =>{
        if(this.reactionDiv.contains(this.reactionPopUpDiv)){
            setTimeout(() =>{
                this.reactionDiv.removeChild(this.reactionPopUpDiv);
            }, 1500)
        }
    })
    
    this.reactionDiv.addEventListener('click', (e) =>{
                e.preventDefault();
                this.reactionDiv.querySelector('svg').style.fill = 'var(--mainBlue)';
                 this.reactionDiv.querySelector('h6').style.color = 'var(--mainBlue)';
                 this.postCardElement.querySelector('.postLikesNumber').innerText =  this.postLikes++

        })
    

}

    getPostCardElement(){
        return postCardDivElement();
    } 


    returnPostCardElement(){
        return this.postCardElement
    }

    largePostCard() {
        this.normalState = false;
        const postCard = this.postCardElement        
        const postAtricle = postCard.querySelector('.postPopUpArticle');
        const postCardContainer = postCard.querySelector('.postCardContainer');
        const comments = postCard.querySelector('.comments') 
        const commentInput = postCard.querySelector('.userCommentInput');
        const commentDiv = commentElement();

        postCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        document.body.style.overflow = 'hidden'
      
        const  largeResponisveness = () => {
         if(!this.normalState){

          comments.appendChild(commentDiv);     
         postCard.querySelector('.closePost').style.display = 'none';
         postAtricle.style.display = 'flex';
            
             if(window.innerWidth <= 1100 ) {
                 postCard.style.top = '0';
                 postCard.style.left = '0';
             postCardContainer.style.width = '40rem';
             postCardContainer.style.height = '100%';
             comments.style.display = 'flex'
        document.body.style.overflow = ''
        postCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

             }
            if (window.innerWidth <= 800 ) {
             comments.style.display = 'flex'
                 postCard.style.top = '0';
                 postCard.style.left = '0';
             postCardContainer.style.width = '35rem';
             postCardContainer.style.height = '100%';
             postCard.style.position = 'relative';
             document.body.style.overflow = ''
             postAtricle.querySelector('h4').style.fontSize = '1rem';
        postCard.style.zIndex = '100000';
        postCardContainer.style.zIndex = '10000'; 


             postCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
             }
         else if (window.innerWidth >= 1100) {
            postAtricle.style.display = "flex";
             comments.style.display = 'flex'
             postCardContainer.style.width = '45rem'
             postCardContainer.style.overflow = 'hidden'
             postCardContainer.style.height = '35rem'
             postCardContainer.style.position = 'relative'
           commentInput.style.display = 'flex'
             postCard.style.position = 'relative';
             postCard.style.width = '100%'
             postCard.style.height = '100vh'
             postCard.style.display = 'flex';
             postCard.style.justifyContent = 'center';
             postCard.style.alignItems = 'center'; 
          postCard.style.width = '100vw'; 

             postCard.style.zIndex = '10000'; 
            postAtricle.querySelector('h4').style.fontSize = '2rem'
             postCardContainer.querySelector('.popUpUserCommentText').style.fontSize = '1rem'       
             postCardContainer.querySelector('.commentInteractions').style.left = '200px' 
             postCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
         }
      if (window.innerWidth <= 626 ) {
            postCardContainer.style.width = '100%'           
           }
         }
        } 
        window.addEventListener('resize', largeResponisveness);
        largeResponisveness()
     
    }

    normalPostCard() {
        this.normalState = true;
        const postCard = this.postCardElement        
        const postAtricle = postCard.querySelector('.postPopUpArticle');
        const postCardContainer = postCard.querySelector('.postCardContainer');
        const comments = postCard.querySelector('.comments') 
        const commentInput = postCard.querySelector('.userCommentInput');
        postCard.style.position = 'relative';   
        postCard.style.width = ''
        postCardContainer.style.width ='33rem';
        postCard.style.zIndex = '0'; 

        postCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        document.body.style.overflow = ''
        const normalResponisveness =  () => {
     
     if(this.normalState){
        postCard.querySelector('.closePost').style.display = 'flex';
         postCardContainer.style.height ='fit-content';
         postCardContainer.style.position ='relative';
         postCard.style.position ='relative';
         comments.style.display = 'none';     
         postAtricle.style.display = "none";
         if(window.innerWidth <= 1100 ) {
             
             postCard.style.position = 'relative';         
            postCardContainer.style.width ='33rem';
            commentInput.style.display = 'flex';
                }
               if (window.innerWidth <= 800 ) {
                 
                    postCardContainer.style.width = '33rem';
                  postAtricle.querySelector('h4').style.fontSize = '1rem';
                postCardContainer.querySelector('.popUpUserCommentText').style.fontSize = '.8rem'     
                postCardContainer.querySelector('.commentInteractions').style.left = '50px'       
                commentInput.style.display = 'flex'
                }
            else if (window.innerWidth >= 1100) {
             
             postCardContainer.style.position = 'relative';
             postCardContainer.style.width = '33rem'           
              commentInput.style.display = 'flex'
                postCard.style.position = 'relative';
                commentInput.style.display = 'flex'
                postCard.style.height = 'fit-content';
                 
            }
            if (window.innerWidth <= 626 ) {
             postCardContainer.style.width = '100%' 
             commentInput.style.display = 'none'         
            }
     }
        } 
        window.addEventListener('resize', normalResponisveness);
        normalResponisveness();
    }


    normalPostCardInitialisation(){
        console.log('normal post card coming up boss');
        window.scrollTo(0, this.scrollPosition);
        this.normalPostCard();
    }

    largePostCardInitialisation(){
        console.log('large post card coming up boss');
        this.largePostCard();
    }



    reactions(){
            const reaction = document.createElement('div');
            const reactionStyles = document.createElement('style');
            reaction.innerHTML = 
            `
            <div class='reactionPopUp'>
        
            
            <a href="#" class='likeSvgReactionPopUp'  data-id="Like" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--mainBlue)"  
            viewBox="0 0 24 24" id='likeSvgReactionPopUp' >
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
            <title>Like Post</title>
            </svg>
        </a>
        
        <a href="#" class='heartSvgReactionPopUp' data-id="Love" >
            <svg xmlns="http://www.w3.org/2000/svg"  
            viewBox="-1.1 0 1500 1500" id="heartSvgReactionPopUp">
            <style>.love{fill:#fff}.loveee{fill:rgb(196, 11, 11)}</style>
            <path class="love" d="M541.7 1092.6H376.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c-.1 13-10.7 23.6-23.6 23.6zM622.9 1003.5V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1.1-22.5.1-22.5-29.9z"/>
            <ellipse class="loveee" cx="748.9" cy="750" rx="748.9" ry="750"/>
            <path class="love" d="M748.9 541.9C715.4 338.7 318.4 323.2 318.4 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1z"/>
            </svg> 
        </a>
        
        <a href="#" class='hahaSvgReactionPopUp'  data-id="Haha">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" id="hahaSvgReactionPopUp">
        
                <style>.hahaCircle{fill:#fff}.hahaEye{fill:#ffda6b}
                    .st2{fill:none;stroke:#262c38;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
                    .hehe{fill:#262c38}.hahastuff{fill:#f05266}.hahaTears{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;
                        stroke-linejoin:round;stroke-miterlimit:10}</style>
                
                <path class="hahaCircle" d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6zM624 1003.5V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30z"/>
                
                <path class="hahaCircle" d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1z"/>
                
                <ellipse class="hahaEye" cx="750.2" cy="751.1" rx="750" ry="748.8"/>
                
                <g>
                
                <path id="mond" class="hehe" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9H755.3z"/>
                
                <path id="tong" class="hahastuff" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5z"/>
                
                <path id="linker_1_" class="hahaTears" d="M1200.2 411L993 511.4l204.9 94.2"/>
                
                <path id="linker_4_" class="hahaTears" d="M297.8 411L505 511.4l-204.9 94.2"/>
                
                </g>
            <title>Funny post hahhahha</title>
                </svg>
        </a>
        
        
        
        <a href="#"  class='wowSvgReactionPopUp' data-id="WOW" >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1500 1500" id="wowSvgReactionPopUp">
                <style>.wowCircle{fill:#ffda6b}.wowEye{fill:#262c38}.wowMouth{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}</style>
                <circle class="wowCircle" cx="750" cy="750" r="750"/>
                <ellipse class="wowEye" cx="748.3" cy="1046.3" rx="220.6" ry="297.2"/>
                <ellipse transform="rotate(-81.396 402.197 564.888)" class="st1" cx="402.2" cy="564.9" rx="155.6" ry="109.2"/>
                <ellipse transform="rotate(-8.604 1093.463 564.999)" class="st1" cx="1093.2" cy="564.9" rx="109.2" ry="155.6"/>
                <path class="wowMouth" d="M320.9 223s69.7-96.7 174-28.6M1177.5 223s-69.7-96.7-174-28.6"/>
                <title>Wow this post made me say wow</title>
            </svg>
        </a>
        
        
        <a href="#"  class='sadSvgReactionPopUp' data-id="Sad">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" aria-hidden="true" role="img" id="sadSvgReactionPopUp" preserveAspectRatio="xMidYMid meet">
        
                <radialGradient id="IconifyId17ecdb2904d178eab19930" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse">
                
                <stop offset=".5" stop-color="#fde030">
                
                </stop>
                
                <stop offset=".92" stop-color="#f7c02b">
                
                </stop>
                
                <stop offset="1" stop-color="#f4a223">
                
                </stop>
                
                </radialGradient>
                
                <path d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z" fill="url(#IconifyId17ecdb2904d178eab19930)">
                
                </path>
                
                <path d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z" fill="#eb8f00">
                
                </path>
                
                <g>
                
                <path d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57c.7 1.41.74 2.58.14 3.13c-.63.41-1.45.41-2.08 0c-.31-.15-.62-.32-.9-.52a28.849 28.849 0 0 0-33.61 0c-.28.2-.58.37-.9.52c-.63.42-1.45.42-2.08 0c-.6-.55-.56-1.72.14-3.13c1.81-3.64 8.82-11.57 19.64-11.57z" fill="#422b0d">
                
                </path>
                
                <g fill="#422b0d">
                
                <path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7c5.3.08 10.42-1.88 14.32-5.47a17.24 17.24 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28z">
                
                </path>
                
                <path d="M86.12 31.52l-.1-.1a1.841 1.841 0 0 0-2.56-.45a1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47c3.9 3.59 9.02 5.54 14.32 5.45c2.4-.11 2.29-3.31.08-3.7c-5.8-.97-11.09-3.87-15.03-8.23z">
                
                </path>
                
                </g>
                
                <radialGradient id="IconifyId17ecdb2904d178eab19931" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse">
                
                <stop offset=".46" stop-color="#29b6f6">
                
                </stop>
                
                <stop offset="1" stop-color="#1e88e5">
                
                </stop>
                
                </radialGradient>
                
                <path d="M19.52 107c-8.46 0-15-8.21-15-15.24c0-4.94 2.21-10.67 5.34-18.61c.39-1.17.91-2.35 1.43-3.65c1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47c5.47 12.24 7 17.19 7 22.13c.19 6.97-6.45 15.14-14.78 15.14z" fill="url(#IconifyId17ecdb2904d178eab19931)">
                
                </path>
                
                <path d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51c0-3.14.64-19.26 3.34-17c4.38 3.67 5.63 15.33 2.91 19.51z" fill="#81d4fa">
                
                </path>
                
                <path d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.19 0 8-3.54 8-9.41s-3.81-9.42-8-9.42z" fill="#422b0d">
                
                </path>
                
                <path d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024">
                
                </path>
                
                <path d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.19 0 8-3.54 8-9.41s-3.79-9.42-8-9.42z" fill="#422b0d">
                
                </path>
                
                <g>
                
                <path d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024">
                
                </path>
                
                </g>
                
                </g>
            <title>the post is pretty sad</title>
                </svg>
        </a>
        
        
        <a href="#" class='angrySvgReactionPopUp'data-id="Angry" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 128 128" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"  id='angrySvgReactionPopUp'>
        
                <radialGradient id="IconifyId17ecdb2904d178eab5531" cx="63.6" cy="2584.9" r="56.96" gradientTransform="translate(0 -2522)" gradientUnits="userSpaceOnUse">
                
                <stop offset=".5" stop-color="#fde030">
                
                </stop>
                
                <stop offset=".92" stop-color="#f7c02b">
                
                </stop>
                
                <stop offset="1" stop-color="#f4a223">
                
                </stop>
                
                </radialGradient>
                
                <path d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z" fill="url(#IconifyId17ecdb2904d178eab5531)">
                
                </path>
                
                <path d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z" fill="#eb8f00">
                
                </path>
                
                <g>
                
                <g fill="#422b0d">
                
                <path d="M83.94 103.14a2.21 2.21 0 0 1-.89-.62c-9.73-10.11-25.82-10.42-35.93-.69c-.23.23-.47.46-.69.69c-.24.28-.55.49-.89.62c-.75.28-1.6.12-2.2-.41c-.59-.52-.79-1.35-.49-2.08C45.83 93 54.69 87 64.74 87s18.91 6 21.89 13.64c.3.73.1 1.56-.49 2.08c-.6.53-1.45.69-2.2.42z">
                
                </path>
                
                <path d="M58.14 68.82C55.9 66 46.67 60.58 43.34 59c-1.24-.57-2.53-1.03-3.85-1.37c-.24-.07-.5-.1-.75-.1A2.87 2.87 0 0 0 36 59.82a2.92 2.92 0 0 0 1.67 3.32c1.57.77 4.31 2.23 7.15 3.84A7.83 7.83 0 0 0 41 73.71v1.46c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-1.46v-.17c1.07-.07 2.03-.71 2.5-1.67c.49-1 .35-2.19-.36-3.05z">
                
                </path>
                
                <path d="M93.52 59.82a2.867 2.867 0 0 0-2.79-2.27c-.25 0-.51.03-.75.1c-1.32.33-2.61.79-3.85 1.35c-3.33 1.56-12.56 7-14.8 9.8a2.84 2.84 0 0 0-.33 3.07c.48.97 1.43 1.6 2.51 1.67v1.63c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-1.46c0-2.75-1.45-5.3-3.81-6.71c2.84-1.61 5.58-3.07 7.15-3.84c1.29-.56 2-1.97 1.67-3.34z">
                
                </path>
                
                </g>
                
                <path d="M48.12 68.45a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024">
                
                </path>
                
                <path d="M80.63 68.45a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024">
                
                </path>
                
                </g>
            <title>This made me mad</title>
                </svg>
        </a>
        
            </div>
            `
          reactionStyles.textContent = 
          `
          
        .reactionPopUp{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          padding: .5rem;
          border-radius: .3rem;
          background: var(--accentColor);
          position: absolute;
          top:-65px;
          left:-20px;
          z-index:2;
        
        }
        .reactionPopUp a > svg{
          width: 30px;
          
          &:hover{
            transform: scale(1.2);
          }
        }
          `
          document.head.appendChild(reactionStyles);
          const angry = reaction.querySelector('.angrySvgReactionPopUp');
          const sad = reaction.querySelector('.sadSvgReactionPopUp');
          const haha = reaction.querySelector('.hahaSvgReactionPopUp');
          const wow = reaction.querySelector('.wowSvgReactionPopUp');
          const heart = reaction.querySelector('.heartSvgReactionPopUp');
          const like = reaction.querySelector('.likeSvgReactionPopUp');
          
        
         
          const elements = [angry, sad, haha, heart,wow,like]
        
          elements.forEach( (element, index) =>{
            element.addEventListener('click', (e)=>{
              e.preventDefault();
              const dataValue = element.getAttribute('data-id');
              const elementSvg = element.querySelector('svg');
              const enagagemantReplaceMent = this.postCardElement.querySelector('.userLike');
              const enagagemantText = this.reactionDiv.querySelector('h6');
              enagagemantReplaceMent.innerHTML = elementSvg.outerHTML;
              this.postCardElement.querySelector('.postLikesNumber').innerText =  this.postLikes++

              switch (dataValue)
              {
                case 'Haha':
                
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem; color: #c1c100;"> ${dataValue} <h6/>` ;
                break;
                case 'Like':
               
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem; color: var(--mainBlue);"> ${dataValue} <h6/>` ;
                break;
                case 'Love':
               
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem;   color: rgb(196, 11, 11);"> ${dataValue} <h6/>` ;
                break;
                case 'WOW':
             
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem; color: rgb(231, 169, 0);"> ${dataValue} <h6/>` ;
                break;
                case 'Angry':
                
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem; color: #c1c100;"> ${dataValue} <h6/>` ;
                break;
                case 'Sad':
                
                enagagemantText.innerHTML =`<h6 style="font-size: 1rem; color: #c1c100;"> ${dataValue} <h6/>` ;
                break;
                default:
                  console.log('omo');
                  break;
              }
            })
          })
            return reaction
          
    }    
}

export{
    postCardClass
}

