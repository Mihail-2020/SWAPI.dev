const shipsTableElement = document.querySelector('#tbody');
const sectionBlock = document.querySelector('#section-block');


async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}


// const SHIPS_PAGES = 4;
// const SHIPS_URL = 'https://swapi.dev/api/starships/?page=';

// async function fetchAllShips() {
// 	shipsTableElement.innerHTML = ''

//   for (let i = 1; i < SHIPS_PAGES; i++) {
//     let url = SHIPS_URL + i;

//     try {
//       const data = await fetchData(url);
//       const array = data.results;

//       for (let item in array) {
//         const tr = document.createElement("tr");
//         tr.innerHTML = `
//         <td>${array[item].name}</td>
//         <td>${array[item].model}</td>
//         <td>${array[item].starship_class}</td>
//         <td>${array[item].manufacturer}</td>
//       `;
//         shipsTableElement.appendChild(tr);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// fetchAllShips();
// updateShipsButtonElement.addEventListener('click', fetchAllShips);


const SW_API = {
  films: "https://swapi.dev/api/films/",
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  species: "https://swapi.dev/api/species/",
  starships: "https://swapi.dev/api/starships/",
  vehicles: "https://swapi.dev/api/vehicles/"
} 

const titleTableList = {
  films: `
    <th>Название</th>
    <th>Номер эпизода</th>
    <th>Имя режиссера</th>
    <th>Дата релиза</th>
  `,
  people: `
    <th>Имя человека</th>
    <th>Год рождения</th>
    <th>Пол</th>
    <th>Рост</th>
  `,
  planets: `
    <th>Название планеты</th>
    <th>Диаметр</th>
    <th>Климат</th>
    <th>Рельеф </th>
  `,
  species: `
    <th>Название вида</th>
    <th>Классификация</th>
    <th>Обозначение</th>
    <th>Рост вида</th>
  `,
  starships: `
    <th>Имя</th>
    <th>Модель</th>
    <th>Класс звездолета</th>
    <th>Производитель</th>
  `,
  vehicles: `
    <th>Имя автомобиля</th>
    <th>Модель</th>
    <th>Класс автомобиля</th>
    <th>Производитель автомобиля</th>
  `
}






function renderSection(section) {

const result = section in titleTableList ? titleTableList[section] : 'not in object'

const sectionElement = `
    <div class="table-block">
    <table>
        <thead>
          <tr>
            ${result}
          </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
      </table>
    </div>
`;

sectionBlock.insertAdjacentHTML('beforeend', sectionElement)
}
