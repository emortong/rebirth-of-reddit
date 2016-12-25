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

var square = document.createElement('div');
square.classList.add('square');
square.innerHTML = '+'
logo_div.appendChild(square);

var main_nav = document.createElement('ul');
main_nav.classList.add('main-nav');
container1.appendChild(main_nav);

var li_container = document.createElement('div');
li_container.classList.add('li-container');
main_nav.appendChild(li_container);

var random = document.createElement('li');
random.innerHTML = 'RANDOM';
li_container.appendChild(random);

var dot1 = document.createElement('SPAN');
dot1.innerHTML = '●';
dot1.classList.add('dot1');
li_container.appendChild(dot1);

var myBoards = document.createElement('li');
myBoards.innerHTML = 'MY BOARDS';
li_container.appendChild(myBoards);

var dot2 = document.createElement('SPAN');
dot2.innerHTML = '●';
dot2.classList.add('dot1');
li_container.appendChild(dot2);

var getTheApp = document.createElement('li');
getTheApp.innerHTML = 'GET THE APP';
li_container.appendChild(getTheApp);

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



// ========================================
//      EVENT LISTENERS
// ========================================

random.addEventListener('click', function() {
  var randomReq = new XMLHttpRequest();
  randomReq.addEventListener('load', reqListener);
  randomReq.open('GET', 'https://www.reddit.com/r/aww.json');
  randomReq.send();
})

myBoards.addEventListener('click', function() {
  var myBoardsReq = new XMLHttpRequest();
  myBoardsReq.addEventListener('load', reqListener);
  myBoardsReq.open('GET', 'https://www.reddit.com/r/pug.json');
  myBoardsReq.send();

})

getTheApp.addEventListener('click', function() {
  var getTheAppReq = new XMLHttpRequest();
  getTheAppReq.addEventListener('load', reqListener);
  getTheAppReq.open('GET', 'https://www.reddit.com/r/puppies.json');
  getTheAppReq.send();
})

// ========================================
//      REQUEST LISTENER
// ========================================

function reqListener() {

    var myData = JSON.parse(this.responseText);

    for(var i = 0; i < myData.data.children.length; i++) {
      if(myData.data.children[i].data.post_hint === 'image') {

        var picture = myData.data.children[i].data.url;
        var title = myData.data.children[i].data.title;
        if(title.length > 43) {
          title = title.substring(0, 43) + ' ...';
        }
        var author = myData.data.children[i].data.author;
        var date = myData.data.children[i].data.created;
        date = moment.unix(date).subtract(10, 'hours').fromNow()

        var upvotes = myData.data.children[i].data.score;
        var description;
        if(myData.data.children[i].data.link_flair_text !== null) {
          description = myData.data.children[i].data.link_flair_text
        } else {
          description = 'No description';
        }

        var pug_divs = document.createElement('div');
        pug_divs.classList.add('pug-divs');
        pug_container.appendChild(pug_divs);

        var contentContainer = document.createElement('div');
        contentContainer.classList.add('contentContainer');
        pug_divs.appendChild(contentContainer);

        var redditImage = document.createElement('div');
        redditImage.classList.add('redditImage');
        redditImage.style.backgroundImage = `url(${picture})`;
        contentContainer.appendChild(redditImage);

        var textDiv = document.createElement('div');
        textDiv.classList.add('text');
        contentContainer.appendChild(textDiv);

        var redditTitle = document.createElement('h2');
        redditTitle.innerHTML = title;
        textDiv.appendChild(redditTitle);

        var liAuthor = document.createElement('li');
        liAuthor.innerHTML = `by ${author} `;
        textDiv.appendChild(liAuthor);

        var dot3 = document.createElement('SPAN');
        dot3.innerHTML = ' ● ';
        textDiv.appendChild(dot3);

        var liDate = document.createElement('li');
        liDate.innerHTML = ` ${date} `;
        textDiv.appendChild(liDate);

        var dot4 = document.createElement('SPAN');
        dot4.innerHTML = ' ● ';
        textDiv.appendChild(dot4);

        var liViews = document.createElement('li');
        liViews.innerHTML = `${upvotes} upvotes`;
        textDiv.appendChild(liViews);

        var desc = document.createElement('p');
        desc.innerHTML = description;
        textDiv.appendChild(desc);
      }
    }
  }





