var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById('pickedColor');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var h1 = document.querySelector('h1')
var modeButtons = document.querySelectorAll('.mode')
var hardMode = true;
var squares = document.querySelectorAll('.square');

init();

function init() {
    setupModeButtons();
    setupSquares();
    resetButton.addEventListener('click', function(){
        resetGame();
    })
    resetGame();
}

function setupSquares() {
    for (var i=0; i<squares.length; i++) {
        squares[i].addEventListener('click', function() {
            // grab color of square and compare to pickedColor
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                changeColors(pickedColor);
                messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play Again';
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = 'steelblue';
                messageDisplay.textContent = 'Try Again';
            }
        })
    }
}

function setupModeButtons() {
    for (var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            if (this.textContent === 'Hard') {
                hardMode = true;
            } else {
                hardMode = false;
            }
            resetGame();
        })
    }
}

function resetGame() {
    if (hardMode) {
        var num = 6;
        modeButtons[1].classList.add('selected');
    } else {
        var num = 3;
        modeButtons[0].classList.add('selected');
    }
    messageDisplay.textContent = '';
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
    // generate all new colors
    colors = generateRandomColors(num)
    // pick a new color
    pickedColor = pickColor();
    // change display to match color
    colorDisplay.textContent = pickedColor;
    // change squares
    for (var i=0; i<squares.length; i++) {
        if (i<num) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = '';
        } else {
            squares[i].style.display = 'none';
        }
    }
}

function generateRandomColors(numberOfColors) {
    //make array 
    //add numberOfColors to array
    //return array
    arr = [];
    for (var i=0; i<numberOfColors; i++) {
        //random color 
        //push into arr
        arr.push(randomColor());
    }
    return arr
}

function randomColor() {
    color = 'rgb('
    for (var i=0; i<3; i++) {
        color += Math.floor(Math.random()*256);
        if (i < 2) {
            color += ', ';
        } else {
            color += ')';
        }
    }
    return color
}

function changeColors(colorString) {
    // all squares change colors to match given color
    for (var i=0; i<colors.length; i++) {
        squares[i].style.backgroundColor = colorString;
    }
}

function pickColor() {
    // pick random number
    // use number to access color from color array
    var randIndex = Math.floor(Math.random() * colors.length); // random number between 1 and 
    return colors[randIndex];
}
