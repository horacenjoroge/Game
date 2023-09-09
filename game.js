function getComputerChoice () {;
 const words = ["Rock","Paper","Scissors"]
 const randomIndex=Math.floor(Math.random()*words.length
 );
return words[randomIndex];
}
const randomWord = getComputerChoice();
console.log (randomWord);
function playRound(){
    const playerSelection =prompt("choose rock,paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);

        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log("You win!");
        } else {
            console.log("Computer wins!");
        }
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }
}

playRound();
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Choose rock, paper, or scissors`).toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            playerScore++;
            console.log(`You win round ${round}!`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Computer wins round ${round}!`);
        } else {
            console.log(`Round ${round} is a tie!`);
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
}

game();

// create a button
const button = document.createElement('button');
 button.id = "btn";
 button.textContent="rock";
