const tableElement = document.querySelector('#tbody');
const sectionBlock = document.querySelector('#section-block');
const sectionStarWars = document.querySelector('#star-wars');

sectionStarWars.addEventListener('click', handelSectionClick);

function handelSectionClick(event) {
  let section = event.target.id;
  sectionBlock.innerHTML = '';

  renderSection(section);
  fetchAll(section);
}


async function fetchData(url) {
  const response = await fetch(`${url}`);
  return response.json();
}

const SW_API = {
  films: "https://swapi.dev/api/films/",
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  species: "https://swapi.dev/api/species/",
  starships: "https://swapi.dev/api/starships/",
  vehicles: "https://swapi.dev/api/vehicles/"
}

const PAGES = 4;

async function fetchAll(section) {
	// tableElement.innerHTML = ''


  for (let i = 1; i < PAGES; i++) {
    let url = SW_API[`${section}`] + i;

    console.log(url);

    try {
      const data = await fetchData(url);
      const array = data.results;

      console.log(array);

      // for (let item in array) {
      //   const tr = document.createElement("tr");
      //   tr.innerHTML = `
      //   <td>${array[item].name}</td>
      //   <td>${array[item].model}</td>
      //   <td>${array[item].starship_class}</td>
      //   <td>${array[item].manufacturer}</td>
      // `;
      //   tableElement.appendChild(tr);
      // }
    } catch (error) {
      console.error(error);
    }
  }
}

// fetchAll();
// updateShipsButtonElement.addEventListener('click', fetchAllShips);


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
