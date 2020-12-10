var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var randomDiceImage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);

var winner;

if(randomNumber1 > randomNumber2) {
    winner = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2) {
    winner = "Player 2 wins";
}
else {
    winner = "Draw!";
}

document.querySelector("h1").innerHTML = winner;