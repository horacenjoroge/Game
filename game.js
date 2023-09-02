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
}