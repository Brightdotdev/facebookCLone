import { friends, postImages, postCaptions,dates  } from "./miniFunctionlities.js";


const postCardDivElement = () =>{
    const postCardDiv = document.createElement('div');
    const postCardStyles = document.createElement('style');
    postCardDiv.style.background = 'var(--bgColor)';
    postCardDiv.classList.add('postCard');
    postCardDiv.innerHTML =
    `
     <div class="postCardContainer">
        <article class="postPopUpArticle" >
            <h4 style="padding: 0;font-size: 2rem;margin: 0;" >Friend's Post</h4>
        <a href="#" class="closePopUp">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="closePopUpSvg">
             <title>Close Post</title>
             <g>
             <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="var(--neutralColor)"stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" />
             </g>
             </svg>
        </a>
        </article>
      <div class="postCardContents">
        <div class="postUploader">
            <article class="uploaderProfile">
                <a href="#" class="uploaderImage">
                    <title>Uploader's Profile Image</title>
                </a>
                <div class="uploaderData">
                    <a href="#"  class="uploderName">That Friend  &middot;  </a>
                <a  href="#" class="timeUploaded"> 30 Febuary 2000  &#127757;</a>
                </div>
            </article>
       <div class="closePost">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"   >
            <title>Close Post</title>
            <g id="closePostSvg">
            <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="var(--neutralColor)"stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" />
            </g>
            </svg>
       </div>
        </div>

        <article class="postCaption">
            <p>This is a post that i post bout post because posting is what
                 i like to post about irdk what else 
                to talk about in my post so i'll keep yall posted</p>
        </article>
  
        <div class="postImage">
            <title>Post Image</title>
        </div>

    <div class="engagement">
        <div class="reactions">
<a href="#">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.35 0 1504.4 1504.4" id="likeSvgReaction">
<style>.likee{fill:var(--mainBlue)}.likeFinger{fill:#fff}</style>
<title>Like</title>
<ellipse class="likee" cx="750.8" cy="752.2" rx="750.8" ry="752.2"/><path 
class="likeFinger" d="M378.3 667.5h165.1c13 0 23.6 10.5 23.6 23.6v379.1c0 13-10.5 23.6-23.6 23.6H378.3c-13 0-23.6-10.5-23.6-23.6V691c.1-13 10.6-23.5 23.6-23.5zM624.7 1004.7V733.1c.1-66.9 18.8-132.4 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.8 83.1-35.8 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-1.7.6-2.6 2.5-1.9 4.2.3.7.8 1.3 1.5 1.7 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-1.7.4-2.8 2.2-2.3 3.9.2.9.8 1.6 1.5 2 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-1.7.5-2.7 2.3-2.2 4 .2.7.7 1.4 1.3 1.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1-.1-22.4 0-22.4-29.9z"/>
</svg>
</a>
<a href="#">
<svg xmlns="http://www.w3.org/2000/svg"  
viewBox="-1.1 0 1500 1500" id="heartSvgIcon">
<style>.love{fill:#fff}.loveee{fill:rgb(196, 11, 11)}</style>
<path class="love" d="M541.7 1092.6H376.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c-.1 13-10.7 23.6-23.6 23.6zM622.9 1003.5V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1.1-22.5.1-22.5-29.9z"/>
<ellipse class="loveee" cx="748.9" cy="750" rx="748.9" ry="750"/>
<path class="love" d="M748.9 541.9C715.4 338.7 318.4 323.2 318.4 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1z"/>
</svg> 
</a>
<p style="margin: 0;padding: 0;" class="postLikesNumber" >
24K
</p>                    
    </div>
        <div class="commentsAndShares">  
            <a href="#">
                <p class="postCommentsNumber" >25</p>
                <p>Comments</p>
            </a>
            <a href="#">
                <p class="postSharesNumber" >35</p>
                <p>Shares</p>
            </a>
        </div>
    </div>
    <div class="userEngagement">

     
        <div class="userReactions" id="likePost">
       
       <a href="#" class="userLike">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--neutralColor)"  
                viewBox="0 0 24 24" class="userLikePost" >
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                <title>Like Post</title>
                </svg>
            </a>
            <h6>Like</h6>
        </div>

        <div class="userReactions" >
            <a href="#" class="userComments " >
                <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24"  
                fill="var(--neutralColor)" id='userComment'><path d="M0 0h24v24H0V0z" 
                fill="none"/>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" 
                    id='userComment' />
                    <title>user comment</title>
                </svg>
            </a>
            <h6>Comment</h6>
        </div>

               <div class="userReactions copyPostLink" >
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  id='copyPostLink'  >
<path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke="var(--neutralColor)" 
stroke-width="2" stroke-linecap="round"/>
<title>Copy</title>
</svg>
          </a>
          <h6 style="user-select: none;" >Send</h6>
        </div>



        <div  class="userReactions userShare">
        <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
            fill="none" stroke="none">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <g transform="scale(-1, 1) translate(-24, 0)">
                  <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" fill="none" stroke="var(--neutralColor)"/>
                </g>
                <title>User share</title>
              </svg>
        </a>
        <h6 style="user-select: none;" >Share</h6>
        </div>
    </div>
    <div class="commentsOverFlow">
        <div class="userCommentInput">    
        <div class="userProfileImgComment">

            </div>

            <div class="commentInput">
           <button class="userCommentInputButton" >Tell Us your Opinion</button>
        
        
        <a href="#"> 
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="black"  viewBox="0 -960 960 960" 
             id="addPhotoCommentSvg">
            <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/>
           <title>Add Photo to comment</title>
        </svg>
        </a>
        
        <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 -960 960 960"  fill="black" 
            id='addStickerCommentSvg'><path d="M640-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v440L640-120Zm-40-80v-80q0-33 23.5-56.5T680-360h80v-400H200v560h400ZM440-320h80v-240h120v-80H320v80h120v240Zm160 120Zm-400 0v-560 560Z"/>
                <title>Add Sticker</title> </svg>
        </a>

            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" 
             fill="black" id='addEmojiCommentSvg' >
            <path d="M480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q43 0 83 8.5t77 24.5v90q-35-20-75.5-31.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-32-6.5-62T776-600h86q9 29 13.5 58.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Z"/>
           <title>Add emoji to comment</title>
        </svg>
         </a>
         <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 -960 960 960"  fill="black"
            id='gifCommentSvg' >
            <path d="M340-400h40q17 0 28.5-11.5T420-440v-40h-40v40h-40v-80h80q0-17-11.5-28.5T380-560h-40q-17 0-28.5 11.5T300-520v80q0 17 11.5 28.5T340-400Zm120 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
            <title>Add gif to comment</title></svg>
         </a>

            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
                id="sendCommentIconSvg" viewBox="0 0 32 32" xml:space="preserve">
                    <style type="text/css">
                        .send{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                        .sendd{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
                    </style>
                    <path class="send" d="M26.4,2.9L3.8,15c-0.7,0.4-0.7,1.5,0.1,1.8l20.8,8.7c0.6,0.3,1.3-0.2,1.4-0.8l1.7-20.8  C27.9,3,27.1,2.5,26.4,2.9z"/>
                    <path class="send" d="M26,4L13,20v7.3c0,0.9,1.2,1.4,1.8,0.7L19,23"/>
                    </svg>
            </a>
            </div>
        </div>
    </div>
        <div class="comments">
   
            <h6 style="font-size: 1.5rem;margin: 0;padding: 0;color: var(--textColor); " >Comments</h6>
          
                        </div>  
    </div>
      </div>
    </div>
    `
    postCardStyles.textContent =
    `
    :root {
  
  --mainBlue: #0866FF;
  --mainBlueAccentDark: #394D62;
  --mainBlueAccentLight: #DFE9F2;
  --backgroundColorDark: #18191A;
  --backgroundColorLight: #F0F2F5;
  --accentColorLight: #fff;
  --accentColorLight2: #E4E6E9;
  --accentColorDark: #242526;
  --accentColorDark2: #3a3b3c;
  --textColorDark: #f2f2f2;
  --textColorLight: #0f0f0f;
  --neutralColorDark: #B8BBBF;
  --neutralColorLight: #606266;

  /*Use Only these */
  --bgColor: var(--backgroundColorDark);
  --textColor: var(--textColorDark);
  --accentColor: var(--accentColorDark);
  --accentColor2: var(--accentColorDark2);
  --blueAccent: var(--mainBlueAccentDark);
  --neutralColor: var(--neutralColorDark);
}

.lightMode {
  --bgColor: var(--backgroundColorLight);
  --textColor: var(--textColorLight);
  --accentColor: var(--accentColorLight);
  --accentColor2: var(--accentColorLight2);
  --blueAccent: var(--mainBlueAccentLight);
  --neutralColor: var(--neutralColorLight);
}
.darkMode {
  --bgColor: var(--backgroundColorDark);
  --textColor: var(--textColorDark);
  --accentColor: var(--accentColorDark);
  --accentColor2: var(--accentColorDark2);
  --blueAccent: var(--mainBlueAccentDark);
  --neutralColor: var(--neutralColorDark);
}

@font-face {
  font-family: 'Segoe UI',sans-serif;   
  src: url('../assets/Segoe\ ui\ historic.ttf');
  font-weight: 500;
  font-style: normal;
}
 *, *::after, *::before,
ul,li,a,h5,h1,h2,h3,h4,h5
{
  font-family: 'Segoe UI',sans-serif;
  box-sizing: border-box;
  list-style: none;
  border: 0;
  padding: 0;
  transition: all ease-out .2s;
}

ul,li,a,h5,h1,h2,h3,h4,h5
{
  text-decoration: none;

  max-width: 75ch;
  
}
li > a:hover,
.mediaUpload > a:hover,
.primaryNavigation:hover,
.contact:hover,
.group:hover,
.userReactions:hover
{background: var(--accentColor2);
}
.facebookSearch:hover, 
.secondaryNavigation:hover,
.whatsOnYourMindPostClickable:hover
{
  filter: brightness(1.2);
}
body{
    background: var(--bgColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}






.postCardContainer
{
  background: var(--accentColor);
  display: flex;
  width: 33rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  position: relative;
  border:1px solid var(--accentColor2);
}
.postPopUpArticle {
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--accentColor2);
  background: var(--accentColor);
  justify-content: space-between;
  align-items: center;
  color: var(--textColor);
  z-index: 3;
  border-radius: .5rem .5rem 0 0;
  padding: .5rem;
  display: none;
}
.postCardContents{
  display: flex;
  flex-direction: column;
  position: relative;
/* odd stylings */
  overflow-y: auto; 
  flex-grow: 1;
}


/* Customizing the scrollbar for WebKit browsers (e.g., Chrome, Safari) */
.postCardContents::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
  background-color: transparent; /* No background color */
}

/* Track (background of the scrollbar) */
.postCardContents::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}

/* Thumb (the scroll indicator) */
.postCardContents::-webkit-scrollbar-thumb {
  background-color: var(--accentColor2); /* Color of the scrollbar thumb */
  border-radius: 4px; /* Rounded edges for the scrollbar thumb */
}

/* Optional: Scrollbar styling for Firefox */
.postCardContents {
  scrollbar-width: thin; /* Makes the scrollbar thinner */
  scrollbar-color: var(--accentColor2) transparent; /* Thumb and track color */
}



.closePost{
  display: flex;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: var(--accentColor);
  &:hover{
    filter: brightness(1.4);
  }
}
.postCard svg
{
 width: 2rem;
}
.postUploader,
.postCaption,
.postImage,
.engagement
{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  border-radius:  inherit  ;
  color: var(--textColor);
  position: relative;
}
.uploaderProfile
{
  display: flex;
  align-items: center;
  gap: .5rem;
}
.uploaderImage
{
  background: url('../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 2rem;
  width: 2.5rem;
  height: 2.5rem;
}
.uploaderData
{
  display: flex;
  gap: .3rem;
  flex-direction: column;
  position: relative;
}
.uploaderData a
{
  font: .8em sans-serif;
  transition: color 0.3s ease; 
}
.uploderName {
  color: var(--textColor);
  text-decoration: none;
  transition: color 0.3s ease;
  width:100%;
}




.timeUploaded {
  color: var(--textColor); 
  text-decoration: none;
}

/* Hover effects */
.uploderName:hover {
  text-decoration: underline;}


  
.timeUploaded:hover {
  text-decoration: underline; 
  color: var(--textColor); 
  
}
.postImage{
  background: url('../assets/images/profile.jpg');
  min-height: 20rem;
  border-radius: 0;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
cursor: pointer;
}
.reactions
{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  color: var(--neutralColor);
  position: relative;
}

.reactions a > svg {
 position: absolute;
}
#likeSvgReaction{
  left: 0;
  top: 0px;
  width: 1.2rem;
}
#heartSvgIcon{
  left :14px;
  top: -3px;
  width: 1.5rem;
}
.engagement{
  padding:  1rem 1rem ;
}
.engagement::after
{
  content: '';
  position: absolute;
  width: 95%;
  border-bottom: .1px solid var(--neutralColor);
  bottom: 0;
  left: 15px;
  opacity:.2;
}

.commentsAndShares{
  display: flex;
  gap: 1rem;
&.commentsAndShares a:hover
{
  text-decoration: underline;
}
}
.commentsAndShares a,
.userEngagement,
.userReactions
{
  align-items: center;
  gap: .2rem;
  color: var(--neutralColor);
  display: flex;
}
.userEngagement{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
  position: relative;
}
.userReactions{
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  cursor: pointer;
  height: 2.5rem;
  font-size: 1.5rem;
  position: relative;
  gap: .2rem;
}
.userReactions > h6
{
  pointer-events: none;
}
.userReactions svg {
width: 1.5rem;
}
.userEngagement::after{
  content: '';
  position: absolute;
  width: 95%;
  bottom: 0px;
  border-bottom: .1px solid var(--neutralColor) ;
  opacity:.2;
}
.commentsOverFlow{
  width: 32rem;

}

.userCommentInput
{
display: flex;
width: 100%;
padding: 1rem;
justify-content: space-between;

gap: .5rem;
/* odd styling */


}
.userProfileImgComment{
  background: url('../../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  width: 2.5rem;
  max-height: 2.5rem;
  border-radius: 2rem;
}
.commentInput{
  width: 90%;
  background: var(--accentColor2);
  border-radius: 2rem;
  padding: .2rem;
  gap: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 3rem;
}
.userCommentInputButton{
  width: 75%;
  height: 2.5rem;
  background: none;
  outline: none;
  border: none;
  padding-left: 1rem;
  color: var(--neutralColor);
}


.commentInput a> svg{
  width: 1rem;
  fill: var(--neutralColor);
}
#sendCommentIconSvg{
  display: none;
}

.comments{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: fit-content;

  padding: 1rem;
  display: none;
}



@media (max-width:40rem) {
   
 


  .postCardContainer
  {
    width: 100vw;
    border-radius: 0;
    height: fit-content;
  border:none;

  }
  .postUploader,
  .postCaption,
  .engagement,
  .userEngagement,
.commentsOverFlow,
.userCommentInput
{
  width: 100%;
  padding: .4rem;
}
.uploaderProfile
{
  display: flex;
  align-items: center;
  gap: .2rem;
}
.uploaderImage
{
  background: url('../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 2rem;
  width: 2rem;
  height: 2rem;
}
.uploaderData
{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
}
.uploaderData a
{
  font: .7em sans-serif;
  transition: color 0.3s ease; 
}
.postCaption
{

 width: 100%;
  line-height: 20px;  
}
.postImage{
  height: 18rem;

}

.reactions
{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0;
  color: var(--neutralColor);
  position: relative;
}
.reactions p
{
  font-size: .8rem;
}
.reactions a > svg {
 position: absolute;
}
#likeSvgReaction{
  left: 0;
  top: 0px;
  width: 1rem;
}
#heartSvgIcon{
  left :14px;
  top: 0px;
  width: 1.1rem;
}
.engagement{
  padding: .5rem .5rem ;
}
.engagement::after
{
  display: none;
}

.commentsAndShares{
  display: flex;
  gap: .5rem;
&.commentsAndShares a:hover
{
  text-decoration: underline;
}
}
.commentsAndShares a,
.userEngagement,
.userReactions
{
  align-items: center;
  gap: .2rem;
  color: var(--neutralColor);
  display: flex;
  font-size: .7rem;
}
.userReactions
{
 background: red;
}
.userEngagement a > svg
{
 width: 1.2rem;
}
.userReactions
{
  display: flex;
  align-items: center;
  gap: .2rem;
  justify-content: center;
  font-size: 1rem;
  height: 2rem;
 background: var(--accentColor2);
 border-radius: 2rem;
}
.userReactions:nth-of-type(3){
  display:none;
}
.userCommentInput
{
display: none;
padding: .5rem 1rem;
justify-content: flex-start;
gap: .5rem;
align-items: center;
}
.userEngagement::after{
  display: none;
}
.userProfileImgComment{
  background: url('../../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
}


.commentInput{
  
  background: var(--accentColor2);
  border-radius: 2rem;
  padding: 0;
  height: 2rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 2.5rem;
}
.userCommentInputButton{
  flex: 1;
  height: 2.5rem;
  background: none;
  outline: none;
  border: none;
  color: var(--neutralColor);
}
}
`

const postImage =  postCardDiv.querySelector('.postImage')
const uploaderName = postCardDiv.querySelector('.uploderName') 
const postlink = postCardDiv.querySelector('.copyPostLink');
const postShares = postCardDiv.querySelector('.userShare');
const postAtricle = postCardDiv.querySelector('.postPopUpArticle')


const comments = postCardDiv.querySelector('.comments');


postCardDiv.querySelector('.closePost').addEventListener('click', ()=>{
    postCardDiv.style.display ="none"
    })   
postlink.addEventListener('click', () =>{
    postCardDiv.appendChild(linkShared("link Copied"));
    })
postShares.addEventListener('click', () =>{
    postCardDiv.appendChild(linkShared("link Shared"));
    })


postCardDiv.querySelector('.timeUploaded').innerText = dates[Math.floor(Math.random() * dates.length )]
postCardDiv.querySelector('.postCaption').innerText = postCaptions[Math.floor(Math.random() * postCaptions.length )]
postCardDiv.querySelector('.uploderName').innerText = friends[Math.floor(Math.random() * friends.length )];
postImage.style.background = `url(${postImages[Math.floor(Math.random() * postImages.length )]})`
postImage.style.backgroundRepeat = 'no-repeat';
postImage.style.backgroundPostiton = 'cover';
postImage.style.backgroundSize= 'cover';

postCardDiv.querySelector('.postCaption').style.minWidth = '100%'

const userName = friends[Math.floor(Math.random() * friends.length )]


postAtricle.querySelector('h4').innerText = userName + "'s post";
uploaderName.innerText = userName
postCardDiv.querySelector('.uploaderImage');

document.head.appendChild(postCardStyles);
return postCardDiv
} 



