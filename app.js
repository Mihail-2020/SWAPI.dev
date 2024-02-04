const tbody = document.querySelector('.tbody');
const url_1 = 'https://swapi.dev/api/starships/?page1';
const url_2 = 'https://swapi.dev/api/starships/?page2';
const url_3 = 'https://swapi.dev/api/starships/?page3';


async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
} 

fetchData(url_1)
  .then((data) => {
    const array = [];
    const obj = data.results;
    for(let key in obj) {
      array.push(obj[key])
    }
    console.log(array);
    console.log(array[3].name)
    for (let item in array) {
      const tr = document.createElement('tr')
      tr.innerHTML = `
          <td>${array[item].name}</td>
          <td>${array[item].model}</td>
          <td>${array[item].starship_class}</td>
          <td>${array[item].manufacturer}</td>
      `;
      tbody.appendChild(tr)
    }
  })
  .catch(() => console.error('some error...'));

fetchData(url_2)
  .then((data) => {
    const array = [];
    const obj = data.results;
    for(let key in obj) {
      array.push(obj[key])
    }
    console.log(array);
    console.log(array[3].name)
    for (let item in array) {
      const tr = document.createElement('tr')
      tr.innerHTML = `
          <td>${array[item].name}</td>
          <td>${array[item].model}</td>
          <td>${array[item].manufacturer}</td>
      `;
      tbody.appendChild(tr)
    }
  })
  .catch(() => console.error('some error...'));

fetchData(url_3)
  .then((data) => {
    const array = [];
    const obj = data.results;
    for(let key in obj) {
      array.push(obj[key])
    }
    console.log(array);
    console.log(array[3].name)
    for (let item in array) {
      const tr = document.createElement('tr')
      tr.innerHTML = `
          <td>${array[item].name}</td>
          <td>${array[item].model}</td>
          <td>${array[item].manufacturer}</td>
      `;
      tbody.appendChild(tr)
    }
  })
  .catch(() => console.error('some error...'));

