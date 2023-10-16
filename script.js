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
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length)
    return options[choice];
}