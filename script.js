function welcomeStudent() {
  let name = prompt("What is your name?");

  if (name === null || name === "") {
    document.getElementById("welcomeText").innerHTML =
      "Welcome to My Website";
  } else {
    document.getElementById("welcomeText").innerHTML =
      "Welcome, " + name + "!";
  }
}

function createProfile() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let subject = prompt("What is your favourite subject?");
  let career = prompt("What do you want to become in the future?");

  document.getElementById("profile").innerHTML =
    "<strong>Name:</strong> " + name +
    "<br><strong>Age:</strong> " + age +
    "<br><strong>Favourite Subject:</strong> " + subject +
    "<br><strong>Future Career:</strong> " + career;
}

function playNumberGame() {
  let secretNumber = 7;

  let guess = Number(
    prompt("Guess the secret number from 1 to 10")
  );

  if (guess === secretNumber) {
    document.getElementById("gameResult").innerHTML =
      "Correct! You won the game.";
  } else {
    document.getElementById("gameResult").innerHTML =
      "Wrong! The secret number was " + secretNumber + ".";
  }
}

function makeBlue() {
  document.body.style.backgroundColor = "lightblue";
}

function makePurple() {
  document.body.style.backgroundColor = "plum";
}

function makeGreen() {
  document.body.style.backgroundColor = "lightgreen";
}

function resetColour() {
  document.body.style.backgroundColor = "#eef6f5";
}
