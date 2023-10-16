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

function play() {
    if(playerChoice === getComputerChoice()) {
        return tie;
    } else if(playerChoice === "Rock") {
        if(getComputerChoice() === "Paper") {
            return lose;
        } else if(getComputerChoice() === "Scissors") {
            return win;
        }
    } else if(playerChoice === "Paper") {
        if(getComputerChoice() === "Scissors") {
            return lose;
        } else if(getComputerChoice() === "Rock") {
            return win;
        }
    } else if(playerChoice === "Scissors") {
        if(getComputerChoice() === "Rock") {
            return lose;
        } else if(getComputerChoice() === "Paper") {
            return win;
        }
    } else {
        return "Invalid choice."
    }
}

console.log(play())