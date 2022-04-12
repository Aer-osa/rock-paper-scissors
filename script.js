const choices = ['Rock', 'Paper', 'Scissors'] // These are the choices to play with.

function computerPlay() {
    return Math.floor(Math.random() * choices.length);
}

let game = computerPlay
game()

console.log(computerPlay)
