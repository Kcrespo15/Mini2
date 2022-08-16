/* Object to track wins, losses, ties totals -- created in global scope to avoid being rewritten each time rockPaperScissors is called to play again */
let tally = {
    wins: 0,
    losses: 0,
    ties: 0
}

/* Initializes rockPaperScissors function for call on page load */
const rockPaperScissors = () => {

    if (window.confirm("Welcome to Rock, Paper, Scissors. Decide your fate.")) {
        let userInput = window.prompt("Enter R, P, or S -- and see what happens.", "Choice");
        /* Array of choices for computerInput to pull from and for if statements to compare userInput against */
        let choices = ["R", "P", "S"];

        /* Initializes rockPaperScissorsGame function before if statements below that call function if userInput matches allowed choices */
        const rockPaperScissorsGame = () => {
            /* Generates random number between 0 and 2 */
            let randomNumber = Math.floor((Math.random() * choices.length));

            /* Passes in randomNumber to access corresponding index placement from array */
            let computerInput = choices[randomNumber];

            /* Test logs to confirm RPS Logic is working correctly
            console.log(userInput);
            console.log(randomNumber);
            console.log(computerInput);
            */

            /* RPS Logic evaluation */
            if (userInput === computerInput) {
                window.alert("It's a tie!");
                tally.ties += 1;
            /* UserInput Rock comparisons */
            } else if (userInput === "R" && computerInput === "P") {
                window.alert("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "R" && computerInput === "S") {
                window.alert("You win!");
                tally.wins += 1;
            /* UserInput Paper comparisons */
            } else if (userInput === "P" && computerInput === "S") {
                window.alert("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "P" && computerInput === "R") {
                window.alert("You win!");
                tally.wins += 1;
            /* UserInput Scissors comparisons */
            } else if (userInput === "S" && computerInput === "R") {
                window.alert("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "S" && computerInput === "P") {
                window.alert("You win!");
                tally.wins += 1;
            } 

            /* Reports tally of wins, losses and ties after a round */
            window.alert(`
            Wins: ${tally.wins}. 
            Losses: ${tally.losses}. 
            Ties: ${tally.ties}.`);

            /* Allows users to play again - calls rockPaperScissors function if user confirms */
            if (window.confirm("Do you wish to play again?")) {
                rockPaperScissors();
            }    
        }

        /* Evaluating userInput to ensure proper input for preceding logic to evaluate and giving player second chance to enter correct input if error on first entry */
        if (choices.includes(userInput)) {
            rockPaperScissorsGame();
        } else /* if (!choices.includes(userInput)) */ {
            userInput = window.prompt("Enter a valid choice: R, P, or S", "Choice");
            if (choices.includes(userInput)) {
                rockPaperScissorsGame();
            }
        } 
    }
}

/* Calls rockPaperScissors on page load */
rockPaperScissors();