const commentElement = () =>{
    const commentDiv = document.createElement('div');
    const commentStyles = document.createElement('style');
  commentDiv.classList.add("comment")

    commentDiv.innerHTML =
    `
    
   <div class="commentData">
    <div class="popUpCommentUserProfile">
    </div>
    <div class="commentInfo">
        <h6 class="commenter" style="margin: 0;padding: 0;font-weight: 800;letter-spacing: 1px;" >Comenter</h6>
        <p  class="commentText" style="margin: 0;padding: 0;font-size: .9rem;" > commenting on comments commenting on comments commenting on commentscommenting on commentscommenting on comments </p>
    </div>


   </div>
    
<div class="commentEngagements">
<div class="commentReactions">
    <h6  class='commentTime'  >1 d</h6>
    <h6>Like</h6>
    <h6>Reply</h6>
</div>

<div class="commentInteractions">
  
 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.35 0 1504.4 1504.4" id="likeSvgReaction">
    <style>.likee{fill:var(--mainBlue)}.likeFinger{fill:#fff}</style>
    <title>Like</title>
    <ellipse class="likee" cx="750.8" cy="752.2" rx="750.8" ry="752.2"/><path 
    class="likeFinger" d="M378.3 667.5h165.1c13 0 23.6 10.5 23.6 23.6v379.1c0 13-10.5 23.6-23.6 23.6H378.3c-13 0-23.6-10.5-23.6-23.6V691c.1-13 10.6-23.5 23.6-23.5zM624.7 1004.7V733.1c.1-66.9 18.8-132.4 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.8 83.1-35.8 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-1.7.6-2.6 2.5-1.9 4.2.3.7.8 1.3 1.5 1.7 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-1.7.4-2.8 2.2-2.3 3.9.2.9.8 1.6 1.5 2 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-1.7.5-2.7 2.3-2.2 4 .2.7.7 1.4 1.3 1.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1-.1-22.4 0-22.4-29.9z"/>
    </svg>
 
    <svg xmlns="http://www.w3.org/2000/svg"  
    viewBox="-1.1 0 1500 1500" id="heartSvgIcon">
    <style>.love{fill:#fff}.loveee{fill:rgb(196, 11, 11)}</style>
    <path class="love" d="M541.7 1092.6H376.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c-.1 13-10.7 23.6-23.6 23.6zM622.9 1003.5V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1.1-22.5.1-22.5-29.9z"/>
    <ellipse class="loveee" cx="748.9" cy="750" rx="748.9" ry="750"/>
    <path class="love" d="M748.9 541.9C715.4 338.7 318.4 323.2 318.4 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1z"/>
    </svg> 
    
    <h6 style="margin: 0;padding: 0;font-size: .9rem;font-weight: 500;"  class="commentLikesNumber"  >
    24K
    </h6>                    
        </div>
        </div>
  
    
    `

    const numberSuffix = ["m", "k"]
    const daySuffix = ["m", "d","y","w"]


    const comment = 
    [
        "Oh, look, another motivational quote. Because what I really need is more empty inspiration in my life.",
        "I’d agree with you, but then we’d both be wrong.",
        "I’m not procrastinating. I’m just prioritizing my free time.",
        "I’m not a complete idiot. Some parts are missing.",
        "If I agreed with you, we’d both be wrong.",
        "I’m not sure how to tell you this, but you’re not as smart as you think you are.",
        "My imaginary friend says you have serious issues.",
        "If I wanted to hear from someone who doesn’t know what they’re talking about, I’d just talk to myself.",
        "Thanks for the advice. I’ll file it right next to the last piece of unsolicited wisdom I didn’t ask for.",
        "This just made my day. Or what’s left of it, anyway!",
        "Finally, someone who gets me! 😂",
        "Honestly, I felt this in my soul.",
        "So, are you spying on my life, or...?",
        "If you don’t mind, I’ll be stealing this for later use. Thanks! 😅",
        "Well, that escalated quickly. 😂",
        "This is the content I signed up for!",
        "I’ve never related to anything more in my life. 🙌",
        "Accurate. Too accurate, actually. 🤔",
        "You win the internet today. 🏆",
        "I didn’t know I needed to hear this until now.",
        "LOL, this is way too real!",
        "Are you okay? Blink twice if you need help. 😂",
        "This hit harder than my alarm clock in the morning.",
        "It’s funny because it’s true. 😅",
        "This level of sarcasm should be illegal. 😂",
        "This just unlocked a new level of procrastination for me.",
        "And just like that, I found my spirit animal.",
        "Are we the same person, or is this just a coincidence?",
        "I need to frame this and hang it on my wall.",
        "Wow, this is exactly the life advice I needed… said no one ever. 😂",
        "So inspiring. I’ll definitely not be following this advice. 😏",
        "Oh, look, another reason to avoid responsibilities. Just what I needed!",
        "Amazing content. I’m sure this will totally change my life… not.",
        "Ah yes, because we all needed another reminder of how lazy we are. 🙃",
        "This level of motivation is truly overwhelming. Can’t wait to do nothing about it.",
        "Because we all needed another reason to feel great about our choices… or lack thereof.",
        "Great, now I have to pretend to care about this too. 😂",
        "Wow, I can feel the productivity oozing through the screen. 😒",
        "Thanks for the pro tip. My life is still exactly the same.",
        "Oh, so you’re a comedian now? Nice.",
        "I’m really going to take this advice… and throw it out the window.",
        "Wow, you’ve really outdone yourself with this one. My laziness is quaking.",
        "Oh yes, because what I really needed was another excuse to avoid the gym. 🙄",
        "This was so deep, I’m drowning in sarcasm.",
        "The effort you put into this is truly impressive. I’m not inspired at all.",
        "You should write a book. It’ll be a bestseller in the ‘How Not to Do Life’ section.",
        "Please, tell me more about how you’ve mastered the art of doing nothing.",
        "I can’t believe how much I don’t care, but keep going.",
        "This post really changed my life… for the five seconds it took to read it."
           
    ]

commentDiv.querySelector('.commentLikesNumber').innerText = `${Math.floor(Math.random() * 20)}${numberSuffix[Math.floor(Math.random() *numberSuffix.length)]}`;
commentDiv.querySelector('.commentTime').innerText = `${Math.floor(Math.random() * 20)}${daySuffix[Math.floor(Math.random() *daySuffix.length)]}`; 

commentDiv.querySelector('.commentText').innerText = `${comment[Math.floor(Math.random() * comment.length)]}`
commentDiv.querySelector('.commenter').innerText = `${friends[Math.floor(Math.random() * friends.length)]}`


commentStyles.textContent =
`
.comment{
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;
}
.commentData{
  display: flex;
  gap: .8rem;
}

.popUpCommentUserProfile{
  background: url('../assets/images/profile.jpg');
  min-width: 3rem;
  height: 3rem;
  background-position: center;
  background-size: cover;
  border-radius: 2rem;
}

.commentInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: flex-start;
  color: var(--textColor);
  padding: .5rem;
  border-radius: .5rem;
  background: var(--accentColor2);
}

.commentEngagements{
display: flex;
    align-items: center;
    gap: 10rem;
}
.commentInteractions{
  display: flex;
  align-items: center;

}
.commentInteractions > svg{
  width: 1.5rem;
}
.commentInteractions > svg:nth-of-type(1){
z-index: 2;
position: relative;
left: 8px;
}
.commentReactions{
  
  display: flex;
  align-items: center;
  gap: .4rem;
}
.commentReactions h6, .commentInteractions >h6{
  padding: 0;
  margin: 0;
  color:var(--neutralColor);
}


`
document.head.appendChild(commentStyles);
commentDiv.querySelector('.popUpCommentUserProfile').style.background = `url(${postImages[Math.floor(Math.random() * postImages.length )]})`
commentDiv.querySelector('.popUpCommentUserProfile').style.backgroundSize = "cover";
commentDiv.querySelector('.popUpCommentUserProfile').style.backgroundPostiton = "center";
commentDiv.querySelector('.popUpCommentUserProfile').style.backgroundRepeat = "no-repeat";


return commentDiv;
}

export{
    postCardDivElement,
    commentElement
}