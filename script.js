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

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";

function play(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return tie;
    } else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
        return `${lose} ${computerSelection} beats ${playerSelection}!`;
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors"  && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return `${win} ${playerSelection} beats ${computerSelection}!`;
    } else {
        return "Invalid choice.";
    }
}

function getPlayerChoice() {
    let playerChoice = "Choose! Rock, paper, scissors!";
    return window.prompt(playerChoice).toLowerCase();
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));

        if(play(playerSelection, computerSelection) === `${win} ${playerSelection} beats ${computerSelection}!`) {
            playerScore++;
        } else if(play(playerSelection, computerSelection) === `${lose} ${computerSelection} beats ${playerSelection}!`) {
            computerScore++;
        } else {
            playerScore++, computerScore++;
        }
        
    }

    if(playerScore > computerScore) {
        return("Game over! Player wins!");
    } else if(computerScore > playerScore) {
        return("Game over! Computer wins!");
    } else {
        return("Game over! It's a tie!")
    }
}

console.log(game());