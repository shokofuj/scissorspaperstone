var currentGameMode = "waiting for username";
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalRounds = 0;
var winningPercentage;
var userName = "";

// Allowing user to switch between normal or reverse SPS
var changeMode = function (input) {
  currentGameMode = input;
  myOutputValue =
    "Your mode is now " +
    input +
    " mode. Please enter either Scissors, Paper or Stone.";
  return myOutputValue;
};

// Letting computer choose amongst scissors, paper or stone
var getComputer = function () {
  var items = ["Scissors", "Paper", "Stone"];
  {
    var item = items[Math.floor(Math.random() * 3)];
    return item;
  }
};

var main = function (input) {
  var myOutputValue;

  // Normal SPS mode
  if (currentGameMode == "waiting for username") {
    userName = input;
    currentGameMode = "normalSPS";
    myOutputValue = "Hello " + userName;
    return myOutputValue;
  } else if (currentGameMode == "normalSPS") {
    var computer = getComputer();

    var messageOnPerformance;

    //Format a message depending on how well the player is doing:

    if (input == computer) {
      totalRounds = totalRounds + 1;
      drawCount = drawCount + 1;
      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you draw! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
      return myOutputValue;
    } else if (
      (computer == "Paper" && input == "Scissors") ||
      (computer == "Scissors" && input == "Stone") ||
      (computer == "Stone" && input == "Paper")
    ) {
      totalRounds = totalRounds + 1;
      winCount = winCount + 1;

      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you win! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
    } else if (
      (computer == "Paper" && input == "Stone") ||
      (computer == "Scissors" && input == "Paper") ||
      (computer == "Stone" && input == "Scissors")
    ) {
      totalRounds = totalRounds + 1;
      loseCount = loseCount + 1;
      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you lose! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
    } else {
      myOutputValue =
        "Invalid response, please type 'Scissors', 'Paper' or 'Stone'";
    }

    console.log(computer, "computerResponse");
    return myOutputValue;
  }

  // Reverse SPS mode
  else if (currentGameMode == "reverseSPS") {
    var computer = getComputer();
    totalRounds = totalRounds + 1;
    var messageOnPerformance;

    if (input == computer) {
      totalRounds = totalRounds + 1;
      drawCount = drawCount + 1;
      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you draw! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
    } else if (
      (computer == "Paper" && input == "Scissors") ||
      (computer == "Scissors" && input == "Stone") ||
      (computer == "Stone" && input == "Paper")
    ) {
      totalRounds = totalRounds + 1;
      loseCount = loseCount + 1;
      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you lose! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
    } else if (
      (computer == "Paper" && input == "Stone") ||
      (computer == "Scissors" && input == "Paper") ||
      (computer == "Stone" && input == "Scissors")
    ) {
      totalRounds = totalRounds + 1;
      winCount = winCount + 1;
      winningPercentage = (winCount / totalRounds) * 100;
      if (winningPercentage >= 50) {
        messageOnPerformance = "Great job, keep at it!";
      } else {
        messageOnPerformance = "Better luck next round!";
      }
      myOutputValue =
        userName +
        ", you win! Your winning percentage is " +
        winningPercentage.toFixed(2) +
        "%." +
        messageOnPerformance;
    } else {
      myOutputValue =
        "Invalid response, please type 'Scissors', 'Paper' or 'Stone'";
    }

    console.log(computer, "computerResponse");
    return myOutputValue;
  }
};
