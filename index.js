const readlineSync = require("readline-sync");
const userChoice = readlineSync.question("Rock, paper, scissors?\n");

const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();

  if  (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput
  } else if (userInput === 'bomb') {
    return userInput
   
  } else {
    return 'Error'
  }

 
}

const getComputerChoice = function () {
  let answer = Math.floor(Math.random() * 3) 
  
    
   switch (answer) {
     case 0: 
     return 'rock'
     break 

     case 1: 
     return 'paper'
     break 

     case 2: 
     return 'scissors'
     break 
   }
}


const playGame = function() {
  let userInput = getUserChoice(userChoice)
  let computerChoice = getComputerChoice();
  console.log(`You: ${userChoice}
  
Computer: ${computerChoice}`)
  
  
  console.log(determineWinner(userInput, computerChoice));
  
  }

  const determineWinner = function (userChoice, computerChoice) {

  

    if (userChoice === computerChoice) {
      return 'The game is a tie '
    } 
  
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        // addWin()
        return  `COMPUTER WINS`
      } else {
        // userWins()
        return `You win`
      }
    }
   
   if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      // addWin()
      return `Computer wins`
    } else {
      // userWins()
      return 'You win'
    } 
   }
   
  
   if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      // addWin()
      return `Computer wins.`
    } else {
      // userWins()
      return 'You win'
    }
   }
  
   if (userChoice === 'bomb') {
    return 'You win' 
   } 
  
  }



getUserChoice(userChoice); 
getComputerChoice(); 
playGame();