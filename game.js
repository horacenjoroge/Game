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
    if (userInput === "rock") {
        // Handle user choosing rock
        console.log("You chose rock.");
    } else if (userInput === "paper") {
        // Handle user choosing paper
        console.log("You chose paper.");
    } else if (userInput === "scissors") {
        // Handle user choosing scissors
        console.log("You chose scissors.");
    } else {
        // Handle invalid input
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }
}