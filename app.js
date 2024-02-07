function renderSection() {
const sectionElement = `
    <div class="table-block">
    <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Модель</th>
            <th>Класс звездолета</th>
            <th>Производитель</th>
          </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
      </table>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', sectionElement)
}
