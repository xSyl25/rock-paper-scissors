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

let playerChoice = prompt("Choose! Rock, paper, scissors!");

console.log(playerChoice);

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

console.log(getComputerChoice())

const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";
const playerSelection = playerChoice;
const computerSelection = getComputerChoice();

function play(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return tie;
    } else if(playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors") {
        return lose;
    } else if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors"  && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        return win;
    } else {
        return "Invalid choice."
    }
}

console.log(play())