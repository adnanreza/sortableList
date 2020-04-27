const draggable_list = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');

const tvShows = [
  'Seinfeld',
  'Two and a half men',
  'Better Call Saul',
  'Breaking Bad',
  "That 70's show",
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert List items into DOM
function createList() {
  //Copy tvShows array using spread operator
  [...tvShows]
    //Transform each item in array into object with value and sort number
    .map((item) => ({ value: item, sort: Math.random() }))
    //Sort by random value
    .sort((a, b) => a.sort - b.sort)
    //Turn it back into array of strings
    .map((item) => item.value)
    //Loop through each show and generate li
    .forEach((show, index) => {
      const li = document.createElement('li');

      li.setAttribute('data-index', index);

      li.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="show-name">${show}</p>
      <i class="fas fa-grip-lines"></i>
    </div>
    `;
      listItems.push(li);
      draggable_list.appendChild(li);
    });
}
