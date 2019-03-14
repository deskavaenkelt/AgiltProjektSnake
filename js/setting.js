let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 15;

//ctx.button = '50px Courier New'
//let startstart = ctx.button('Start', 300, 375);


let w = 750;
let h = 750;
let score = 0;
let highScore;
let highScoreList= [];
let localStorageName = "storage";
let snake;
let food;

