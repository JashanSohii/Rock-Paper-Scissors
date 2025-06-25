console.log("helllo")
function getComputerChoice(){
    let num = (3*Math.random());
    if (num < 1){
        return 'rock';
    }
    else if (num > 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function getHumanChoice(){
    let choice = prompt("Enter 'rock', 'paper' or 'scissors' :)")
    return choice.toLowerCase();
}

function playGame(){
    let humanChoice = 0;
    let computerChoice = 0;

    function playRound(getComputerChoice, getHumanChoice){
        const human = getHumanChoice();
        const computer = getComputerChoice();
        if (human == 'rock' && computer == 'paper' || human == 'paper' && computer == 'scissors' || human == 'scissors' && computer == 'rock'){
           console.log(`Computer wins hehe, ${computer} beats ${human}`);
            computerChoice++;
        }
        else if (computer == 'rock' && human == 'paper' || computer == 'paper' && human == 'scissors' || computer == 'scissors' && human == 'rock'){
            console.log(`You wins :) ${human} beats ${computer}`);
            humanChoice++;
        }
        else  {
            console.log('Its a draw!');
        }
    }
    playRound(getComputerChoice, getHumanChoice);
    playRound(getComputerChoice, getHumanChoice);
    playRound(getComputerChoice, getHumanChoice);
    playRound(getComputerChoice, getHumanChoice);
    playRound(getComputerChoice, getHumanChoice);
    
    if(humanChoice > computerChoice){
        console.log(`You win the game :) by ${humanChoice}:${computerChoice}`);
    }
    else if (humanChoice === computerChoice){
        console.log('urghhh, its a tie this time');
    }
    else {
        console.log(`Computer wins the game by ${computerChoice}:${humanChoice} hehe`);
    }
}
playGame();
