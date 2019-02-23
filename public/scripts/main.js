let mobileBlock = document.querySelector('.skyengapp-block-wrapper-mobile');
let desktopBlock = document.querySelector('.skyengapp-block-wrapper-desktop');
let tvBlock = document.querySelector('.skyengapp-block-wrapper-tv');
let forinsertBlock = document.querySelector('#forinsert');

let data = {
  mobile: {
    imgpath: './dist/images/device.svg',
    title: 'Mobile',
    description: 'Get notification about new releases in our mobile app.',
    price: '10'
  },
  desktop: {
    imgpath: './dist/images/laptop.svg',
    title: 'Desktop',
    description: 'Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.',
    price: '15'
  },
  tv: {
    imgpath: './dist/images/monitor.svg',
    title: 'TV',
    description: 'Watch your favorite series at home on large screen with our TV application.',
    price: '20'
  }
};

function insertionHTML(imgpath, title, description, price) {
  return `<div class='insertion'><div class='insertion__block insertion-block'>
      <img class='insertion-block__close' src="./dist/images/cross.svg" alt="close button"/>
      <div class='insertion-block__confirmation'>Confirmation</div>
      <img class='insertion-block__image' src='${imgpath}' alt=${title} />
      <div class='insertion-block__title'>${title}</div>
      <div class='insertion-block__description'>${description}</div>
      <div class='insertion-block__pricewrapper insertion-block-pricewrapper'>
        <div class='insertion-block-pricewrapper__dollarsign'>$</div>
        <div class='insertion-block-pricewrapper__pricepermonth insertion-block-pricewrapper-pricepermonth'>${price}<span class='insertion-block-pricewrapper-pricepermonth__month'> / month</span>
        </div>
      </div>
      <div class='insertion-block__button'>Confirm and pay</div>
    </div>
  </div>`;
}

function closingHandler() {
  let insertion = document.querySelector('.insertion');
  let closeButton = document.querySelector('.insertion-block__close');
  insertion.addEventListener('click', function() {
    event.stopPropagation();
    event.preventDefault();
    if(event.target === insertion) {
      forinsertBlock.removeChild(insertion);
    }
  });
  closeButton.addEventListener('click', function() {
    forinsertBlock.removeChild(insertion);
  });
}


function mobileBlockHandler(e) {
  forinsertBlock.innerHTML = insertionHTML(data.mobile.imgpath, data.mobile.title, data.mobile.description, data.mobile.price);
  closingHandler();
}

function desktopBlockHandler(e) {
  forinsertBlock.innerHTML = insertionHTML(data.desktop.imgpath, data.desktop.title, data.desktop.description, data.desktop.price);
  closingHandler();
}

function tvBlockHandler(e) {
  forinsertBlock.innerHTML = insertionHTML(data.tv.imgpath, data.tv.title, data.tv.description, data.tv.price);
  closingHandler();
}

mobileBlock.addEventListener('click', mobileBlockHandler);
desktopBlock.addEventListener('click', desktopBlockHandler);
tvBlock.addEventListener('click', tvBlockHandler);

