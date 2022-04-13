const choices = ['rock', 'paper', 'scissors'] // These are the available selections

const pcChoice =  choices[Math.floor(Math.random() * choices.length)];
  console.log("PC: " + pcChoice)
// Chooses random choice
let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();
   console.log("Player " + playerChoice)
// Prompts player for their choice

function playGame(playerChoice, pcChoice){
    if ((playerChoice ==='paper') && (pcChoice === 'scissors')){
        console.log("You Lose!");
 
     } else if ((playerChoice === 'paper') && (pcChoice === 'rock')) {
        console.log("You Win!");
 
      } else if ((playerChoice === 'scissors') && (pcChoice === 'rock')) {
        console.log("You Lose!");
    
       } else if ((playerChoice === 'scissors') && (pcChoice === 'paper')) {
        console.log("You Win!");
 
        } else if ((playerChoice === 'rock') && (pcChoice === 'scissors')) {
        console.log("You Win!");  
 
         } else if ((playerChoice === 'rock') && (pcChoice === 'paper')) {
         console.log("You Lose!");
 
          } else if (playerChoice === "Rock" && pcChoice === "Rock") {
            console.log("It's a tie!");
   
             } else if (playerChoice === "Scissors" && pcChoice === "Scissors") {
             console.log("It's a tie!");
 
             } else if (playerChoice === "Paper" && pcChoice === "Paper") {
             console.log("It's a tie!");
               
             } else 
             console.log("Tie!");
             //Logic for gameplay to decide a winner
} 
console.log(playGame(playerChoice, pcChoice));

function playRound(playerChoice, pcChoice){
    for (let i = 0; i < 5; i++){
        console.log("Round: " + i);

        let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase();

        console.log("Player: " + playerChoice);

        const pcChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log("PC: " + pcChoice);
        
        console.log(playGame(playerChoice, pcChoice));
        
    }
    
}
playRound(playerChoice, pcChoice);

