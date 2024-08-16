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



const nav = (navPage) =>
    {
        let navigationNumber;
        if (navPage === "home")
            {
                navigationNumber = 1
            } 
            else if (navPage === "groups")
                {
                    navigationNumber = 6
                }
                else if (navPage === "videos")
                    {
                        navigationNumber = 4
                    }
                    else if (navPage === "friends")
                {
                    navigationNumber = 2
                }



        const navDiv = document.createElement('div');
        const navStyle = document.createElement('style');

        navDiv.innerHTML = 
        `
  <header>

        <section class="facebookSearchAndIcon">

            <svg xmlns="http://www.w3.org/2000/svg" 
             
         
            
            viewBox="0 0 1024 1024" id="facebookLogo">
            <title>Facebook</title>
            <path fill="#1877f2" 
            
            d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/>
            <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/>
            </svg>
    
                <h1>Facebook</h1>

            <div class="facebookSearch">

                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                 fill="black"
                id="svgSearch"
                >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <button id="searchFacebookClone">Search facebookClone</button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                id="arrowSearchSvg"
                viewBox="0 0 24 24" width="24" height="24" 
                class="arrow" fill="none" stroke="currentColor" 
                stroke-linecap="round" stroke-linejoin="round" 
                stroke-width="2">
            <title>Search</title>
                    <line x1="19" x2="5" y1="12" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"version="1.1">
                 <title>Menu</title>
                 <g id="hamburgerSvgGroup"  stroke-width="1" fill="none" fill-rule="evenodd">
                     <g id="Menu">
                         <rect id="Rectangle" fill-rule="nonzero" x="0" y="0">
             
             </rect>
                         <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="var(---neutralColor)" stroke-width="1.5" stroke-linecap="round"  >
             
             </line>
                         <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="var(---neutralColor)" stroke-width="1.5" stroke-linecap="round"  >
             
             </line>
                         <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="var(---neutralColor)" stroke-width="1.5" stroke-linecap="round"  >
             
             </line>
                     </g>
                 </g>
             </svg>
        </section>

        <nav id="navLinks"> 
            <ul> 
                <li id="homeNav" class="primaryNavigation">
                    <a href="index.html">
                        <svg viewBox="0 0 24 24" 
                        id="homeSvg"  class="navSvg">
            <title>Home</title>
                        <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"  id="homeSvg"  class="navSvg" >
                        </path></svg>
                    </a>
                </li>



                <li id="friendsNav" class="primaryNavigation" >
                <a href="/html/friends.html">
                    <svg viewBox="0 0 24 24" id="friendsSvg" class="navSvg">
            <title>Friends</title>
                    <path 
                    d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z" 
                    id="friendsSvg" class="navSvg">

                    </path></svg>
                </a>
            </li>


            <li id="primaryMesengerNav"   class="primaryNavigation">
                <a href="/html/messenger.html">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    id="mesengerSvg"   class="navSvg" 
                     viewBox="0 0 24 24" >
            <title>Messenger</title>
                    <path d="M12,2A9.65,9.65,0,0,0,2,11.7a9.51,9.51,0,0,0,3.14,7.18.81.81,0,0,1,.27.56l0,1.78a.81.81,0,0,0,1.13.71l2-.87a.75.75,0,0,1,.53,0,11,11,0,0,0,2.9.38A9.7,9.7,0,1,0,12,2Zm6,7.46-2.93,4.66a1.5,1.5,0,0,1-2.17.4l-2.34-1.75a.6.6,0,0,0-.72,0l-3.16,2.4A.47.47,0,0,1,6,14.54L8.93,9.88a1.5,1.5,0,0,1,2.17-.4l2.34,1.75a.6.6,0,0,0,.72,0l3.16-2.4A.47.47,0,0,1,18,9.46Z" 
                    class="navSvg" id="mesengerSvg" />
                    </svg>
                </a>
            </li>

            <li id="videosNav" class="primaryNavigation" >
                <a href="html/videos.html">
                    <svg viewBox="0 0 24 24"  id="friendsSvg" class="navSvg">
            <title>Videos</title>
                        <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z" id="videoSvg" class="navSvg" >
                        </path>
                        <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z" 
                        id="videoSvg" class="navSvg">

                    </path></svg>
                </a>
            </li>

            <li  id="primaryNotificationNav"  class="primaryNavigation" > 
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"  
                    id="notificationSvg" class="navSvg" >
            <title>Notification</title>
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </a>
            </li>

            

            <li id="groupsNav" class="primaryNavigation" >
                <a href="/html/groups.html">
                    <svg viewBox="0 0 24 24" id="groupsNavSvg" class="navSvg">
                        <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"  class="navSvg">
                            <title>Groups</title>
                        </path>
                        <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM2.5 12c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm4 0a4.001 4.001 0 0 0-3.16-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613A4.001 4.001 0 0 0 6.5 12zm13 0a2 2 0 0 1 1.791-1.99 9.538 9.538 0 0 1 0 3.98A2 2 0 0 1 19.5 12zm-2.51 8.086A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z" class="navSvg"></path>
                    </svg>
                         
                </a>
            </li>
            
            </ul>

        </nav>


        <nav  id="userActions" >
            <ul>
          <li id="menuNav" class="secondaryNavigation" >
            <a  href="#">
                <svg viewBox="0 0 24 24" id="menuSvg" 
                class="navSvg" >
                <path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z">
                    <title>Menu</title>

                </path></svg>
            </a>
        </li>
           
        <li id="mesengerNav" class="secondaryNavigation" >
            <a href="#">
                <svg viewBox="0 0 12 13"
              id="messengerSvg" class="navSvg">
              <g fill-rule="evenodd" transform="translate(-450 -1073)">
                <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82">
                    <title>Messenger</title>

                </path></g></svg>
            </a>
        </li>
            
        <li  id="notificationNav"  class="secondaryNavigation" > 
            <a href="#">
                <svg viewBox="0 0 24 24"  id="notificationSvg" class="navSvg" >
        <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z">
            <title>Notification</title>

                </path></svg>
            </a>
        </li>

        <li id="profileNav" class="secondaryNavigation" >
            <a href="#">
                <title>Prifile</title>
            </a>
        </li>
    </ul>
        </nav>

        <div class="whatsOnYourMindNav">
            <div id="whatsOnYourMindProfile" class="secondaryNavigation" >
                <a href="#">
                    <title>whats On Your Mind</title>
                </a>
            </div>
            <input type="text" id="whatsOnYourMindPost" placeholder="whatsOnYourMind">
            <div class="photo">
           
                <svg xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                fill="green" version="1.1"  
                viewBox="0 0 31.06 32.001" xml:space="preserve">
                    <g id="photosSvg">
                        <path d="M29.341,11.405L13.213,7.383c-1.21-0.301-2.447,0.441-2.748,1.652L6.443,25.163c-0.303,1.211,0.44,2.445,1.65,2.748   l16.127,4.023c1.21,0.301,2.447-0.443,2.748-1.652l4.023-16.127C31.293,12.944,30.551,11.708,29.341,11.405z M28.609,14.338   l-2.926,11.731c-0.1,0.402-0.513,0.65-0.915,0.549l-14.662-3.656c-0.403-0.1-0.651-0.512-0.551-0.916l2.926-11.729   c0.1-0.404,0.513-0.65,0.916-0.551l14.661,3.658C28.462,13.522,28.71,13.936,28.609,14.338z"/>
                        <circle cx="15.926" cy="13.832" r="2.052"/>
                        <path d="M22.253,16.813c-0.136-0.418-0.505-0.51-0.82-0.205l-2.943,2.842c-0.315,0.303-0.759,0.244-0.985-0.133l-0.471-0.781   c-0.227-0.377-0.719-0.5-1.095-0.273l-4.782,2.852c-0.377,0.225-0.329,0.469,0.096,0.576l3.099,0.771   c0.426,0.107,1.122,0.281,1.549,0.389l3.661,0.912c0.426,0.105,1.123,0.279,1.549,0.385l3.098,0.773   c0.426,0.107,0.657-0.121,0.521-0.539L22.253,16.813z"/>
                        <path d="M2.971,7.978l14.098-5.439c0.388-0.149,0.828,0.045,0.977,0.432l1.506,3.933l2.686,0.67l-2.348-6.122   c-0.449-1.163-1.768-1.748-2.931-1.299L1.45,6.133C0.287,6.583-0.298,7.902,0.151,9.065L5.156,22.06l0.954-3.827L2.537,8.954   C2.389,8.565,2.583,8.126,2.971,7.978z"/>
                    </g>
                    <g id="photosSvg">
                    </g>
                    </svg>
           
                <h5 style="margin: 0;padding: 0;" >Photo</h5>
            </div>
        </div>
        
    </header>

      `

        navStyle.textContent = 
        `
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


.facebookSearchAndIcon h1,
#hamburgerSvg,
#primaryMesengerNav,
#primaryNotificationNav,
.facebookSearch .arrow,
.whatsOnYourMindNav
{
  display: none;
}
header
{
  display: flex;
  align-items: center;    
  justify-content:space-between;
  width: 100%;
  background:var(--accentColor);
  border-bottom: 1px solid var(--accentColor2);
  padding: 0rem  1rem;
  height:3.5rem;
  position: fixed;
  top: 0;
  left:0;
  z-index: 100;
}
.facebookSearchAndIcon
{
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 22rem;
  height: 3rem;
}
.facebookSearchAndIcon svg
{
  width: 3rem;
}
.facebookSearch
{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--accentColor2);
  height: 3rem;
  width: 18rem;
  border-radius: 3rem;
}
.facebookSearch > #svgSearch
{
  fill: var(--neutralColor);
  width:1rem;
}
#searchFacebookClone
{
  background: none;
  border: none;
  color: var(--neutralColor);
  width: 12rem;
}

  
#navLinks,
#userActions
{
display: block;
padding: 0;
}
#navLinks ul
{
  display: flex;
  align-items: center;
  justify-content:center;
  justify-content:center;
height: 2rem;
width: 30rem;
}

#userActions ul
{
display: flex;
align-items: center;
justify-content:flex-end;
width: 22rem;
gap: .5rem;
}

.navSvg
{
  width: 1.5rem;
  color: var(--neutralColor);
  fill: var(--neutralColor);
  outline: var(--neutralColor);
}
.primaryNavigation:nth-of-type(${navigationNumber})
{
  position: relative;
}
.primaryNavigation:nth-of-type(${navigationNumber}):hover
{
  background: none;
}
.primaryNavigation:nth-of-type(${navigationNumber})::after
{
  position: absolute;
  content: '';
  width: 100%;
  height: 2.5px;
  bottom: -5px;
  border-radius: 2px;
  background: var(--mainBlue);
}
.primaryNavigation:nth-of-type(${navigationNumber})  a > .navSvg path
{
  fill: var(--mainBlue);
  color: var(--mainBlue);
  
}
.primaryNavigation:nth-of-type(${navigationNumber}) > a:hover
{
  background: none;
}
.primaryNavigation
{
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
 height: 2rem;
 padding: 1.5rem;
 border-radius: .5rem;
 background: var(--accentColor);
 justify-content: center;
}

.secondaryNavigation
{
  flex: 0 0 2.5rem;
  height: 2.5rem;
  border-radius: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--accentColor2);
}
.secondaryNavigation:nth-of-type(4) 
{
  background: url('../assets/images/profile.jpg');
  background-size: cover; 
  position: relative;
  background-position: center; 
  max-height: 3rem;
  max-width: 3rem;
  cursor: pointer;
}
.secondaryNavigation:nth-of-type(4)::before
{
  content: '';
position: absolute;
width: 15px;
height: 15px;
border: 3px solid var(--accentColor);
border-radius: 2rem;
top: 1px;
right: 0;
background: red;
}
.secondaryNavigation a >svg
{
  width: 1.2rem;
}
#userActions 
{
  width:20rem;
  display: flex;
}
#profileNav 
{
  background: url('../assets/images/profile.jpg');
  background-size: cover; 
  background-position: center; 
  max-height: 3rem;
}


@media  (max-width : 64rem) {
header
  {
    display: flex;
    padding:0rem;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    padding: 1rem;
  }
  .facebookSearchAndIcon
  {
    display: flex;
    justify-content: flex-start;
  }
.facebookSearch
{
  display: flex;
  align-items: center;
  justify-content:center;
  background: var(--accentColor2);
  padding: .5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
}
.facebookSearchAndIcon h1
{
  display: none;
  color: var(--textColor);

}
.facebookSearchAndIcon svg
{
  width: 3rem;
}
.facebookSearch > #svgSearch
{
  fill: var(--neutralColor);
  width: 1.5rem;
}
#searchFacebookClone
{
  display: none;
}

.primaryNavigation:nth-of-type(${navigationNumber}):hover
{
  filter: brightness(1);
}
.primaryNavigation:nth-of-type(${navigationNumber})::after
{
  position: absolute;
  content: '';
  width: 100%;
  height: 2.5px;
  bottom: -15px;
  border-radius: 2px;
  background: var(--mainBlue);
}
#navLinks ul,
.userActions ul
{
  display: flex;
  align-items: center;
  justify-content: space-between;
 height: 2rem;
width: 20rem;
}
.primaryNavigation:nth-of-type(${navigationNumber})::after
{
  bottom: -10px;
}
.navSvg
{
  max-width: 1.5rem;
  color: var(--neutralColor);
  fill: var(--neutralColor);
  outline: var(--neutralColor);
}

}

@media   (max-width:62rem) {
  header
  {
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    
  }
  .facebookSearchAndIcon
  {
    display: flex;
    justify-content: flex-start;
  }
.facebookSearch
{
  display: flex;
  align-items: center;
  justify-content:center;
  background: var(--accentColor2);
  padding: .5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
}
.facebookSearchAndIcon h1
{
  display: none;
  color: var(--textColor);

}
.facebookSearchAndIcon svg
{
  width: 3rem;
}
.facebookSearch > #svgSearch
{
  fill: var(--neutralColor);
  width: 1.5rem;
}
#searchFacebookClone
{
  display: none;
}

.primaryNavigation:nth-of-type(${navigationNumber}):hover
{
  filter: brightness(1);
}
.primaryNavigation:nth-of-type(${navigationNumber})::after
{
  position: absolute;
  content: '';
  width: 100%;
  height: 2.5px;
  bottom: -15px;
  border-radius: 2px;
  background: var(--mainBlue);
}
#navLinks ul,
.userActions ul
{
display: none;
}
.primaryNavigation:nth-of-type(${navigationNumber})::after
{
  bottom: -10px;
}
.navSvg
{
  max-width: 1.5rem;
  color: var(--neutralColor);
  fill: var(--neutralColor);
  outline: var(--neutralColor);
}

}
@media (max-width:48rem) {
  #navLinks ul
  {
    display: none;
  }

}

@media screen and (max-width: 40rem) {
  header
    {
      width: 100%;
      height: fit-content;
      padding: .5rem;
      display: flex;
      justify-content: center;
      gap: .5rem;
      flex-direction: column;
    }

    
    .facebookSearchAndIcon
  {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    border-bottom: 1px solid var(--accentColor2);
  }
  .facebookSearchAndIcon h1
  {
    display: block;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    color: var(--textColor);
  }
  #facebookLogo
  {
    display: none;
  }
#hamburgerSvgGroup
{
  display: block;
  cursor: pointer;
  stroke: var(--neutralColor);
  height: 2px;
}
  .facebookSearch > #svgSearch
  {
    fill: var(--neutralColor);
    width: 1rem;
  }
  .facebookSearch
  {
    max-width: 2rem;
    max-height: 2rem;
  }
  #searchFacebookClone
  {
    display: none;
  }
  #userActions
  {
    display: none;
  }


  #navLinks
  {
    display: flex;
    width: 100%;
    padding: 0;
    border-bottom: 1px solid var(--accentColor2);
  }
  #navLinks ul
{
  width: 100%;
  padding:0;
  display: flex;
  align-items: center;
  justify-content: center;
}
  #navLinks ul >li 
  {
    display: flex;    
    align-items: center;
    justify-content: center;
    padding: 0;
  }
 
  
.whatsOnYourMindNav
{
  display: flex;
  align-items: center;
  justify-content:flex-start;
  gap: .5rem;
  width: 100%;
  padding: 0;
} 
 #whatsOnYourMindProfile 
  {
    display: flex;
    background: url('../assets/images/profile.jpg');
    max-width: 3rem;
    max-height: 3rem;
    background-size: cover; 
    position: relative;
    background-position: center; 
    cursor: pointer;
  }
 #whatsOnYourMindProfile::before
  {
    content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border: 3px solid var(--accentColor);
  border-radius: 2rem;
  top: 1px;
  right: 0;
  background: red;
}


.whatsOnYourMindNav input{
  width: 25rem;
  height: 3rem;
  padding-left: 1rem;
  border-radius: 4rem;
  outline: none;
  border: none;
  background: var(--accentColor2);
}

.whatsOnYourMindNav > .photo
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    color: var(--textColor);
    font-size: 1rem;
    gap: .5rem;
  }
.whatsOnYourMindNav .photo svg
{
  width: 2rem;
}
.primaryNavigation:nth-of-type(${navigationNumber})::after{
  display: none;
}
}

@media (max-width:33rem) {
  body
  {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  header
 {
  width: 100%;
 }
}

   `

 document.head.appendChild(navStyle);
 return navDiv
    }



