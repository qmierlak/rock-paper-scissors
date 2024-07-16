// Randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {

    // Generate a random number
    let random_value = makeRandomChoice(3);

    console.log("My random value is: " + random_value);
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






console.log(getComputerChoice());