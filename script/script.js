// открываем и закрываем модальные окна редактирования профиля и добавления карточек.

const modal = document.querySelector('.profile__button-edit')
const modal2 = document.querySelector('.popup')
const closeEdit = document.querySelector('.popup__close')
const popupCreate = document.querySelector('#popup__create')
const profileButton = document.querySelector('.profile__button')
const closeCreate = document.querySelector('#close_edit')
const closeView = document.querySelector('#close_view')
const popupView = document.querySelector('#popup_view')

let popupImg = document.querySelector('.popup__content')
let popupText = document.querySelector('.popup__text')

modal.addEventListener('click', () => {
  modal2.classList.add('popup_opened')
})
closeEdit.addEventListener('click', () => {
  modal2.classList.remove('popup_opened')
})
profileButton.addEventListener('click', () => {
  popupCreate.classList.add('popup_opened')
})
closeCreate.addEventListener('click', () => {
  popupCreate.classList.remove('popup_opened')
})
closeView.addEventListener('click', () => {
  popupView.classList.remove('popup_opened')
})

// Добавляем карточки из массива
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

let mestoTemplate = document.querySelector('#mesto').content;
let places = document.querySelector('.places');

// Добавляем карточки
function renderCard (name, link) {
  let userElement = mestoTemplate.cloneNode(true);
  userElement.querySelector('.place__image').src = link;
  userElement.querySelector('.place__image').alt = name;
  userElement.querySelector('.place__title').textContent = name;
  places.prepend(userElement);

  // likee
  let place = places.firstElementChild;
  let likeButtons = place.querySelector('.place__button')
  likeButtons.addEventListener('click', () => {
  likeButtons.classList.toggle("place__button_like");
  })

  //delete
  let deleteBut = place.querySelector('.place__delete')
  deleteBut.addEventListener('click', () => {
    deleteBut.parentNode.remove();
  })

  // view
  let placeImg = place.querySelector('.place__image')
  placeImg.addEventListener('click', () => {
  popupImg.src = link;
  popupText.textContent = name;
  popupView.classList.add('popup_opened')
  })
}
// клонируем содержимое тега template
initialCards.reverse();
for (let i = 0; i < initialCards.length; i++) {
  renderCard(initialCards[i].name, initialCards[i].link)
}

// Добавляем новые карточки

let newPlace = document.querySelector('#newPlace')
let placeTitle = document.querySelector('#place-title')
let placeContent = document.querySelector('#place-content')

newPlace.addEventListener('click', (event) => {
  event.preventDefault();
  let placeName = placeTitle.value;
  let placeCnt = placeContent.value;
  renderCard(placeName, placeCnt)
  popupCreate.classList.remove('popup_opened')
})

// заполняем имя профиля и профессию

let formElement = document.querySelector('#editProfile')
let nameInput = document.querySelector('#login-name')
let jobInput = document.querySelector('#login-content')
let profileTitle = document.querySelector('.profile__title')
let profileContent = document.querySelector('.profile__subtitle')

profileTitle.textContent = 'Жак-Ив Кусто'
profileContent.textContent = 'Исследователь океана'
nameInput.value = 'Жак-Ив Кусто'
jobInput.value = 'Исследователь океана'

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileContent.textContent = jobInput.value;
  modal2.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
