import { applyTheme } from "./miniFunctionlities.js";




const quickUserActions = () =>
    {
      const quickUserActionsDiv = document.createElement('div')
      const quickUserActionsStyle = document.createElement('style');
  
  quickUserActionsDiv.innerHTML = 
      `
          <nav class="quickUserActions defaultDiv">
          <div class="userProfile">
              <img src="../assets/images/profile.jpg" alt="">
              <h5 class="userProfileQuickPopUp">Akinola Bright</h5>
          </div>
          <ul>
      <li>
          <a href="#" id="quickUserActionSettings">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                  fill="var(--neutralColor)"><path d="M0 0h24v24H0V0z" 
                  fill="none"/>
                  <path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
              </div>
              <h6>Settings And Privacy</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="rightChevron" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="var(--neutralColor)"/>
                  </svg>
          </a>
      </li>
  
  
      <li>
          <a href="#" id="quickUserActionHelpAndSupport" >
              <div class="quickUserActionSvg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C11.7015 9 11.4344 9.12956 11.2497 9.33882C10.8843 9.75289 10.2523 9.79229 9.83827 9.42683C9.4242 9.06136 9.3848 8.42942 9.75026 8.01535C10.2985 7.3942 11.1038 7 12 7C13.6569 7 15 8.34315 15 10C15 11.3072 14.1647 12.4171 13 12.829V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V12.5C11 11.6284 11.6873 11.112 12.2482 10.9692C12.681 10.859 13 10.4655 13 10C13 9.44772 12.5523 9 12 9ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12Z" fill="var(--neutralColor)"/>
  </svg>
              </div>
  <h6>Help & Support</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="rightChevron" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="var(--neutralColor)"/>
                  </svg>
      </a>
  </li>
     <li>
          <a href="#" id="quickUserActionDarkAndLightMode" >
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" fill="none"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="var(--neutralColor)"/>
                      </svg>
              </div>
              <h6>Display & Accesibility</h6>
  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="rightChevron" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="var(--neutralColor)"/>
                  </svg>
      </a>
  </li>
  <li>
      <a href="#" id="quickUserActionFeedback">
          <div class="quickUserActionSvg">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" 
              ><path d="M0 0h48v48H0z" fill="none"/>
              <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 28h-4v-4h4v4zm0-8h-4v-8h4v8z" 
                  fill="var(--neutralColor)"/></svg>
          </div>
          <h6>Give Feedback</h6>
          
          
  </a>
  </li>
  <li>
      <a href="#" id="quickUserActionLogout" >
          <div class="quickUserActionSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path fill="var(--neutralColor)" fill-rule="evenodd" 
                  d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873l6-1.8zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1zm6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1zM9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H9z" 
                  clip-rule="evenodd"/><path stroke="var(--neutralColor)" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2" d="M16 12h5m0 0-2-2m2 2-2 2"/></svg>
          </div>
          <h6>Log Out</h6>
    
  </a>
  </li>
  </ul>
  <div class="terms">
      <a href="#"  >Privacy</a>
      <a href="#"  >terms</a>
      <a href="#">Advertising</a>
      <a href="#">Ad Choices</a>
      <a href="#">Cookies</a>
      <a href="#">More</a>
      <a href="#">Meta &copy; 2024</a>
  </div>
      </nav>
  
  
  
      <nav class="quickUserActions  settingsDiv">
          <a  href="#" class="userProfile">
              <img src="../assets/images/profile.jpg" alt="">
              <h5 class="userProfileQuickPopUp">Akinola Bright</h5>
          </a>
     
  <div class="settingsAndPrivacy">
      <a href="#" class="quickPopUpHeader" id="goBackSettings"  >
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
          <h6>Settings And Privacy</h6> 
      </a>
  <ul>
      <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                  fill="var(--neutralColor)"><path d="M0 0h24v24H0V0z" 
                  fill="none"/>
                  <path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
              </svg>
              </div>
              <h6>Settings And Privacy</h6>
              
          </a>
      </li>    <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
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
              </div>
              <h6>Language</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="rightChevron" >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="var(--neutralColor)"/>
                  </svg>
          </a>
      </li>
      <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M11 21H4C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
              </div>
              <h6>Privacy Checkup</h6>
          </a>
      </li>
  
      
      <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M8.18164 10.7027C8.18164 10.7027 8.18168 8.13513 8.18164 6.59459C8.1816 4.74571 9.70861 3 11.9998 3C14.291 3 15.8179 4.74571 15.8179 6.59459C15.8179 8.13513 15.8179 10.7027 15.8179 10.7027" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50005 11.3932C4.50001 13.1319 4.49995 16.764 4.50007 19.1988C4.5002 21.8911 8.66375 22.5 12.0001 22.5C15.3364 22.5 19.5 21.8911 19.5 19.1988L19.5 11.3932C19.5 10.8409 19.0523 10.3957 18.5 10.3957H5.50004C4.94777 10.3957 4.50006 10.8409 4.50005 11.3932ZM10.5 16.0028C10.5 16.4788 10.7069 16.9065 11.0357 17.2008V18.7529C11.0357 19.3051 11.4834 19.7529 12.0357 19.7529H12.1786C12.7309 19.7529 13.1786 19.3051 13.1786 18.7529V17.2008C13.5074 16.9065 13.7143 16.4788 13.7143 16.0028C13.7143 15.1152 12.9948 14.3957 12.1072 14.3957C11.2195 14.3957 10.5 15.1152 10.5 16.0028Z" fill="var(--neutralColor)"/>
                      </svg>
              </div>
              <h6>Privacy Centre</h6>
          </a>
      </li>
      <li>
          <a href="./helpAndSupport.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 1.22386 0.223858 1 0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5ZM4 1.5C4 1.22386 4.22386 1 4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5ZM0 13.5C0 13.2239 0.223858 13 0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5Z" fill="var(--neutralColor)"/>
                    </svg>
              </div>
              <h6>Activity Log</h6>
          </a>
      </li>
      
      <li>
          <a href="./helpAndSupport.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <title>newspaper-solid</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                          <rect width="48" height="48" fill="none"/>
                          <rect width="48" height="48" fill="none"/>
                        </g>
                        <g id="icons_Q2" data-name="icons Q2">
                          <path d="M44,5H12a2,2,0,0,0-2,2V17H4a2,2,0,0,0-2,2V37a6,6,0,0,0,6,6H40a6,6,0,0,0,6-6V7A2,2,0,0,0,44,5ZM10,37a2,2,0,0,1-4,0V21h4Zm8-21.2A1.8,1.8,0,0,1,19.8,14h4.4A1.8,1.8,0,0,1,26,15.8v8.4A1.8,1.8,0,0,1,24.2,26H19.8A1.8,1.8,0,0,1,18,24.2ZM37.4,33.4A2,2,0,0,1,36,34H20a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H36a2,2,0,0,1,2,2A2,2,0,0,1,37.4,33.4Zm0-8A2,2,0,0,1,36,26H32a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2h4a2,2,0,0,1,2,2A2,2,0,0,1,37.4,25.4Zm0-8A2,2,0,0,1,36,18H32a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2h4a2,2,0,0,1,2,2A2,2,0,0,1,37.4,17.4Z" fill="var(--neutralColor)"/>
                        </g>
                      </g>
                    </svg>
              </div>
              <h6>Feed Preferences</h6>
          </a>
      </li>
  </ul>
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
      </nav>
  
  
  
  
      <nav class="quickUserActions  helpAndSupportDiv">
          <a  href="#" class="userProfile">
              <img src="../assets/images/profile.jpg" alt="">
              <h5 class="userProfileQuickPopUp">Akinola Bright</h5>
          </a>
     
  <div class="settingsAndPrivacy">
     
      <a href="#" class="quickPopUpHeader"  id="goBackHelpAndSupport" >
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
          <h6>Help & Support</h6> 
      </a>
  <ul>
      <li>
          <a href="./helpAndSupport.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C11.7015 9 11.4344 9.12956 11.2497 9.33882C10.8843 9.75289 10.2523 9.79229 9.83827 9.42683C9.4242 9.06136 9.3848 8.42942 9.75026 8.01535C10.2985 7.3942 11.1038 7 12 7C13.6569 7 15 8.34315 15 10C15 11.3072 14.1647 12.4171 13 12.829V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V12.5C11 11.6284 11.6873 11.112 12.2482 10.9692C12.681 10.859 13 10.4655 13 10C13 9.44772 12.5523 9 12 9ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12Z" fill="var(--neutralColor)"/>
                      </svg>
              </div>
              <h6>Help & Support</h6>
              
          </a>
      </li>    <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="1" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20 5.5L12 13L4 5.5" stroke="var(--neutralColor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
              </div>
              <h6>Support Inbox</h6>
          </a>
      </li>
      <li>
          <a href="./settings.html">
              <div class="quickUserActionSvg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="var(--neutralColor)" viewBox="0 0 24 24">
          <path d="M12,22A17.5,17.5,0,0,0,21,6.7V6L12,2,3,6v.7A17.5,17.5,0,0,0,12,22ZM11,6h2V8H11Zm0,4h2v8H11Z"/></svg>
              </div>
              <h6>Report a problem</h6>
          </a>
      </li>
  </ul>
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
      </nav>
  
  <nav class="quickUserActions  displaySettiingsDiv">
          <a  href="#" class="userProfile">
              <img src="../assets/images/profile.jpg" alt="">
              <h5 class="userProfileQuickPopUp">Akinola Bright</h5>
          </a>
     
  <div class="settingsAndPrivacy">
     
      <a href="#" class="quickPopUpHeader" id="goBackDisplay"  >
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
          <h6>Display And Accesibiblity</h6> 
      </a>
  
      <div class="displayAndAccesibility">
          <div class="quickUserActionSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" fill="none"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="var(--neutralColor)"/>
                  </svg>
          </div>
          <div class="displaytext"style="display: flex;flex-direction:column;algn-items:center;justify-content:center;gap:.5rem;"  >
              <h4 style="font-size: 1.5rem;margin:0;padding:0;" >Dark mode</h4>
  <p style="font-size: .8rem;
 margin:0;padding:0;
  color: grey;" >
      Adjust the appearance of Facebook to <br> reduce glare and give your eyes a break.
  
  </p>            
          </div>
      </div>
  
  
      <ul class="displaySettings" >
      <li  class="radioToggle" data-value="off" >
          <label>
              <h6>Off</h6>
              <input type="radio" name="theme" value="off" class="radioButton">
              <span class="radioButtonReplaceMent"></span>
          </label>
      </li> 
       <li class="radioToggle"  data-value="on">
          <label  >
              <h6>On</h6>
              <input type="radio" name="theme" value="on" class="radioButton" checked >
              <span class="radioButtonReplaceMent"></span>
          </label>
      </li>
      <li  class="radioToggle"  data-value="default" >
          <label  >
              <h6>Automatic <span style="color: grey;font-size: .8rem;" >system's default</span></h6>
              <input type="radio" name="theme" value="default" class="radioButton">
              <span class="radioButtonReplaceMent"></span>
          </label>
      </li>
  </ul>
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
      </nav>
    
  
      `
  
  quickUserActionsStyle.textContent = 
  `
  
  .quickUserActions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background: var(--accentColor);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px var(--accentColor);
    border: 1px solid var(--accentColor2);
    color: var(--textColor);
    position:fixed;
    top:4rem;
    right:1rem;
    z-index:500;
  }
  
  .quickUserActionSvg{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--accentColor2);
    box-shadow: 0 0 20px var(--accentColor);
  }
  .quickUserActionSvg svg,
  .rightChevron{
    width: 1.5rem;
  }
  .userProfile img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
  }
  .quickUserActions ul{
    min-width: 20rem;
    display: flex;
    align-items:flex-start;
    justify-content;center;
    flex-direction: column;
  }
  .quickUserActions li > a h6
  {
    flex: 1;
    font-size: 1rem;
    color: var(--textColor);
  }
  .quickUserActions li > a
  {
    min-width: 100%;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    gap: .5rem;
    border-radius: .5rem;
    background: var(--accentColor);
  }
  .quickUserActions li > a:hover,
  .userProfile:hover,
  .quickPopUpHeader:hover,
  .radioToggle:hover
  {
    background: var(--accentColor2);
  }

  .userProfile,
  .quickPopUpHeader
  {
  height:3rem;
    font-size: 2rem;
    display: flex;
    min-width: 100%;
    align-items: center;
    gap: 1rem;
    border-radius: .5rem;
    padding: 1rem;
    color: var(--textColor);
    padding-bottom: 1rem;
    justify-content: flex-start;
    position: relative;
  }
  .userProfile::after{
    position: absolute;
    content: '';
    bottom: -10px;
    left: 3%;
    width: 95%;
    border-bottom: 1px solid var(--accentColor2);
  }
  .terms
  {
  display: flex;  
  gap: .4rem;
  height:3rem;
  max-width: 19rem;
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

  .settingsAndPrivacy{
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items:center;
    justify-content:center;
    gap: .5rem;
  }
  .quickPopUpHeader{
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--textColor);
    gap: .5rem;
  }
  .displayAndAccesibility{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .radioToggle
  {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    border-radius: .5rem;
  }
  .radioButton {
  display: none;
  }
  .radioButtonReplaceMent {
  width: 20px;
  height: 20px;
  border: 2px solid var(--mainBlue);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  }
  .userProfile{
  cursor:pointer;
  }
  
  .radioButtonReplaceMent::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--mainBlue);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  }
  .radioButton:checked + .radioButtonReplaceMent::after {
  opacity: 1;
  }
  .radioButtonReplaceMent:hover {
  border-color: var(--blueAccent);
  }
  .settingsDiv{
  height:fit-content;
  }
  
 label{
 padding:0;
 height:2rem;
 display:flex;
 align-items:center;
 width:100%;
 justify-content:space-between;
 padding:.5rem;
 margin:0;
 }
  .settingsAndPrivacy ul
  {
  padding:0;
  margin:0;
  }
  .settingsAndPrivacy ul >li 
  {
  min-width:100%;
  }
  .defaultDiv ul > li {
        min-width:100%;
  }
.displayAndAccesibility{
width:100%;
height:5rem;  
}
.displayText{
gap:0;
}
  .unActive{display:none;}

  

  @media (max-width:40rem) {
    .quickUserActions{
      display: none!important ;
    }
    
  }
  ` 
  
  const settingsDiv = quickUserActionsDiv.querySelector('.settingsDiv');
  const helpAndSupportDiv = quickUserActionsDiv.querySelector('.helpAndSupportDiv');
  const displaySettiingsDiv = quickUserActionsDiv.querySelector('.displaySettiingsDiv');
  const defaultDiv = quickUserActionsDiv.querySelector('.defaultDiv');
  const settings = quickUserActionsDiv.querySelector('#quickUserActionSettings');
  const helpAndSupport =  quickUserActionsDiv.querySelector('#quickUserActionHelpAndSupport');
  const display =  quickUserActionsDiv.querySelector('#quickUserActionDarkAndLightMode');
  const goBack = quickUserActionsDiv.querySelectorAll('.quickPopUpHeader')
  const radioToggle = quickUserActionsDiv.querySelectorAll('.radioButton');
  const feedback = quickUserActionsDiv.querySelector('#quickUserActionFeedback');
  const logOut = quickUserActionsDiv.querySelector('#quickUserActionLogout');

  const userProfile = quickUserActionsDiv.querySelectorAll('.userProfileQuickPopUp');
  const userProfileLink = quickUserActionsDiv.querySelectorAll('.userProfile');
 
 
  userProfileLink.forEach(user =>{
    user.addEventListener('click', () =>{
        window.location = '../html/userProfile.html'
    })
    user.style.overflow = "hidden"


 })
 
  userProfile.forEach(profile =>{
    
const userData = JSON.parse(localStorage.getItem('fbUserData'));
profile.textContent = `${userData.firstName} ${userData.surName}`;
profile.style.padding = "0"
profile.style.margin = "0"
profile.style.display = "flex"
profile.style.flexWrap = "wrap"
profile.style.overflow = "hidden"
profile.style.maxWidth = "20rem"
profile.style.overflowY = "auto"


profile.style.fontSize = "2rem"
  })


  goBack.forEach(back =>{
    back.addEventListener('click', () =>{
  settingsDiv.classList.add('unActive');
  helpAndSupportDiv.classList.add('unActive');
  displaySettiingsDiv.classList.add('unActive');
  defaultDiv.classList.remove('unActive');
    })
  })
  
  settings.addEventListener('click', ()=>{
  defaultDiv.classList.add('unActive');
  helpAndSupportDiv.classList.add('unActive');
  displaySettiingsDiv.classList.add('unActive');
  settingsDiv.classList.remove('unActive');
  })
  
  helpAndSupport.addEventListener('click', ()=>{
    defaultDiv.classList.add('unActive');
    helpAndSupportDiv.classList.remove('unActive');
    displaySettiingsDiv.classList.add('unActive');
    settingsDiv.classList.add('unActive');
    })
    
  display.addEventListener('click', ()=>{
      defaultDiv.classList.add('unActive');
      helpAndSupportDiv.classList.add('unActive');
      displaySettiingsDiv.classList.remove('unActive');
      settingsDiv.classList.add('unActive');
      })

  settingsDiv.classList.add('unActive')
  helpAndSupportDiv.classList.add('unActive')
  displaySettiingsDiv.classList.add('unActive')
 defaultDiv.classList.remove('unActive')
 


  radioToggle.forEach(radio =>{  
    radio.addEventListener('change', () =>{
        document.body.classList.remove('darkMode', 'lightMode')
      const selectedTheme  = radio.value;
      localStorage.setItem('theme', selectedTheme);
      applyTheme(selectedTheme);
    })
   })

   
const theme = localStorage.getItem('theme')

radioToggle.forEach(radio =>{  
    
    if (radio.value === theme){
        radio.checked = true
    }
   })
   feedback.addEventListener('click', () =>{
    window.location = '../html/helpAndSupport.html'
  })
  
  logOut.addEventListener('click', () =>{
    window.location = './helpAndSupport.html'
  })
  document.head.appendChild(quickUserActionsStyle);
  return quickUserActionsDiv;
  }
  

export {quickUserActions}