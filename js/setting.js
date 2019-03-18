// Canvas
let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 15;
let w = 750;
let h = 750;

// Theme
let themeClassic = true;
let themeDjungel;
let themeOken;
let themeAkvarie;
// Theme buttons
let btnClassic = document.getElementById('btnClassic');
let btnDjungel = document.getElementById('btnDjungel');
let btnOken = document.getElementById('btnOken');
let btnAkvarie = document.getElementById('btnAkvarie');


// HighScore
let score = 0;
let highScore;
let highScoreList= [];
let localStorageName = "storage";


// Gameplay
let snake;
let food;


// Hasse property's
let snakeLength;
let snakeSpeed;


/*
* Hard
*/
let hardMode = false;
let power;

// Power up/down
let booleanPowerUpLength;
let booleanPowerDownLength;
let booleanPowerUpSpeed;
let booleanPowerDownSpeed;


// Legacy ?

//ctx.button = '50px Courier New'
//let startstart = ctx.button('Start', 300, 375);
