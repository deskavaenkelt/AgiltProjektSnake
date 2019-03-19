// Canvas
let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 15;
let w = 750;
let h = 750;



// Buttons
// Mode
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
        return "#BDCA00";
    } else if (themeDjungel) {
        return "#228B22"
    } else if (themeOken) {
        return "#f4a460"
    } else {
        return "#00ffff"
    }
});
let returnSnakeColor = (function () {
    if (themeClassic) {
        return "#706100";
    } else if (themeDjungel) {
        return "#006400"
    } else if (themeOken) {
        return "#8b4513"
    } else {
        return "#0000cd"
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
let snakeSpeed;


// Hard
let booleanPowerUpLength;
let booleanPowerDownLength;
let booleanPowerUpSpeed;
let booleanPowerDownSpeed;

let power;

// Legacy ?

//ctx.button = '50px Courier New'
//let startstart = ctx.button('Start', 300, 375);