const fixedDivs = (name) =>
  {
    const fixedDiv = document.createElement('div');
    const style = document.createElement('style');
    


      fixedDiv.innerHTML = 
      `
          <section  class="fixedDiv" id="extraUserActions">

        <div class="extraActionsList">
        
    <ul  class="extraActionsLists" >
         <li  id="userProfile">   
        <a href="#" class="extraAction" >
            <img src="/../assets/images/profile.jpg" alt="" >
            <h5>${name}</h5>
        </a>
    </li>
        
    <li  id="friends">
        <a href="#" class="extraAction" >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" id="friendsSvg" class="userActionSvg" >
                <rect  id="friendsSvg"  />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z" fill="#3191F6" id="firstPerson"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z" fill="#63D9C9" id="secondPerson"/>
                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z" fill="#3191F6" id="firstPerson"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z" fill="#63D9C9" id="secondPerson"/>
                </svg>
                <h5>Friends</h5>
        </a>
    </li>


        <li id="memories" >
        <a href="#" class="extraAction" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            id='clockSvg' class="userActionSvg"
            stroke="#3191F6" fill="none"
            stroke="currentColor" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <h5>Memories</h5>
        </a>
    </li>

    <li id="saved" >
    <a href="#" class="extraAction" >
        <svg xmlns="http://www.w3.org/2000/svg" 
        stroke-width="2" stroke-linejoin="round" 
        stroke-linecap="round" 
        id="bookmarkSvg" height="30"
        class="userActionSvg"
        width="24" viewBox="0 0 24 24">
       <defs>
           <linearGradient id="bookmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" style="stop-color:purple;stop-opacity:1"/>
               <stop offset="50%" style="stop-color:rgb(107, 1, 107);stop-opacity:1"/>
               <stop offset="100%" style="stop-color:rgb(94, 1, 94);stop-opacity:1"/>
           </linearGradient>
       </defs>
       <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" class="userActionSvg" fill="url(#bookmarkGradient)" />
   </svg>
   
          <h5>Saved</h5>
    </a>
</li>

    <li id="groups" >
    <a href="#" class="extraAction" >
        <svg xmlns="http://www.w3.org/2000/svg"
     enable-background="new 0 0 24 24" height="40px"
     viewBox="0 0 24 24" id="groupsSvgUserActions">
    <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:blue;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:lightblue;stop-opacity:1"/>
        </linearGradient>
    </defs>
  
    <circle cx="12" cy="12" r="10" fill="url(#blueGradient)"/>

    
    <g fill="white" transform="scale(0.6) translate(8, 6)">
        <rect fill="none" height="24" width="24"/>
        <path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 
                 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z 
                 M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61 
                 C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z 
                 M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29 
                 V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z"/>
    </g>
</svg>

            <h5>Groups</h5>
    </a>
</li>

<li id="videos">
    <a href="#" class="extraAction" >
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" 
        viewBox="0 -960 960 960" width="40px" id="videoSvgUserActions">
       <defs>
           <linearGradient id="blueTvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style="stop-color:blue;stop-opacity:1"/>
               <stop offset="50%" style="stop-color:rgb(0, 0, 231);stop-opacity:1"/>
               <stop offset="100%" style="stop-color:blue;stop-opacity:1"/>
           </linearGradient>
       </defs>
       <path d="M382-346.67 653.33-520 382-693.33v346.66ZM326.67-120v-80h-180q-27 0-46.84-19.83Q80-239.67 80-266.67v-506.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 46.84 19.83Q880-800.33 880-773.33v506.66q0 27-19.83 46.84Q840.33-200 813.33-200h-180v80H326.67Zm-180-146.67h666.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z" fill="url(#blueTvGradient)" class="userActionSvg"/>
   </svg>
          <h5>Videos</h5>
    </a>
</li>


<li id="marketplace"> 
    <a href="#" class="extraAction" >
        <svg xmlns="http://www.w3.org/2000/svg" 
        height="24px" viewBox="0 0 24 24" 
        width="24px" class="userActionSvg" 
        id="marketPlaceSvg">
       <defs>
           <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style="stop-color:blue;stop-opacity:1"/>
               <stop offset="100%" style="stop-color:lightblue;stop-opacity:1"/>
           </linearGradient>
       </defs>
       <path d="M0 0h24v24H0V0z" fill="none"/>
       <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" fill="url(#blueGradient)" class="userActionSvg"/>
   </svg>
   
        <h5>MarketPlace</h5>
    </a>
</li>


<li id="feeds">
    <a href="#" class="extraAction" >
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" 
 viewBox="0 0 24 24"  fill="url(#blueTvGradient)" id='feedSvg' class="userActionSvg" >
<g><path d="M0,0h24v24H0V0z" fill="none" class="userActionSvg"/></g>
<g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M8,7h3c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8 C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z M16,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0 C17,16.55,16.55,17,16,17z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M15,8 V5l4,4h-3C15.45,9,15,8.55,15,8z"/>
</g></svg>
<h5>Feeds</h5>
    </a>
</li>


<li  id="pages" >
<a href="#" class="extraAction" >
    <svg xmlns="http://www.w3.org/2000/svg" 
     
    viewBox="0 0 24 24" fill="none" class="userActionSvg">
      <path 
      d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" 
      fill="url(#blueTvGradient)" id="pagesFlagSvg" class="userActionSvg"/>
        </svg>
        <h5>Pages</h5>
</a>
</li>

<li id="events" >
    <a href="#" class="extraAction">
        <svg xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        fill="url(#blueTvGradient)" version="1.1" id="eventsSvg" viewBox="0 0 24 24" xml:space="preserve" class="userActionSvg">
            <style type="text/css">
                .st0{fill:none;}
            </style>
            <g>
                <path d="M20,7.4v10.5c0,1.7-1.3,3-3,3H5.9c0,1.1,0.9,2,2,2H18c2.2,0,4-1.8,4-4V9.4C22,8.3,21.1,7.4,20,7.4z" class="userActionSvg"/>
                <g>
                    <path d="M5,1.1v2H4c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h12.2c1.1,0,2-0.9,2-2v-12c0-1.1-0.9-2-2-2h-1v-2h-2v2H7v-2    C7,1.1,5,1.1,5,1.1z M4,8.1h12.2v9H4V8.1z" class="userActionSvg"/>
                    <path d="M13.7,16.3l-2.4-1.4L9,16.3l0.6-2.7l-2.1-1.8l2.8-0.2L11.4,9l1.1,2.5l2.8,0.3l-2.1,1.8L13.7,16.3z" class="userActionSvg"/>
                </g>
            </g>
            <rect class="st0" width="24" height="24"/>
            </svg>
            <h5>Events</h5>
    </a>
</li>

<li  id="adsManager" > 
<a href="#" class="extraAction" >
    <svg xmlns="http://www.w3.org/2000/svg" 
    id='adsManagerSvg' class="userActionSvg" 
    viewBox="0 0 24 24" fill="none">
        <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 10V17M7 13V17M19 5V17M11 7V17" stroke="url(#blueTvGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='adsManagerSvg' class="userActionSvg"  />
        </svg>
<h5>Ads Manager</h5>
</a>

</li>


<li id="messengerKids">
<a href="#" class="extraAction">
    
    <svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24" data-name="Layer 1" class="userActionSvg" >
       
        <defs>
          <linearGradient id="messengerKidsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:green;stop-opacity:1"/>
            <stop offset="50%" style="stop-color:white;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:teal;stop-opacity:1"/>
          </linearGradient>
        </defs>
        <path fill="url(#messengerKidsGradient)" 
        d="M12,2A9.65,9.65,0,0,0,2,11.7a9.51,9.51,0,0,0,3.14,7.18.81.81,0,0,1,.27.56l0,1.78a.81.81,0,0,0,1.13.71l2-.87a.75.75,0,0,1,.53,0,11,11,0,0,0,2.9.38A9.7,9.7,0,1,0,12,2Zm6,7.46-2.93,4.66a1.5,1.5,0,0,1-2.17.4l-2.34-1.75a.6.6,0,0,0-.72,0l-3.16,2.4A.47.47,0,0,1,6,14.54L8.93,9.88a1.5,1.5,0,0,1,2.17-.4l2.34,1.75a.6.6,0,0,0,.72,0l3.16-2.4A.47.47,0,0,1,18,9.46Z"  class="userActionSvg"/>
      </svg>
   <h5>Mesenger Kids</h5>
</a>
</li>

<li  id="messenger" >
<a href="#" class="extraAction" >
    <svg xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 24 24" data-name="Layer 1" id="messengerSvg" class="userActionSvg" >
     
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:red;stop-opacity:1"/>
            <stop offset="50%" style="stop-color:purple;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:blue;stop-opacity:1"/>
          </linearGradient>
        </defs>
      
       
        <path fill="url(#gradient)" d="M12,2A9.65,9.65,0,0,0,2,11.7a9.51,9.51,0,0,0,3.14,7.18.81.81,0,0,1,.27.56l0,1.78a.81.81,0,0,0,1.13.71l2-.87a.75.75,0,0,1,.53,0,11,11,0,0,0,2.9.38A9.7,9.7,0,1,0,12,2Zm6,7.46-2.93,4.66a1.5,1.5,0,0,1-2.17.4l-2.34-1.75a.6.6,0,0,0-.72,0l-3.16,2.4A.47.47,0,0,1,6,14.54L8.93,9.88a1.5,1.5,0,0,1,2.17-.4l2.34,1.75a.6.6,0,0,0,.72,0l3.16-2.4A.47.47,0,0,1,18,9.46Z" class="userActionSvg" />
      </svg>
      <h5>Messenger</h5>
</a>
</li>


<li  id="games" >
<a href="#" class="extraAction" >
    <svg xmlns="http://www.w3.org/2000/svg"  
    id="gamesSvg"
    class="userActionSvg"
    fill="none"
    viewBox="0 0 20 20">
    <rect x="0"  width="20" height="20"/>
    <defs>
        <linearGradient id="gameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:blue;stop-opacity:1"/>
          <stop offset="50%" style="stop-color:navy;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:navy;stop-opacity:1"/>
        </linearGradient>
      </defs>
        <g>
        <path 
d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" fill="url(#gameGradient)" class="userActionSvg" />
        </g>  
        </svg>
        <h5>Games</h5>
</a>
</li>
        </ul>  
           <a href="#" class="seeMore">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <rect/>
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="var(--neutralColor)" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h5>See more</h5>
            </a>
        </div> 


<div class="terms">
    <a href="#"  >Privacy</a>
    <a href="#"  >terms</a>
    <a href="#">Advertising</a>
    <a href="#">Ad Choices</a>
    <a href="#">Cookies</a>
    <a href="#">More</a>
    <a href="#">Meta &copy; 2024</a>
</div>
    </section>

     <section class="contacts  fixedDiv"  id="contacts">
        
        <div class="contactsHolder">
            <article>
                <h3>Contacts</h3> 
                <div class="searchContacts" >
                   <a href="#"  id="searchContacts">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                     fill="none"
                    id="svgSearch"
                    >
        <title>Search Contact</title>
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="var(---neutralColor)"/>
                    </svg>
                   </a>
                </div>

                <a href="#" id="morecontactOptions">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="var(--neutralColor)" id='moreOptionns' >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        <title>More Contacts Option</title>
                
                    </svg>
                </a>

               </article>
          
               <div class="contact">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>Me</h4>
            </div>
    
            
            <div class="contact">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>Him</h4>
            </div>
            <div class="contact">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>Her</h4>
                 </div>
     
        </div>


        <div class="groupHolder">
            <div class="group">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>Us</h4>
            </div>
    
            <div class="group">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>We</h4>
            </div>
            <div class="group">
                <img src="/../assets/images/profile.jpg" alt="" >
                <h4>Them</h4>
            </div>
        </div>
        
    </section>


      `

  style.textContent =
  `
.fixedDiv
{
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background: var(--bgColor);
  top: 3rem;
  z-index: 2;
}

#extraUserActions
{
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
}

#contacts
{
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
}

.extraActionsList,
.contactsHolder,
.groupHolder
{ 
   width: 18rem;
  margin: 0;
  padding: .5rem 0;
  display: flex;
  flex-direction: column; 
}

.extraActionsList img, 
.extraActionsList svg,
.seeMore svg,
.contactsHolder > article svg
{
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  position: relative;
  z-index: 1;
}
.seeMore ::after
{
  content: '';
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius:50%;
  top: 6px;
  left:8px;
  background: var(--accentColor);
}
.extraActionsLists
{
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;  
  background: var(--bgColor);
  max-height: 30rem;
  overflow: hidden; 
}
.contacts{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.extraAction, .seeMore
{
  display: flex;
  text-decoration: none;
  font-size: 1rem;  
  color: var( --textColor);
  align-items: center;
  justify-content: flex-start;
  gap: .5rem; 
  border-radius: .5rem;
  padding: .5rem;
  height: 3rem;
  position: relative;
}

.terms
{
  display: flex;  
  gap: .4rem;
  max-width: 18rem;
  flex-wrap: wrap;
}
.terms > a
{
  color: var(--textColor);
  text-decoration: none;
  font-size: .9rem;
  margin: 0;
  padding: 0;
color: var(--neutralColor);
}
.terms > a:hover
{
  text-decoration: underline;
}



.contactsHolder 
{
  display: flex;
  gap: .5rem;
  border-bottom: 1px solid var(--accentColor);
}

.contactsHolder > article
{
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: .5rem;

}
.contactsHolder h3
{
flex-grow: 2;
color: var(--textColor);
}
.contact, .group
{
  display: flex;
  align-items: center;
  padding: .5rem;
  height: 3rem;
  gap: .5rem;
  color: var(--textColor);
  border-radius: .5rem;
}
.contact img,
.group img
{
  width: 2rem;
  height: 2rem;
  border-radius: 3rem;
}

.feedAndsNews
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 4rem;
  padding: 1rem;
  gap: .5rem;
  width: fit-content;
}
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
  padding: 1rem 1rem;
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


}


@media screen and (max-width: 40rem) 
{
  #extraUserActions,
.extraActionsList,
.extraActionsList,
.contacts,
.fixedDiv,
.contactsHolder,
.groupHolder
{
  display: none;
}

.contacts,
.fixedDiv,
.contactsHolder,
.groupHolder,
.createPosts,
.createStoryContainer
{
  display: none;
}

main.mainContent
{
  width: 100%;
  left: 0;
  background: var(--accentColor);
 
}
.feedAndsNews
{  
  background: var(--accentColor);
  width: 100%;
  padding: .5rem;
  z-index: 20;
  top: 12rem;
}
.storyContainer
{
  
  border-top: 5px solid black;
  border-bottom: 2px solid black;
}


.storyContainer
{
  padding: .5rem;
  width: 100%;
  height: 16rem;
  border-radius: 0;
}
}

  `
  document.head.appendChild(style);
  return fixedDiv;  
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


const commentOverflow = () =>
  {
    const commentOverflowDiv = document.createElement('div');
    const commentOverflowStyles = document.createElement('style');
    commentOverflowDiv.innerHTML =
    `
                        <a href="#">Veiw More Comments</a>

                    <div class="commentContainer">
                       
                        <div class="commenterProfile">

                        </div>

                        <div class="comment">
                            <h6 class="commenter">
                                I Just Made A Comment
                            </h6>
                            <p class="commentTextContent">
                                This is my opinion that no one give a shit about
                            </p>
                            <div class="commentInfo">
                                <p class="commentTiime">1 d</p>
                                <a href="#" class="userLike">
                                    Like
                                </a>
                                <a href="#" class="userReply">Reply</a>
                                <a href="#" class="userShare">Share</a>
                                <div class="commentReactions">
                                    34 &middot; reactions
                                </div>
                            </div>
                        </div>
                    </div>
    `

    return commentOverflowDiv;
  }

const postCard = () =>
  {
    const postCardDiv = document.createElement('div');
    const postCardStyles = document.createElement('style');

    postCardDiv.innerHTML = 
    `
    
    `
  }







const body = document.getElementsByTagName('body');

document.addEventListener('DOMContentLoaded', () => {

 const test = reactionPopUp('#likePost');
    const postCard = document.getElementById('likePost');
    
 
  postCard.addEventListener('mouseenter', ()=>{
    postCard.appendChild(test)
    })  
    

   postCard.addEventListener('mouseleave', ()=>{
      setTimeout(() =>{
       postCard.removeChild(test)
      }, 1000)
       })

      postCard.addEventListener('click', (e) =>{
        e.preventDefault();
        postCard.querySelector('svg').style.fill = 'var(--mainBlue)';
         postCard.querySelector('h6').style.color = 'var(--mainBlue)';
      })



postCard.addEventListener('touchstart', function(e) {
  setTimeout(() =>{
    e.preventDefault();
   postCard.appendChild(test)
}, 100);
});


postCard.addEventListener('touchend', function(e) {
  setTimeout(() => {
    postCard.removeChild(test);
  }, 1500);  
});




});


