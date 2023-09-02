function getComputerChoice () {;
 const words = ["Rock","paper","scissors"]
 const randomIndex=math.floor(math.random()*words.lenghth
 );
return words[randomIndex];
}
const randomWord = getComputerChoice();
console.log (randomWord);