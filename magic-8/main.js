var userName = "";
console.log(`Hello ${userName}!`)

var userQuestion = "Will I land a new job in the next 6 months?";

var randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
    case 0:
      var eightBall = "It is likely";
      break;
    case 1:
      eightBall = "Decidely so";
      break;
    case 2:
      eightBall = "Likely not";
      break;
    case 3:
      eightBall = "The magic ball says yes";
      break;
    case 4:
      eightBall = "The magic ball says no";
      break;
    case 5:
      eightBall = "It is uncertain";
      break;
    case 6:
      eightBall = "It is yet to be decided";
      break;
    case 7:
      eightBall = "It is yet to be decided";
  }

  console.log(eightBall);