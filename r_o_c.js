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
    let userChoice = prompt("","Enter Your Object");
    if (userChoice.toUpperCase() === "ROCK"){
        return "ROCK";
    } else if (userChoice.toUpperCase() === "PAPER"){
        return "PAPER";
    } else if (userChoice.toUpperCase() === "SCISSORS"){
        return "SCISSORS";
    }   
    else {prompt(userChoice)}
}

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        console.log('Its a tie')
    }  else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You Win. ROCK Beats SCISSORS")
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("You Win. PAPER Beats ROCK")
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("You Win. SCISSORS Beats PAPER")
        humanScore++;
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        console.log("You Lose. ROCK Beats SCISSORS")
        computerScore++;
    } else if (computerChoice === "PAPER" && humanChoice === "ROCK"){
        console.log("You Lose. PAPER Beats ROCK")
        computerScore++;
    } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        console.log("You Lose. SCISSORS Beats PAPER")
        computerScore++;
    } else {
        console.log('Input Invalid')
    }
}

let humanInput= getHumanChoice();
let computerInput = getComputerChoice();

// playRound(humanInput,computerInput)

function playGame(){
    console.log("Round 1:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You Scored ${humanScore} and Computer Scored ${computerScore}`)

    console.log("Round 2:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You Scored ${humanScore} and Computer Scored ${computerScore}`);

    console.log("Round 3:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You Scored ${humanScore} and Computer Scored ${computerScore}`);

    console.log("Round 4:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You Scored ${humanScore} and Computer Scored ${computerScore}`);

    console.log("Round 5:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log(playScore);

    if (humanScore>computerScore){
        console.log(`Final Scores: Human - ${humanScore}, Computer - ${computerScore}.
                    YOU WIN`);
    } else {
        console.log(`Final Scores: Human - ${humanScore}, Computer - ${computerScore}.
            YOU LOSE`);
    }
}

playGame()