// --------- Status details ---------  
function statusDetails() {
     const statusEl = document.querySelector('#status-sect');
     const statusArr = [
          {
               profileIcn: [
                    { src: "images/profile-1.jpeg" },
                    { src: "images/profile-2.jpeg" },
                    { src: "images/profile-3.jpeg" },
                    { src: "images/profile-4.jpeg" },
                    { src: "images/profile-5.jpeg" },
                    { src: "images/profile-6.jpeg" },
                    { src: "images/profile-7.jpeg" },
                    { src: "images/profile-8.jpeg" },
                    { src: "images/profile-9.jpeg" },
                    { src: "images/profile-10.jpeg" },
                    { src: "images/profile-7.jpeg" },
               ],
          }
     ];

     const itmSrc = statusArr[0].profileIcn;
     let iHTML = "";




     itmSrc.forEach((el, index) => {
          iHTML += `
         <div class="status-items cursor-point">
         <div class="status-img" id = > 
              <img src="${el.src}" alt=".."  id="${index}">
              <div class="status-txt txt-white">Abishek Raj</div>
              <div class="status-icn full-flex">
                   <img src="${el.src}" alt=".." class="cursor-point">
              </div>
              <div class="img-overlay"></div>
         </div>
    </div>
         `
     }
     )
     statusEl.innerHTML = iHTML;

}
statusDetails();


// ------------ Opitons items ------------ 
function addActiveClass() {
     const optionItems = document.querySelectorAll(".option-items");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('active') })
               el.classList.add('active')
          })
     })
}
addActiveClass()

//  active class for dark mode 
function activeDarkMode() {
     const optionItems = document.querySelectorAll(".mode-dark");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode')
          })
     })
}
activeDarkMode()

// active class for light mode 
function activeLightMode() {
     const optionItems = document.querySelectorAll(".mode-light");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode')
          })
     })
}
activeLightMode()


// active class for Font mode 
function activeFontMode() {
     const optionItems = document.querySelectorAll(".mode-font");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode');
          })
     })
}
activeFontMode()

// font sizes mode
small_font.onclick = function () {
     document.body.classList.add('font-small-mode')
}
medium_font.onclick = function () {
     document.body.classList.add('font-medium-mode')
}
big_font.onclick = function () {
     document.body.classList.add('font-big-mode')
}

// Dark mode option 
first_dark.onclick = function () {
     document.body.classList.add('dark-mode-one')
}
second_dark.onclick = function () {
     document.body.classList.add('dark-mode-second')
}

// light mode option
light_mode_option.onclick = function () {
     const lightModeEl = document.query
     document.body.classList.add('light-mode-bg')
}


// Primary mode 
function primaryMode() {
     const optionItems = document.querySelectorAll(".mode-color");
     optionItems.forEach((el) => {
          el.addEventListener('click', (itm) => {
               optionItems.forEach((el) => { el.classList.remove('activeMode') })
               el.classList.add('activeMode');
          })
     })
}
primaryMode()


color_1.onclick = function () {
     document.body.classList.add('color-change-mode-1')
}
color_2.onclick = function () {
     document.body.classList.add('color-change-mode-2')
}
color_3.onclick = function () {
     document.body.classList.add('color-change-mode-3')
}
color_4.onclick = function () {
     document.body.classList.add('color-change-mode-4')
}
color_5.onclick = function () {
     document.body.classList.add('color-change-mode-5')
}

// Theme showing functanalitly 
function showTheme() {
     themeIcn = document.querySelector('.Theme-icn')
     const themeArea = document.querySelector('.themeArea')
     themeIcn.onclick = function () {
          themeArea.classList.toggle('visible-theme')
          const overlayEl = document.querySelector('.overlay')
          overlayEl.classList.toggle('visible-overlay')
     }
}
showTheme()


// Close icon 

crossIcn.onclick = function () {
     const themeArea = document.querySelector('.themeArea')
     themeArea.classList.remove('visible-theme')
     const overlayEl = document.querySelector('.overlay')
     overlayEl.classList.remove('visible-overlay')
}




