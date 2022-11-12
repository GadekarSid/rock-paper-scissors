let choices = ["Rock","Paper","Scissors"]
let playerScore;
let computerScore;
function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log(choice);
    return choice;
}
window.onLoad = game();
function playRound(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        return "Its a tie!";
    }
    if((playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ){
        playerScore++;
        return "You win! " + playerChoice + " beats " + computerChoice;

    }
    else{
        computerScore++;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}
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