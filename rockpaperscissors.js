let choices = ["Knight","Crossbow","Pikeman"]
let playerScore = 0;
let computerScore = 0;
let playerScoreDiv = document.querySelector('.playerscore');
let computerScoreDiv = document.querySelector('.computerscore');
let roundResultDiv = document.querySelector('.roundresult');
let playerChoiceDiv = document.querySelector('.playerchoice');
let computerChoiceDiv = document.querySelector('.computerchoice');
let retryDiv = document.getElementById('retry');
console.log(retryDiv);
function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log(choice);
    return choice;
}
window.onLoad = initializeGame();
function playRound(playerChoice,computerChoice){
    let result = "";
    playerChoiceDiv.textContent = "You chose "+ playerChoice;
    computerChoiceDiv.textContent = "Computer chose "+ computerChoice;
    if(playerChoice == computerChoice){
        return "Its a tie!";
    }
    if((playerChoice == "Knight" && computerChoice == "Crossbow") ||
    (playerChoice == "Crossbow" && computerChoice == "Pikeman") ||
    (playerChoice == "Pikeman" && computerChoice == "Knight") ){
        playerScore++;
        playerScoreDiv.textContent = playerScore;
        return  "You win! " + playerChoice + " counters " + computerChoice;

    }
    else{
        computerScore++;
        computerScoreDiv.textContent = computerScore;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}

function initializeGame() {
    console.log("Initializing new game");
    computerScore = 0;
    playerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    roundResultDiv.textContent = "";
}
function declareGame(){
    if(computerScore > playerScore){
        roundResultDiv.textContent = "Alas! The AI has defeated you in this best of 3 contest";
    }
    else{
        roundResultDiv.textContent = "Victory is ours! We have defeated the AI in a best of 3!";
    }
    retryButton = document.createElement('button');
    retryButton.textContent = 'Rematch?';
    retryButton.style.fontSize = '15px';
    retryButton.style.margin = '10px';
    retryButton.addEventListener('click',function(){
        initializeGame();
        retryButton.remove();
    });
    console.log("Appending retry button"+ retryButton);
    retryDiv.appendChild(retryButton);
}

function getSelectedOption(e){
    let roundResult = playRound(e.target.alt,getComputerChoice());
    if(computerScore == 3 || playerScore == 3){
        declareGame();
        return;
    }
    roundResultDiv.textContent = roundResult;

}
var icons = document.querySelectorAll('.icon');
console.log(icons);
icons.forEach( icon => icon.addEventListener('click',getSelectedOption));

function capitalize(s)
{
    s = s && s.toLowerCase();
    return s && s[0].toUpperCase() + s.slice(1);
}
function game(){
    let rematch = "";
    let answer = prompt("You vs PC! Best of 5! Are you ready?")
    if(capitalize(answer) == "Yes"){
        do{
                playerScore = 0;
                computerScore = 0;
                while(playerScore < 3 && computerScore < 3){
                    let playerChoice = prompt("Choose your weapon! Rock / Paper/ Scissors");
                    if(capitalize(playerChoice) != undefined && capitalize(playerChoice) != ""){
                        console.log(playRound(playerChoice,getComputerChoice()));
                    }
                    console.log("Player score : "+ playerScore);
                    console.log("Computer score : " + computerScore);
                }
            console.log("condition check"  + (playerScore > computerScore));
            console.log("Game over! " + (playerScore > computerScore ? " Player " : " Computer ")+ "won!");
            rematch = prompt("Good game! Want to go again?")
        }while(capitalize(rematch) === "Yes")
    }
}