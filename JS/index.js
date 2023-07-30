var numberOfEvents = document.querySelectorAll(".button").length;

// Loop through each button and add event listeners
for (var i = 0; i < numberOfEvents; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    giveWinner(buttonInnerHTML);
    button.classList.add("clicked");
    setTimeout(function () {
        button.classList.remove("clicked");
    }, 200);


  });
}
var playerCount = 0;
var computerCount = 0;
var maxPoints = 5;

function giveWinner(event) {
  var arr = ["rock", "paper", "scissor"];
  var random = Math.floor(Math.random() * arr.length);
  var computerChoice = arr[random];

  if ((event === "rock" && computerChoice === "scissor") ||
      (event === "paper" && computerChoice === "rock") ||
      (event === "scissor" && computerChoice === "paper")) {
    playerCount++;
    handleGameResult("Player wins!");
  } else if (event === computerChoice) {
    handleGameResult("It's a tie!");
  } else {
    computerCount++;
    handleGameResult("Computer wins!");
  }
  updateScores();

  var score1 = document.querySelector(".player");
  score1.textContent = playerCount;
  var score2 = document.querySelector(".computer");
  score2.textContent = computerCount;

}
function handleGameResult(result) {
    var roundResult = document.querySelector(".result");
    roundResult.textContent = "Round Result: " + result;
  
    if (playerCount >= maxPoints || computerCount >= maxPoints) {
      // If any player reaches the maximum points, stop the game and show the final result
      document.querySelectorAll(".button").forEach(button => {
        button.disabled = true; // Disable the buttons
      });
  
        var finalResult = document.querySelector(".final-result");
        if (playerCount > computerCount) {
            finalResult.textContent = "Final Winner: Player";
        } 
        else if (playerCount < computerCount) {
            finalResult.textContent = "Final Winner: Computer";
        } 
        else {
            finalResult.textContent = "Final Result: It's a Tie!";
        }
    }
}
function updateScores() {
    var score1 = document.querySelector(".player");
    score1.textContent = playerCount;
    var score2 = document.querySelector(".computer");
    score2.textContent = computerCount;
}
function restartGame() {
    playerCount = 0;
    computerCount = 0;
    updateScores(); // Update the displayed scores
    document.querySelector(".result").textContent = "Round Result: ";
    document.querySelector(".final-result").textContent = "Final Winner: ";
    document.querySelectorAll(".button").forEach(button => {
    button.disabled = false; // Re-enable the buttons
    });
}