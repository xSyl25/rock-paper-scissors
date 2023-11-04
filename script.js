const body = document.querySelector("body");
const mainTitle = document.createElement("h1");
const mainDiv = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const p = document.createElement("p");

btnRock.classList.add("btn");
btnPaper.classList.add("btn");
btnScissors.classList.add("btn");

body.appendChild(mainDiv);
mainDiv.appendChild(mainTitle);
mainDiv.appendChild(btnRock);
mainDiv.appendChild(btnPaper);
mainDiv.appendChild(btnScissors);
mainDiv.appendChild(p);

mainTitle.textContent = "Rock, Paper, Scissors!";
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

body.setAttribute("style", "background: #b0b0b0; margin: auto");
mainTitle.setAttribute("style", "paddingBottom: 1em");
mainDiv.setAttribute("style", "display: flex; height: 100vh");
mainDiv.style.flexDirection = "column";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";
btnRock.setAttribute("style", "width: 20%; padding: 0.5em; margin: 0.5em; position: static");
btnPaper.setAttribute("style", "width: 20%; padding: 0.5em; margin: 0.5em; position: static");
btnScissors.setAttribute("style", "width: 20%; padding: 0.5em; margin: 0.5em; position: static");
p.style.padding = "0"; 
p.style.fontWeight = "700";
p.style.textAlign = "center";

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
    if(playerSelection === computerSelection) {
        p.textContent = tie;
        return tie;
    } else if((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Scissors" && computerSelection === "Rock") || 
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
        p.textContent = `${lose} ${computerSelection} beats ${playerSelection}!`
        return lose;
    } else {
        p.textContent =  `${win} ${playerSelection} beats ${computerSelection}!`;
        return win;
    }
}

let playerScore = 0;
let computerScore = 0;

const newDiv = document.createElement("div");
newDiv.style.fontWeight = "700";
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
newDiv.style.width = "100%";
newDiv.style.alignItems = "center";
mainDiv.appendChild(newDiv);

const scoreP = document.createElement("p");
newDiv.appendChild(scoreP);
scoreP.style.margin = "0 auto";
scoreP.style.fontSize = "16px";
scoreP.textContent = `Player ${playerScore} - Computer ${computerScore}`;

function game() {
    if(playVar === win) {
        playerScore++;
    } else if(playVar === lose) {
        computerScore++;
    } else {
        playerScore++, computerScore++;
    }

    scoreP.textContent = `Player ${playerScore} - Computer ${computerScore}`;
    
    const gameOverP = document.createElement("p");
    newDiv.appendChild(gameOverP);
    gameOverP.style.margin = "0.1em auto";
    gameOverP.style.fontSize = "18px"

    if(playerScore === 5 && computerScore !== 5) {
        gameOverP.textContent = "Game over! Player wins!";
        setTimeout(() => {
            location.reload();
        }, 1500);
    } else if(computerScore === 5 && playerScore !== 5) {
        gameOverP.textContent = "Game over! Computer wins!";
        setTimeout(() => {
            location.reload();
        }, 1500);
    } else if(playerScore === 5 && computerScore === 5) {
        gameOverP.textContent = "Game over! It's a tie!";
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}