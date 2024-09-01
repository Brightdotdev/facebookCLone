
const createStory = () =>{
    const createStoryDiv = document.createElement('div');
    const createStoryStyles = document.createElement('style');
    createStoryDiv.innerHTML = 
    `
      <div class="createStoryContainer">

        <a href="#" class="createStory">
         
            <div class="plusIcon">
                <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                fill="none" id='plusIconSvg' >
                    <path d="M4 12H20M12 4V20" 
                     stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"/>
                    </svg>
                </div>

            <article>
                <h3>Create Story</h3>
                <p>Share a photo or write something</p>
            </article>
    </a>
</div>
    `

    createStoryStyles.textContent =
    `
.createStoryContainer
{
  display: flex;
  align-items: center;
  justify-content:flex-start;
  gap: 1rem;
  width: 32rem;
  background: var(--accentColor);
  padding: .5rem;
  border-radius: .5rem;
  position: relative;
}

.createStory
{
  display: flex;
  align-items: center;
  justify-content:flex-start;
  gap: 1rem;
  width: 100%;
  background: var(--accentColor);
  padding: 1rem;
  border-radius: .5rem;
  position: relative;
}


.plusIcon 
{
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  background: var(--blueAccent);
  z-index: 1;
}
.plusIcon svg
{
  width: 2rem;
  stroke: var(--mainBlue);
}

.createStory article >h3,
.createStory article >p
{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: var(--textColor);
  font-size: 1rem;
} `
document.head.appendChild(createStoryStyles);
return createStoryDiv;
}



