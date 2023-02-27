//your code here

let secretNumber = Math.floor(Math.random() * 100) + 1;
      let previousGuess = null;
      let previousDifference = null;

      function checkGuess() {
        const guess = parseInt(document.getElementById("guess").value);
        if (isNaN(guess)) {
          document.getElementById("respond").innerHTML = "Please enter a valid number";
        } else if (guess < 1 || guess > 100) {
          document.getElementById("respond").innerHTML = "Please enter a number between 1 and 100";
        } else if (guess === secretNumber) {
          document.getElementById("respond").innerHTML = "Congratulations! You guessed the number";
        } else {
          const difference = Math.abs(guess - secretNumber);
          if (previousGuess === null || difference < previousDifference) {
            document.getElementById("respond").innerHTML = "Getting hotter! Guess " + (guess < secretNumber ? "higher" : "lower");
          } else {
            document.getElementById("respond").innerHTML = "Getting colder! Guess " + (guess < previousGuess ? "higher" : "lower");
          }
          previousGuess = guess;
          previousDifference = difference;
        }
      }
