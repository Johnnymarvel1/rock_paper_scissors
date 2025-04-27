console.log('hello world')
let humanScore = getHumanChoice();
let computerScore = getComputerChoice();

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice===0){
        console.log("rocks")
    }else if (compChoice===1){
        console.log("paper");
    }else if (compChoice===2){
        console.log("scissors");
    }
}

function getHumanChoice(){
    let userChoice = prompt("","Enter Your Object");
    // if (userChoice === 'rocks'){
    //     userChoice=0
    // }
    console.log(userChoice.toUpperCase());
}

function playRound(humanChoice,computerChoice){
    // if (humanChoice){
    //     humanChoice = ++humanChoice
    // }
}
playRound(humanScore,computerScore)