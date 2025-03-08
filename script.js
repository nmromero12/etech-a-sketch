const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    container.appendChild(div);
}

const rows = document.querySelectorAll('.row');

