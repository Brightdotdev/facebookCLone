import { quickUserActions } from "./quickUserActions.js";

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
             
          const notificationNumber = Math.floor(Math.random()* 10  )
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
                         <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="var(---neutralColor)" stroke-width="1" stroke-linecap="round"  >
             
             </line>
                         <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="var(---neutralColor)" stroke-width="1" stroke-linecap="round"  >
             
             </line>
                         <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="var(---neutralColor)" stroke-width="1" stroke-linecap="round"  >
             
             </line>
                     </g>
                 </g>
             </svg>
        </section>

        <nav id="navLinks"> 
            <ul> 
                <li id="homeNav" class="primaryNavigation">
                    <a >
                        <svg viewBox="0 0 24 24" 
                        id="homeSvg"  class="navSvg">
            <title>Home</title>
                        <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"  id="homeSvg"  class="navSvg" >
                        </path></svg>
                    </a>
                </li>



                <li id="friendsNav" class="primaryNavigation" >
                <a>
                    <svg viewBox="0 0 24 24" id="friendsSvg" class="navSvg">
            <title>Friends</title>
                    <path 
                    d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z" 
                    id="friendsSvg" class="navSvg">

                    </path></svg>
                </a>
            </li>


            <li id="primaryMesengerNav"   class="primaryNavigation">
                <a  >
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
                <a >
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
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"  
                    id="notificationSvg" class="navSvg" >
            <title>Notification</title>
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </a>
            </li>

            

            <li id="groupsNav" class="primaryNavigation" >
                <a>
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
                <title>Profile</title>
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
  z-index: 100000000000;
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
.secondaryNavigation:nth-of-type(4)::before,

{
  content: '';
position: absolute;
width: 15px;
height: 15px;
border: 3px solid var(--accentColor);
border-radius: 2rem;
top: 1px;
right: 0;
background: #E41E3F;
}
#notificationNav{
position:relative
}
#notificationNav::after
{
  content: '${notificationNumber}';
    font-size: .8rem;
  color: var(--textColor);
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: 25px;
height: 25px;
border: 3px solid var(--accentColor);
border-radius: 2rem;
top: -5px;
right: -7px;
background: #E41E3F;
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
    width:100%
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
 height: 1rem;
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
    padding:1rem;
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
      width: 100vw;
      height: 10rem;
      padding: .5rem;
      display: flex;
      justify-content: center;
      gap: .5rem;
      flex-direction: column;
       position:fixed;
      top:0;
    }

    
    .facebookSearchAndIcon
  {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid var(--accentColor2);
  }
  .facebookSearchAndIcon h1
  {
    display: flex;
    margin: 0;
    padding: 0;
    flex: 1;;
    color: var(--textColor);
  }
  #facebookLogo
  {
    display: none;
  }
#hamburgerSvgGroup
{
  display: flex;
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
  height: .5rem;
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
    margin:0;
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
    max-width: 2.5rem;
    max-height: 2.5rem;
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
  width: 80%;
  height: 2.5rem;
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
  width: 1.5rem;
}
.primaryNavigation:nth-of-type(${navigationNumber})::after{
  display: none;
}
.primaryNavigation a > svg
{
  width: 1.2rem;
}
}


@media (max-width: 35rem) { 
 
header{
width:100vw;
}


   `



  
   const homeNav = navDiv.querySelector('#homeNav');
   const friendsNav = navDiv.querySelector('#friendsNav');
   const videosNav = navDiv.querySelector('#videosNav');
   const groupsNav = navDiv.querySelector('#groupsNav');
 const  primaryNotificationNav = navDiv.querySelector('#primaryNotificationNav');
 const primaryMesengerNav = navDiv.querySelector('#primaryMesengerNav')
 const notificationNav = navDiv.querySelector('#notificationNav');
 const secondaryMesengerNav = navDiv.querySelector('#mesengerNav');
  


   homeNav.addEventListener('click' , () =>{
       window.location.href = "../index.html"
   })
   friendsNav.addEventListener('click' , () =>{
     window.location.href = "../html/friends.html"
   })
   videosNav.addEventListener('click' , () =>{
     window.location.href = "../html/videos.html"
   })
   groupsNav.addEventListener('click' , () =>{
     window.location.href = "../html/groups.html"
     navigationNumber = 6
   });

   primaryMesengerNav.addEventListener('click', () =>{
    window.location.href = "../html/messenger.html"
   });

   secondaryMesengerNav.addEventListener('click', () =>{
    window.location.href = "../html/messenger.html"
   });
   primaryNotificationNav.addEventListener('click', () =>{
    window.location.href = "../html/notification.html"
   });

   notificationNav.addEventListener('click', () =>{
    window.location.href = "../html/notification.html"
    //waiting for raph on this pop up tho
   })

   const quickUserAction = quickUserActions();
   const profile = navDiv.querySelector('#profileNav');

   document.body.appendChild(quickUserAction);
   quickUserAction.classList.add('unActive')
   profile.addEventListener('click', () =>{
    quickUserAction.classList.toggle('unActive')
    })
 

 document.head.appendChild(navStyle);
 return navDiv
    }



export 
{
  nav
}