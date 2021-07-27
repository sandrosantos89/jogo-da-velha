
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })

})

function handleClick(event) {


    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O jogo acabou - vencedor foi o nº " + playerTime);
        }, 15);

    };


    // updateSquares();
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

// function updateSquares() {

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];
//         if (symbol != "") {
//             square.innerHTML = `<div class="${symbol}"></div>`
//         }
//     })


// }

// function restart(){ document.getElementById("button").addEventListener('click', () => {
//     let board = ["", "", "", "", "", "", "", "", ""];
//     let gameOver = false;
//     updateSquares();
// })
// }