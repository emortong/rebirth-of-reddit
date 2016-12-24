var main = document.getElementById('main');


// ========================================
//      HEADER
// ========================================

var header = document.createElement('HEADER');
header.classList.add('main-header');
main.appendChild(header);

var container1 = document.createElement('div');
container1.classList.add('container');
header.appendChild(container1);

var logo_div = document.createElement('div');
logo_div.classList.add('logo-div');
container1.appendChild(logo_div);

var logo = document.createElement('IMG');
logo.classList.add('logo');
logo.setAttribute('src', "/assets/logo.svg");
logo_div.appendChild(logo);

var logo_deco = document.createElement('IMG');
logo_deco.classList.add('logo-deco');
logo_deco.setAttribute('src', "/assets/header_bg.svg");
logo_div.appendChild(logo_deco);

var main_nav = document.createElement('ul');
main_nav.classList.add('main-nav');
container1.appendChild(main_nav);

var li_container = document.createElement('div');
li_container.classList.add('li-container');
main_nav.appendChild(li_container);

var navLi1 = document.createElement('li');
navLi1.innerHTML = 'RANDOM';
li_container.appendChild(navLi1);

var dot1 = document.createElement('SPAN');
dot1.innerHTML = '●';
li_container.appendChild(dot1);

var navLi2 = document.createElement('li');
navLi2.innerHTML = 'MY BOARDS';
li_container.appendChild(navLi2);

var dot2 = document.createElement('SPAN');
dot2.innerHTML = '●';
li_container.appendChild(dot2);

var navLi3 = document.createElement('li');
navLi3.innerHTML = 'GET THE APP';
li_container.appendChild(navLi3);

// ========================================
//      PUG DIVS
// ========================================

var wrap = document.createElement('div');
wrap.classList.add('wrap');
wrap.classList.add('clearfix');
main.appendChild(wrap);

var pug_container = document.createElement('div');
pug_container.classList.add('pug-container');
wrap.appendChild(pug_container);

var pug_divs = document.createElement('div');
pug_divs.classList.add('pug-divs');
pug_container.appendChild(pug_divs);

var contentContainer = document.createElement('div');
contentContainer.classList.add('contentContainer');
pug_divs.appendChild(contentContainer);

var redditImage = document.createElement('div');
redditImage.classList.add('redditImage');
contentContainer.appendChild(redditImage);

var textDiv = document.createElement('div');
textDiv.classList.add('text');
contentContainer.appendChild(textDiv);

var redditTitle = document.createElement('h2');
textDiv.appendChild(redditTitle);

var liAuthor = document.createElement('li');
textDiv.appendChild(liAuthor);

var dot3 = document.createElement('SPAN');
dot3.innerHTML = '●';
textDiv.appendChild(dot3);

var liDate = document.createElement('li');
textDiv.appendChild(liDate);

var dot4 = document.createElement('SPAN');
dot4.innerHTML = '●';
textDiv.appendChild(dot4);

var liViews = document.createElement('li');
textDiv.appendChild(liViews);

var desc = document.createElement('p');
textDiv.appendChild(desc);


// ========================================
//      FOOTER
// ========================================

var footer = document.createElement('footer');
footer.classList.add('main-footer');
main.appendChild(footer);

var fbImg = document.createElement('IMG');
fbImg.id = 'fb';
fbImg.setAttribute('src', '/assets/facebook_grey.svg');
footer.appendChild(fbImg);

var instaImg = document.createElement('IMG');
instaImg.id = 'instagram';
instaImg.setAttribute('src', '/assets/instagram_grey.svg');
footer.appendChild(instaImg);


