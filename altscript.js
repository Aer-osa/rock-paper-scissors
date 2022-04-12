const choices = ['Rock', 'Paper', 'Scissors'] // These are the available selections

const pcChoice =  choices[Math.floor(Math.random() * choices.length)];
  console.log("PC: " + pcChoice)

let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
   console.log("Player " + playerChoice)


function playGame(playerChoice, pcChoice){
   if ((playerChoice ==='paper') && (pcChoice === 'scissors')){
       return prompt("You Lose!");

    } else if ((playerChoice === 'paper') && (pcChoice === 'rock')) {
       prompt("You Win!");

     } else if ((playerChoice === 'scissors') && (pcChoice === 'rock')) {
       prompt("You Lose!");
   
      } else if ((playerChoice === 'scissors') && (pcChoice === 'paper')) {
       prompt("You Win!");

       } else if ((playerChoice === 'rock') && (pcChoice === 'scissors')) {
       prompt("You Win!");  

        } else if ((playerChoice === 'rock') && (pcChoice === 'paper')) {
        prompt("You Lose!");

         } else if (playerChoice === "Rock" && pcChoice === "Rock") {
           prompt("It's a tie! You both picked Rock.");
  
            } else if (playerChoice === "Scissors" && pcChoice === "Scissors") {
            prompt("It's a tie! You both picked Scissors.");

            } else if (playerChoice === "Paper" && pcChoice === "Paper") {
            prompt("It's a tie! You both picked Paper.");
              
            } else 
            prompt("Tie!");

} 
function playRound(playerChoice, pcChoice){
    for (let i = 0; i < 5; i++){
        console.log("Round: " + i);
        let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
   console.log("Player " + playerChoice)
   const pcChoice =  choices[Math.floor(Math.random() * choices.length)];
   console.log("PC: " + pcChoice)
   function playGame(playerChoice, pcChoice)
    }
}
playRound(playerChoice, pcChoice)