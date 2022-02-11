const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9eb70fb52c5d4f55a3533f7507b63088";

const gameContainer = document.querySelector(".gamesList");

async function callRawgApi() {
  const response = await fetch(url);
  const gamesList = await response.json();
  const resultList = gamesList.results;
  document.querySelector(".loader").classList.remove("loader");
  console.log(gamesList);

  for (let i = 0; i < 8; i++) {
    gameContainer.innerHTML += `<li>Name: ${resultList[i].name}  Rating: ${resultList[i].rating}   Tags: ${resultList[i].tags.length}</li>`;
  }
}
callRawgApi();
