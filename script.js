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
  [...tvShows].forEach((show, index) => {
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
