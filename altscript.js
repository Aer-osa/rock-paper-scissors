const choices = ['Rock', 'Paper', 'Scissors'] // These are the available selections

const pcChoice =  choices[Math.floor(Math.random() * choices.length)];
   ("PC: " + pcChoice)

let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
   console.log("Player " + playerChoice)

function game (){

} 

function playGame(playerChoice, pcChoice){
   if ((playerChoice ==='paper') && (pcChoice === 'scissors')){
       return("You Lose!");

    } else if ((playerChoice === 'paper') && (pcChoice === 'rock')) {
       return("You Win!");

     } else if ((playerChoice === 'scissors') && (pcChoice === 'rock')) {
       return("You Lose!");
   
      } else if ((playerChoice === 'scissors') && (pcChoice === 'paper')) {
       return("You Win!");

       } else if ((playerChoice === 'rock') && (pcChoice === 'scissors')) {
       return("You Win!");  

        } else if ((playerChoice === 'rock') && (pcChoice === 'paper')) {
        return("You Lose!");

         } else if (playerChoice === "Rock" && pcChoice === "Rock") {
           return("It's a tie! You both picked Rock.");
  
            } else if (playerChoice === "Scissors" && pcChoice === "Scissors") {
            return("It's a tie! You both picked Scissors.");

            } else if (playerChoice === "Paper" && pcChoice === "Paper") {
            return("It's a tie! You both picked Paper.");
              
            } else 
            return("Tie!");

} 
function playRound(playerChoice, pcChoice){
    return playGame
}
console.log(playRound(playerChoice, pcChoice))