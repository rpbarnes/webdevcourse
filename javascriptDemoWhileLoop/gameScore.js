var p1Button = document.querySelector('#player1');
var p2Button = document.querySelector('#player2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');




p1Score = 0;
p2Score = 0;

//Increment p1Score and p2Score with button press and update h1 tag.
//bind p1Button and p2Button to functions
p1Button.addEventListener('click', function() {
    p1Score += 1;
    p1Display.innerHTML = p1Score;
})
p2Button.addEventListener('click', function() {
    p2Score += 1;
    updateScore();
})
//Update h1 element
function updateScore() {
    h1 = document.querySelector('h1');
    h1.innerHTML = p1Score + ' to ' + p2Score;
}

//Reset score when reset is pressed.

//change h1 to match the p1 and p2Score.

//Change finalScore to match the number input. 

//Change paragraph to match final score.

//End game when final score is reached and color h1 element that is for the winner to green
