// Rock Paper Scissors
/*The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.

four parts:
Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/


let getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); 
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb' ) {
       console.log('error - not valid entry')
    } else {
       return userInput
    };
 }
 
 // At this point the user is limited to enter the 3 choices and it changes to lowercase or get an error
 
 let getComputerChoice = (computerChoice) => {
   randomNumber =  Math.floor(Math.random()* 3)
    return randomNumber === 0 ? 'rock' 
    : randomNumber === 1 ? 'paper'
    : 'scissors';
 }

 
 let determineWinner = (UserChoice, computerChoice) => {
   console.log(`user chose ${userInput}, Computer Chose ${computerChoice}`);
   if (UserChoice === computerChoice) {
       return `The game is a tie!`;
     } else if (UserChoice === 'bomb') {
             return 'Cheat Code! You win!';
     } 
    //  outcomes above if comp chooses same as you or if you choose bomb 
     else if (UserChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return `You win!`;
       } else {
            return 'Computer Wins!';
        } }
//outcomes above if you chose rock 
     else if (UserChoice === 'paper') {
        if (computerChoice === 'rock') {
             return `You win!`;
     } else {
            return 'Computer Wins!';
        } }
//  Outcomes above if you chose paper
   
    else if (getUserChoice === 'scissors') {
     if (computerChoice === 'paper') {
        return `You win!`;
    }
    } else {
            return 'Computer Wins!';
} 
 }
 
 const userInput = getUserChoice('rock');
 const computerChoice = getComputerChoice();
 const playGame = determineWinner(userInput, computerChoice);
 console.log(playGame);