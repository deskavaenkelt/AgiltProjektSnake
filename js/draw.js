// Theme sprite
let desertSprite = new Image();
desertSprite.src = 'img/sprite/desert_body.png';
let aquariumSprite = new Image();
aquariumSprite.src = "img/sprite/aquarium_body.png";
let classicSprite = new Image();
classicSprite.src = "img/sprite/classic_body.png";
let jungleSprite = new Image();
jungleSprite.src = "img/sprite/jungle_body.png";

// Food
let nutrition = new Image();
nutrition.src = "img/hazelnut.png";

//Background image
let desert = new Image();
desert.src = "img/background/desert3.jpg";
let classic = new Image();
classic.src = "img/background/classic.png";
let jungle = new Image();
jungle.src = "img/background/jungle3.png";
let aquarium = new Image();
aquarium.src = "img/background/aquarium.jpg";

//Power up and down image
let powerUpDownImg = new Image();
powerUpDownImg.src = "img/powerUpDown.png";


let tail;

// Hard
let booleanPowerUpLength;
let booleanPowerDownLength;
let booleanPowerUpSpeed;
let booleanPowerDownSpeed;



let drawModule = (function () {
    //let gameloop;

    // Colors on the snake
    let bodySnake = function(x, y) {
        ctx.drawImage(returnSnakeColor(), x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    // Colors on the pizza
    let pizza = function(x, y) {
        ctx.drawImage(nutrition, x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    // Growth of the snake
    let drawSnake = function() {
        snakeLength = 3;
        snake = [];
        for (let i = snakeLength-1; i>=0; i--) {
            snake.push({x: i, y: 0});
        }
    };


    //Score shown in the upper right corner
    let scoreText = function () {
        let showScore = document.getElementById('gameScore');
        showScore.innerHTML = "Poäng: " + score;
    };


    let paint = function(){


        ctx.drawImage(returnCanvasBackgroundColor(), 0, 0, w, h);
        btnStart.setAttribute('disabled', true);


        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'right') {
            snakeX++;
        } else if (direction === 'left') {
            snakeX--;
        } else if (direction === 'up') {
            snakeY--;
        } else if(direction === 'down') {
            snakeY++;
        }

        let menu = document.getElementById("menuList");
        let game = document.getElementById("home");
        function showMenu(){
            game.style.display = 'none';
            menu.style.display = 'block';
        }


        //If snake collides
        if (snakeX === -1 || snakeX === w/snakeSize || snakeY === -1 || snakeY === h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
            showMenu();
            btnStart.removeAttribute('disabled', false);
            var hideFullscreen = document.getElementById('btnFullscreen');
                hideFullscreen.style.display= 'block';


            //restart game
            highScore = localStorage.getItem(localStorageName) == null ? 0 : localStorage.getItem(localStorageName);
            addHighScore();
            btnStart.removeAttribute('disabled', true);

            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            return;
        }

        // Make snake grow
        if(snakeX === food.x && snakeY === food.y) {
            tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
            score ++;

            createFood(); //Create new food
        } else {
            tail = snake.pop(); //pops out the last cell
            tail.x = snakeX;
            tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(let i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
        }

        pizza(food.x, food.y);
        scoreText();



        // ##########
        // #  Hard  #
        // ##########
        if (hardMode) {
            // Generate a random power in random place
            powerUpDown(power.x, power.y);
        }

        // Eaten a powerUp
        if(snakeX === power.x && snakeY === power.y) {
            // Get a point
            score++;

            // Do the effect
            if (booleanPowerUpLength)
            {
                // Length -8
                console.log("length-8");
                if (snake.length >= 11) {
                    for (let i = 0; i < 8; i++) {
                        tail = snake.pop();
                    }
                }
                // Add function, blink or something

            }
            else if (booleanPowerDownLength)
            {
                // Length +16
                console.log("length+16");
                for (let i = 0; i < 16; i++) {
                    tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
                    tail.x = snakeX;
                    tail.y = snakeY;
                    snake.unshift(tail); //puts back the tail as the first cell
                    for(let i = 0; i < snake.length; i++) {
                        bodySnake(snake[i].x, snake[i].y);
                    }
                }
                // Add function, blink or something

            }
            else if (booleanPowerUpSpeed)
            {
                // Length -16
                console.log("length-16");
                if (snake.length >= 19) {
                    for (let i = 0; i < 8; i++) {
                        tail = snake.pop();
                    }
                }
                // Add function, blink or something

            }
            else // booleanPowerDownSpeed
            {
                // Length +32
                console.log("length+32");
                for (let i = 0; i < 32; i++) {
                    tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
                    tail.x = snakeX;
                    tail.y = snakeY;
                    snake.unshift(tail); //puts back the tail as the first cell
                    for(let i = 0; i < snake.length; i++) {
                        bodySnake(snake[i].x, snake[i].y);
                    }
                }
                // Add function, blink or something

            }

            //Create new effect
            generateAPower();
        }
    };


    //AllTimeHigh, shows the highest score ever played on the computer
    let addHighScore = function () {

        console.log("addHighScore loop");
        highScore = Math.max(score, highScore);
        localStorage.setItem(localStorageName, highScore);
        let showHighScore = document.getElementById('allTimeHigh');
        showHighScore.innerHTML = 'Rekord: ' + highScore;
        checkHighScore();
    };

    //Highscorelist, displays top 3 scores
    let checkHighScore = function () {
            highScoreList.push(score);
            highScoreList = highScoreList.sort((a, b) => b - a);
            let newList = highScoreList.slice(0, 3);
            let showHighScoreList = document.getElementById('highScore');
            let scores;
            for (let i = 1; i <= newList.length; i++) {
                scores = '<ol><li>' + newList.join('</li><li>') + '</li></ol>';
            }
        showHighScoreList.innerHTML = 'Din highscore:\n' + scores;
        };

    // Create food and generate random position
    let createFood = function() {
        food = {
            x: Math.floor((Math.random() * 24) + 1),
            y: Math.floor((Math.random() * 24) + 1)
        };

        for (let i=0; i>snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 24) + 1);
                food.y = Math.floor((Math.random() * 24) + 1);
            }
        }
    };

    // Create a checkCollision function to detect if the snake has crashed on its body itself:
    let checkCollision = function(x, y, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    };

    // ##########
    // #  Hard  #
    // ##########
    // Colors of power-up/-downs
    let powerUpDown = function(x, y) {
        // This is the border of the power-up/-downs
        ctx.drawImage(powerUpDownImg, x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };
    // This is the combined function
    let generateAPower = function () {
        generatePowerPosition();
        randomPower();
    };
    // Generate the position
    let generatePowerPosition = function() {
        power = {
            x: Math.floor((Math.random() * 24) + 1),
            y: Math.floor((Math.random() * 24) + 1)
        };

        for (let i = 0; i > snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            // Don't generat on food or snake
            if (power.x === snakeX && power.y === snakeY || power.y === snakeY && power.x === snakeX ||
                power.x === food.x && power.y === food.y || power.y === food.y && power.x === food.x)
            {
                power.x = Math.floor((Math.random() * 24) + 1);
                power.y = Math.floor((Math.random() * 24) + 1);
            }
        }
    };
    // Generate the random power
    let randomPower = function () {
        //console.log("randomPower is working");
        let number = (Math.floor(Math.random() * 4) + 1);
        //console.log("random number: " + number);

        // Set everyting to false
        booleanPowerUpLength = false;
        booleanPowerDownLength = false;
        booleanPowerUpSpeed = false;
        booleanPowerDownSpeed = false;

        // Set only one power to True based on generated number
        if (number === 1) {
            booleanPowerUpLength = true;
        }
        if (number === 2) {
            booleanPowerDownLength = true;
        }
        if (number === 3) {
            booleanPowerUpSpeed = true;
        }
        if (number === 4){
            booleanPowerDownSpeed = true;
        }
    };

    // ##########

    // Init parameters at start
    let init = function(){
        console.log("init loop");
        speedo = 2;
        console.log("Start game!");
        direction = 'down';
        drawSnake();
        createFood();

        // Hard Mode = Faster game speed and generate a random power
        if (hardMode) {
            snakeSpeed = 80;    // 60
            generateAPower();
        } else {
            snakeSpeed = 100;    // 80
        }
        gameloop = setInterval(paint, snakeSpeed);
        score=0;
    };

    return {
        init : init,
    };
}());