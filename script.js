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

let playVar;

btnRock.addEventListener("click", () => {
    playVar = playRound("Rock", getComputerChoice());
    setTimeout(() => {
        game();
    }, 100);
});

btnPaper.addEventListener("click", () => {
    playVar = playRound("Paper", getComputerChoice());
    setTimeout(() => {
        game();
    }, 100);
});

btnScissors.addEventListener("click", () => {
    playVar = playRound("Scissors", getComputerChoice());
    setTimeout(() => {
        game();
    }, 100);
});

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const win = "You win!";
const lose = "You lose!";
const tie = "It's a tie!";

function playRound(playerSelection, computerSelection) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    ul.appendChild(li);
    li.appendChild(span)

    li.style.fontWeight = "300";

    if(playerSelection === computerSelection) {
        span.textContent = tie;
        return tie;
    } else if((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Scissors" && computerSelection === "Rock") || 
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
        span.textContent = `${lose} ${computerSelection} beats ${playerSelection}!`
        return lose;
    } else {
        span.textContent =  `${win} ${playerSelection} beats ${computerSelection}!`;
        return win;
    }
}

let playerScore = 0;
let computerScore = 0;

const newDiv = document.createElement("div");
newDiv.style.fontWeight = "700";
body.appendChild(newDiv);
newDiv.textContent = `Player ${playerScore} - Computer ${computerScore}`;

function game() {

    if(playVar === win) {
        playerScore++;
    } else if(playVar === lose) {
        computerScore++;
    } else {
        playerScore++, computerScore++;
    }

    newDiv.textContent = `Player ${playerScore} - Computer ${computerScore}`;

    const p = document.createElement("p");
    newDiv.appendChild(p);


    if(playerScore === 5) {
        p.textContent = "Game over! Player wins!";
        return;
    } else if(computerScore === 5) {
        p.textContent = "Game over! Computer wins!";
        return;
    } else if(playerScore === 5 && computerScore === 5) {
        p.textContent = "Game over! It's a tie!";
        return;
    }
}