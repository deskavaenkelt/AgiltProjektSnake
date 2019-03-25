// Canvas
let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 30;
let w = 750;
let h = 750;


// Buttons
let btnEasy = document.getElementById('btnEasy');
let btnHard = document.getElementById('btnHard');


// Theme buttons
let btnClassic = document.getElementById('btnClassic');
let btnDjungel = document.getElementById('btnDjungel');
let btnOken = document.getElementById('btnOken');
let btnAkvarie = document.getElementById('btnAkvarie');
let btnStart = document.getElementById('btnStart');


//makes buttons unclickable until hard or easy is chosen
btnClassic.disabled = true;
btnDjungel.disabled = true;
btnOken.disabled = true;
btnAkvarie.disabled = true;
btnStart.disabled = true;

//visably shows that buttons are not clickable
btnClassic.style.opacity = '0.1';
btnDjungel.style.opacity = '0.1';
btnOken.style.opacity = '0.1';
btnAkvarie.style.opacity = '0.1';
btnStart.style.opacity = '0.1';

// Returns the chosen theme
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

//Returns the snake color depending on the chosen theme
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


// HighScore variables
let score = 0;
let highScore;
let highScoreList= [];
let localStorageName = "storage";


// Gameplay
let hardMode = false;
let snake;
let food;
let direction;


// Snake properties
let snakeLength;
let snakeSpeed; // 80, 60, 40
let speedo = 2;

let power;

//Fullscreen button
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

document.getElementById('btnFullscreen').addEventListener('click', function() {
    toggleFullscreen();
    


});

