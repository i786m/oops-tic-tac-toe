const letters = document.querySelectorAll("span")

letters.forEach(letter => letter.addEventListener('mousedown', runGame))

//keeps track of which player. counter is even means player X's turn
let counter = 0
let winner = ''

//arrays for player X and player O's moves
let playerX = []
let playerO = []

//array of multiple win scenarios
let wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

function runGame(){
    if (this.style.color !== 'black') { // if statement to prevent clicking on a box more than once
        makeMove(this) // get position of clicked & add that position to player X or O's array (make a move)
        showLetter(this) // add an X or an O to board to show the move
        if (counter % 2 === 0) {
            checkWinner(playerX, 'player X') // check for winners
        } else {
            checkWinner(playerO, 'player O')
        }

        counter++ // increment counter
        console.log(playerX, playerO) //this just shows how the player moves are being tracked. view in console.

        // if there is a winner, do some stuff
        if (winner) {
            console.log(winner)
            //some ideas for what can happen here:
                // display a message or a reset button which can refresh the window
                // remove the runGame eventListener from letter to stop the game
        }
    }  
}


//in these functions I'm using 'e' as a dummy variable for events passed in, and passing 'this' into them for the main runGame function
function makeMove(e){
    if (counter % 2 === 0) {
        playerX.push(Number(e.className))
    } else {
        playerO.push(Number(e.className))
    }
}

function showLetter(e){
    if (counter % 2 === 0) {
        e.innerText = 'X'
        e.style.color = 'black'
    } else {
        e.innerText = 'O'
        e.style.color = 'black'
    }
}

function checkWinner(arr, player) { // takes the wins array and loops through to check if the player is a winner...
    wins.forEach(e => {
        if (arr.indexOf(e[0]) >= 0 && arr.indexOf(e[1]) >= 0 && arr.indexOf(e[2]) >= 0) {
            document.querySelector('h1').innerText = `${player} is the winner!`
            winner = player
        }
    })
}