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

  addEventListeners();
}

function dragStart() {
  //console.log('Event: dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  //console.log('Event: dragenter');
  this.classList.add('over');
}

function dragLeave() {
  //console.log('Event: dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  //console.log('Event: dragover');
  e.preventDefault();
}

function dragDrop() {
  //console.log('Event: drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemA = listItems[fromIndex].querySelector('.draggable');
  const itemB = listItems[toIndex].querySelector('.draggable');
  //Swap items
  listItems[fromIndex].appendChild(itemB);
  listItems[toIndex].appendChild(itemA);
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((li) => {
    li.addEventListener('dragover', dragOver);
    li.addEventListener('drop', dragDrop);
    li.addEventListener('dragenter', dragEnter);
    li.addEventListener('dragleave', dragLeave);
  });
}