const createPost = () =>
    {
        const createPostDiv = document.createElement('div');
        const createPostStyle = document.createElement('style');

        createPostDiv.innerHTML = 
        `
        
        <div class="createPosts">

        
            <a href="#" class="whatsOnYourMind ">
                <img src="/../assets/images/profile.jpg"   alt="profileImg">
                <button class="whatsOnYourMindPostClickable" >whatsOnYourMind</button>
            </a>

       
            <div class="mediaUpload ">
                <a href="#" id="liveVideo">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" fill="none" id='liveVideoSvg' >
                    <path 
                    d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" 
                    stroke="#F23E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <h5>Live Video</h5>
                </a>


                <a  href="#" class="photoVideo ">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    fill="#58C472" version="1.1"  
                    viewBox="0 0 31.06 32.001" xml:space="preserve">
                        <g id="photoVideoSvg">
                            <path d="M29.341,11.405L13.213,7.383c-1.21-0.301-2.447,0.441-2.748,1.652L6.443,25.163c-0.303,1.211,0.44,2.445,1.65,2.748   l16.127,4.023c1.21,0.301,2.447-0.443,2.748-1.652l4.023-16.127C31.293,12.944,30.551,11.708,29.341,11.405z M28.609,14.338   l-2.926,11.731c-0.1,0.402-0.513,0.65-0.915,0.549l-14.662-3.656c-0.403-0.1-0.651-0.512-0.551-0.916l2.926-11.729   c0.1-0.404,0.513-0.65,0.916-0.551l14.661,3.658C28.462,13.522,28.71,13.936,28.609,14.338z"/>
                            <circle cx="15.926" cy="13.832" r="2.052"/>
                            <path d="M22.253,16.813c-0.136-0.418-0.505-0.51-0.82-0.205l-2.943,2.842c-0.315,0.303-0.759,0.244-0.985-0.133l-0.471-0.781   c-0.227-0.377-0.719-0.5-1.095-0.273l-4.782,2.852c-0.377,0.225-0.329,0.469,0.096,0.576l3.099,0.771   c0.426,0.107,1.122,0.281,1.549,0.389l3.661,0.912c0.426,0.105,1.123,0.279,1.549,0.385l3.098,0.773   c0.426,0.107,0.657-0.121,0.521-0.539L22.253,16.813z"/>
                            <path d="M2.971,7.978l14.098-5.439c0.388-0.149,0.828,0.045,0.977,0.432l1.506,3.933l2.686,0.67l-2.348-6.122   c-0.449-1.163-1.768-1.748-2.931-1.299L1.45,6.133C0.287,6.583-0.298,7.902,0.151,9.065L5.156,22.06l0.954-3.827L2.537,8.954   C2.389,8.565,2.583,8.126,2.971,7.978z"/>
                        </g>
                        <g id="photoVideoSvg">
                        </g>
                        </svg>

                        <h5>Photo/Video</h5>
                </a>


                <a href="#" id="feeling" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="#F8C03E"  viewBox="0 0 56 56" id='smiley' >
                        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.1796 25.8672 C 22.5624 25.8672 23.7109 24.6484 23.7109 22.9375 C 23.7109 21.2266 22.5624 20.0078 21.1796 20.0078 C 19.8202 20.0078 18.6952 21.2266 18.6952 22.9375 C 18.6952 24.6484 19.8202 25.8672 21.1796 25.8672 Z M 34.8905 25.8672 C 36.2733 25.8672 37.4218 24.6484 37.4218 22.9375 C 37.4218 21.2266 36.2733 20.0078 34.8905 20.0078 C 33.5077 20.0078 32.3827 21.2266 32.3827 22.9375 C 32.3827 24.6484 33.5077 25.8672 34.8905 25.8672 Z M 27.9999 39.2968 C 33.6483 39.2968 37.1874 35.2890 37.1874 33.7656 C 37.1874 33.4609 36.9530 33.3203 36.7187 33.5078 C 35.0077 34.9375 32.1249 36.3437 27.9999 36.3437 C 23.8514 36.3437 20.8983 34.8437 19.2577 33.5312 C 19.0234 33.3203 18.7890 33.4609 18.7890 33.7656 C 18.7890 35.2890 22.3280 39.2968 27.9999 39.2968 Z"/>
                    </svg>
                    <h5>Feeling/activity</h5>
                </a>


            </div>
        </div>
        `

        createPostStyle.textContent =
        `
        .createPosts
{
  width: 32rem;
  display: flex;
background: var(--accentColor);
  flex-direction: column;
  gap: 1rem;
  padding: .5rem;
  border-radius: .5rem;
  border-bottom: 1px solid var(--accentColor);
}
.whatsOnYourMind
{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
  border-bottom: 1px solid var(--accentColor2) ;
}
.whatsOnYourMind img
{
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
}
.whatsOnYourMindPostClickable
{
  cursor: pointer;
  width: 85%;
  border-radius: 2rem;
  text-align: left;
  padding-left: 1rem;
  color: var(--textColor);
  background: var(--accentColor2);
}
.mediaUpload
{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: .2rem;
}
.mediaUpload a
{
  text-decoration: none;
  color: var(--textColor);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: .5rem;
  flex: 1;
}

.mediaUpload a >svg
 {
  width: 2rem;
 }
        `
        document.head.appendChild(createPostStyle);
        return createPostDiv
    }  

  const createPosts= () =>
    {
      const createPost = document.createElement('div');
      const createPostStyle = document.createElement('style');

      createPost.innerHTML = 
      `
                    <div class="createPosts">

        
            <a href="#" class="whatsOnYourMind ">
                <img src="/../assets/images/profile.jpg"   alt="profileImg">
                <button class="whatsOnYourMindPostClickable" >whats On Your Mind(Like i give a shit)</button>
            </a>

       
            <div class="mediaUpload ">
                <a href="#" id="liveVideo">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" fill="none" id='liveVideoSvg' >
                    <path 
                    d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" 
                    stroke="#F23E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <h5>Live Video</h5>
                </a>


                <a  href="#" class="photoVideo ">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    fill="#58C472" version="1.1"  
                    viewBox="0 0 31.06 32.001" xml:space="preserve">
                        <g id="photoVideoSvg">
                            <path d="M29.341,11.405L13.213,7.383c-1.21-0.301-2.447,0.441-2.748,1.652L6.443,25.163c-0.303,1.211,0.44,2.445,1.65,2.748   l16.127,4.023c1.21,0.301,2.447-0.443,2.748-1.652l4.023-16.127C31.293,12.944,30.551,11.708,29.341,11.405z M28.609,14.338   l-2.926,11.731c-0.1,0.402-0.513,0.65-0.915,0.549l-14.662-3.656c-0.403-0.1-0.651-0.512-0.551-0.916l2.926-11.729   c0.1-0.404,0.513-0.65,0.916-0.551l14.661,3.658C28.462,13.522,28.71,13.936,28.609,14.338z"/>
                            <circle cx="15.926" cy="13.832" r="2.052"/>
                            <path d="M22.253,16.813c-0.136-0.418-0.505-0.51-0.82-0.205l-2.943,2.842c-0.315,0.303-0.759,0.244-0.985-0.133l-0.471-0.781   c-0.227-0.377-0.719-0.5-1.095-0.273l-4.782,2.852c-0.377,0.225-0.329,0.469,0.096,0.576l3.099,0.771   c0.426,0.107,1.122,0.281,1.549,0.389l3.661,0.912c0.426,0.105,1.123,0.279,1.549,0.385l3.098,0.773   c0.426,0.107,0.657-0.121,0.521-0.539L22.253,16.813z"/>
                            <path d="M2.971,7.978l14.098-5.439c0.388-0.149,0.828,0.045,0.977,0.432l1.506,3.933l2.686,0.67l-2.348-6.122   c-0.449-1.163-1.768-1.748-2.931-1.299L1.45,6.133C0.287,6.583-0.298,7.902,0.151,9.065L5.156,22.06l0.954-3.827L2.537,8.954   C2.389,8.565,2.583,8.126,2.971,7.978z"/>
                        </g>
                        <g id="photoVideoSvg">
                        </g>
                        </svg>

                        <h5>Photo/Video</h5>
                </a>
                <a href="#" id="feeling" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="#F8C03E"  viewBox="0 0 56 56" id='smiley' >
                        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.1796 25.8672 C 22.5624 25.8672 23.7109 24.6484 23.7109 22.9375 C 23.7109 21.2266 22.5624 20.0078 21.1796 20.0078 C 19.8202 20.0078 18.6952 21.2266 18.6952 22.9375 C 18.6952 24.6484 19.8202 25.8672 21.1796 25.8672 Z M 34.8905 25.8672 C 36.2733 25.8672 37.4218 24.6484 37.4218 22.9375 C 37.4218 21.2266 36.2733 20.0078 34.8905 20.0078 C 33.5077 20.0078 32.3827 21.2266 32.3827 22.9375 C 32.3827 24.6484 33.5077 25.8672 34.8905 25.8672 Z M 27.9999 39.2968 C 33.6483 39.2968 37.1874 35.2890 37.1874 33.7656 C 37.1874 33.4609 36.9530 33.3203 36.7187 33.5078 C 35.0077 34.9375 32.1249 36.3437 27.9999 36.3437 C 23.8514 36.3437 20.8983 34.8437 19.2577 33.5312 C 19.0234 33.3203 18.7890 33.4609 18.7890 33.7656 C 18.7890 35.2890 22.3280 39.2968 27.9999 39.2968 Z"/>
                    </svg>
                    <h5>Feeling/activity</h5>
                </a>
            </div>
        </div>
      `
    createPostStyle.textContent = 
    `
  .createPosts
{
  width: 32rem;
  display: flex;
background: var(--accentColor);
  flex-direction: column;
  gap: 1rem;
  padding: .5rem;
  border-radius: .5rem;
  border-bottom: 1px solid var(--accentColor);
}
.whatsOnYourMind
{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
  border-bottom: 1px solid var(--accentColor2) ;
}
.whatsOnYourMind img
{
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
}
.whatsOnYourMindPostClickable
{
  cursor: pointer;
  width: 85%;
  border-radius: 2rem;
  text-align: left;
  padding-left: 1rem;
  color: var(--textColor);
  background: var(--accentColor2);
}
.mediaUpload
{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: .2rem;
}
.mediaUpload a
{
  text-decoration: none;
  color: var(--textColor);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: .5rem;
  flex: 1;
}

.mediaUpload a >svg
 {
  width: 2rem;
 }

    `
  document.head.appendChild(createPostStyle);
  return createPost;
    }


    const friendStory = () =>
      {
        const friendStory = document.createElement('div');
        friendStory.innerHTML = 
        `
          <a href="#"  class="friendStory">
      
              <div class="friendProfileImg">
      
                  <title>Friend Profile Image</title>
                      <h2 class="friendName">
                Kevin
            </h2>
              </div>
          </a>
        `
        return friendStory;
      }
    


