let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const RandomNumber = Math.floor(Math.random() * 3);
    return choices[RandomNumber];
}
function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub;
    const smallCompWord = "comp".fontsize(3).sub;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) +  beats   ${convertToWord(computerChoice)}(comp) You are the WINRAR`;
}

function lose() {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub;
    const smallCompWord = "comp".fontsize(3).sub;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) +  loses to   ${convertToWord(computerChoice)}(comp) You are the sucka`;
}

function tie() {
    result_p.innerHTML = `${convertToWord(userChoice)}(user) +  equals   ${convertToWord(computerChoice)}(comp) It's a draw`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "pr":
            case "pr":
                case "sp":
                    win(userChoice, computerChoice);
                    break;
                    case "rp":
                        case "ps":
                            case "sr":
                                lose(userChoice, computerChoice);
                                break;
                                case "rr":
                        case "pp":
                            case "ss":
                                tie(userChoice, computerChoice);
                                break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    
    paper_div.addEventListener('click', function() {
        game('p');
    })
    
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

main();

