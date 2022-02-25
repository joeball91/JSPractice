function getUserChoice(userInput) {
    var choice = userInput.toLowerCase();

    if (choice === 'bomb'){
        console.log("You found the secret bomb. You win!");
        return choice;
    } else if ((choice != 'rock') && (choice != 'scissors') && (choice != 'paper')){
        console.log("Please enter a valid move!");
    } else {
        return choice;
    }
}

function getComputerChoice(){
    var number = Math.floor(Math.random() * 3);

    if (number === 0){
        return 'rock';
    } else if (number === 1){
        return 'scissors';
    } else {
        return 'paper';
    }
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        console.log("Tie.");
        return;
    }

    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            console.log("You lost!");
        } else {
            console.log("You won!");
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            console.log("You lost!");
        } else {
            console.log("You won!");
        }
    } else {
        if (computerChoice === 'rock'){
            console.log("You lost!");
        } else {
            console.log("You won!");
        }
    }
}

function playGame(){
    var userChoice = getUserChoice('scissors');

    if (userChoice != 'bomb'){
        var computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice); 
    }
}

playGame();