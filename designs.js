

function makeGrid(row, col) {
//  Creates a grid defined by the values row and col.
    const tBody = document.createElement('tbody');
    document.querySelector('#pixelCanvas').appendChild(tBody);
    // Creates a table body element.
    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');
        tBody.appendChild(tr)
        // Creates grid rows
        for (let y = 0; y < col; y++) {
            const td = tr.appendChild(document.createElement('td'));
            // Creates grid col
            td.addEventListener('click', function () {
                let color = document.getElementById("colorPicker").value;
                td.setAttribute('style', "background : " + color);
                // Changes grid square colors when clicked
            });
        }
    }
};



document.addEventListener('submit', function (event) {
    // Makes a new grid when the "submit" button is clicked.
    const row = document.getElementById("inputHeight").value;
    const col = document.getElementById("inputWidth").value;
    // Recordes the values set in the height and width boxes.
    document.querySelector('#pixelCanvas').innerHTML = '';
    // Clears the canvas.
    makeGrid(row, col);
    // Creates a grid defined by the values previously recorded.
    event.preventDefault();
    // Stops the page from refreshing after the submit button is clicked.
});


makeGrid(16, 16);
// Makes a 16 x 16 grid upon the page loading.

