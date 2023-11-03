const body = document.querySelector("body");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const ul = document.createElement("ul");

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);
body.appendChild(ul);

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
ul.textContent = "Rounds:";

ul.style.padding = "0px";
ul.style.fontWeight = "700";

btnRock.addEventListener("click", () => {
    play("Rock", getComputerChoice())
});

btnPaper.addEventListener("click", () => {
    play("Paper", getComputerChoice())
});

btnScissors.addEventListener("click", () => {
    play("Scissors", getComputerChoice())
});

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";
const invalid = "Invalid choice!";

function play(playerSelection, computerSelection) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    ul.appendChild(li);
    li.appendChild(span)

    li.style.fontWeight = "300";

    li.focus();

    if(playerSelection === computerSelection) {
        span.textContent = tie;
        return tie;
    } else if((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Scissors" && computerSelection === "Rock") || 
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
            span.textContent = `${lose} ${computerSelection} beats ${playerSelection}!`
            return `${lose} ${computerSelection} beats ${playerSelection}!`;
    } else if((playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors"  && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Rock")) {
            span.textContent =  `${win} ${playerSelection} beats ${computerSelection}!`;
            return `${win} ${playerSelection} beats ${computerSelection}!`;
    } else {
        span.textContent = invalid;
        return invalid;
    }
}

function game() {
    const newDiv = document.createElement("div");
    const result = document.createElement("p");

    body.appendChild(newDiv);
    body.appendChild(result);

    newDiv.textContent = `Score:\n Player: ${playerScore} - Computer: ${computerScore}`;

    result.style.fontWeight = "700";
    
    let playerScore = 0;
    let computerScore = 0;
    console.log(playerScore, computerScore);

    if(play(playerSelection, computerSelection) === `${win} ${playerSelection} beats ${computerSelection}!`) {
        playerScore++;
    } else if(play(playerSelection, computerSelection) === `${lose} ${computerSelection} beats ${playerSelection}!`) {
        computerScore++;
    } else {
        playerScore++, computerScore++;
    }

    if(playerScore === 5) {
        return "Game over! Player wins!";
    } else if(computerScore === 5) {
        return "Game over! Computer wins!";
    } else if(playerScore === 5 && computerScore === 5) {
        return "Game over! It's a tie!";
    }
}