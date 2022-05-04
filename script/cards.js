
let cardSet = new Set()

function getWaifu() {
  return fetch(API_ENDPOINT,
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => responseData.url)
    .catch(error => console.warn(error));
}
function getName() {
  return fetch('https://random-names-api.herokuapp.com/random',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }) 
    .then((response) => response.json())
    .then((responseData) => responseData)
    .catch(error => console.warn(error));
}

function getNewCards(number_of_cards) {
  const cardsList = []
  while (number_of_cards) {
    number_of_cards--;
    getWaifu().then(response => {
      getName().then(response_ => {
        console.info(
          `[Card recieved] url: ${response}, 
          name :${response_.body.name}`
        );
        if (isCardUnique(response)) {
          initialCards.push({
            name: response_.body.name,
            link: response,
          })
          renderCard(response_.body.name, response)
          // number_of_cards--;
        } else { 
          // make another iteration
          getNewCards(1)
        }
      })
    })
  }
  return cardsList
}

function isCardUnique(card_url) {
  // if card not in set
  if (!cardSet.has(card_url)) {
    // add card to set
    cardSet.add(card_url)
    return true
  } else {
    console.warn('Not unique card was dropped: ' + card_url)
    return false
  }
}