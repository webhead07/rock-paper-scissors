// function getComputerChoice (){
//     const computerChoice = Math.floor(Math.random() * 3)
//     if (computerChoice === 0) {
//         return "Rock"
//     } else if (computerChoice === 1) {
//         return "Paper"
//     } else {
//         return "Scissors"
//     }
// }

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

const getHumanChoice = () => {
    const humanChoice = prompt("Enter your choice!").toLowerCase()
    return humanChoice
}



let humanScore = 0,
    computerScore = 0;

const playRound = (human, computer) => {
    const humanChoice= getHumanChoice()
    const computerChoice = getComputerChoice()

    console.log(`Player:: ${humanChoice}`)
    console.log(`Computer:: ${computerChoice}`)
    
    if (humanChoice === computerChoice) {
        console.log("Its a tie!")
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice == "scissors" && computerChoice === "paper"))
    {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++
        console.log(
            `You win! ${humanChoice} beats ${computerChoice}`)
    }

    console.log(`Player Score:: ${humanScore}`)
    console.log(`Computer Score:: ${computerScore}`)
}

function playGame()
{
    for (let i = 0; i < 5; i++) {
    playRound()
    if (i === 4) {
        if (humanScore === computerScore) {
            console.log("The game is a TIE")
        }
        if (humanScore > computerScore) {
            console.log("You win the game!!!")
        } else {
            console.log("You loose!!!")
        }
    }
    }
}
playGame()