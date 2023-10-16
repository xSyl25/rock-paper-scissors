// return choice from computer 
// prompt user to input a choice too
// when played, return a result
// if paper vs paper or scissors vs scissors or rock vs rock, it's a tie
// else if paper vs rock, paper wins
// else if scissors vs paper, scissors win
// else if rock vs scissors, rock wins
// else invalid choice
// loop game 5 times
// return a winner

let playerChoice = prompt("Choose! Rock, paper, scissors!").toLowerCase();

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";
const playerSelection = playerChoice;
const computerSelection = getComputerChoice();

function play(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    
    if(playerSelection === computerSelection) {
        return tie;
    } else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
        return lose;
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors"  && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return win;
    } else {
        return "Invalid choice.";
    }
}

console.log(play(playerSelection, computerSelection));