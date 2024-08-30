
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




const reactionPopUp = (enagagemant) =>
  {
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
      const enagagemantDiv = document.querySelector(enagagemant);
      const enagagemantReplaceMent = document.querySelector('.userLike');
      const enagagemantSvg = enagagemantDiv.querySelector('svg');
      const enagagemantText = enagagemantDiv.querySelector('h6');
      enagagemantReplaceMent.innerHTML = elementSvg.outerHTML;
      
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


export {
  reactionPopUp
}