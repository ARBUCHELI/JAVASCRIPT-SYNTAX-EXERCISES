let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 18;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30. Your race number is ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00. Your race number is ${raceNumber}`);
} else if (age < 18) {
  console.log(`You will race at 12:30. Your race number is ${raceNumber}`);
} else {
  console.log('Please go to the registration desk');
}
