const letters = document.querySelectorAll("span")

letters.forEach(letter => letter.addEventListener('mousedown', showLetter))

let counter = 0

function showLetter(){
    if (counter % 2 === 0) {
        this.innerText = 'O'
        this.style.color = 'black'
        counter++
    } else {
        this.innerText = 'X'
        this.style.color = 'black'
        counter++
    }
}