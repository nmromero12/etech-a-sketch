const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
}

const rows = document.querySelectorAll('.row');

rows.forEach(row => {
   for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column);
   }

});

