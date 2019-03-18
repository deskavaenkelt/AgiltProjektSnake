let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 15;
let w = 750;
let h = 750;
let score = 0;
let highScore;
let highScoreList= [];
let localStorageName = "storage";
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
