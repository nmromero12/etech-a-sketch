const container = document.querySelector(".grid-container");


// create intial board



//create intial rows

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
}

const rows = document.querySelectorAll('.row');



// create intial columns
rows.forEach(row => {
   for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column);
   }

});



//Allow tiles to be hovered over
const columns = document.querySelectorAll('.column');

columns.forEach(column => {
    column.addEventListener('mouseenter', () => {
      column.classList.add('hovered'); // Add 'hovered' class when the mouse enters
    });
  
    column.addEventListener('mouseleave', () => {
      
    });
  });


//Allow to clear grid by removing hovered property from each column 
const clear = document.querySelector('.clear');

clear.addEventListener("click", () => {

    columns.forEach(column => {
        column.classList.remove("hovered")
    })

}
)


// Resize functionality 
const resize = document.querySelector('.resize');


//First remove the columns
function removeColumn() {
    removeColumns = document.querySelectorAll('.column')
    removeColumns.forEach(column => {
        column.remove()

    })
}
//Second remove the rows
function removeRow() {
    removeRows = document.querySelectorAll('.row')
    removeRows.forEach(row => {
        row.remove()
    })

}

//Create a new grid

function createGrid(numOfSquares){
    for (let i = 0; i < numOfSquares; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        container.appendChild(newRow);   
    }

    const newRows = document.querySelectorAll('.row')

    newRows.forEach(row => {

        for (let i = 0; i < numOfSquares; i++) {
            const newColumn = document.createElement('div');
            newColumn.classList.add('column');
            row.appendChild(newColumn);
        }
        row.style.height = `${640 / numOfSquares}px`;
        

    })

    const newColumns = document.querySelectorAll('.column');

    newColumns.forEach(column => {
        column.style.width = `${640 / numOfSquares}px`;

    })

    // newColumns.forEach(column => {
    //     column.style.width = '${640/numOfSquares}px';
    // })


}

resize.addEventListener("click", () => {
    let userInput;
    while (true) {
        userInput = prompt("Please enter a valid number between 1 and 100");

        if (userInput == null) {
            break;
        }
        userInput = Number(userInput);
        if (!isNaN(userInput) && userInput >= 1 && userInput <= 100) {
            break;
        }
        
    }
    removeRow();
    removeColumn();
    createGrid(userInput);

    newGridColumns = document.querySelectorAll(".column");
    newGridColumns.forEach(column => {
        column.addEventListener('mouseenter', () => {
          column.classList.add('hovered'); // Add 'hovered' class when the mouse enters
        });
      
        column.addEventListener('mouseleave', () => {
          
        });
      });
      clear.addEventListener("click", () => {

        newGridColumns.forEach(column => {
            column.classList.remove("hovered")
        })
    
    }
    )
    
})




