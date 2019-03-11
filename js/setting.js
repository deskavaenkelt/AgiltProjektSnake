var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 15;

//ctx.button = '50px Courier New'
//var startstart = ctx.button('Start', 300, 375);


var w = 750;
var h = 750;
var score = 0;
var highScore = [];
var localStorageName = "storage";
var snake;
var food;

