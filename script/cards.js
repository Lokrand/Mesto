

function getWaifu() {
  return fetch('https://api.waifu.pics/sfw/waifu',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData);
      return responseData.url;
    })
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
    .then((responseData) => {
      // console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
}

function getInitialCards (number_of_cards) {
  const pog = []
  for (let i = number_of_cards; i--;) {
    getWaifu().then(response => {
      getName().then(response_ => {
        console.log(response);
        console.log(response_);
        initialCards.push({
          name: response_.body.name,
          link: response,
        })
      })
    })
  }
  return pog
}

