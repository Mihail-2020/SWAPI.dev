
const sectionStarWars = document.querySelector('#star-wars');

sectionStarWars.addEventListener('click', handelSectionClick);

function handelSectionClick(event) {
  let section = event.target.id;

  console.log(section);
}


