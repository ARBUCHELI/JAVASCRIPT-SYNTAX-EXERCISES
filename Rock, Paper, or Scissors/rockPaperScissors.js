const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!');
}
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  default:
    return 'scissors';
    break;
}
}

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
    return 'You won!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
    }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
