const hamburgerSvgElement = () =>{
    const hamburgerSvgEDivElement = document.createElement('main');
    const hamburgerSvgEDivElementStyle = document.createElement('style');
    hamburgerSvgEDivElement.classList.add('menuHambugerSection');
    hamburgerSvgEDivElement.style.zIndex = '1000000000000000000000000000000000000'
    hamburgerSvgEDivElement.style.background = 'var(--bgColor)'

    hamburgerSvgEDivElement.innerHTML = 
    `  
        <section class="menu">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 512 512" version="1.1" xml:space="preserve" width="2.5rem" height="2.5rem" >
                <style type="text/css">
                    .arrowww{fill:var(--neutralColor);}
                </style>
            <g id="Layer_1"/>
                <g id="Layer_2">
                <g>
                <path class="arrowww" d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23    c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7    c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69    c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41    c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39    c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32    c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09    c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63    
                l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z"/>
                </g>
                </g>    
                </svg>
                <h4>Menu</h4>
                
        </section>


    <div class="contentsDiv">
        <section class="userProfileSectionHambugerSection">
            <div class="userProfileImageHambugerSection">
    
            </div>
            <h5 class="userName">
                Akinola Bright
            </h5>
        </section>
    
        <section class="extraUserActionHamburgerSection">
    
    
      <ul  class="extraActionsListHamburgerSection" >
    
        <li  class="friends">
            <a href="#" class="extraActionHamburgerSection" >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" class="friendsSvg" class="userActionSvg" >
                    <rect  class="friendsSvg"  />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z" fill="#3191F6" id="firstPerson"/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z" fill="#63D9C9" id="secondPerson"/>
                    <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z" fill="#3191F6" id="firstPerson"/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z" fill="#63D9C9" id="secondPerson"/>
                    </svg>
                    <h5>Friends</h5>
            </a>
        </li>
    
        <li class="videos">
            <a href="#" class="extraActionHamburgerSection" >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" 
                viewBox="0 -960 960 960" width="40px" class="videoSvgUserActions">
               <defs>
                   <linearGradient id="blueTvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" style="stop-color:#54D0C8;stop-opacity:1"/>
                       <stop offset="50%" style="stop-color:#1F8CE7;stop-opacity:1"/>
                       <stop offset="100%" style="stop-color:#54D0C8;stop-opacity:1"/>
                   </linearGradient>
               </defs>
               <path d="M382-346.67 653.33-520 382-693.33v346.66ZM326.67-120v-80h-180q-27 0-46.84-19.83Q80-239.67 80-266.67v-506.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 46.84 19.83Q880-800.33 880-773.33v506.66q0 27-19.83 46.84Q840.33-200 813.33-200h-180v80H326.67Zm-180-146.67h666.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z" fill="url(#blueTvGradient)" class="userActionSvg"/>
           </svg>
                  <h5>Videos</h5>
            </a>
        </li>
    
       
        <li class="groups" >
            <a href="#" class="extraActionHamburgerSection" >
                <svg xmlns="http://www.w3.org/2000/svg"
             enable-background="new 0 0 24 24" height="40px"
             viewBox="0 0 24 24" class="groupsSvgUserActions">
            <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#54D0C8;stop-opacity:1"/>
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
        
        
    <li class="marketplace"> 
        <a href="./html/marketPlace.html" class="extraActionHamburgerSection" >
            <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             class="userActionSvg" 
            class="marketPlaceSvg">
           <defs>
               <linearGradient id="blueGradientMarketPlace" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" style="stop-color:blue;stop-opacity:1"/>
                   <stop offset="50%" style="stop-color:lightblue;stop-opacity:1"/>
                   <stop offset="100%" style="stop-color:blue;stop-opacity:1"/>
    
               </linearGradient>
           </defs>
           <path d="M0 0h24v24H0V0z" fill="none"/>
           <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" fill="url(#blueGradientMarketPlace)" class="userActionSvg"/>
       </svg>
       
            <h5>MarketPlace</h5>
        </a>
    </li>
    
    <li class="messenger">
        <a href="#" class="extraActionHamburgerSection">
            
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
        
        <li  class="messenger" >
        <a href="#" class="extraActionHamburgerSection" >
            <svg xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 24 24" data-name="Layer 1" class="messengerSvg" class="userActionSvg" >
             
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
        
    
    
    <li class="feeds">
        <a href="../index.html" class="extraActionHamburgerSection" >
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" 
     viewBox="0 0 24 24"  fill="url(#blueTvGradient)" class='feedSvg' class="userActionSvg" >
    <g><path d="M0,0h24v24H0V0z" fill="none" class="userActionSvg"/></g>
    <g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M8,7h3c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8 C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z M16,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0 C17,16.55,16.55,17,16,17z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M15,8 V5l4,4h-3C15.45,9,15,8.55,15,8z"/>
    </g></svg>
    <h5>Feeds</h5>
        </a>
    </li>
    
    
    
    <li class="reels"> 
        <a href="./html/marketPlace.html" class="extraActionHamburgerSection" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="reelsSvg" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <!-- Define the gradient -->
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f09433;stop-opacity:1"/>
                    <stop offset="25%" style="stop-color:#e6683c;stop-opacity:1"/>
                    <stop offset="50%" style="stop-color:#dc2743;stop-opacity:1"/>
                    <stop offset="75%" style="stop-color:#cc2366;stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:#bc1888;stop-opacity:1"/>
                  </linearGradient>
                </defs>
              
                <!-- Apply the gradient to the SVG elements -->
                <path fill="url(#instagramGradient)" d="M13.34,4.13L20.26,16H4v-1C4,9.48,8.05,4.92,13.34,4.13z"/>
                <polygon fill="url(#instagramGradient)" points="33.26,16 22.57,16 15.57,4 26.26,4"/>
                <path fill="url(#instagramGradient)" d="M46,15v1H35.57l-7-12H35C41.08,4,46,8.92,46,15z"/>
                <path fill="url(#instagramGradient)" d="M4,18v17c0,6.08,4.92,11,11,11h20c6.08,0,11-4.92,11-11V18H4z M31,32.19l-7.99,4.54C21.68,37.49,20,36.55,20,35.04v-9.08  c0-1.51,1.68-2.45,3.01-1.69L31,28.81C32.33,29.56,32.33,31.44,31,32.19z"/>
              </svg>
       
            <h5>Reels</h5>
        </a>
    </li>
    
        <li class="saved" >
        <a href="#" class="extraActionHamburgerSection" >
            <svg xmlns="http://www.w3.org/2000/svg" 
            stroke-width="2" stroke-linejoin="round" 
            stroke-linecap="round" 
            class="bookmarkSvg" height="30"
            class="userActionSvg"
            width="24" viewBox="0 0 24 24">
           <defs>
               <linearGradient id="bookmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" style="stop-color:#B54AD0;stop-opacity:1"/>
                   <stop offset="100%" style="stop-color:#9E70F7;stop-opacity:1"/>
               </linearGradient>
           </defs>
           <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" class="userActionSvg" fill="url(#bookmarkGradient)" />
       </svg>
       
              <h5>Saved</h5>
        </a>
    </li>
    
    <li  class="pages" >
    <a href="#" class="extraActionHamburgerSection" >
        <svg xmlns="http://www.w3.org/2000/svg" 
         
        viewBox="0 0 24 24" fill="none" class="userActionSvg">
          <path 
          d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" 
          fill="url(#blueTvGradient)" class="pagesFlagSvg" class="userActionSvg"/>
            </svg>
            <h5>Pages</h5>
    </a>
    </li>
    
    <li class="events" >
        <a href="#" class="extraActionHamburgerSection">
            <svg xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            fill="url(#blueTvGradient)" version="1.1" class="eventsSvg" viewBox="0 0 24 24" xml:space="preserve" class="userActionSvg">
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
    
    <li  class="adsManager" > 
    <a href="#" class="extraActionHamburgerSection" >
        <svg xmlns="http://www.w3.org/2000/svg" 
        class='adsManagerSvg' class="userActionSvg" 
        viewBox="0 0 24 24" fill="none">
            <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 10V17M7 13V17M19 5V17M11 7V17" stroke="url(#blueTvGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='adsManagerSvg' class="userActionSvg"  />
            </svg>
    <h5>Ads Manager</h5>
    </a>
    
    </li>
    
    
    
    
    <li  class="games" >
    <a href="#" class="extraActionHamburgerSection" >
        <svg xmlns="http://www.w3.org/2000/svg"  
        class="gamesSvg"
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
    <li class="memories" >
        <a href="#" class="extraActionHamburgerSection" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            class='clockSvg' class="userActionSvg"
            stroke="#3191F6" fill="none"
            stroke="currentColor" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <h5>Memories</h5>
        </a>
    </li>
    
            </ul>  
        </section>
        
    
    
    <section class="settingsAndPrivacyHamburgerSection">
        <div class="settingsAndPrivacyDropDown">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                      fill="var(--neutralColor)"><path d="M0 0h24v24H0V0z" 
                      fill="none"  />
                      <path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
           <h6> Settings And Privacy </h6>
    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  class="settingsAndPrivacyDropDownSvg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="var(--neutralColor)"/>
                </svg>
        </div>
        <ul class="settingsAndPrivacyDropDownUl" >
            <li class="settings" >  
           <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            fill="var(--neutralColor)"><path d="M0 0h24v24H0V0z" 
             fill="none"/>
            <path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>    
         <h5>Settings </h5>
           </a>
            </li>
    
            <li class="orders" > 
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--neutralColor)" viewBox="-1 0 19 19" class="ordersAndPayments"><path d="M7.782 8.282H.818v-.874A1.112 1.112 0 0 1 1.926 6.3h6.629a4.767 4.767 0 0 0-.773 1.982zm7.09 4.859v.971a1.112 1.112 0 0 1-1.108 1.108H1.926a1.112 1.112 0 0 1-1.108-1.108V9.39h6.93a4.782 4.782 0 0 0 6.623 3.998 4.792 4.792 0 0 0 .501-.247zM7.92 12.113H3.33v1.109h4.59zm8.262-3.129a3.672 3.672 0 1 1-3.672-3.671 3.672 3.672 0 0 1 3.672 3.671zm-2.215.812a1.073 1.073 0 0 0-.265-.705 1.427 1.427 0 0 0-.397-.316 1.657 1.657 0 0 0-.41-.148 1.782 1.782 0 0 0-.375-.039 1.29 1.29 0 0 1-.216-.016.811.811 0 0 1-.221-.072.511.511 0 0 1-.164-.131.315.315 0 0 1-.074-.187.324.324 0 0 1 .182-.267.985.985 0 0 1 .5-.133 1.077 1.077 0 0 1 .175.03l.022.004a1.126 1.126 0 0 1 .214.075.583.583 0 0 1 .168.116.396.396 0 1 0 .56-.56 1.374 1.374 0 0 0-.403-.278 1.904 1.904 0 0 0-.352-.122v-.242a.396.396 0 1 0-.791 0v.232a1.669 1.669 0 0 0-.516.209 1.107 1.107 0 0 0-.55.936 1.094 1.094 0 0 0 .25.686 1.29 1.29 0 0 0 .425.34 1.583 1.583 0 0 0 .445.145 2.06 2.06 0 0 0 .346.027.987.987 0 0 1 .207.021.87.87 0 0 1 .21.075.645.645 0 0 1 .169.136.285.285 0 0 1 .07.184c0 .044 0 .135-.166.242a.983.983 0 0 1-.51.14 1.608 1.608 0 0 1-.224-.027 1.08 1.08 0 0 1-.208-.066.418.418 0 0 1-.154-.12.396.396 0 0 0-.598.519 1.192 1.192 0 0 0 .459.336 1.839 1.839 0 0 0 .345.107v.237a.396.396 0 0 0 .791 0v-.242a1.683 1.683 0 0 0 .53-.22 1.049 1.049 0 0 0 .526-.906z"/></svg>
                  <h5>Orders And Payments</h5>
            </a>
            </li>
    
            <li > 
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="none"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="var(--neutralColor)"/>
                        </svg>
                         <label class="darkModeText">Dark mode</label>
                         <label class="darkModeToggle">
                             <input type="checkbox" id="darkModeToggle">
                             <span class="toggle round"></span>
                         </label>
                </a>
            </li>
    
            <li>
                <a href="#" class="settings" >  
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"  viewBox="0 0 32 32" version="1.1">
                    <title>globe</title>
                    <defs>
                </defs>
                    <g id="globeee" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -671.000000)" fill="var(--neutralColor)">
                            <path d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z" id="globe" sketch:type="MSShapeGroup">
                
                </path>
                        </g>
                    </g>
                </svg>
                <h5> Languge</h5>
                </a>
            </li>
        </ul>
    </section>
    
    
    <section class="helpAndSupportHamburgerSection">
        <div class="helpAndSupportDropDown">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C11.7015 9 11.4344 9.12956 11.2497 9.33882C10.8843 9.75289 10.2523 9.79229 9.83827 9.42683C9.4242 9.06136 9.3848 8.42942 9.75026 8.01535C10.2985 7.3942 11.1038 7 12 7C13.6569 7 15 8.34315 15 10C15 11.3072 14.1647 12.4171 13 12.829V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V12.5C11 11.6284 11.6873 11.112 12.2482 10.9692C12.681 10.859 13 10.4655 13 10C13 9.44772 12.5523 9 12 9ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12Z" fill="var(--neutralColor)"/>
                </svg>  <h6>
                    Help & Support 
                </h6> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="helpAndSupportDropDownSvg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="var(--neutralColor)"/>
                </svg>
        </div>
        <ul class="helpAndSupportDropDownUl" >
            <li class="settings" >
             <a href="#">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C11.7015 9 11.4344 9.12956 11.2497 9.33882C10.8843 9.75289 10.2523 9.79229 9.83827 9.42683C9.4242 9.06136 9.3848 8.42942 9.75026 8.01535C10.2985 7.3942 11.1038 7 12 7C13.6569 7 15 8.34315 15 10C15 11.3072 14.1647 12.4171 13 12.829V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V12.5C11 11.6284 11.6873 11.112 12.2482 10.9692C12.681 10.859 13 10.4655 13 10C13 9.44772 12.5523 9 12 9ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12Z" fill="var(--neutralColor)"/>
                        </svg>
             <h5> Support</h5>
            </a>
        </li>
        <li class="settings" >
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="1" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 5.5L12 13L4 5.5" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                <h5>Support Inbox</h5>
              </a>
        </li>
            <li class="settings" > 
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" class="aboutSvgIcon" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                    <path fill="var(--neutralColor)" d="M60,52V4c0-2.211-1.789-4-4-4H14v51v3h42v8H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h2v-3V0H8  C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M23,14h12  c0.553,0,1,0.447,1,1s-0.447,1-1,1H23c-0.553,0-1-0.447-1-1S22.447,14,23,14z M42,28H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h19  c0.553,0,1,0.447,1,1S42.553,28,42,28z M49,22H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h26c0.553,0,1,0.447,1,1S49.553,22,49,22z"/>
                    </svg>
                    <h5>
           About
                    </h5>
                </a>
        </li>
    
        
            <li class="settings" >
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--neutralColor)" viewBox="0 0 24 24">
                        <path d="M12,22A17.5,17.5,0,0,0,21,6.7V6L12,2,3,6v.7A17.5,17.5,0,0,0,12,22ZM11,6h2V8H11Zm0,4h2v8H11Z"/></svg>
    <h5>
            Report A Problem
    
    </h5>
    
                    </a>
            </li>
        </ul>
    </section>
    
    
    
    <section class="logOut">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path fill="var(--neutralColor)" fill-rule="evenodd" 
                d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873l6-1.8zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1zm6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1zM9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H9z" 
                clip-rule="evenodd"/><path stroke="var(--neutralColor)" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" d="M16 12h5m0 0-2-2m2 2-2 2"/></svg> 
            <h5> LogOut</h5>
         
    </section>
    
    </div>
    `
hamburgerSvgEDivElementStyle.textContent = 
`

*, *::after, *::before,
ul,li,a,h5,h1,h2,h3,h4,h5
{
  font-family: 'Segoe UI',sans-serif;
  box-sizing: border-box;
  list-style: none;
  border: 0;
  padding: 0;
  text-decoration: none;
  transition: all ease-out .2s;
}

ul,li,a,h5,h1,h2,h3,h4,h5
{
  max-width: 75ch;  
}
.menuHambugerSection{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: .5rem;
    height: fit-content;
    z-index: 200000000000000000;

  }
  .menu{
    display: flex;
    align-items: center;
    gap: .5rem;
    position: sticky;
    top: 0;
    background: var(--bgColor);
    z-index: 23;
    height: 3.5rem;

  }
  .menu > h4{
    margin: 0;
    padding: 0;
    flex: 1;
    font-size: 1rem;
  color: var(--neutralColor);
  }
  .menu > svg{
  width: 1.5rem;
  }
  .userProfileSectionHambugerSection{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--accentColor2);
    color: var(--textColor);
    border-bottom: 3px solid var(--neutralColor);
  }

.contentsDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: .5rem;
  height: fit-content;
}
  .userProfileImageHambugerSection{
    width: 2.5rem;
    min-height: 2.5rem;
    background: url('../assets/images/profile.jpg');
    background-position: center;
    background-size: 100%;
    border-radius: 2rem;
  }
.extraUserActionHamburgerSection{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
}
  
  .extraActionsListHamburgerSection{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 100%; 
    padding: .5rem;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
   gap: .5rem;
  }

  .extraActionsListHamburgerSection li{
    width:48%;
    background: var(--accentColor);
    border-radius: .5rem;
    margin: 0;
    padding: 0;
  }
  .extraActionHamburgerSection{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: .5rem;
    color: var(--textColor);
    height: 4rem;
    padding: .5rem;
    border-radius: .5rem;
  }
  .extraActionHamburgerSection  h5{
    padding: 0;
    margin: 0;
  }
  .extraActionHamburgerSection > svg {

    height: 3rem;

  }


  .settingsAndPrivacyHamburgerSection, .helpAndSupportHamburgerSection{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--neutralColor);
  padding-top: 1.5rem;
  transition: 2s ease-in;
  }



  .settingsAndPrivacyHamburgerSection svg,.helpAndSupportHamburgerSection svg{
   flex:0 1 2rem;
  }
  .settingsAndPrivacyDropDown, .helpAndSupportDropDown{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: .5rem;
    cursor: pointer;
  }

  .settingsAndPrivacyDropDown > h6, .helpAndSupportDropDown > h6{
    margin: 0;
    padding: 0;
    color: var(--neutralColor);
    flex: 1;
    font-size: 1rem;
    
  }
  .settingsAndPrivacyHamburgerSection > ul, .helpAndSupportHamburgerSection > ul{
    min-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
    margin: 0;
  }
  .settingsAndPrivacyHamburgerSection > ul li, .helpAndSupportHamburgerSection > ul li{
  min-width: 100%;
  }
  .settingsAndPrivacyHamburgerSection ul > li a, .helpAndSupportHamburgerSection ul> li a{
    min-width: 100%;
    display: flex;
  align-items: center;
  padding: .5rem;
  gap: .5rem;
  font-weight: 700;
  border-radius: .5rem;
  height: 3.5rem;
    background: var(--accentColor);
    color: var(--neutralColor);
  }
  .settingsAndPrivacyHamburgerSection ul > li a > h5, .helpAndSupportHamburgerSection ul> li a > h5
{
  flex: 1;
  margin: 0;
  padding: 0;
}
.settingsAndPrivacyHamburgerSection ul > li a:hover, .helpAndSupportHamburgerSection ul> li a:hover, .logOut:hover{
    background: var(--accentColor2);
  }
  .logOut{
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: var(--neutralColor);
  height: 3.5rem;
  padding: .5rem;
  cursor: pointer;
  border-top: 1px solid var(--neutralColor);
  padding-top: 1.5rem;
  }
  .logOut > h5{
    margin: 0;
    padding: 0;
  }
  .logOut >svg{
    width: 2rem;
  }
  .darkModeText{
    flex: 1;
  }
  .darkModeToggle {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
}
.darkModeToggle input {
    opacity: 0;
    width: 0;
    height: 0;

}
.toggle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--blueAccent);
    transition: .4s;
    border-radius: 100%;
    outline: 1px solid var(--neutralColor);
    padding: .5rem;
  }

.toggle:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: var(--mainBlue);
    transition: .4s;
    border-radius: 50%;
}



input:checked + .toggle:before {
    transform: translateX(1.7rem);
    left: 4px;
}

.toggle.round {
    border-radius: 2rem;
}

.toggle.round:before {
    border-radius: 50%;
}
.unActive{display:none}



.rotate{
  transform: rotate(180deg);
}
`
document.head.appendChild(hamburgerSvgEDivElementStyle);
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




return hamburgerSvgEDivElement
}


export{
  hamburgerSvgElement
}