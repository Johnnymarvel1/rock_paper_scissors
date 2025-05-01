let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice===0){
        // console.log("ROCK")
        return "ROCK";
    }else if (compChoice===1){
        // console.log("PAPER")
        return "PAPER";
    }else if (compChoice===2){
        // console.log("SCISSORS")
        return "SCISSORS";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Enter ROCK, PAPER or SCISSORS");
    if (userChoice.toUpperCase() === "ROCK"){
        return "ROCK";
    } else if (userChoice.toUpperCase() === "PAPER"){
        return "PAPER";
    } else if (userChoice.toUpperCase() === "SCISSORS"){
        return "SCISSORS";
    } else {
        console.log('Invalid Input. Enter ROCK, PAPER or SCISSORS')
        return getHumanChoice()
    }
}

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        console.log('Its a tie')
    }  else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
        || humanChoice === "PAPER" && computerChoice === "ROCK"
        || humanChoice === "SCISSORS" && computerChoice === "PAPER")
    {console.log(`You-${humanChoice}\nComputer-${computerChoice}\nYou Win. ${humanChoice} Beats ${computerChoice}`)
        humanScore++;
   
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS"
        || computerChoice === "PAPER" && humanChoice === "ROCK"
        || computerChoice === "SCISSORS" && humanChoice === "PAPER")
    {console.log(`You-${humanChoice}\nComputer-${computerChoice}\nYou Lose. ${computerChoice} Beats ${humanChoice}`)
        computerScore++;
    }
}

// let humanInput= getHumanChoice();
// let computerInput = getComputerChoice();

function playGame(){
    console.log("Round 1:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`Your Score-${humanScore} and Computer Score-${computerScore}`)

    console.log("Round 2:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`Your Score-${humanScore} and Computer Score-${computerScore}`);

    console.log("Round 3:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`Your Score-${humanScore} and Computer Score-${computerScore}`);

    console.log("Round 4:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`Your Score-${humanScore} and Computer Score-${computerScore}`);

    console.log("Round 5:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`Final Scores: You Scored  ${humanScore} and Computer Scored ${computerScore}`);

    if (humanScore>computerScore){
        console.log(`YOU WIN`);
    } else if (humanScore===computerScore){
        console.log(`ITS A TIE\nPLAY AGAIN`);
    } else {
        console.log('YOU LOSE')
    }
}

playGame()