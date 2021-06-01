const images = [
{
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.js-gallery')
console.log(galleryEl)

const makeImageRowMarkup = image => {
  const {preview, original, description} = image
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-img="${original}" alt="${description}"z></a></li>`
} 

const makeImageMarkup = images.map(makeImageRowMarkup).join('')
galleryEl.insertAdjacentHTML('afterbegin', makeImageMarkup)

const lightboxEl = document.querySelector('.js-lightbox')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
const lightboxImg = document.querySelector('.lightbox__image')

galleryEl.addEventListener('click', openImg)

function openImg (evt) {
  event.preventDefault()
  if(evt.target.nodeName !== 'IMG'){
    return
  }
  const galleryLinkEl = document.querySelector('gallery__image')
  lightboxEl.classList.toggle('is-open')
  lightboxImg.src = evt.target.dataset.img
}

closeBtn.addEventListener('click', () => {
  lightboxEl.classList.toggle('is-open')
  lightboxImg.src = ""
})

const imgArray = document.querySelectorAll('.gallery__link')
const imgSwitchArray = []
console.log(imgArray)
imgArray.forEach(element => {
 imgSwitchArray.push(element.getAttribute('href'))
});

window.addEventListener('keydown', imgSwitch)

function imgSwitch (evt) {
  const KEY_ARROW_RIGHT = 'ArrowRight'
  const KEY_ARROW_LEFT = 'ArrowLeft'
  console.log(evt.code)
  let newIndex;
  const currentId = imgSwitchArray.indexOf(lightboxImg.src)
  if(evt.code === KEY_ARROW_LEFT) {
    newIndex = currentId - 1
    if(newIndex === -1) {
      newIndex = imgSwitchArray.length - 1
    }
  } else if (evt.code === KEY_ARROW_RIGHT) {
    newIndex = currentId + 1 
    if (newIndex === imgSwitchArray.length) {
      newIndex = 0
    }
  }
  lightboxImg.src = imgSwitchArray[newIndex]
}