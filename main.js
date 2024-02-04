const shipsTableElement = document.querySelector('#tbody');


async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

const SHIPS_PAGES = 4;
const SHIPS_URL = 'https://swapi.dev/api/starships/?page=';

function fetchAllShips() {
	shipsTableElement.innerHTML = ''

  for (let i = 1; i < SHIPS_PAGES; i++) {
    let url = SHIPS_URL + i;

    try {
      const data = await fetchData(url);
      const array = data.results;

      for (let item in array) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${array[item].name}</td>
        <td>${array[item].model}</td>
        <td>${array[item].starship_class}</td>
        <td>${array[item].manufacturer}</td>
      `;
        shipsTableElement.appendChild(tr);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

fetchAllShips();
updateShipsButtonElement.addEventListener('click', fetchAllShips);