// Post image section
function postStory() {
     const postArr = [
          {
               postImage: [
                    { src: "images/post-1.jpeg" },
                    { src: "images/post-2.jpeg" },
                    { src: "images/post-3.jpeg" },
                    { src: "images/post-5.jpeg" },
                    { src: "images/post-6.jpeg" },
                    { src: "images/post-7.jpeg" },
               ],
               postDp: [
                    { src: "images/profile-1.jpeg" },
                    { src: "images/profile-2.jpeg" },
                    { src: "images/profile-3.jpeg" },
                    { src: "images/profile-4.jpeg" },
                    { src: "images/profile-5.jpeg" },
                    { src: "images/profile-6.jpeg" },
               ],
               userDetails: [
                    [{
                         userName: [
                              "Aman raj",
                              "Mohit kumar gupta",
                              "Ankit raj",
                              "Amit gupta",
                              "Yuraj singh",
                              "Mohammad singh",
                         ]
                    }],
                    [{
                         duration: [
                              "11 hours and 44 minutes ago",
                              "10 hours and 12 minutes ago",
                              "30 hours and 19 minutes ago",
                              "25 hours and 44 minutes ago",
                              "5 hours and 55 minutes ago",
                              "34 hours and 21 minutes ago",
                         ]
                    }],

                    [{
                         messages: [
                              "Hellow Aman.",
                              "What are you doing?",
                              "Let's go somewhere..",
                              "Ok",
                              "Let's play",
                              "Met you from",
                         ]
                    }],


               ]
          }
     ]

     const postArea = document.querySelector('#post-area')
     const messageCont = document.querySelector('.message-cont')
     let messHTML = "";
     let postHTML = ""
     const imgSrc = postArr[0].postImage
     const postDp = postArr[0].postDp
     const userName = postArr[0].userDetails[0][0].userName
     const userMessage = postArr[0].userDetails[2][0].messages
     console.log(userMessage)

     imgSrc.forEach((el, index) => {
          const dpEl = postDp[index];
          const user = userName[index];
          const message = userMessage[index];

          postHTML += `
          <div class="post-itms">
               <div class="add-profile flex  posted-peopple user-profile" style="gap: 10px;">
                    <img src="${dpEl.src}" alt=".." class="cursor-point">
                    <div class="details">
                         <strong class="txt-black">${user}</strong>
                         <p class="small-size txt-gray">${postArr[0].userDetails[1][0].duration[index]}</p>
                    </div>
               </div>
               <div class="post-img cursor-point">
                    <img src="${el.src}">
               </div>
               <div class="option-menus flex" style="gap: 15px;">
                    <div class="option-itms"><i class="medium-size txt-black fa-regular fa-heart heart"></i></div>
                    <div class="option-itms"><i class="medium-size txt-black fa-regular fa-comment"></i></div>
                    <div class="option-itms"><i class="medium-size txt-black fa-solid fa-share"></i></div>
               </div>
               <div class="post-des">
                    <p class="txt-gray small-size">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem modi, delectus id sequi laborum qui obcaecati hic numquam natus laudantium!</p>
               </div>
          </div>`;

          //  message html 
          messHTML += `
          <div class="add-profile msg-profile-itms flex message-itms posted-peopple user-profile" style="gap: 10px;">
          <img src="${dpEl.src}" alt=".." class="cursor-point">
          <div class="details">
               <strong class="txt-black">${user}</strong>
               <p class="small-size txt-gray">${message}</p>
          </div>
     </div>
          `;
     });

     postArea.innerHTML = postHTML;
     messageCont.innerHTML = messHTML;
}

postStory();


// Display message option 
function messageOption() {
     const rightSectEl = document.querySelector('.right-sect ')
     message_opt.onclick = function () {
          rightSectEl.classList.toggle('visible-right-sect')
     }
}
messageOption() 