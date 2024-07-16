// Keeps track of the running score for both the human player and computer
let humanScore = 0;
let computerScore = 0;


// Randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {

    // Generate a random number
    let random_value = makeRandomChoice(3);

    // console.log("My random value is: " + random_value);

    // If number is 0, pick rock
    if (random_value == 0) {
        return "rock";
    }
    // If number is 1, pick paper
    if (random_value == 1) {
        return "paper";
    }
    // If number is 2, pick scissors
    if (random_value == 2) {
        return "scissors";
    }
}

// Randomly returns a number between 0 and max-1
function makeRandomChoice(max) {
    return Math.floor(Math.random() * max);
}


// Get the user's choice of rock, paper, or scissors
function getHumanChoice() {
    // Prompt the user for their selection
    let choice = prompt("Please input rock, paper, or scissors");
    
    // Make the user's input case insensitive
    choice = choice.toLowerCase();

    // Print user's selection to console
    console.log("You chose: " + choice);

    // Check that their selection is valid
     if (choice != ("rock" || "paper" || "scissors")) {
        console.log("Sorry, you didn't input rock, paper, or scissors");
        return;
    }

    

    // Return user's selection
    return choice;
}

// Plays a single round of rock, paper, scissors
// Increments the winner's score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    

}


// getHumanChoice();
// console.log(getComputerChoice());