const storyContainer = () =>
  {
    const storyContainerDiv = document.createElement('div');
    const storyContainerStyle = document.createElement('style');

    storyContainerDiv.innerHTML = 
    `
    <div class="storyContainer">

    <button  class="leftChevron clickableChevron">

        <svg xmlns="http://www.w3.org/2000/svg" 
        height="24px" viewBox="0 -960 960 960" 
        width="24px" fill="black" id="leftChevronSvg">
        <title>Click Left</title>
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
    </button>

    <a href="#" class="userStory">
        <div class="userProfileImg">

        </div>

    <article class="createStoryArticle">
        <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                fill="none" id='plusIconSvg' >
                    <path d="M4 12H20M12 4V20" 
                     stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"/>
                    </svg>
                    <h6>Create Story</h6>
    </article>
</a>

    <a href="#"  class="friendStory">

        <div class="friendProfileImg">
            <title>Friend Profile Image</title>
        </div>
            <h2 class="friendName">
            Kevin
        </h2>
    </a>

    <a href="#"  class="friendStory">

        <div class="friendProfileImg">

            <title>Friend Profile Image</title>
        </div>
            <h2 class="friendName">
            Kevin
        </h2>
    </a>
    <a href="#"  class="friendStory">

        <div class="friendProfileImg">
            <title>Friend Profile Image</title>

        </div>
            <h2 class="friendName">
            Kevin
        </h2>
    </a>

    <a href="#"  class="friendStory">

        <div class="friendProfileImg">
            <title>Friend Profile Image</title>
    <h2 class="friendName">
            Kevin
        </h2>
        </div>
    </a>

    <button  class="rightChevron clickableChevron ">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
        viewBox="0 -960 960 960" width="24px" fill="black"  
        id='rightChevronSvg'><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        <title>Click Right</title>
    </svg>
    </button>
</div>
    `
    storyContainerStyle.textContent =
    `
    
 
.storyContainer
{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .4rem;  
  width: 32rem;
  overflow: hidden;
  scroll-snap-type:proximity;
  height: 12rem;
  border-radius: .5rem;
  position: relative;
}
.userStory, .friendStory
{
  border-radius: 1rem;
  flex: 0 0 7rem;
  height: 100%;
  background: url('../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  background-repeat: no-repeat;
  transition:  0.3s ease-in-out;
}
.friendStory{
  border-radius: 1rem;
}
a.userStory .userProfileImg:hover,
.storyContainer > .friendStory:hover
{
  background-repeat: no-repeat;
  background-size: 200%;
}

.userStory
{
  flex-direction: column;
}
.userProfileImg
{
  border-radius: 1rem 1rem 0 0 ;
  height: 75%;
  width: 100%;
  background: url('../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
}
.userStory article
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
 border-radius: 0 0 .7rem .7rem;
  color: var(--textColor);
  font-size: 1.5rem;
  text-decoration: none;
  stroke: white;
  position: relative;
  border: 1px solid var(--accentColor2);
}
.userStory article::before
{
position: absolute;
content: '';
width: 3rem;
height: 3rem;
background: var(--mainBlue);
border: 5px solid var(--accentColor);
border-radius: 3rem;
bottom: 25px;
left: 30px;
}
.createStoryArticle{
  background: var(--accentColor);
}
.userStory article > svg
{
  position: absolute;
  bottom: 35px;
  left: 39px;
  width: 2rem;
}
.friendStory
{
  position: relative;
}
.friendProfileImg
{
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: url('../assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 2rem;
  top: 5%;
  left: 5%;
  border: 5px solid var(--mainBlue);
}
.friendName
{
  position: absolute;
  text-shadow: 0 0 5px var(--bgColor);
  font-size: 1rem;
  bottom: 0;
  left: 2rem;
  color: var(--textColor);
}
.clickableChevron
{
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accentColor);
  border-radius: 2rem;
  padding: .5rem;
  box-shadow: 0 0 10px var(--accentColor2);
  position: absolute;
  cursor: pointer;
&:hover
{
  transform: scale(1.1);
}
}
.rightChevron
{
  right: 0;
}

@media screen and (max-width: 40rem) {
.storyContainer
{
  
  border-top: 5px solid black;
  border-bottom: 2px solid black;
}


.storyContainer
{
  padding: .5rem;
  width: 100%;
  height: 13rem;
  border-radius: 0;
}

  }

`
    document.head.appendChild(storyContainerStyle);
    return storyContainerDiv;
  }



  


  
const peopleWhoYouMayKnow = () =>{

  const peopleWhoYouMayKnowDiv = document.createElement('div')
  

  peopleWhoYouMayKnowDiv.innerHTML =
  `
  
    <div class="peopleWhoYouMayKnow" id="peopleWhoYouMayKnow" >
        <h3>People Who You May Know</h3>
        <a href="#">See all</a>

        <div class="peopleWhoYouMayKnowCardContainer">
            <div class="peopleWhoYouMayKnowCard">
                <div class="peopleWhoYouMayKnowProfilePic">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="var(--neutralColor)">
                        <path xmlns="http://www.w3.org/2000/svg" d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="var(--neutralColor)"/>
                        </svg>
                </div>
                <div id="peopleWoYouMayKnowName">

                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 -960 960 960" fill="var(--mainBlue)">
                    <path d="M720-520h-80q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h80v-80q0-17 11.5-28.5T760-720q17 0 28.5 11.5T800-680v80h80q17 0 28.5 11.5T920-560q0 17-11.5 28.5T880-520h-80v80q0 17-11.5 28.5T760-400q-17 0-28.5-11.5T720-440v-80Zm-360 40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240Z"/>
                    </svg>
                    Add Friend
                </button>
            </div>
        </div>
    </div>

  `
}

