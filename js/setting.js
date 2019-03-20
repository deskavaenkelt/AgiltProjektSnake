// Canvas
let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 15;
let w = 750;
let h = 750;



// Buttons
// Mode
let highscoreList = document.getElementById('highscoreList');
let btnEasy = document.getElementById('btnEasy');
let btnHard = document.getElementById('btnHard');
//let btnClassic = document.getElementById("btnClassic").disabled = true;  WHY?
// Theme buttons
let btnClassic = document.getElementById('btnClassic');
let btnDjungel = document.getElementById('btnDjungel');
let btnOken = document.getElementById('btnOken');
let btnAkvarie = document.getElementById('btnAkvarie');
let btnStart = document.getElementById('btnStart');

btnClassic.disabled = true;
btnDjungel.disabled = true;
btnOken.disabled = true;
btnAkvarie.disabled = true;
btnStart.disabled = true;

btnClassic.style.opacity = '0.1';
btnDjungel.style.opacity = '0.1';
btnOken.style.opacity = '0.1';
btnAkvarie.style.opacity = '0.1';
btnStart.style.opacity = '0.1';






// Theme
let themeClassic = true;
let themeDjungel;
let themeOken;
let themeAkvarie;
let returnCanvasBackgroundColor = (function () {
    if (themeClassic) {
        return classic
    } else if (themeDjungel) {
        return jungle
    } else if (themeOken) {
        return desert
    } else {
        return aquarium
    }
});
let returnSnakeColor = (function () {
    if (themeClassic) {
        return classicSprite
    } else if (themeDjungel) {
        return jungleSprite
    } else if (themeOken) {
        return desertSprite
    } else {
        return aquariumSprite
    }
});


// HighScore
let score = 0;
let highScore;
let highScoreList= [];
let localStorageName = "storage";


// Gameplay
let hardMode = false;
let snake;
let food;
let direction;


// Hasse property's
let snakeLength;
let snakeSpeed; // 80, 60, 40
let speedo = 2;




let power;

// Legacy ?

//ctx.button = '50px Courier New'
//let startstart = ctx.button('Start', 300, 375);
