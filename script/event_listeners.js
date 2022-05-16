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

profileButtonAddRandomCard.addEventListener('click', (event) => {
    event.preventDefault();
    getNewCards(1);
})
