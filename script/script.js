const INITIAL_CARDS_AMOUNT = 3

const openEdit = document.querySelector('.profile__button-edit')
const profileEdit = document.querySelector('.popup')
const closeEdit = document.querySelector('.popup__close')
const popupCreate = document.querySelector('#popup__create')
const profileButton = document.querySelector('.profile__button')
const closeCreate = document.querySelector('#close_edit')
const closeView = document.querySelector('#close_view')
const popupView = document.querySelector('#popup_view')
const popupImg = document.querySelector('.popup__content')
const popupText = document.querySelector('.popup__text')
const mestoTemplate = document.querySelector('#mesto').content;
const places = document.querySelector('.places');
const profileButtonAddCard = document.querySelector('#profileNewPlace')
const placeTitle = document.querySelector('#place-title')
const placeContent = document.querySelector('#place-content')
const profileEditElem = document.querySelector('#editProfile')
const nameInput = document.querySelector('#login-name')
const jobInput = document.querySelector('#login-content')
const profileTitle = document.querySelector('.profile__title')
const profileContent = document.querySelector('.profile__subtitle')

// открываем попап
const openPopup = (elem) => elem.classList.add('popup_opened');

// закрываем попап
const closePopup = (elem) => elem.classList.remove('popup_opened');

// заполняем имя профиля и профессию
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileContent.textContent = jobInput.value;
  profileEdit.classList.remove('popup_opened');
}


// клонируем содержимое тега template
const initialCards = getInitialCards(INITIAL_CARDS_AMOUNT)
function pog() {
  initialCards.reverse();
  for (const i of initialCards) {
    renderCard(i.name, i.link)
  }
  console.log('pog done');
}


// добавляем карточки из массива
function createCard(name, link) {
  const userElement = mestoTemplate.cloneNode(true);
  userElement.querySelector('.place__image').src = link;
  userElement.querySelector('.place__image').alt = name;
  userElement.querySelector('.place__title').textContent = name;
  return userElement;
}

// Добавляем карточки
function renderCard (name, link) {
  places.prepend(createCard(name, link));

  // likee
  const place = places.firstElementChild;
  const likeButtons = place.querySelector('.place__button')
  likeButtons.addEventListener('click', () => {
  likeButtons.classList.toggle("place__button_like");
  })

  //delete
  const deleteBut = place.querySelector('.place__delete')
  deleteBut.addEventListener('click', () => {
    deleteBut.closest('.place').remove();
  })

  // view
  const placeImg = place.querySelector('.place__image')
  placeImg.addEventListener('click', () => {
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  openPopup(popupView);
  })
}

// открываем и закрываем модальные окна редактирования профиля и добавления карточек.
openEdit.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileContent.textContent
  openPopup(profileEdit)
})
closeEdit.addEventListener('click', () => {
  closePopup(profileEdit)
})
profileButton.addEventListener('click', () => {
  openPopup(popupCreate)
  document.querySelector("#profileNewPlace").reset();
})
closeCreate.addEventListener('click', () => {
  closePopup(popupCreate)
})
closeView.addEventListener('click', () => {
  closePopup(popupView)
})

// Добавляем новые карточки
profileButtonAddCard.addEventListener('submit', (event) => {
  event.preventDefault();
  const placeName = placeTitle.value;
  const placeCnt = placeContent.value;
  renderCard(placeName, placeCnt)
  popupCreate.classList.remove('popup_opened')
})
profileEditElem.addEventListener('submit', handleProfileFormSubmit);

// refactor to wait exact time before list of links is fetched
setTimeout(pog, 1500);

