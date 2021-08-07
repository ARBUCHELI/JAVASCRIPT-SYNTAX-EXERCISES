const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else {
    return 6;
  }
}

const getActualSleepHours = () => 8 + 5 + 7 + 6 + 8 + 8 + 6;

const getIdealSleepHours = number => number*7;


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept ${actualSleepHours - idealSleepHours} more than needed.`);
  } else {
    console.log(`You should sleep some more ${idealSleepHours - actualSleepHours} hours.`);
  }
}

calculateSleepDebt();
