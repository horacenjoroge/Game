function getComputerChoice () {;
 const words = ["Rock","Paper","Scissors"]
 const randomIndex=Math.floor(Math.random()*words.length
 );
return words[randomIndex];
}
const randomWord = getComputerChoice();
console.log (randomWord);
function playRound(playerSelection,computerselection){
    const playerSelection =prompt("choose rock,paper or scissors").toLowerCase();
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
